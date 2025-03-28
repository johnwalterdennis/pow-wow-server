exports.generateQRCode = async (req, res) => {
  try {
  } catch (err) {
    console.err(err);
    res.status(500).json({ error: "QR code generation failed" });
  }
};
