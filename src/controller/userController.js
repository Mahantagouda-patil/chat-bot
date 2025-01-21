import loginUser from "./user/login.js";
import forgotPassword from "./user/mail.js";
import registerUser from "./user/register.js";
import resetPassword from "./user/reset.js";

const userController = {
  register: registerUser,
  login: loginUser,
  forgot: forgotPassword,
  reset: resetPassword,
};
