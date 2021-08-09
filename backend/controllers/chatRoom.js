import makeValidation from "@withvoid/make-validation";
import {StatusCodes} from "http-status-codes";

export default {

    initiate: async (req, res) => {

        try {
            console.log(req.body.userIds);
            console.log(req.body.type);
            const validation = makeValidation(types => ({
                payload: req.body,
                checks: {
                    userIds: {
                        type: types.array,
                        options: {unique: true, empty: false, stringOnly: true}
                    },
                    type: {type: types.enum, options: {enum: CHAT_ROOM_TYPES}},
                }
            }));
            if (!validation.success) return res.status(StatusCodes.BAD_REQUEST).json({...validation});

            const {userIds, type} = req.body;
            const {userId: chatInitiator} = req;
            const allUserIds = [...userIds, chatInitiator];
            const chatRoom = await ChatRoomModel.initiateChat(allUserIds, type, chatInitiator);
            return res.status(StatusCodes.OK).json({success: true, chatRoom});
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error: error})
        }
    },


    postMessage: async (req, res) => {
        try {
            const {roomId} = req.params;
            const validation = makeValidation(types => ({
                payload: req.body,
                checks: {
                    messageText: {type: types.string},
                }
            }));
            if (!validation.success) return res.status(StatusCodes.BAD_REQUEST).json({...validation});

            const messagePayload = {
                messageText: req.body.messageText,
            };
            const currentLoggedUser = req.userId;
            const post = await ChatMessageModel.createPostInChatRoom(roomId, messagePayload, currentLoggedUser);
            global.io.sockets.in(roomId).emit('new message', {message: post});
            return res.status(StatusCodes.OK).json({success: true, post});
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error: error})
        }
    },
    getConversationByRoomId: async (req, res) => {
        try {
            const {roomId} = req.params;
            const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
            if (!room) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    success: false,
                    message: 'No room exists for this id',
                })
            }
            const users = await UserModel.getUserByIds(room.userIds);
            const options = {
                page: parseInt(req.query.page) || 0,
                limit: parseInt(req.query.limit) || 10,
            };
            const conversation = await ChatMessageModel.getConversationByRoomId(roomId, options);
            return res.status(StatusCodes.OK).json({
                success: true,
                conversation,
                users,
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error});
        }
    },
    getRecentConversation: async (req, res) => {
    },


    markConversationReadByRoomId: async (req, res) => {
        try {
            const {roomId} = req.params;
            const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
            if (!room) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    success: false,
                    message: 'No room exists for this id',
                })
            }

            const currentLoggedUser = req.userId;
            const result = await ChatMessageModel.markMessageRead(roomId, currentLoggedUser);
            return res.status(StatusCodes.OK).json({success: true, data: result});
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error});
        }
    },

}