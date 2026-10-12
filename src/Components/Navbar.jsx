import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const services = [
    { to: "/webdevelopment&design", label: "Web Development & Design" },
    { to: "/mobileapps", label: "Mobile Applications" },
    { to: "/graphicdesign", label: "Graphic Design" },
    { to: "/services/laptop-repair", label: "Laptop Repair" },
  ];

  return (
    <nav ref={navRef} className="navbar">
      <div className="navbar__inner">
        <Link to="/home" className="navbar__brand" onClick={closeMenu}>
          <img
            src={`/images/codesign1.png`}
            className="navbar__logo"
            alt="Devart"
          />
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__menu ${menuOpen ? "is-open" : ""}`}>
          <li>
            <NavLink to="/home" onClick={closeMenu} className="navbar__link">
              Home
            </NavLink>
          </li>

          <li className={`navbar__dropdown ${dropdownOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="navbar__link navbar__link--dropdown"
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
            >
              Services
              <svg
                className="navbar__arrow"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <ul className="navbar__submenu">
              {services.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMenu}
                    className="navbar__sublink"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu} className="navbar__link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className="navbar__link">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;