import UserModel from "#models/user.model.js";
import generateToken from "#utils/generate-token.utils.js";

/**
 * @desc  Auth user
 * @route POST /api/v1/users/login
 * @access Public
 */

const authUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if(user && (await user.matchPassword(password))) {

       const token = generateToken(res, user._id);

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

    // res.send("Auth User");
}

/**
 * @desc  Register a new user
 * @route POST /api/v1/users
 * @access Public
 */

const registerUser = async (req, res) => {
    const  { name, email, password} = req.body;

    const userExists = await UserModel.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await UserModel.create({ name, email, password });
    if(user) {
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}

/**
 * @desc Logout user
 * @route POST /api/v1/users/logout
 * @access Public
 */

const logoutUser = async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'user logged out' });
}

/**
 * @desc  Get user profile
 * @route GET /api/v1/users/profile
 * @access Private
 */

const getUserProfile = async (req, res) => {
    const user = await UserModel.findById(req.user._id);

    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}

/**
 * @desc  Update user profile
 * @route PUT /api/v1/users/profile
 * @access Private
 */

const updateUserProfile = async (req, res) => {
    const user = await UserModel.findById(req.user._id);

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password) {
            user.password  = req.body.password;
        }

        const updatedUser = await user.save();

        generateToken(res, updatedUser._id);

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
};

/**
 * @desc		Get all users
 * @route		GET /api/v1/users
 * @access	Private/Admin
 */

const getUsers = async (req, res) => {
    const pageSize = 10;
    const page = +req.query.pageNumber || 1;
    const count = await UserModel.countDocuments({});
    console.log(count);

    const users = await UserModel.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
    console.log(users);
    res.status(200).json({ users, page, pages: Math.ceil(count / pageSize) });
}

/**
 * @desc  Get user by Id
 * @route GET /api/v1/users/:id
 * @access Private
 */

const getUserById = async (req, res) => {
    const user = await UserModel.findById(req.params.id).select('-password');

    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}

/**
 * @desc Delete user
 * @route DELETE /api/v1/users/:id
 * @access Private/Admin
 */

const deleteUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);

    if(user) {
        if(user.isAdmin) {
            res.status(400);
            throw new Error('Can not delete admin user');
        }

        await UserModel.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: 'User removed' });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
}

/**
 * @desc Update user
 * @route PUT /api/v1/users/:id
 * @access Private/Admin
 */

const updateUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin 

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
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