import React from "react";
import "./WebDev.css";

const offerings = [
  {
    id: "development",
    title: "Web Development",
    image: "webdev1.png",
    alt: "Web development tools",
    intro:
      "Web development is the process of creating and maintaining websites or web applications using various programming languages.",
    items: [
      {
        name: "HTML",
        detail: "Fundamental for structuring content on every page.",
      },
      {
        name: "CSS",
        detail: "Styles and designs the layout, colors, and typography.",
      },
      {
        name: "JavaScript",
        detail: "Adds dynamic and interactive elements on the client side.",
      },
      {
        name: "PHP",
        detail: "Server-side scripting for dynamic content generation.",
      },
      {
        name: "Java & C++",
        detail: "Backend logic and complex tasks, often with frameworks like Spring.",
      },
    ],
    outro:
      "JavaScript frameworks like React and Angular enhance frontend development, providing modular and scalable solutions. PHP integrates with databases like MySQL to manage dynamic data, while Java and C++ contribute to robust server functionality — a comprehensive toolkit for feature-rich, responsive web experiences.",
  },
  {
    id: "design",
    title: "Web Design",
    image: "webdesign.png",
    alt: "Web design tools",
    intro:
      "Web design is the art of crafting visually engaging, user-friendly interfaces for websites or web applications using a variety of tools.",
    items: [
      {
        name: "Adobe XD & Sketch",
        detail: "Prototyping and wireframing for structural blueprints.",
      },
      {
        name: "Photoshop & Illustrator",
        detail: "Designing captivating visuals and maintaining brand consistency.",
      },
      {
        name: "CSS",
        detail: "Defining and refining the styles of every web element.",
      },
      {
        name: "Bootstrap",
        detail: "Responsive design frameworks for optimal UX across devices.",
      },
      {
        name: "UI/UX Principles",
        detail: "Guiding seamless, intuitive interactions.",
      },
    ],
    outro:
      "This synthesis of tools empowers designers to merge creativity with technical proficiency — enhancing aesthetics, functionality, and user engagement in the digital realm.",
  },
];

const WebDev = () => {
  return (
    <div className="webdev">
      {/* ---------- Hero ---------- */}
      <header className="webdev__hero">
        <img
          src={`/images/webdev.png`}
          alt="Web design and development at Codesign"
          className="webdev__hero-img"
        />
        <div className="webdev__hero-overlay" />
        <div className="webdev__hero-content">
          <p className="webdev__hero-eyebrow">Creative Services</p>
          <h1 className="webdev__hero-title">Web Design &amp; Development</h1>
          <p className="webdev__hero-subtitle">
            See your website in all shapes &amp; sizes.
          </p>
        </div>
      </header>

      {/* ---------- Intro ---------- */}
      <section className="webdev__intro-section">
        <div className="webdev__container">
          <h2 className="webdev__intro-heading">
            Building websites that convert
          </h2>
          <div className="webdev__intro-copy">
            <p>
              As a complete Web Solutions company, Codesign offers
              customer-oriented web design services — and more importantly,
              delivers them effectively. Whether you are a small business or a
              large corporation, we can cater to all your needs, giving you an
              online presence that delivers the very best for you and your
              clients in Lebanon and the Middle East region.
            </p>
            <p>
              A successful web design demands a clear concept as well as an
              ability to visualize the overall solution within the scope of your
              business or industry. Whether your goal is to provide information,
              products, e-commerce, or online services, we ensure that visitors
              to your site enjoy an informative, user-friendly, aesthetic, and
              interactive experience.
            </p>
            <p>
              Browse our portfolio and you'll see that our web designs are all
              unique, combined with passionate animations that reflect each
              client's corporate identity, following the latest trends and
              technologies such as responsive design, parallax, and more. Our
              team of dedicated artists — drawing on the latest trends in web
              design — spends days creating supernatural concepts that translate
              imagination into images and present an accurate web design.
            </p>
            <p>
              Within our strategy, we provide clients with multiple website
              designs to give them a wide range of choices, with the flexibility
              to perform changes before presenting the final layout.
            </p>
            <p>
              Our skills for presenting your content will give your platform an
              advantage over competitors in Lebanon and the Middle East region.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Offerings ---------- */}
      <section className="webdev__offerings">
        <div className="webdev__container">
          <h2 className="webdev__offerings-heading">
            Development &amp; Design
          </h2>

          <div className="webdev__grid">
            {offerings.map((offering) => (
              <article key={offering.id} className="webdev__card">
                <div className="webdev__card-media">
                  <img
                    src={`/images/${offering.image}`}
                    alt={offering.alt}
                    className="webdev__card-img"
                  />
                </div>

                <div className="webdev__card-body">
                  <h3 className="webdev__card-title">{offering.title}</h3>
                  <p className="webdev__card-intro">{offering.intro}</p>

                  <ul className="webdev__tool-list">
                    {offering.items.map((item) => (
                      <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.detail}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="webdev__card-outro">{offering.outro}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDev;