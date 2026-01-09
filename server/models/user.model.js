import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "user's full name is required"]
        },
        emails: {
            type: String,
            required: [true, "user's email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "user's password is required"]
        },
        isAdmin: {
            type: Boolean,
            required: [true, "user's admin status is required"],
        },
    },
    {
        timestamps: true,
        collection: 'users'
    }
);

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;