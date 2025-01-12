const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login route not implemented yet." });
});

router.post("/register", (req, res) => {
  res.json({ message: "Register route not implemented yet." });
});

module.exports = router;
