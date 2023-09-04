const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {
  authenticateUserMiddleware, // Add authentication middleware as needed
} = require("../middleware/middleware");

// GET request to fetch all users
router.get("/all-users", authenticateUserMiddleware, userController.getAllUsers);

module.exports = router;
