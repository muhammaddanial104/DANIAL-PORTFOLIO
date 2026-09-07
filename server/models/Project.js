// ------------------------------------
// MODEL: Project Schema
// Stores portfolio projects from MongoDB
// ------------------------------------
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  image:       { type: String, default: "/proj1.jpg" },
  icon:        { type: String, default: "🚀" },
  tags:        [{ type: String }],
  liveUrl:     { type: String, default: "#" },
  githubUrl:   { type: String, default: "#" },
  status:      { type: String, enum: ["live","wip","archived"], default: "live" },
  featured:    { type: Boolean, default: false },
  year:        { type: String, default: "2025" },
  order:       { type: Number, default: 0 },
});

module.exports = mongoose.model("Project", projectSchema);