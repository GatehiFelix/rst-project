import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "user's full name is required"]
        },
        email: {
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
            default: false,
        },
    },
    {
        timestamps: true,
        collection: 'users'
    },
);

userSchema.methods.matchPassword =async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const UserModel = mongoose.model('UserModel', userSchema);

export default UserModel;