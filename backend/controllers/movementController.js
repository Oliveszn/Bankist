const Transaction = require("../models/movementModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//get movements
const getMovements = async (req, res) => {
  res.json({ mssg: "movements" });
};

//transfer money
const transfer = async (req, res) => {
  res.json({ mssg: "money sent" });
};

//loan money
const loan = async (req, res) => {
  // res.json({ mssg: "loan acquired" });
  const { amount, description, date } = req.body;

  try {
    // const userId = req.user.id; // Assuming you're using authentication middleware
    const user = await this.findOne({ username });
    if (!user) {
      throw new Error("User not found");
    }

    // Add the loan amount to the user's balance
    const amount = req.body.amount;
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Invalid loan amount");
    }
    user.balance += amount;
    await user.save();

    res.status(200).json({ message: "Loan request successful", user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getMovements,
  transfer,
  loan,
};
