import { user } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, "Required fields missing."));
    }
    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res
        .status(409)
        .send(new ApiResponse(409, null, "Email already exist create new one"));
    }
    const hashed = await bcrypt.hash(password, 10);
    const result = await user.create({
      name,
      email,
      password: hashed,
    });

    const at = result.generateAccessToken();
    res.cookies("at", at);
    res
      .status(201)
      .send(
        new ApiResponse(201, result, "User account registered succesfully")
      );
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send(new ApiResponse(500, error, "Failed to register user"));
  }
};
export default registerUser;
