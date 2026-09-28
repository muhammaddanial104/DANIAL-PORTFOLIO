// ═══════════════════════════════════════════════════
// COMPONENT: Footer.jsx — EXECUTIVE & STRUCTURED NAVIGATION
// ═══════════════════════════════════════════════════
const FB_URL = "https://www.facebook.com/share/1EPnhc4Zon/";
const IG_URL = "https://www.instagram.com/d4_danial";
const LI_URL = "https://www.linkedin.com/in/muhammad-danial-2584b4432";
const GH_URL = "https://github.com/muhammaddanial104";
const WA_URL = "https://wa.me/923137525862?text=Hi%20Danial,%20I%20have%20a%20project%20or%20process%20I'd%20like%20to%20discuss!";
const MAIL   = "innocentdanial00@gmail.com";

const FBIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const IGIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
  </svg>
);

const LIIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GHIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const MLIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const WAIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const NAV_ITEMS = [
  { id: "home",         label: "Home / Overview",        num: "00" },
  { id: "ai-lab",       label: "AI Lab & Terminal",      num: "01" },
  { id: "about",        label: "Engineering Profile",    num: "02" },
  { id: "projects",     label: "Case Studies & Systems", num: "03" },
  { id: "services",     label: "Services & Solutions",   num: "04" },
  { id: "skills",       label: "Technical Arsenal",      num: "05" },
  { id: "architecture", label: "System Architecture",    num: "06" },
  { id: "calculator",   label: "ROI & Value Calc",       num: "07" },
  { id: "contact",      label: "Start a Conversation",   num: "08" },
];

const SERVICE_ITEMS = [
  { label: "Full-Stack Web Apps",      desc: "MERN / Next.js production builds" },
  { label: "Modern Websites & Pages",   desc: "High-speed conversion interfaces" },
  { label: "E-Commerce Platforms",     desc: "Cart, checkout, Stripe & JWT auth" },
  { label: "Autonomous AI Agents",     desc: "LangChain, RAG & OS tool callers" },
  { label: "24/7 AI Customer Support", desc: "Omnichannel intelligent chatbots" },
  { label: "Workflow & WhatsApp Bots", desc: "Automated leads & business pipelines" },
];

const FLAGSHIP_ITEMS = [
  { name: "NOVA AI 🤖",     tag: "Autonomous Desktop & Browser Engine" },
  { name: "AEGIS-AI 🛡️",    tag: "Self-Healing SOC & Threat Defense" },
  { name: "AUTO-DEV AI 💻", tag: "Containerized Coding & Testing Agent" },
  { name: "ITS Gujrat 🛒",  tag: "Production MERN Storefronts" },
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
      <div className="footer-line" />
      <div className="footer-inner">

        {/* Column 1: Brand & Identity */}
        <div className="footer-brand">
          <div className="footer-brand-header">
            <div className="footer-logo">[MD]</div>
            <div>
              <h3 className="footer-name">Muhammad Danial</h3>
              <p className="footer-role">AI Agent Developer &amp; Software Engineer</p>
            </div>
          </div>

          <p className="footer-tagline">
            Engineering autonomous multi-agent systems, enterprise cyber defense meshes, and production-grade full-stack web applications.
          </p>

          {/* Availability Status Badge */}
          <div className="footer-status-pill">
            <span className="footer-status-dot" />
            <span className="footer-status-text">Available for Projects &amp; Contracts</span>
          </div>

          {/* Social Row */}
          <div className="footer-social">
            <a href={GH_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="GitHub">
              <GHIcon />
            </a>
            <a href={LI_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="LinkedIn">
              <LIIcon />
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="WhatsApp Chat">
              <WAIcon />
            </a>
            <a href={`mailto:${MAIL}`} className="footer-soc-btn" title="Email Danial">
              <MLIcon />
            </a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="Instagram">
              <IGIcon />
            </a>
            <a href={FB_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="Facebook">
              <FBIcon />
            </a>
          </div>
        </div>

        {/* Column 2: System Navigation */}
        <div className="footer-col">
          <h4 className="footer-col-title">SYSTEM NAVIGATION</h4>
          <div className="footer-links-grid">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                className="footer-nav-link"
                onClick={() => scrollTo(item.id)}
              >
                <span className="footer-nav-num">{item.num}</span>
                <span className="footer-nav-label">{item.label}</span>
                <span className="footer-link-arrow">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Column 3: Full-Stack & AI Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">SERVICES &amp; SOLUTIONS</h4>
          <div className="footer-services-list">
            {SERVICE_ITEMS.map((svc, i) => (
              <button
                key={i}
                className="footer-svc-item"
                onClick={() => scrollTo("services")}
              >
                <span className="footer-svc-title">{svc.label}</span>
                <span className="footer-svc-sub">{svc.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Column 4: Flagships & Direct Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">FLAGSHIPS &amp; CONNECT</h4>
          
          {/* Flagship list */}
          <div className="footer-flagships-list">
            {FLAGSHIP_ITEMS.map((flag, idx) => (
              <button
                key={idx}
                className="footer-flag-item"
                onClick={() => scrollTo("projects")}
              >
                <span className="footer-flag-name">{flag.name}</span>
                <span className="footer-flag-tag">{flag.tag}</span>
              </button>
            ))}
          </div>

          <div className="footer-divider-mini" />

          {/* Direct Contact Links */}
          <div className="footer-direct-contact">
            <a href={`mailto:${MAIL}`} className="footer-contact-item" title="Direct Email">
              <span className="footer-ci-icon">📧</span>
              <span className="footer-ci-text">{MAIL}</span>
            </a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="footer-contact-item" title="WhatsApp Message">
              <span className="footer-ci-icon">💬</span>
              <span className="footer-ci-text">+92 313 7525862 (WhatsApp)</span>
            </a>
            <span className="footer-contact-item">
              <span className="footer-ci-icon">📍</span>
              <span className="footer-ci-text">Gujrat, Punjab, Pakistan 🇵🇰</span>
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span className="footer-copy">
            &copy; {year} <strong>Muhammad Danial</strong> &bull; Full-Stack Software Engineer &amp; AI Agent Developer.
          </span>
        </div>

        <div className="footer-bottom-center">
          <button className="footer-back-to-top" onClick={scrollToTop}>
            <span>▲ BACK TO TOP</span>
          </button>
        </div>

        <div className="footer-bottom-right">
          <div className="footer-operational-status">
            <span className="status-indicator-dot" />
            <span className="footer-build">SYS STATUS: ONLINE &bull; MERN + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
