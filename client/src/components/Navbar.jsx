import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Ask AI", href: "#ask-ai" },
    { name: "Automate", href: "#automate" },
    { name: "Live Demo", href: "#demo" },
    { name: "Case Studies", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "ROI Calc", href: "#roi-calc" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "ask-ai", "automate", "demo", "projects", "architecture", "roi-calc", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="navbar-brand">
          <div className="brand-icon-box">
            <span className="brand-letter">MD</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Danial</span>
            <span className="brand-dot"></span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.name}
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Button from Upgrade Plan */}
        <div className="navbar-right">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hire-me-btn"
          >
            <span>Start a Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="mobile-active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              href="https://wa.me/923137525862"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-hire-btn"
            >
              <span>Start a Project (WhatsApp)</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
