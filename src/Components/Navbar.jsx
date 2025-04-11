import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef(null);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setDropdownOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <Link to="/home">
        <img src={`${process.env.PUBLIC_URL}/images/codesign1.png`} className="logo" alt="Devart" />
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/home" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li
          className={`dropdown ${dropdownOpen ? "open" : ""}`}
          onClick={toggleDropdown}
        >
          <NavLink to="/services">
            Services<span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/webdevelopment&design" onClick={closeMenu}>
                Web Development & Design
              </NavLink>
            </li>
            <li>
              <NavLink to="/mobileapps" onClick={closeMenu}>
                Mobile Applications
              </NavLink>
            </li>
            <li>
              <NavLink to="/graphicdesign" onClick={closeMenu}>
                Graphic Design
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/laptop-repair" onClick={closeMenu}>
                Laptops Repair
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
