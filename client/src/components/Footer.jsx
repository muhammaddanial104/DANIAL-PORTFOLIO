// ---------------------------------------------------
// COMPONENT: Footer.jsx � REAL SOCIAL LINKS
// ---------------------------------------------------
const FB_URL = "https://www.facebook.com/share/1EPnhc4Zon/";
const IG_URL = "https://www.instagram.com/d4_danial";
const LI_URL = "https://www.linkedin.com/in/muhammad-danial-2584b4432";
const GH_URL = "https://github.com/muhammaddanial104";
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

export default function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">[MD]</div>
          <p className="footer-tagline">Building the Future,<br/>One Line at a Time.</p>
          <div className="footer-social">
            <a href={FB_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="Facebook">
              <FBIcon />
            </a>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="Instagram">
              <IGIcon />
            </a>
            <a href={LI_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="LinkedIn">
              <LIIcon />
            </a>
            <a href={GH_URL} target="_blank" rel="noreferrer" className="footer-soc-btn" title="GitHub">
              <GHIcon />
            </a>
            <a href={`mailto:${MAIL}`} className="footer-soc-btn" title="Email">
              <MLIcon />
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div className="footer-col">
          <h4 className="footer-col-title">NAVIGATE</h4>
          {["home","about","skills","projects","services","contact"].map(id => (
            <button key={id} className="footer-link" onClick={() => scrollTo(id)}>
              <span className="footer-link-arrow">&#8250;</span> {id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="footer-col">
          <h4 className="footer-col-title">TECH STACK</h4>
          {["React / Next.js","Node.js / Express","Python / Django","MongoDB","AI Agents","LangChain"].map(t => (
            <span key={t} className="footer-tech">{t}</span>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">CONNECT</h4>
          <a href={`mailto:${MAIL}`} className="footer-contact-item">
            <span>&#128231;</span> {MAIL}
          </a>
          <a href={FB_URL} target="_blank" rel="noreferrer" className="footer-contact-item">
            <span>&#128101;</span> facebook.com/danial
          </a>
          <a href={IG_URL} target="_blank" rel="noreferrer" className="footer-contact-item">
            <span>&#128247;</span> @d4_danial
          </a>
          <a href={LI_URL} target="_blank" rel="noreferrer" className="footer-contact-item">
            <span>&#128188;</span> Muhammad Danial
          </a>
          <span className="footer-contact-item">
            <span>&#128205;</span> Gujrat, Pakistan
          </span>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          &#169; {year} <strong>Muhammad Danial</strong>. All rights reserved.
        </span>
        <div className="footer-bottom-links">
          <a href={FB_URL} target="_blank" rel="noreferrer" className="footer-bottom-social">FB</a>
          <span className="footer-bottom-sep">&#183;</span>
          <a href={IG_URL} target="_blank" rel="noreferrer" className="footer-bottom-social">IG</a>
          <span className="footer-bottom-sep">&#183;</span>
          <a href={LI_URL} target="_blank" rel="noreferrer" className="footer-bottom-social">LI</a>
        </div>
        <span className="footer-build">MD &#183; MERN + AI</span>
      </div>
    </footer>
  );
}

