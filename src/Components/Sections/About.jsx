import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";

const services = [
  {
    title: "Web Development & Design",
    description:
      "Crafting visually stunning and highly functional websites tailored to your unique needs.",
  },
  {
    title: "Mobile Applications",
    description:
      "Building intuitive and feature-rich mobile apps to keep you connected on the go.",
  },
  {
    title: "Graphic Design",
    description:
      "Creating captivating visual content to communicate your brand's story effectively.",
  },
  {
    title: "Laptop Repair",
    description:
      "Providing reliable repair services to ensure your devices perform at their best.",
  },
];

const values = [
  {
    title: "Results-Oriented",
    description:
      "Focused on delivering measurable results through strategic planning and precise execution.",
    image: "results-oriented.jpg",
  },
  {
    title: "Client Focused",
    description:
      "Prioritizing your needs with tailored solutions and strong partnerships.",
    image: "client-focused.jpg",
  },
  {
    title: "Innovation & Customization",
    description:
      "Innovative, tailored solutions leveraging creativity and technology for lasting impact.",
    image: "tailored-solution.png",
  },
  {
    title: "Expert Team",
    description:
      "Our skilled professionals bring experience, innovation, and dedication to deliver exceptional results.",
    image: "expert-team.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="about">
      {/* ---------- Hero ---------- */}
      <header className="about__hero">
        <img
          src={`/images/about-us.jpg`}
          alt="About Codesign"
          className="about__hero-img"
        />
        <div className="about__hero-overlay" />
        <div className="about__hero-content">
          <p className="about__hero-eyebrow">
            Your Trusted Partner in Technology Solutions
          </p>
          <h1 className="about__hero-title">
            Empowering Your Vision with Reliable and Innovative Technology
          </h1>
        </div>
      </header>

      {/* ---------- Who We Are ---------- */}
      <section className="about__section about__section--dark">
        <div className="about__container">
          <h2 className="about__heading">Who We Are</h2>
          <div className="about__grid">
            <div className="about__image-wrap">
              <img
                src={`/images/team.png`}
                alt="Our team"
                className="about__image"
              />
            </div>
            <div className="about__text">
              <p>
                We are a forward-thinking technology company committed to driving
                innovation and delivering exceptional solutions in today's rapidly
                evolving digital world. Our passionate team thrives on solving
                challenges and creating impactful experiences for businesses and
                individuals alike.
              </p>
              <p>
                Our services include Web Development &amp; Design, Mobile
                Applications, Graphic Design, Software Development, and Laptop
                Repair. By leveraging cutting-edge tools and methodologies, we craft
                tailored solutions to meet the unique needs of our clients.
              </p>
              <p>
                What sets us apart is our dedication to collaboration, creativity,
                and quality. Whether you're a startup with bold ideas or an
                established enterprise seeking growth, we are your partner in
                success, helping you navigate the complexities of the digital age
                with confidence.
              </p>
              <p>Let's shape the future of technology together, one breakthrough at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="about__section about__section--light">
        <div className="about__container">
          <h2 className="about__heading about__heading--dark">Our Services</h2>
          <ul className="about__services">
            {services.map((service) => (
              <li key={service.title} className="about__service-card">
                <h3 className="about__service-title">{service.title}</h3>
                <p className="about__service-text">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Values / Results ---------- */}
      <section className="about__section about__section--dark">
        <div className="about__container">
          <h2 className="about__heading">
            Strategic Innovation &amp; Results
          </h2>
          <div className="about__values">
            {values.map((value) => (
              <div key={value.title} className="about__value-card">
                <img
                  src={`/images/${value.image}`}
                  alt={value.title}
                  className="about__value-img"
                />
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="about__cta">
        <div className="about__container about__cta-inner">
          <p className="about__cta-text">
            Have questions or need assistance? Contact us today and let us help
            you achieve your technology goals.
          </p>
          <NavLink to="/contact" className="about__cta-btn">
            Get in Touch
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;