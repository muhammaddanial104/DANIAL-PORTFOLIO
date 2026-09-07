// ═══════════════════════════════════════════════════
// COMPONENT: Navbar.jsx — FULLY RESPONSIVE
// Clean mobile drawer, animated hamburger, accessible
// ═══════════════════════════════════════════════════
import { useState, useEffect } from "react";

const LINKS = [
  { id: "home",     label: "HOME"     },
  { id: "about",    label: "ABOUT"    },
  { id: "services", label: "SERVICES" },
  { id: "skills",   label: "SKILLS"   },
  { id: "projects", label: "PROJECTS" },
  { id: "contact",  label: "CONTACT"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      [...LINKS].reverse().forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActive(id);
        }
      });
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = id => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav id="navbar" className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "nav-open" : ""}`}>
        {/* Brand / Logo */}
        <div className="nav-logo" onClick={() => scrollTo("home")} role="button" tabIndex={0}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">MD</span>
          <span className="logo-bracket">]</span>
          <span className="logo-name">Muhammad Danial</span>
        </div>

        {/* Desktop Navigation Links (hidden on mobile/tablet) */}
        <ul className="nav-links">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link-btn ${active === id ? "active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
                {active === id && <span className="nav-active-dot" />}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="nav-right">
          <div className="nav-status">
            <span className="status-dot" />
            <span className="status-text">AVAILABLE</span>
          </div>

          <button className="nav-hire-btn" onClick={() => scrollTo("contact")}>
            HIRE ME
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          <div className="mobile-links-list">
            {LINKS.map(({ id, label }, idx) => (
              <button
                key={id}
                className={`mobile-link ${active === id ? "active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                <span className="mobile-link-num">0{idx + 1}</span>
                <span className="mobile-link-text">{label}</span>
                {active === id && <span className="mobile-link-dot" />}
              </button>
            ))}
          </div>

          {/* Mobile Menu Footer CTA */}
          <div className="mobile-menu-footer">
            <button
              className="btn btn-primary mobile-hire-btn"
              onClick={() => scrollTo("contact")}
            >
              <span className="btn-glow" />
              ⚡ HIRE ME
            </button>
            <div className="mobile-status-row">
              <span className="status-dot" />
              <span className="status-text">AVAILABLE FOR WORK</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}