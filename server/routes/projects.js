// ------------------------------------
// ROUTE: /api/projects
// Returns portfolio project data
// ------------------------------------
const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

// GET /api/projects — Fetch all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, featured: -1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/projects/featured — Featured projects only
router.get("/featured", async (req, res) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ order: 1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
