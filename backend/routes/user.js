const express = require("express");

// controller functions
const {
  loginUser,
  signupUser,
  closeAcc,
  getMovements,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// close account route
router.post("/close", closeAcc);

// get movements
router.get("/", getMovements);

module.exports = router;
