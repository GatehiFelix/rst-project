import jwt from "jsonwebtoken";

import UserModel from "#models/user.model.js";

/**
 * @desc  Auth user
 * @route POST /api/users/login
 * @access Public
 */

const authUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000 
        });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

    res.send("Auth User");
}

/**
 * @desc  Register a new user
 * @route POST /api/users
 * @access Public
 */

const registerUser = async (req, res) => {
    res.send("Register User");
}

/**
 * @desc Logout user
 * @route POST /api/users/logout
 * @access Public
 */

const logoutUser = async (req, res) => {
    res.send("Logout User");
}

/**
 * @desc  Get user profile
 * @route GET /api/users/profile
 * @access Private
 */

const getUserProfile = async (req, res) => {
    res.send("Get User Profile");
}

/**
 * @desc  Update user profile
 * @route PUT /api/users/profile
 * @access Private
 */

const updateUserProfile = async (req, res) => {
    res.send("Update User Profile");
}

/**
 * @desc  Get all users
 * @route GET /api/users
 * @access Private/Admin
 */
const getUsers  = async (req, res) => {
    res.send("Get Users");
}

/**
 * @desc  Get user by Id
 * @route GET /api/users/:id
 * @access Private
 */

const getUserById = async (req, res) => {
    res.send("Get User Profile");
}

/**
 * @desc Delete user
 * @route DELETE /api/users/:id
 * @access Private/Admin
 */

const deleteUser = async (req, res) => {
    res.send("Delete User");
}

/**
 * @desc Update user
 * @route PUT /api/users/:id
 * @access Private/Admin
 */

const updateUser = async (req, res) => {
    res.send("Update User");
}

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
}