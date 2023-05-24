import express from "express";
import authController from "../controller/authController.js";
import jwtFilter from "../filters/jwtFilter.js";
import addCredit from "../controller/userController.js";
const router = express.Router();

router.route("/auth/register").post(authController.registerUser);
router.route("/auth/login").post(authController.loginUser);

router.use(jwtFilter.checkToken);
router.route("/auth/menu").get(authController.fetchUser);
router.route("/auth/menu/addCredit").post(addCredit);

export default router;
