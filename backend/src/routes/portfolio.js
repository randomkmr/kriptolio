const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const isAuthenticated = require("../middleware/authenticator");

router.post("/portfolio", isAuthenticated, controller.postPortfolio);
router.get("/portfolio", isAuthenticated, controller.getPortfolio);

module.exports = router;
