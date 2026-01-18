import express from "express";

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "#controllers/user.controllers.js";

import { protect, admin } from "#middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .get(protect,  getUserById)
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser);
export default router;
