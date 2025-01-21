import express from "express";
const userRouter = express.Router();
userRouter.route("/register").post(userController.register);
userRouter.route("/login").post(userController.login);
userRouter.route("/forgot").post(userController.forgot);
export default userRouter;
