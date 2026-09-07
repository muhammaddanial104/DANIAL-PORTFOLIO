// ------------------------------------
// SEED: Populate DB with Danial projects
// Run: node seed.js
// ------------------------------------
require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce website with product management, cart system, user authentication, payment integration, and admin dashboard built with MERN stack.",
    image: "/proj1.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
    status: "live",
    featured: true,
    year: "2024",
    order: 1,
  },
  {
    title: "AI Software Engineering Agent",
    description: "Autonomous AI platform that writes, tests, and deploys code. Uses LangChain agents with GPT-4 to perform end-to-end software engineering tasks.",
    image: "/proj2.jpg",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI", "React", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
    status: "live",
    featured: true,
    year: "2025",
    order: 2,
  },
  {
    title: "AI Content Creation Agent",
    description: "Intelligent multi-modal content generator. Creates blog posts, social media content, images, and videos using AI agents with custom workflows.",
    image: "/proj3.jpg",
    tags: ["Python", "OpenAI", "Stable Diffusion", "Django", "Celery", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
    status: "live",
    featured: false,
    year: "2025",
    order: 3,
  },
  {
    title: "Full Stack SaaS Platform",
    description: "Production-ready SaaS application combining MERN stack frontend/backend with Python microservices for heavy computation and AI processing.",
    image: "/proj4.jpg",
    tags: ["MERN", "Python", "FastAPI", "Next.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/muhammaddanial104",
    status: "wip",
    featured: false,
    year: "2025",
    order: 4,
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nexus-portfolio");
    console.log("Connected to MongoDB");
    await Project.deleteMany({});
    const inserted = await Project.insertMany(projects);
    console.log(`Seeded ${inserted.length} projects with images!`);
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err);
    process.exit(1);
  }
}

seedDB();