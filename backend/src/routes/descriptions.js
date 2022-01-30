const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/descriptions/:id", controller.getDescription);

module.exports = router;
