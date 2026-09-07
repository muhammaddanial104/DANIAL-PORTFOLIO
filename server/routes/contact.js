// ------------------------------------
// ROUTE: /api/contact
// Handles contact form submissions
// ------------------------------------
const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const router = express.Router();

// Validation rules
const validate = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
  body("email").isEmail().withMessage("Valid email required").normalizeEmail(),
  body("subject").trim().notEmpty().withMessage("Subject is required"),
  body("message").trim().isLength({ min: 10, max: 2000 }).withMessage("Message must be 10-2000 chars"),
];

// POST /api/contact — Save contact message
router.post("/", validate, async (req, res) => {
  // Validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  try {
    const { name, email, subject, message } = req.body;
    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({
      success: true,
      message: "Message transmitted successfully! Muhammad Danial will respond soon.",
      id: contact._id,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error. Try again later." });
  }
});

// GET /api/contact — Get all messages (admin)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
