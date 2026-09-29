import { useState } from "react";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(25);

  // Transparent calculation based on realistic 65% automation factor
  const AUTOMATION_EFFICIENCY = 0.65;
  const weeklyRepetitiveHours = teamSize * hoursPerWeek;
  const monthlyHoursSaved = Math.round(weeklyRepetitiveHours * 4.33 * AUTOMATION_EFFICIENCY);
  const monthlyCostSaved = Math.round(monthlyHoursSaved * hourlyRate);
  const annualCostSaved = monthlyCostSaved * 12;

  return (
    <section id="roi-calc" className="section-container roi-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="badge-num">08</span>
          <span className="badge-sep">|</span>
          <span className="badge-title">Business Impact</span>
        </div>
        <h2 className="section-main-heading">
          AI Automation <span className="gradient-text">ROI Calculator</span>
        </h2>
        <p className="section-subtitle">
          Estimate the time and financial return your business gains by replacing routine manual computer tasks with autonomous AI workflows.
        </p>
      </div>

      <div className="roi-calculator-card">
        <div className="roi-card-glow"></div>

        <div className="roi-grid-layout">
          {/* Left: Input Sliders */}
          <div className="roi-inputs-col">
            <h3 className="roi-col-title">Workflow Parameters</h3>

            {/* Slider 1: Team Size */}
            <div className="slider-group">
              <div className="slider-header">
                <label className="slider-label">Team Size (Employees doing repetitive tasks)</label>
                <span className="slider-val-badge">{teamSize} {teamSize === 1 ? "person" : "people"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="slider-ticks">
                <span>1</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>

            {/* Slider 2: Hours Per Week */}
            <div className="slider-group">
              <div className="slider-header">
                <label className="slider-label">Repetitive Hours / Week per Person</label>
                <span className="slider-val-badge">{hoursPerWeek} hrs/week</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="slider-ticks">
                <span>2 hrs</span>
                <span>12 hrs</span>
                <span>25 hrs</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="slider-group">
              <div className="slider-header">
                <label className="slider-label">Average Blended Hourly Cost</label>
                <span className="slider-val-badge">${hourlyRate} / hr</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="roi-slider"
              />
              <div className="slider-ticks">
                <span>$10/hr</span>
                <span>$50/hr</span>
                <span>$100/hr</span>
              </div>
            </div>

            {/* Transparent Assumptions Disclosure */}
            <div className="roi-assumptions-box">
              <span className="assumptions-title">📋 Transparent Model Assumptions:</span>
              <p className="assumptions-text">
                Calculation applies an achievable <strong>65% automation efficiency rate</strong> on routine, structured manual tasks (customer ticketing, CRM entry, email sorting, invoice reading). It assumes human-in-the-loop oversight for non-standard edge cases.
              </p>
            </div>
          </div>

          {/* Right: Calculated Value Metric Cards */}
          <div className="roi-outputs-col">
            <h3 className="roi-col-title">Estimated Annual Value</h3>

            <div className="metric-highlight-card">
              <span className="metric-tag">Estimated Annual Labor Savings</span>
              <span className="metric-big-number">${annualCostSaved.toLocaleString()}</span>
              <span className="metric-subtext">~${monthlyCostSaved.toLocaleString()} saved every single month</span>
            </div>

            <div className="metric-mini-grid">
              <div className="metric-mini-card">
                <span className="mini-card-icon">⏱️</span>
                <div>
                  <span className="mini-card-val">{monthlyHoursSaved.toLocaleString()} hrs</span>
                  <span className="mini-card-lbl">Reclaimed per Month</span>
                </div>
              </div>

              <div className="metric-mini-card">
                <span className="mini-card-icon">⚡</span>
                <div>
                  <span className="mini-card-val">~30–60 Days</span>
                  <span className="mini-card-lbl">Typical Payback Period</span>
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="roi-cta-wrap">
              <a
                href="https://wa.me/923137525862?text=Hello%20Danial,%20I%20used%20your%20ROI%20Calculator%20and%20want%20to%20audit%20our%20workflow."
                target="_blank"
                rel="noopener noreferrer"
                className="roi-action-btn"
              >
                <span>Audit My Team's Workflow on WhatsApp</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
