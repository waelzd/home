import React from "react";
import "./MobileApps.css";

const offerings = [
  {
    id: "development",
    title: "Mobile App Development",
    image: "mobileapps2.png",
    alt: "Mobile app development tools",
    intro:
      "Mobile application development is the process of creating software applications for mobile devices, employing various programming languages.",
    items: [
      {
        name: "Java",
        detail: "Commonly used for Android development.",
      },
      {
        name: "JavaScript",
        detail: "Adds dynamic and interactive elements on the client side.",
      },
      {
        name: "Flutter & React Native",
        detail: "Cross-platform solutions using a single codebase for Android and iOS.",
      },
      {
        name: "XML",
        detail: "Used for designing user interfaces in Android applications.",
      },
      {
        name: "Django",
        detail: "A Python framework for robust backend services in mobile apps.",
      },
    ],
    outro:
      "Flutter with Dart facilitates smooth, expressive UI; React Native leverages JavaScript for native-like experiences; XML structures Android layouts; Django integrates backend services seamlessly. Together, they enable versatile, platform-agnostic apps.",
  },
  {
    id: "design",
    title: "Mobile App Design",
    image: "mobiledesign.png",
    alt: "Mobile app design tools",
    intro:
      "Mobile application design involves creating visually appealing, user-centric interfaces for mobile apps using a range of specialized tools.",
    items: [
      {
        name: "Adobe XD & Sketch",
        detail: "Prototyping and wireframing for app structure and iteration.",
      },
      {
        name: "Illustrator & Photoshop",
        detail: "Crafting graphics and maintaining a consistent visual language.",
      },
      {
        name: "InVision & Zeplin",
        detail: "Interactive prototypes and design-to-dev handoff.",
      },
      {
        name: "Bootstrap & Tailwind CSS",
        detail: "Responsive design across screen sizes and resolutions.",
      },
      {
        name: "UI/UX Principles",
        detail: "Intuitive, engaging interfaces that enhance usability.",
      },
    ],
    outro:
      "This comprehensive toolkit empowers designers to navigate mobile application design — a harmonious blend of aesthetics and functionality in the ever-evolving landscape of mobile experiences.",
  },
];

const MobileApps = () => {
  return (
    <div className="mobile">
      {/* ---------- Hero ---------- */}
      <header className="mobile__hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/mobileapps1.png`}
          alt="Mobile applications at Codesign"
          className="mobile__hero-img"
        />
        <div className="mobile__hero-overlay" />
        <div className="mobile__hero-content">
          <p className="mobile__hero-eyebrow">Creative Services</p>
          <h1 className="mobile__hero-title">Mobile Applications</h1>
          <p className="mobile__hero-subtitle">
            Get your application built — quickly.
          </p>
        </div>
      </header>

      {/* ---------- Intro ---------- */}
      <section className="mobile__intro-section">
        <div className="mobile__container">
          <h2 className="mobile__intro-heading">
            Mobile Apps — Design &amp; Development
          </h2>
          <div className="mobile__intro-copy">
            <p>
              In an era where technology and innovation are evolving at the speed
              of light, the only survivors in any industry are the ones who are up
              for the race.
            </p>
            <p>
              One of the fundamental promises we made to ourselves when Codesign
              was born: to always keep pace with the latest.
            </p>
            <p>
              Therefore, we proudly introduce a new, fun, interesting, and
              essential service: <strong>Mobile application design and
              development</strong>. Using the latest development technologies and
              design trends, we bring you vibrant, upbeat mobile applications.
            </p>
            <p>
              We've integrated a dedicated research and implementation department
              for this service. At Codesign, our aim isn't just full customer
              satisfaction — it's reaching a whole new level of modernism and
              originality.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Offerings ---------- */}
      <section className="mobile__offerings">
        <div className="mobile__container">
          <h2 className="mobile__offerings-heading">
            What We Build &amp; How
          </h2>

          <div className="mobile__grid">
            {offerings.map((offering) => (
              <article key={offering.id} className="mobile__card">
                <div className="mobile__card-media">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${offering.image}`}
                    alt={offering.alt}
                    className="mobile__card-img"
                  />
                </div>

                <div className="mobile__card-body">
                  <h3 className="mobile__card-title">{offering.title}</h3>
                  <p className="mobile__card-intro">{offering.intro}</p>

                  <ul className="mobile__tool-list">
                    {offering.items.map((item) => (
                      <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.detail}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mobile__card-outro">{offering.outro}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApps;