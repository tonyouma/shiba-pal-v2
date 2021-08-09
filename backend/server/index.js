import http from "http";
import {StatusCodes} from "http-status-codes";
import socketio from "socket.io";
import WebSockets from "../utils/WebSockets.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from 'dotenv';
import indexRouter from "../routes/index.js";
import userRouter from "../routes/user.js";
import chatRoomRouter from "../routes/chatRoom.js";
import deleteRouter from "../routes/delete.js";
import "../config/mongo.js";
import {decode} from '../middlewares/jwt.js'

dotenv.config();

const app = express();

const port = process.env.APP_PORT || "3000";
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);
app.use('*', (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
});

/** Create HTTP server. */
const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
    console.log(`Listening on port:: http://localhost:${port}/`)

})
global.io = socketio.listen(server);
global.io.on('connection', WebSockets.connection)