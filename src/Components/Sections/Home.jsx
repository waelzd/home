import React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { BsEyeglasses } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { MdOutlineDiversity2 } from "react-icons/md";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <body>
      <header className="header">
        <p className="p1">We are</p>
        <p className="p2">a Web Development, Design & Mobile Apps Technology Company</p>
        <p className="p3">we strive to provide the perfect design, development and problem solution for your business needs!</p>
        <center>
          <img
            src={`${process.env.PUBLIC_URL}/images/homepic.png`}
            alt="homepic"
            className="homepic_img"
          />
        </center>
      </header>


      <section className="section_service">
  <div className="services">Our Services</div>
  <div className="grid-container">
    <div className="cards">
      <center>
        <img src={`${process.env.PUBLIC_URL}/images/website.png`} alt="Web Development" className="service_img1" />
      </center>
      <div className="card-body-service">
        <h3 className="title">Web Development & Design</h3>
        <p className="text">
          Transform your brand online with our expert web development,
          creating visually stunning, user-friendly websites tailored uniquely.
        </p>
        <NavLink to="/webdevelopment&design" className="btn1">View Service</NavLink>
      </div>
    </div>

    <div className="cards">
      <center>
        <img src={`${process.env.PUBLIC_URL}/images/mobile.png`} alt="Mobile Applications" className="service_img2" />
      </center>
      <div className="card-body-service">
        <h3 className="title">Mobile Applications</h3>
        <p className="text">
          Elevate your business with our expertly crafted mobile applications,
          blending innovation and user-centric design for a seamless digital experience.
        </p>
        <NavLink to="/mobileapps" className="btn2">View Service</NavLink>
      </div>
    </div>

    <div className="cards">
      <center>
        <img src={`${process.env.PUBLIC_URL}/images/graphic.png`} alt="Graphic Design" className="service_img3" />
      </center>
      <div className="card-body-service">
        <h3 className="title">Graphic Design</h3>
        <p className="text">
          Elevate your brand with our graphic design expertise,
          merging creativity and strategy for impactful visuals that resonate with your identity.
        </p>
        <NavLink to="/graphicdesign" className="btn3">View Service</NavLink>
      </div>
    </div>

    <div className="cards">
      <center>
        <img src={`${process.env.PUBLIC_URL}/images/repair.png`} alt="Laptops Repair" className="service_img4" />
      </center>
      <div className="card-body-service">
        <h3 className="title">Laptops Repair</h3>
        <p className="text">
          Restore peak performance to your laptop with our efficient repair service,
          addressing both hardware and software issues promptly and expertly.
        </p>
        <NavLink to="#" className="btn4">View Service</NavLink>
      </div>
    </div>
  </div>
</section>


      <section className="section2">
  <p className="how">How Codesign Works?</p>
  <div className="card-container">
    <div className="card1">
      <BsEyeglasses className="Insight-logo" />
      <Card.Body>
        <Card.Title className="Insight-title">INSIGHT</Card.Title>
        <Card.Text className="Insight-text">
          We understand the specific cause and effect of your project.
        </Card.Text>
      </Card.Body>
    </div>

    <div className="card1">
      <IoMdAnalytics className="analysis-logo" />
      <Card.Body>
        <Card.Title className="analysis-title">ANALYSIS</Card.Title>
        <Card.Text className="analysis-text">
          We examine with detail the elements and structure of your company.
        </Card.Text>
      </Card.Body>
    </div>

    <div className="card1">
      <MdOutlineDiversity2 className="brainstorming-logo" />
      <Card.Body>
        <Card.Title className="brainstorming-title">BRAINSTORMING</Card.Title>
        <Card.Text className="brainstorming-text">
          All our great minds are brought together for your benefit.
        </Card.Text>
      </Card.Body>
    </div>

    <div className="card1">
      <RxLetterCaseCapitalize className="design-logo" />
      <Card.Body>
        <Card.Title className="design-title">DESIGN</Card.Title>
        <Card.Text className="design-text">
          After all the preparation steps, the hard work begins.
        </Card.Text>
      </Card.Body>
    </div>

    <div className="card1">
      <TbDeviceDesktopCode className="development-logo" />
      <Card.Body>
        <Card.Title className="development-title">DEVELOPMENT</Card.Title>
        <Card.Text className="development-text">
          Our developers take charge of translating the design into interactive digits.
        </Card.Text>
      </Card.Body>
    </div>

    <div className="card1">
      <FaTasks className="testing-logo" />
      <Card.Body>
        <Card.Title className="testing-title">TESTING</Card.Title>
        <Card.Text className="testing-text">
          This is the final step before advertising. The project's functionality is thoroughly tested.
        </Card.Text>
      </Card.Body>
    </div>
  </div>
</section>


      
    </body>

  );
}

export default Home;





