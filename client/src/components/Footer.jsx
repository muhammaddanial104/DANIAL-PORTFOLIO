export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top Row: Brand & Back to top */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-icon-box">
              <span className="brand-letter">D</span>
            </div>
            <div>
              <div className="brand-text">
                <span className="brand-name">Danial</span>
                <span className="brand-dot"></span>
              </div>
              <p className="footer-tagline">
                Full-Stack Software Engineer & AI Agent Architect
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Scroll to top"
          >
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

        {/* Middle Row: Navigation Links */}
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
            <a
              href="https://github.com/muhammaddanial104"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-link"
              title="GitHub"
            >
              GitHub
            </a>
            <span className="soc-sep">•</span>
            <a
              href="https://www.linkedin.com/in/muhammad-danial-2584b4432"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-link"
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="soc-sep">•</span>
            <a
              href="https://wa.me/923137525862"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-soc-link"
              title="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Location */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} Muhammad Danial. All rights reserved. Built with React & Cosmic Glass aesthetics.
          </p>
          <div className="footer-location-tag">
            <span>📍 Gujrat, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
