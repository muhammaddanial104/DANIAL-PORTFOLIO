// ═══════════════════════════════════════════════════
// COMPONENT: About.jsx — WITH ROBOTICS (COMING SOON)
// ═══════════════════════════════════════════════════
export default function About() {
  const INFO = [
    { label: "NAME",       value: "Muhammad Danial" },
    { label: "LOCATION",   value: "Gujrat, Pakistan" },
    { label: "EDUCATION",  value: "BS IN ROBOTICS (COMING SOON) · Bahria Uni" },
    { label: "EXPERIENCE", value: "1+ Year" },
    { label: "EMAIL",      value: "innocentdanial00@gmail.com" },
    { label: "STATUS",     value: "Available for Hire", avail: true },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <span className="section-num">01</span>
        <h2 className="section-title">
          ABOUT <span className="accent">ME</span>
        </h2>
        <div className="section-line" />
      </div>

      <div className="about-grid">
        {/* ── Photo Column ── */}
        <div className="about-photo-col">
          <div className="photo-frame">
            {/* Corner decorators */}
            <div className="pf-corner pf-tl" />
            <div className="pf-corner pf-tr" />
            <div className="pf-corner pf-bl" />
            <div className="pf-corner pf-br" />
            {/* Real photo */}
            <img
              src="/danial.jpg"
              alt="Muhammad Danial"
              className="profile-photo"
            />
            {/* Scan line */}
            <div className="photo-scan" />
          </div>

          {/* Quick badges */}
          <div className="about-badges">
            <div className="badge">&#9670; Full Stack Developer</div>
            <div className="badge">&#9670; AI Agent Developer</div>
            <div className="badge">&#9670; Python Developer</div>
            <div className="badge badge-soon">&#9670; Robotics (Coming Soon)</div>
          </div>
        </div>

        {/* ── Info Column ── */}
        <div className="about-info-col">
          <p className="about-intro">
            Hey, I&apos;m <span className="text-purple">Muhammad Danial</span> —
            a passionate developer from Gujrat, Pakistan.
          </p>
          <p className="about-body">
            I specialize in building full-stack web applications using the
            <span className="highlight"> MERN stack</span> and intelligent
            <span className="highlight"> AI agents</span> with Python.
            Currently pursuing <span className="highlight">BS in Robotics</span> at
            Bahria University, where I combine engineering and software to solve
            real-world problems.
          </p>

          {/* Info grid — clean */}
          <div className="about-info-grid">
            {INFO.map(({ label, value, avail }) => (
              <div className="info-item" key={label}>
                <span className="info-label">{label}</span>
                <span className={`info-value ${avail ? "available" : ""}`}>{value}</span>
              </div>
            ))}
          </div>

          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="btn-glow" />
            &#x1F4E8; LET&apos;S WORK TOGETHER
          </button>
        </div>
      </div>
    </section>
  );
}