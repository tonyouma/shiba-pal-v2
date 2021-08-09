import express from 'express';
// controllers
import users from '../controllers/user.js';
// middlewares
import {encode} from '../middlewares/jwt.js';
import {StatusCodes} from "http-status-codes";

const router = express.Router();

router
    .post('/login/:userId', encode, (req, res, next) => {
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                authorization: req.authToken,
            });
    });

export default router;