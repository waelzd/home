import React from 'react';
import { NavLink } from "react-router-dom";
import './About.css'; // Assume a separate CSS file for styling

const AboutUs = () => {
  return (
    <body>
      <header className="header_about">
        <center>
          <img src="./images/about-us.jpg" alt="homepic" className="about_img" />
            <p className="about_img_p1">YOUR TRUSTED PARTNER IN TECHNOLOGY SOLUTIONS</p>
            <p className="about_img_p2">Empowering Your Vision with Reliable and Innovative Technology Solutions</p>
        </center>
      </header>
  

       <section className="section_about">
        <div className="about-us">Who We Are?</div>
        <div className="grid-container-about">
          <div className="cards-about">
            <center>
              <img src="./images/team.png" alt="Team" className="about_img1" />
            </center>
          </div>
      
          <div className="cards-about">
            <div className="card-body-service">
              <p className="text-about">
              We are a forward-thinking technology company committed to driving innovation and delivering exceptional solutions in today’s rapidly evolving digital world. Our passionate team thrives on solving challenges and creating impactful experiences for businesses and individuals alike.
              <br /><br />
              Our services include Web Development & Design, Mobile Applications, Graphic Design, Software Development, and Laptop Repair. By leveraging cutting-edge tools and methodologies, we craft tailored solutions to meet the unique needs of our clients.
              <br /><br />
              What sets us apart is our dedication to collaboration, creativity, and quality. Whether you're a startup with bold ideas or an established enterprise seeking growth, we are your partner in success, helping you navigate the complexities of the digital age with confidence.
              <br /><br />
              Let’s shape the future of technology together, one breakthrough at a time.
              </p>
            </div>
          </div>
          </div>
        </section>

        <section className="services-section">
        <div className="title-services">Our Services</div>
          <ul className="services-list">
            <li>
              <h3>Web Development and Design</h3>
              <p>
                Crafting visually stunning and highly functional websites tailored to your
                unique needs.
              </p>
            </li>
            <li>
              <h3>Mobile Applications</h3>
              <p>
                Building intuitive and feature-rich mobile apps to keep you connected on the
                go.
              </p>
            </li>
            <li>
              <h3>Graphic Design</h3>
              <p>
                Creating captivating visual content to communicate your brand's story
                effectively.
              </p>
            </li>
            <li>
              <h3>Laptop Repair</h3>
              <p>
                Providing reliable repair services to ensure your devices perform at their
                best.
              </p>
            </li>
          </ul>
        </section>


      <section className="section-results">
      <div className="title-results">Strategic Innovation & Results</div>
        <div className="grid-container-results">
          <div className="cards-results">
            <center>
              <img src="./images/results-oriented.jpg" alt="Team" className="result-oriented_img" />
            </center>
            <div className="card-body-results">
        <h3 className="title-card-results">Results-Oriented</h3>
        <p className="text-results">
        Focused on delivering measurable results through strategic planning and precise execution.
        </p>
        </div>
          </div>

          <div className="cards-results">
            <center>
              <img src="./images/client-focused.jpg" alt="Team" className="client-focused_img" />
            </center>
            <div className="card-body-results">
        <h3 className="title-card-results">Client Focused</h3>
        <p className="text-results">
        Prioritizing your needs with tailored solutions and strong partnerships.
        </p>
        </div>
        </div>

          <div className="cards-results">
            <center>
              <img src="./images/tailored-solution.png" alt="Team" className="tailored-solution_img" />
            </center>
            <div className="card-body-results">
        <h3 className="title-card-results">Innovation and Customization</h3>
        <p className="text-results">
        Innovative, tailored solutions leveraging creativity and technology for lasting impact.
        </p>
        </div>
        </div>  

        <div className="cards-results">
            <center>
              <img src="./images/expert-team.jpg" alt="Team" className="expert-team_img" />
            </center>
            <div className="card-body-results">
        <h3 className="title-card-results">Expert Team</h3>
        <p className="text-results">
        Our skilled professionals bring experience, innovation, and dedication to deliver exceptional results.
        </p>
        </div>
        </div>
          </div>
      </section>


      <footer className="about-us-footer">
        <p>
          Have questions or need assistance? Contact us today and let us help you achieve
          your technology goals.
        </p>
        <NavLink to="/contact" className="get-in-touch">Get in Touch</NavLink>
      </footer>

    </body>
  );
};

export default AboutUs;

