const express = require("express");

// controller functions
const {
  getMovements,
  transfer,
  loan,
  closeAcc,
} = require("../controllers/movementController");

const router = express.Router();

// get movements
router.get("/", getMovements);

// transfer route
router.post("/transfer", transfer);

// loan route
router.post("/loan", loan);

// close account route
router.post("/close", closeAcc);

module.exports = router;
