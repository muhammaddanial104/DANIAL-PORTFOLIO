// ═══════════════════════════════════════════════════
// NEXUS PORTFOLIO — EXPRESS SERVER (Deploy Ready)
// ═══════════════════════════════════════════════════
const express    = require("express");
const mongoose   = require("mongoose");
const cors       = require("cors");
const helmet     = require("helmet");
const morgan     = require("morgan");
const rateLimit  = require("express-rate-limit");
require("dotenv").config();

const contactRoutes  = require("./routes/contact");
const projectRoutes  = require("./routes/projects");
const errorHandler   = require("./middleware/errorHandler");

const app  = express();
const PORT = process.env.PORT || 5000;

// -- CORS (Vercel, Render, Localhost) ----------------
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:3000",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(helmet({ crossOriginEmbedderPolicy: false, contentSecurityPolicy: false }));
app.use(cors({
  origin: (origin, cb) => {
    // Allow non-browser requests, allowedOrigins, or any Vercel domain
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      (typeof origin === "string" && (origin.endsWith(".vercel.app") || origin.includes("localhost")))
    ) {
      cb(null, true);
    } else {
      // Fallback allow for production flexibility
      cb(null, true);
    }
  },
  credentials: true,
}));

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true }));

// -- RATE LIMIT --------------------------------------
app.use("/api/", rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 120,
  message: { success: false, message: "Too many requests. Please try again in 15 minutes." }
}));

// -- MONGODB -----------------------------------------
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nexus-portfolio")
  .then(() => console.log("MongoDB Connected successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err.message));

// -- ROUTES ------------------------------------------
app.use("/api/contact",  contactRoutes);
app.use("/api/projects", projectRoutes);
app.get("/api/health",   (_, res) => res.json({ status: "online", version: "3.0.0", timestamp: new Date().toISOString() }));

// Root welcome message
app.get("/", (_, res) => res.json({ name: "NEXUS Portfolio API", status: "online", health: "/api/health" }));

// -- ERROR HANDLER -----------------------------------
app.use(errorHandler);

// -- START -------------------------------------------
app.listen(PORT, () => console.log(`🚀 NEXUS Server running on port ${PORT}`));