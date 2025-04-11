import React from 'react';
import { NavLink } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <body>
      <header className="header">
        <center>
          <img
            src={`${process.env.PUBLIC_URL}/images/service.png`}
            alt="homepic"
            className="services_img"
          />
          <p className="img_p1">THE SERVICES WE OFFER</p>
          <p className="img_p2">We promise to deliver the best or nothing!</p>
        </center>
      </header>

      <section className="section_webdev">
        <img src={`${process.env.PUBLIC_URL}/images/webdevdesign.png`} className="webdevdesign_img" alt="webdev"/>
        <NavLink to="/webdevelopment&design" className="navlink_webdev_img">WEB DESIGN & DEVELOPMENT</NavLink>
        <div className="container_webdev1">
        <p className="p1_webdev_img">Codesign offers customer-oriented <strong>web design and development services</strong> and more importantly, deliver them effectively.
          <br />
          <br />
          If you go through our portfolio, you will realize that our web designs are all unique and combined with passionate animations reflecting the corporate identity
          of our clients following the latest trends and technologies such as responsive design and development, parallax and more!
          <br />
          <br />
          Our team of dedicated artists would spend days creating supernatural concepts translating imagination into images to present an accurate web design.</p>
       </div>
      </section>

      <section className="section_mobile">
        <img src={`${process.env.PUBLIC_URL}/images/mobile1.png`} className="mobile_img" alt="mobile"/>
        <NavLink to="/mobileapps" className="navlink_mobile_img">MOBILE APPLICATIONS</NavLink>
        <div className="container_mobile">
        <p className="p1_mobile_img">One of the fundamental promises we gave ourselves when Softimpact was born, is to always keep pace with the latest innovations and technologies to provide the 
        users with a smooth navigation experience by creating a digital smart interface.
          <br />
          <br />
          <p className="p1_mobile_img1">Using the latest development technologies and design trends, we thrive to bring you the most vibrant and upbeat mobile applications.</p>
        </p>
        </div>
      </section>

      <section className="section_graphicdesign">
        <img src={`${process.env.PUBLIC_URL}/images/graphicdesign1.png`} className="graphicdesign_img" alt="graphicdesign" />
        <NavLink to="/graphicdesign" className="navlink_graphicdesign_img">GRAPHIC DESIGN</NavLink>
        <div className="container_graphicdesign">
          <p className="p1_graphicdesign_img">Codesign provides customer-oriented<strong> graphic design services</strong>, delivering unique creations that embody each client's brand identity. Our portfolio showcases innovative designs incorporating the latest trends and technologies.
            <br />
            <br />
            <p className="p1_graphicdesign_img1">Our dedicated team passionately transforms imagination into visually stunning concepts for an accurate brand representation. Choose SoftImpact for<strong> graphic design </strong>that goes beyond expectations, crafting a visually impactful narrative.</p>
          </p>
        </div>
      </section>

      <section className="section_laptoprepair">
        <img src={`${process.env.PUBLIC_URL}/images/laptopsrepair1.png`} className="laptopsrepair_img" alt="laptoprepair" />
        <NavLink to="#" className="navlink_laptoprepair_img">LAPTOPS REPAIR</NavLink>
        <div className="container_laptoprepair">
          <p className="p1_laptoprepair_img">Codesign <strong>Laptop Repair Service </strong>offers swift and precise solutions for a range of issues, from hardware malfunctions to software glitches. Our dedicated team ensures timely and reliable repairs, prioritizing customer satisfaction.
            <br />
            <br />
            <p className="p1_laptoprepair_img1">Trust Codesign for professional and efficient laptop repairs that restore your devices to optimal performance. Your laptops are in expert hands at Codesign.</p>
          </p>
        </div>
      </section>

     
    </body>
  );
}

export default Services;
