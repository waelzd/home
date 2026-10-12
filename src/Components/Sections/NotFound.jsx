import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound__inner">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Page not found</h1>
        <p className="notfound__text">
          Sorry, the page you're looking for doesn't exist or has moved.
        </p>
        <div className="notfound__actions">
          <NavLink to="/" className="notfound__btn notfound__btn--primary">
            Go home
          </NavLink>
          <NavLink to="/contact" className="notfound__btn notfound__btn--ghost">
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;