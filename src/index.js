import "dotenv/config";
import http from "http";
import app from "./app.js";
import connectDB from "./db/db.connect.js";
// import { config, sendMail } from "./utils/nodemailer.js";

const server = http.createServer(app);
const PORT = process.env.PORT;
// await config(
//   process.env.USER_EMAIL,
//   process.env.APP_PASSWORD,
//   process.env.SMTP_HOST,
//   process.env.SMTP_PORT
// );
// await sendMail("mppatil2002@gmail", "hi", "hello");
server.listen(PORT, () => {
  console.log(`server is running on PORT : ${PORT}`);
  connectDB();
});
