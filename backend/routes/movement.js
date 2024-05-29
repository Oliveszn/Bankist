const express = require("express");

// controller functions
const { transfer, loan } = require("../controllers/movementController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
router.use(requireAuth);

// transfer route
router.post("/transfer", transfer);

// loan route
router.post("/loan", loan);

module.exports = router;
