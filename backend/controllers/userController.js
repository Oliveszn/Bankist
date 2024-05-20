const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ username, balance: user.balance, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.signup(username, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ username, balance: user.balance, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//close account
const closeAcc = async (req, res) => {
  // res.json({ mssg: "account closed" });
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify the password
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   return res.status(401).json({ error: "Invalid password" });
    // }

    // Delete the user
    await User.deleteOne({ _id: user._id });

    res.status(200).json({ message: "Account closed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signupUser, loginUser, closeAcc };
