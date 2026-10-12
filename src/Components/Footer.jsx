import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          &copy; {year} Codesign. All rights reserved.
        </p>

        <ul className="footer__links">
          <li>
            <a href="/privacy" className="footer__link">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="footer__link">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;