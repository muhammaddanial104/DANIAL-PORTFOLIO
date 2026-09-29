import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "AI Demo", href: "#ask-ai" },
    { name: "Architecture", href: "#architecture" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-glow-top"></div>
      <div className="footer-content">
        {/* Top Row: Brand, Tagline & Back to Top Button */}
        <div className="footer-top-row">
          <motion.div
            className="footer-brand"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="brand-icon-box">
              <span className="brand-letter">MD</span>
            </div>
            <div className="footer-brand-info">
              <div className="brand-text">
                <span className="brand-name">Muhammad Danial</span>
                <span className="brand-badge-role">Full-Stack &amp; AI</span>
                <span className="brand-dot"></span>
              </div>
              <p className="footer-tagline">
                Full-Stack Developer &amp; AI Automation Engineer • Building Autonomous Digital Systems
              </p>
            </div>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Scroll to top"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </div>

        {/* Middle Row: Navigation Links & Social Media Icons */}
        <div className="footer-nav-row">
          <ul className="footer-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="footer-nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="footer-social-row">
            <motion.a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-icon-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </motion.a>

            <motion.a
              href="https://wa.me/923137525862"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-icon-btn"
              title="WhatsApp Direct"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </motion.a>

            <motion.a
              href="mailto:innocentdanial00@gmail.com"
              className="footer-soc-icon-btn"
              title="Email Directly"
              aria-label="Email"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Location */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong className="text-white">Muhammad Danial</strong>. All rights reserved. Crafted with React &amp; Futuristic Glassmorphism.
          </p>
          <div className="footer-location-tag">
            <span className="loc-live-dot"></span>
            <span>📍 Gujrat, Pakistan • Available for Remote Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
