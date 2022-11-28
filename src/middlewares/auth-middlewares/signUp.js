const User = require("../../models/UserModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(12);
    const hashed_password = await bcrypt.hash(password, salt);

    const user = await User.create({ email, password: hashed_password });
    
    if (user) {
      return res.status(201).json({ message: "New user created!" });
    }
  } catch (error) {
    const errorMessage =
      error.code && error.code === 11000
        ? "Email già presente nel sistema"
        : error.message;

    return res
      .status(500)
      .json({ message: errorMessage || "Internal server error!" });
  }
};

module.exports = signup;
