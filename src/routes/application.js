const express = require("express");
const router = express.Router();
const Application = require("../models/application");
const upload = require("../config/multer");

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const resume = req.file ? req.file.filename : null;

    if (!name || !email || !role || !resume) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const application = new Application({ name, email, role, resume });
    await application.save();

    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
