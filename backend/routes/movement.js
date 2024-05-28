const express = require("express");

// controller functions
const { transfer, loan } = require("../controllers/movementController");

const router = express.Router();

// transfer route
router.post("/transfer", transfer);

// loan route
router.post("/loan", loan);

module.exports = router;
