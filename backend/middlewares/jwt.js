import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// models
import UserModel from '../models/User.js';
import {StatusCodes} from "http-status-codes";

const SECRET_KEY = process.env.APP_KEY;

export const encode = async (req, res, next) => {
    try {
        const {userId} = req.params;
        const user = await UserModel.getUserById(userId);
        const payload = {
            userId: user._id,
            userType: user.type,
        };
        const authToken = jwt.sign(payload, SECRET_KEY);
        console.log('Auth', authToken);
        req.authToken = authToken;
        next();
    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({success: false, message: error.error});
    }
}

export const decode = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(StatusCodes.BAD_REQUEST).json({success: false, message: 'No access token provided'});
    }
    const accessToken = req.headers.authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(accessToken, SECRET_KEY);
        req.userId = decoded.userId;
        req.userType = decoded.type;
        return next();
    } catch (error) {

        return res.status(StatusCodes.UNAUTHORIZED).json({success: false, message: error.message});
    }
}