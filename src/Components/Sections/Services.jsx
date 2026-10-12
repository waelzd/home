import React from "react";
import { NavLink } from "react-router-dom";
import "./Services.css";

const services = [
  {
    id: "webdev",
    icon: "webdevdesign.png",
    title: "Web Design & Development",
    link: "/webdevelopment&design",
    paragraphs: [
      <>
        Codesign offers customer-oriented{" "}
        <strong>web design and development services</strong> and — more
        importantly — delivers them effectively.
      </>,
      <>
        Browse our portfolio and you'll see that our web designs are all unique,
        combined with passionate animations that reflect each client's corporate
        identity, following the latest trends and technologies such as responsive
        design, parallax, and more.
      </>,
      <>
        Our team of dedicated artists spends days creating supernatural concepts
        — translating imagination into images to present an accurate web design.
      </>,
    ],
  },
  {
    id: "mobile",
    icon: "mobile1.png",
    title: "Mobile Applications",
    link: "/mobileapps",
    paragraphs: [
      <>
        One of the fundamental promises we made to ourselves when Codesign was
        born: to always keep pace with the latest innovations and technologies,
        providing users with a smooth navigation experience through a digital
        smart interface.
      </>,
      <>
        Using the latest development technologies and design trends, we bring you
        the most vibrant and upbeat mobile applications.
      </>,
    ],
  },
  {
    id: "graphic",
    icon: "graphicdesign1.png",
    title: "Graphic Design",
    link: "/graphicdesign",
    paragraphs: [
      <>
        Codesign provides customer-oriented{" "}
        <strong>graphic design services</strong>, delivering unique creations
        that embody each client's brand identity. Our portfolio showcases
        innovative designs incorporating the latest trends and technologies.
      </>,
      <>
        Our dedicated team passionately transforms imagination into visually
        stunning concepts for accurate brand representation. Choose Codesign for{" "}
        <strong>graphic design</strong> that goes beyond expectations — crafting
        a visually impactful narrative.
      </>,
    ],
  },
  {
    id: "repair",
    icon: "laptopsrepair1.png",
    title: "Laptop Repair",
    link: "/services/laptop-repair",
    paragraphs: [
      <>
        Codesign's <strong>Laptop Repair Service</strong> offers swift and
        precise solutions for a range of issues — from hardware malfunctions to
        software glitches. Our dedicated team ensures timely, reliable repairs
        with customer satisfaction as the priority.
      </>,
      <>
        Trust Codesign for professional, efficient laptop repairs that restore
        your device to optimal performance. Your laptop is in expert hands.
      </>,
    ],
  },
];

const Services = () => {
  return (
    <div className="services">
      {/* ---------- Hero ---------- */}
      <header className="services__hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/service.png`}
          alt="Services at Codesign"
          className="services__hero-img"
        />
        <div className="services__hero-overlay" />
        <div className="services__hero-content">
          <p className="services__hero-eyebrow">What we do</p>
          <h1 className="services__hero-title">The Services We Offer</h1>
          <p className="services__hero-subtitle">
            We promise to deliver the best — or nothing.
          </p>
        </div>
      </header>

      {/* ---------- Service Sections ---------- */}
      {services.map((service, index) => {
        const isDark = index % 2 === 0;
        return (
          <section
            key={service.id}
            className={`services__section ${
              isDark ? "services__section--dark" : "services__section--light"
            }`}
          >
            <div className="services__container">
              <div className="services__icon-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${service.icon}`}
                  alt=""
                  className="services__icon"
                  aria-hidden="true"
                />
              </div>

              <h2 className="services__title">
                <NavLink to={service.link} className="services__title-link">
                  {service.title}
                </NavLink>
              </h2>

              <div className="services__copy">
                {service.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <NavLink to={service.link} className="services__cta">
                Explore {service.title}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </NavLink>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Services;