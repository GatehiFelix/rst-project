import express from "express";

import {
  getProducts,
  getProductById,
  creatProduct,
  updateProduct,
  deleteProduct,
} from "#controllers/product.controllers.js";
import { protect, admin } from "#middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, creatProduct);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
