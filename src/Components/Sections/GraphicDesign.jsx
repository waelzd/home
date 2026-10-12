import React from "react";
import "./GraphicDesign.css";

const offerings = [
  {
    id: "pc",
    title: "PC Graphic Design",
    image: "graphicdesign2.png",
    alt: "PC graphic design tools",
    intro:
      "Graphic design on PCs involves leveraging powerful software and hardware to create intricate designs with high precision.",
    items: [
      {
        name: "Adobe Photoshop & Illustrator",
        detail: "Industry standards for photo editing and vector-based designs.",
      },
      {
        name: "CorelDRAW",
        detail: "Preferred for detailed vector illustrations and technical designs.",
      },
      {
        name: "Affinity Designer",
        detail: "An affordable alternative for creating professional-grade graphics.",
      },
      {
        name: "InDesign",
        detail: "Ideal for desktop publishing — books, brochures, and magazines.",
      },
      {
        name: "Powerful Hardware",
        detail: "High-performance PCs with advanced GPUs support seamless rendering.",
      },
    ],
    outro:
      "PC-based design allows extensive multitasking and high-resolution output, making it a staple for professional work.",
  },
  {
    id: "mobile",
    title: "Mobile Graphic Design",
    image: "graphicmobile.png",
    alt: "Mobile graphic design apps",
    intro:
      "Graphic design on mobile devices emphasizes flexibility and portability, enabling quick edits and on-the-go creativity.",
    items: [
      {
        name: "Canva",
        detail: "A mobile-friendly tool for creating designs effortlessly, even for beginners.",
      },
      {
        name: "Procreate",
        detail: "Popular on iPads for its advanced illustration and painting capabilities.",
      },
      {
        name: "Adobe Fresco",
        detail: "Focused on sketching and drawing, with cross-device compatibility.",
      },
      {
        name: "Adobe Express",
        detail: "Create social media graphics directly from your mobile device.",
      },
      {
        name: "Over & PicsArt",
        detail: "Perfect for editing photos and adding text or effects quickly.",
      },
    ],
    outro:
      "Mobile tools provide creative solutions for social content, digital art, and quick mockups — convenience without compromising quality.",
  },
];

const GraphicDesign = () => {
  return (
    <div className="graphic">
      {/* ---------- Hero ---------- */}
      <header className="graphic__hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/graphicdes.png`}
          alt="Graphic Design at Codesign"
          className="graphic__hero-img"
        />
        <div className="graphic__hero-overlay" />
        <div className="graphic__hero-content">
          <p className="graphic__hero-eyebrow">Creative Services</p>
          <h1 className="graphic__hero-title">Graphic Design</h1>
          <p className="graphic__hero-subtitle">
            Find your graphic design solution quickly.
          </p>
        </div>
      </header>

      {/* ---------- Intro ---------- */}
      <section className="graphic__intro-section">
        <div className="graphic__container">
          <h2 className="graphic__intro-heading">Design that moves brands forward</h2>
          <div className="graphic__intro-copy">
            <p>
              In a dynamic era driven by creativity and visual appeal, staying
              ahead in the design industry requires a commitment to innovation.
            </p>
            <p>
              From the very beginning, we made a pledge to ourselves — to ride
              the wave of contemporary design trends and technological
              advancements.
            </p>
            <p>
              Today, we are thrilled to unveil our latest offering: a captivating,
              imaginative, and indispensable service — Graphic Design Excellence.
              Harnessing the power of cutting-edge design tools and staying
              abreast of the latest trends, we deliver visually stunning and
              impactful graphic designs.
            </p>
            <p>
              To meet this commitment head-on, we've established a dedicated
              research and implementation division exclusively for our graphic
              design services. At Codesign, our goal extends beyond customer
              satisfaction; we aim to elevate it to an unprecedented level of
              modernism and originality.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Offerings ---------- */}
      <section className="graphic__offerings">
        <div className="graphic__container">
          <h2 className="graphic__offerings-heading">Our Design Toolkit</h2>

          <div className="graphic__grid">
            {offerings.map((offering) => (
              <article key={offering.id} className="graphic__card">
                <div className="graphic__card-media">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${offering.image}`}
                    alt={offering.alt}
                    className="graphic__card-img"
                  />
                </div>

                <div className="graphic__card-body">
                  <h3 className="graphic__card-title">{offering.title}</h3>
                  <p className="graphic__card-intro">{offering.intro}</p>

                  <ul className="graphic__tool-list">
                    {offering.items.map((item) => (
                      <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.detail}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="graphic__card-outro">{offering.outro}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;