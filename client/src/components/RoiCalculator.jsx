// ═══════════════════════════════════════════════════
// COMPONENT: RoiCalculator.jsx — AI ROI CALCULATOR
// Aligned with PDF Masterplan Section 08:
// Transparent interactive calculator for repetitive business workflows
// ═══════════════════════════════════════════════════
import { useState } from "react";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(35);

  // Industry-conservative 70% autonomous automation rate
  const AUTOMATION_FACTOR = 0.70;
  const WEEKS_PER_MONTH = 4.33;

  const totalMonthlyManualHours = teamSize * hoursPerWeek * WEEKS_PER_MONTH;
  const monthlyHoursSaved = Math.round(totalMonthlyManualHours * AUTOMATION_FACTOR);
  const monthlySavings = Math.round(monthlyHoursSaved * hourlyRate);
  const annualSavings = monthlySavings * 12;

  const handleApplyRoi = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const msgField = document.getElementById("simple-message");
        if (msgField) {
          msgField.value = `Hi Danial, based on your AI ROI Calculator, our team of ${teamSize} spends ~${hoursPerWeek} hrs/week each on repetitive processes (approx. $${monthlySavings.toLocaleString()}/mo savings opportunity). I'd like to see what can be automated in our workflow.`;
          msgField.focus();
        }
      }, 500);
    }
  };

  return (
    <section id="calculator" className="section roi-section">
      <div className="section-header">
        <span className="section-num">05.B</span>
        <h2 className="section-title">
          AI <span className="accent">ROI CALCULATOR</span>
        </h2>
        <div className="section-line" />
      </div>

      <p className="roi-subtitle">
        Estimate the time and financial return your business unlocks by replacing manual, repetitive workflows with autonomous AI systems.
      </p>

      <div className="roi-calculator-container">
        {/* Controls Column */}
        <div className="roi-controls-card">
          <div className="roi-card-header">
            <span className="roi-card-icon">⚙️</span>
            <div>
              <h3 className="roi-card-title">WORKFLOW PARAMETERS</h3>
              <span className="roi-card-sub">Adjust to reflect your team&apos;s current operations</span>
            </div>
          </div>

          {/* Slider 1: Team Members */}
          <div className="roi-input-group">
            <div className="roi-label-row">
              <label htmlFor="roi-team-size">Team Members Doing Repetitive Tasks</label>
              <span className="roi-val-badge">{teamSize} {teamSize === 1 ? "Person" : "People"}</span>
            </div>
            <input
              id="roi-team-size"
              type="range"
              min="1"
              max="25"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="roi-slider"
            />
            <div className="roi-slider-range">
              <span>1</span>
              <span>12</span>
              <span>25</span>
            </div>
          </div>

          {/* Slider 2: Hours per Week */}
          <div className="roi-input-group">
            <div className="roi-label-row">
              <label htmlFor="roi-hours-week">Manual Hours Per Person / Week</label>
              <span className="roi-val-badge">{hoursPerWeek} Hours / wk</span>
            </div>
            <input
              id="roi-hours-week"
              type="range"
              min="2"
              max="35"
              step="1"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="roi-slider"
            />
            <div className="roi-slider-range">
              <span>2 hrs</span>
              <span>18 hrs</span>
              <span>35 hrs</span>
            </div>
          </div>

          {/* Slider 3: Hourly Rate */}
          <div className="roi-input-group">
            <div className="roi-label-row">
              <label htmlFor="roi-hourly-rate">Average Blended Cost ($ / hr)</label>
              <span className="roi-val-badge">${hourlyRate} / hr</span>
            </div>
            <input
              id="roi-hourly-rate"
              type="range"
              min="15"
              max="150"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="roi-slider"
            />
            <div className="roi-slider-range">
              <span>$15</span>
              <span>$80</span>
              <span>$150+</span>
            </div>
          </div>

          {/* Assumptions Notice per PDF Section 08 */}
          <div className="roi-assumptions-notice">
            <span className="notice-icon">ℹ️</span>
            <div className="notice-body">
              <strong>Transparent Calculation Basis:</strong> Assumes a standard 70% autonomous completion rate across well-scoped AI workflows (customer replies, data triage, email follow-up, reports). 30% is allocated for human oversight.
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="roi-results-card">
          <div className="roi-card-header">
            <span className="roi-card-icon">📈</span>
            <div>
              <h3 className="roi-card-title">PROJECTED BUSINESS IMPACT</h3>
              <span className="roi-card-sub">Calculated for {teamSize} team members</span>
            </div>
          </div>

          <div className="roi-stats-grid">
            <div className="roi-stat-box">
              <span className="roi-stat-label">TIME RECLAIMED / MONTH</span>
              <div className="roi-stat-number text-cyan">
                ~{monthlyHoursSaved.toLocaleString()} <span className="roi-stat-unit">Hours</span>
              </div>
              <span className="roi-stat-sub">Across your entire team</span>
            </div>

            <div className="roi-stat-box">
              <span className="roi-stat-label">MONTHLY OPERATIONAL SAVINGS</span>
              <div className="roi-stat-number text-emerald">
                ${monthlySavings.toLocaleString()}
              </div>
              <span className="roi-stat-sub">Based on ${hourlyRate}/hr cost</span>
            </div>
          </div>

          <div className="roi-annual-highlight">
            <span className="annual-badge">ESTIMATED ANNUAL VALUE</span>
            <div className="annual-val-row">
              <span className="annual-amount">${annualSavings.toLocaleString()}</span>
              <span className="annual-term">/ year</span>
            </div>
            <p className="annual-note">
              Plus eliminated human burnout, zero response wait times, and improved SLA fulfillment.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary roi-action-btn"
            onClick={handleApplyRoi}
          >
            <span className="btn-glow" />
            Automate This Process →
          </button>
        </div>
      </div>
    </section>
  );
}
