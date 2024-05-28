const Transaction = require("../models/movementModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

//transfer money
const transfer = async (req, res) => {
  res.json({ mssg: "money sent" });
};

//loan money
const loan = async (req, res) => {
  res.json({ mssg: "loan acquired" });
};

module.exports = {
  transfer,
  loan,
};
