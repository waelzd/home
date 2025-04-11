import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

const Contact = () => {
  return (
    
    <body>
      <header className="header_contact">
        <center>
          <img src={`${process.env.PUBLIC_URL}/images/contact.jpg`} alt="homepic" className="contact_img" />
            <p className="contact_img_p1">COME FOR A CHAT,COFFEE ON US</p>
            <p className="contact_img_p2">We can’t wait to meet you!</p>
        </center>
      </header>

      <div className="contact-page">
      <h1>We’d love to hear from you!</h1>
      <p>
        We will be glad to answer all your queries. Send us a message and we’ll reply as soon as we can.<br />
      </p>

      <div className="contact-container">
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className="send-button">SEND YOUR MESSAGE</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>ADDRESS</h2>
          <p><strong><i className="fas fa-map-marker-alt"></i> LEBANON</strong>
            <br />
          We Work Remotley <br />
          <i className="fas fa-phone-alt"></i> Tel: +961 76 867 649<br />
          </p>
      <p>
        <strong>
          <i className="fas fa-envelope"></i>
        </strong>
          <a href="mailto:info@codesign.net"> info@codesign.net</a>
      </p>

          <h3>Find us on Social Media.</h3>
          <p>Codesign is all over the web! Find us on all <br /> the below platforms and let’s get social!</p>
          <div className="social-media">
            <a href="https://www.facebook.com/codesign" target="_blank" rel="noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/facebook.png`} alt="Facebook" className="fb"/>
            </a>
            <a href="https://www.instagram.com/codesign" target="_blank" rel="noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/instagram.jpg`} alt="Instagram" className="in"/>
            </a>
            </div>
        </div>
      </div>
    </div>
    </body>
  );
};

export default Contact;
