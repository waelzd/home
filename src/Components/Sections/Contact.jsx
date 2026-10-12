import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up your form handler / API endpoint here
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data));
  };

  return (
    <div className="contact">
      {/* ---------- Hero ---------- */}
      <header className="contact__hero">
        <img
          src={`${process.env.PUBLIC_URL}/images/contact.jpg`}
          alt="Contact Codesign"
          className="contact__hero-img"
        />
        <div className="contact__hero-overlay" />
        <div className="contact__hero-content">
          <p className="contact__hero-eyebrow">Come for a chat — coffee's on us</p>
          <h1 className="contact__hero-title">We can't wait to meet you</h1>
        </div>
      </header>

      {/* ---------- Body ---------- */}
      <section className="contact__body">
        <div className="contact__container">
          <div className="contact__intro">
            <h2 className="contact__intro-title">
              We'd love to hear from you
            </h2>
            <p className="contact__intro-text">
              We'll be glad to answer all your queries. Send us a message and
              we'll reply as soon as we can.
            </p>
          </div>

          <div className="contact__grid">
            {/* Form */}
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="company" className="contact__label">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Optional"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="phone" className="contact__label">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Optional"
                />
              </div>

              <div className="contact__field contact__field--full">
                <label htmlFor="message" className="contact__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project…"
                  required
                />
              </div>

              <button type="submit" className="contact__submit">
                Send Message
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </button>
            </form>

            {/* Info Card */}
            <aside className="contact__info">
              <h3 className="contact__info-title">Get in touch</h3>

              <ul className="contact__info-list">
                <li>
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                  <div>
                    <strong>Lebanon</strong>
                    <span>We work remotely</span>
                  </div>
                </li>

                <li>
                  <i className="fas fa-phone-alt" aria-hidden="true" />
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+96176867649">+961 76 867 649</a>
                  </div>
                </li>

                <li>
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:info@codesign.net">info@codesign.net</a>
                  </div>
                </li>
              </ul>

              <div className="contact__social">
                <h4 className="contact__social-title">Find us on social media</h4>
                <p className="contact__social-text">
                  Codesign is all over the web — connect with us.
                </p>
                <div className="contact__social-icons">
                  <a
                    href="https://www.facebook.com/codesign"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.instagram.com/codesign"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;