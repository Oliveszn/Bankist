const express = require("express");

// controller functions
const {
  getMovements,
  transfer,
  loan,
} = require("../controllers/movementController");

const router = express.Router();

// get movements
router.get("/", getMovements);

// transfer route
router.post("/transfer", transfer);

// loan route
router.post("/loan", loan);

module.exports = router;
