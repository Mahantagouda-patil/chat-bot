// Import express
import express from "express";
import userRouter from "./user.router.js";
import urlRouter from "./url.router.js";

// Create a router
const indexRouter = express.Router();

indexRouter.use("/api/v1/users", userRouter);

indexRouter.use("/api/v1/urls", urlRouter);

// Export the router
export default indexRouter;
