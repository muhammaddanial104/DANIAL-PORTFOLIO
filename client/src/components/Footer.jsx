import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FOOTER_TAGLINES = [
  "Building Autonomous AI Agents & n8n Automations ⚡",
  "Architecting Full-Stack MERN & Python/Django Systems 🚀",
  "Engineering Interactive Mini Chatbots & Custom Automations 🤖",
  "Robotics Degree • 6-Month Commercial Proof at ITS Gujrat 🎓",
];

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "AI Bot", id: "chatbot" },
  { name: "Reviews", id: "testimonials" },
  { name: "Articles", id: "blog" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % FOOTER_TAGLINES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container" role="contentinfo">
      <div className="footer-glow-top" aria-hidden="true"></div>
      <div className="footer-content">
        {/* Top Row: Brand, Animated Tagline Ticker & Back to Top Button */}
        <div className="footer-top-row">
          <motion.div
            className="footer-brand"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="brand-icon-box" aria-hidden="true">
              <span className="brand-letter">MD</span>
            </div>
            <div className="footer-brand-info">
              <div className="brand-text">
                <span className="brand-name footer-brand-shimmer">Muhammad Danial</span>
                <span className="brand-badge-role">AI &amp; Full-Stack</span>
                <span className="brand-dot" aria-hidden="true"></span>
              </div>
              <div className="footer-tagline-container">
                <span className="footer-tagline-badge">Focus</span>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={FOOTER_TAGLINES[taglineIndex]}
                    className="footer-tagline-animated"
                    initial={{ opacity: 0, y: 7, filter: "blur(3px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -7, filter: "blur(3px)" }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                  >
                    {FOOTER_TAGLINES[taglineIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Scroll to top of page"
            aria-label="Back to top"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </div>

        {/* Middle Row: Polished Smooth Navigation Links & Social Media Icons */}
        <div className="footer-nav-row">
          <ul className="footer-nav-links" aria-label="Footer Navigation">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className="footer-nav-link"
                  whileHover={{ y: -2, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="footer-nav-dot" aria-hidden="true">•</span>
                  <span>{item.name}</span>
                </motion.a>
              </li>
            ))}
            <li>
              <motion.a
                href="/resume.pdf"
                download="Muhammad_Danial_Resume.pdf"
                className="footer-nav-link footer-resume-pill"
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-label="Download Muhammad Danial Resume PDF"
              >
                <span>Resume (PDF)</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </motion.a>
            </li>
          </ul>

          <div className="footer-social-links" aria-label="Social Profiles">
            <motion.a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn btn-github"
              title="GitHub Profile"
              aria-label="GitHub"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn btn-linkedin"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>

            <motion.a
              href="https://dev.to/muhammaddanial104"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn btn-devto"
              title="Dev.to Technical Articles"
              aria-label="Dev.to"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
                <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.38 28.49 47.38 47.25v70.96zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16 0-20.58-9.42-20.58-20.58V193.56c0-11.16 9.42-20.58 20.58-20.58h62.18v29.55zm123.75 107.03c0 11.45-9.43 20.58-20.58 20.58h-32.85c-11.16 0-20.58-9.13-20.58-20.58v-116.7h31.43v107.89h11.14v-107.89h31.44v116.7z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://wa.me/923137525862"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn btn-whatsapp"
              title="WhatsApp Instant Chat"
              aria-label="WhatsApp"
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Live Status Pill with Text Shimmer */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Muhammad Danial. Handcrafted with React.js &amp; CSS. Built with clean code &amp; continuous learning.
          </p>
          <div className="footer-status-pill">
            <span className="live-status-dot" aria-hidden="true"></span>
            <span className="status-text-shimmer">Open to Junior Full-Stack &amp; AI Roles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
