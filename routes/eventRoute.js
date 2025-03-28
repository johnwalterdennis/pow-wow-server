const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, eventController.createEvent); //create events
router.get("/", authMiddleware, eventController.getEvents); //get events

module.exports = router;
