// routes/participationRoutes.js
const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get(
  "/participate/:uniqueCode",
  authMiddleware,
  eventController.participateInEvent
); //get participations

module.exports = router;
