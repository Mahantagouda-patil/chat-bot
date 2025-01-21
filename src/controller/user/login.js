import { user } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .sen(new ApiResponse(400, null, "required fields are missing"));
    }

    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(404).send(new ApiResponse(404, null, "user not found"));
    }

    const verified = await bcrypt.compare(password, existingUser.password);

    if (!verified) {
      res.status(400).send(new ApiResponse(400, null, "InvalidCredentials"));
    }
    const token = jwt.sign(
      {
        name: existingUser.name,
        email: existingUser.email,
        _id: existingUser.id,
      },

      process.env.ACCESS_TOKEN_KEY,
      {
        expiresIn: "1d",
      }
    );
    res
      .status(200)
      .send(new ApiResponse(200, { token }, "Token created sucessfully"));
  } catch (error) {
    console.log(error);
    res.status(500).send(new ApiResponse(500, error, "failed to login "));
  }
};
export default loginUser;
