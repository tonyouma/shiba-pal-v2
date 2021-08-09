// utils
import makeValidation from '@withvoid/make-validation';
// models
import UserModel, {USER_TYPES} from '../models/User.js';
import {StatusCodes} from "http-status-codes";


export default {

    onGetAllUsers: async (req, res) => {
        try {
            const users = await UserModel.getUsers();
            return res.status(StatusCodes.OK).json({success: true, users});
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error: error})
        }
    },
    onGetUserById: async (req, res) => {
        try {
            const user = await UserModel.getUserById(req.params.id);
            return res.status(StatusCodes.OK).json({success: true, user});
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error: error})
        }
    },
    onCreateUser: async (req, res) => {
        try {
            const validation = makeValidation(types => ({
                payload: req.body,
                checks: {
                    firstName: {type: types.string},
                    lastName: {type: types.string},
                    type: {type: types.enum, options: {enum: USER_TYPES}},
                }
            }));
            if (!validation.success) return res.status(StatusCodes.BAD_REQUEST).json(validation);

            const {firstName, lastName, type} = req.body;
            const user = await UserModel.createUser(firstName, lastName, type);
            return res.status(StatusCodes.CREATED).json({success: true, user});
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error: error})
        }
    },


    onDeleteUserById: async (req, res) => {
        try {
            const user = await UserModel.deleteByUserById(req.params.id);
            return res.status(StatusCodes.OK).json({
                success: true,
                message: `Deleted a count of ${user.deletedCount} user.`
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success: false, error: error})
        }
    },
}