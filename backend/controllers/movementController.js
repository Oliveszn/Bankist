const requireAuth = require("../middleware/requireAuth");
const Transaction = require("../models/movementModel");
const User = require("../models/userModel");

//transfer money
const transfer = async (req, res) => {
  res.json({ mssg: "money sent" });
};

//loan money
const loan = async (req, res) => {
  const { amount } = req.body;
  // Parse the amount to a number
  const loanAmount = parseFloat(amount);

  if (isNaN(loanAmount)) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    // Fetch the authenticated user from req.user
    // const user = req.user;
    const user = User({});

    // Update the user's balance
    user.balance = (user.balance || 0) + loanAmount;

    // Create a new transaction
    const transaction = new Transaction({
      amount: loanAmount,
      description: "Loan",
    });

    // Save the transaction
    const savedTransaction = await transaction.save();

    // Add the transaction to the user's movements
    user.movements.push(savedTransaction._id);

    // Save the updated user
    await user.save();

    res
      .status(200)
      .json({ message: "Loan acquired successfully", balance: user.balance });
  } catch (error) {
    console.error("Error processing loan:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  transfer,
  loan,
};
