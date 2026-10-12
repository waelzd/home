import React from "react";
import { NavLink } from "react-router-dom";
import { BsEyeglasses } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineDiversity2 } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import "./Home.css";

const services = [
  {
    to: "/webdevelopment&design",
    image: "website.png",
    alt: "Web Development",
    title: "Web Development & Design",
    description:
      "Transform your brand online with our expert web development, creating visually stunning, user-friendly websites tailored uniquely.",
  },
  {
    to: "/mobileapps",
    image: "mobile.png",
    alt: "Mobile Applications",
    title: "Mobile Applications",
    description:
      "Elevate your business with our expertly crafted mobile applications, blending innovation and user-centric design for a seamless digital experience.",
  },
  {
    to: "/graphicdesign",
    image: "graphic.png",
    alt: "Graphic Design",
    title: "Graphic Design",
    description:
      "Elevate your brand with our graphic design expertise, merging creativity and strategy for impactful visuals that resonate with your identity.",
  },
  {
    to: "/services/laptop-repair",
    image: "repair.png",
    alt: "Laptop Repair",
    title: "Laptop Repair",
    description:
      "Restore peak performance to your laptop with our efficient repair service, addressing both hardware and software issues promptly and expertly.",
  },
];

const process = [
  {
    Icon: BsEyeglasses,
    title: "Insight",
    text: "We understand the specific cause and effect of your project.",
  },
  {
    Icon: IoMdAnalytics,
    title: "Analysis",
    text: "We examine with detail the elements and structure of your company.",
  },
  {
    Icon: MdOutlineDiversity2,
    title: "Brainstorming",
    text: "All our great minds are brought together for your benefit.",
  },
  {
    Icon: RxLetterCaseCapitalize,
    title: "Design",
    text: "After all the preparation steps, the hard work begins.",
  },
  {
    Icon: TbDeviceDesktopCode,
    title: "Development",
    text: "Our developers take charge of translating the design into interactive digits.",
  },
  {
    Icon: FaTasks,
    title: "Testing",
    text: "The final step before advertising — the project's functionality is thoroughly tested.",
  },
];

const Home = () => {
  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="home__hero">
        <div className="home__container home__hero-inner">
          <p className="home__eyebrow">We are</p>
          <h1 className="home__title">
            A Web Development, Design &amp; Mobile Apps Technology Company
          </h1>
          <p className="home__subtitle">
            We strive to provide the perfect design, development and problem
            solution for your business needs.
          </p>

          <div className="home__hero-cta">
            <NavLink to="/contact" className="home__btn home__btn--primary">
              Start a Project
            </NavLink>
            <NavLink to="/about" className="home__btn home__btn--ghost">
              Learn More
            </NavLink>
          </div>

          <div className="home__hero-visual">
            <img
              src={`${process.env.PUBLIC_URL}/images/homepic.png`}
              alt="Codesign team and product showcase"
            />
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="home__services">
        <div className="home__container">
          <h2 className="home__section-title">Our Services</h2>

          <div className="home__services-grid">
            {services.map((service) => (
              <article key={service.to} className="home__service-card">
                <div className="home__service-media">
                  <img src={`${process.env.PUBLIC_URL}/images/${service.image}`} alt={service.alt} />
                </div>
                <div className="home__service-body">
                  <h3 className="home__service-title">{service.title}</h3>
                  <p className="home__service-text">{service.description}</p>
                  <NavLink to={service.to} className="home__service-link">
                    View Service
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="home__process">
        <div className="home__container">
          <h2 className="home__section-title home__section-title--dark">
            How Codesign Works
          </h2>

          <div className="home__process-grid">
            {process.map((step, index) => {
              const { Icon } = step;
              return (
                <div key={step.title} className="home__step">
                  <div className="home__step-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <span className="home__step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="home__step-title">{step.title}</h3>
                  <p className="home__step-text">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;