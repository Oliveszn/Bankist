const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  //   user: {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
});

module.exports = mongoose.model("Transaction", transactionSchema);
