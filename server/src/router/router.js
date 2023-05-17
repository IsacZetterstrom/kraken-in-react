import express from "express";
import authController from "../controller/authController.js";
import jwtFilter from "../filters/jwtFilter.js";
const router = express.Router();

router.route("/auth/register").post(authController.registerUser);
router.route("/auth/login").post(authController.loginUser);

router.use(jwtFilter.checkToken);

export default router;
