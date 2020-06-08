import { Link } from "gatsby";
import React from "react";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="menu-list">
          <li>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/products">
              Coaches
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact/examples">
              Drills
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/blog">
              Forms
            </Link>
          </li>
        </ul>
        <ul className="menu-list">
          <li>
            <Link className="navbar-item" to="/contact">
              Calendar
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Store
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Notes
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Scholarships
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
};

export default Footer;
