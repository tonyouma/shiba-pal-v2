import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid";

export const USER_TYPES = {
    CONSUMER: "consumer",
    SUPPORT: "support",
};

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4().replace(/\-/g, ""),
        },
        firstName: String,
        lastName: String,
        type: String,
    },
    {
        timestamps: true,
        collection: "users",
    }
);
userSchema.statics.getUserById = async function (id) {
    try {
        const user = await this.findOne({_id: id});
        if (!user) throw ({error: 'No user with this id found'});
        return user;
    } catch (error) {
        throw error;
    }


}
userSchema.statics.getUserByIds = async function (ids) {
    try {
        return await this.find({_id: {$in: ids}});
    } catch (error) {
        throw error;
    }
}

userSchema.statics.getUsers = async function () {
    try {
        return await this.find();
    } catch (error) {
        throw error;
    }
}


userSchema.statics.createUser = async function (
    firstName,
    lastName,
    type
) {
    try {
        return await this.create({firstName, lastName, type});
    } catch (error) {
        throw error;
    }
}
userSchema.statics.deleteByUserById = async function (id) {
    try {
        return await this.remove({_id: id});
    } catch (error) {
        throw error;
    }
}

export default mongoose.model("User", userSchema);