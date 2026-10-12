import React from "react";
import { NavLink } from "react-router-dom";
import "./LaptopRepair.css";

const repairServices = [
  {
    title: "Hardware Diagnostics",
    text: "Full assessment of components — screen, keyboard, battery, motherboard, ports — to pinpoint the exact fault.",
  },
  {
    title: "Screen & Keyboard Replacement",
    text: "Cracked screens, dead pixels, unresponsive keys — replaced with quality parts and tested end to end.",
  },
  {
    title: "Battery & Charging Issues",
    text: "Batteries that won't hold charge, overheating chargers, or devices that won't power on.",
  },
  {
    title: "Software Recovery",
    text: "Virus removal, OS reinstallation, driver conflicts, boot errors, and slow-performance cleanups.",
  },
  {
    title: "Data Backup & Recovery",
    text: "Secure recovery of important files before, during, and after repairs — with privacy guaranteed.",
  },
  {
    title: "Performance Tuning",
    text: "SSD upgrades, RAM expansion, thermal paste replacement, and cleaning to bring old machines back to life.",
  },
];

const LaptopRepair = () => {
  return (
    <div className="repair">
      {/* ---------- Hero ---------- */}
      <header className="repair__hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/laptopsrepair1.png`}
          alt="Laptop repair service at Codesign"
          className="repair__hero-img"
        />
        <div className="repair__hero-overlay" />
        <div className="repair__hero-content">
          <p className="repair__hero-eyebrow">Expert Service</p>
          <h1 className="repair__hero-title">Laptop Repair</h1>
          <p className="repair__hero-subtitle">
            Fast, reliable fixes for hardware and software.
          </p>
        </div>
      </header>

      {/* ---------- Intro ---------- */}
      <section className="repair__intro-section">
        <div className="repair__container">
          <h2 className="repair__intro-heading">
            Professional laptop repair
          </h2>
          <div className="repair__intro-copy">
            <p>
              Our <strong>Laptop Repair Service</strong> offers swift and precise
              solutions for a wide range of issues — from hardware malfunctions
              to software glitches. Our dedicated team ensures timely, reliable
              repairs with customer satisfaction as the top priority.
            </p>
            <p>
              Trust Codesign for professional and efficient laptop repairs that
              restore your device to optimal performance. Your laptop is in
              expert hands.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="repair__services">
        <div className="repair__container">
          <h2 className="repair__services-heading">What We Fix</h2>

          <div className="repair__grid">
            {repairServices.map((service) => (
              <article key={service.title} className="repair__card">
                <h3 className="repair__card-title">{service.title}</h3>
                <p className="repair__card-text">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="repair__cta">
        <div className="repair__container repair__cta-inner">
          <p className="repair__cta-text">
            Have a laptop that needs fixing? Get in touch for a free quote.
          </p>
          <NavLink to="/contact" className="repair__cta-btn">
            Request a Repair
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default LaptopRepair;