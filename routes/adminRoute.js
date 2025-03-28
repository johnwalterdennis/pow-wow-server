const express = require("express");
const router = express.Router();
const qrController = require("../controllers/qrController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminAuth = require("../middlewares/adminAuth");

router.get(
  "/qr-code/:eventId",
  authMiddleware,
  adminAuth,
  qrController.generateQRCode
); //get QRcodes

module.exports = router;
