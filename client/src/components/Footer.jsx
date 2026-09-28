// ═══════════════════════════════════════════════════
// COMPONENT: Footer.jsx — LUXURY CYBERNETIC FOOTER
// ═══════════════════════════════════════════════════
const FB_URL = "https://www.facebook.com/share/1EPnhc4Zon/";
const IG_URL = "https://www.instagram.com/d4_danial";
const LI_URL = "https://www.linkedin.com/in/muhammad-danial-2584b4432";
const GH_URL = "https://github.com/muhammaddanial104";
const WA_URL = "https://wa.me/923137525862?text=Hi%20Danial,%20I%20have%20a%20project%20or%20process%20I'd%20like%20to%20discuss!";
const MAIL   = "innocentdanial00@gmail.com";

const GHIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LIIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const WAIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MLIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IGIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
  </svg>
);

const FBIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const NAV_LINKS = [
  { id: "home",         label: "Home Overview" },
  { id: "ai-lab",       label: "Interactive AI Lab" },
  { id: "about",        label: "Engineering Profile" },
  { id: "projects",     label: "Case Studies & Systems" },
  { id: "services",     label: "Services & Solutions" },
  { id: "skills",       label: "Technical Arsenal" },
  { id: "architecture", label: "System Architecture" },
  { id: "calculator",   label: "ROI & Value Calc" },
  { id: "contact",      label: "Start a Conversation" },
];

const SERVICE_LINKS = [
  "Full-Stack Web Applications",
  "Modern Websites & Landing Pages",
  "MERN E-Commerce Storefronts",
  "Autonomous AI Agent Systems",
  "24/7 AI Customer Support Bots",
  "Workflow & WhatsApp Automation",
  "Docker & Cloud Deployment",
];

export default function Footer() {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* Subtle Glowing Header Divider */}
      <div className="footer-line" />

      {/* ─── Call To Action Card ─── */}
      <div className="footer-cta-card">
        <div className="footer-cta-glow" />
        <div className="footer-cta-left">
          <div className="footer-status-badge">
            <span className="footer-pulse-dot" />
            <span>AVAILABLE FOR CONTRACTS &amp; ROLES</span>
          </div>
          <h3 className="footer-cta-title">
            Have a project or process to automate?
          </h3>
          <p className="footer-cta-desc">
            Let&apos;s build production-grade web applications, autonomous AI agents, or automated enterprise pipelines together.
          </p>
        </div>
        <div className="footer-cta-right">
          <button className="footer-btn-primary" onClick={() => scrollTo("contact")}>
            <span>Start a Project</span>
            <span className="footer-btn-arrow">→</span>
          </button>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="footer-btn-secondary"
          >
            <WAIcon />
            <span>Quick WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ─── Main 4-Column Grid ─── */}
      <div className="footer-inner">

        {/* Column 1: Brand & Identity */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand-title-wrap">
            <div className="footer-logo">[MD]</div>
            <div className="footer-brand-text">
              <h4 className="footer-name">Muhammad Danial</h4>
              <p className="footer-role">AI Agent Developer &amp; Software Engineer</p>
            </div>
          </div>

          <p className="footer-bio">
            Specializing in autonomous multi-agent systems, enterprise cyber defense SOCs, and scalable full-stack web applications.
          </p>

          <div className="footer-location-pill">
            <span className="location-flag">🇵🇰</span>
            <span>Gujrat, Punjab, Pakistan &bull; Open Worldwide</span>
          </div>

          {/* Social Row */}
          <div className="footer-social-row">
            <a href={GH_URL} target="_blank" rel="noreferrer" className="footer-soc-icon" title="GitHub">
              <GHIcon />
            </a>
            <a href={LI_URL} target="_blank" rel="noreferrer" className="footer-soc-icon" title="LinkedIn">
              <LIIcon />
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="footer-soc-icon" title="WhatsApp">
              <WAIcon />
            </a>
            <a href={`mailto:${MAIL}`} className="footer-soc-icon" title="Email">
              <MLIcon />
            </a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="footer-soc-icon" title="Instagram">
              <IGIcon />
            </a>
            <a href={FB_URL} target="_blank" rel="noreferrer" className="footer-soc-icon" title="Facebook">
              <FBIcon />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className="footer-col">
          <div className="footer-col-header">
            <span className="footer-col-dot" />
            <h4 className="footer-col-heading">NAVIGATION</h4>
          </div>
          <ul className="footer-nav-list">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button
                  className="footer-nav-item"
                  onClick={() => scrollTo(link.id)}
                >
                  <span className="footer-nav-bullet">›</span>
                  <span className="footer-nav-text">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services & Solutions */}
        <div className="footer-col">
          <div className="footer-col-header">
            <span className="footer-col-dot" />
            <h4 className="footer-col-heading">WHAT I BUILD</h4>
          </div>
          <ul className="footer-nav-list">
            {SERVICE_LINKS.map((svc, idx) => (
              <li key={idx}>
                <button
                  className="footer-nav-item"
                  onClick={() => scrollTo("services")}
                >
                  <span className="footer-nav-bullet">›</span>
                  <span className="footer-nav-text">{svc}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Direct Channels */}
        <div className="footer-col footer-col-channels">
          <div className="footer-col-header">
            <span className="footer-col-dot" />
            <h4 className="footer-col-heading">DIRECT CONNECT</h4>
          </div>

          <div className="footer-cards-stack">
            {/* WhatsApp Card */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-channel-card wa-channel"
            >
              <div className="channel-icon-wrap">
                <WAIcon />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Instant WhatsApp</span>
                <span className="channel-value">+92 313 7525862</span>
              </div>
              <span className="channel-arrow">↗</span>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${MAIL}`}
              className="footer-channel-card mail-channel"
            >
              <div className="channel-icon-wrap">
                <MLIcon />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Direct Email</span>
                <span className="channel-value">{MAIL}</span>
              </div>
              <span className="channel-arrow">↗</span>
            </a>

            {/* Response Time Badge */}
            <div className="footer-resp-box">
              <span className="resp-icon">⚡</span>
              <span className="resp-text">Guaranteed response within <strong>24 hours</strong></span>
            </div>
          </div>
        </div>

      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="footer-bottom">
        <div className="footer-bottom-copy">
          &copy; {year} <span className="text-white font-semibold">Muhammad Danial</span> &bull; Built with React &amp; AI Intelligence.
        </div>

        <button className="footer-back-top-btn" onClick={scrollToTop}>
          <span className="top-arrow">▲</span>
          <span>BACK TO TOP</span>
        </button>

        <div className="footer-bottom-status">
          <span className="status-live-dot" />
          <span>ALL SYSTEMS NORMAL &bull; LATENCY &lt; 50MS</span>
        </div>
      </div>
    </footer>
  );
}
