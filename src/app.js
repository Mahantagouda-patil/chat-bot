import express from "express";
import indexRouter from "./routes/index.router.js";
const app = express();
app.use(express.json());
app.use("/", indexRouter);
export default app;
