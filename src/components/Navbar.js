import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav className='navbar'>
        <ul>
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
          <li>
            <Link className="navbar-item" to="/contact">
              Calendar
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Gallery
            </Link>
          </li>{" "}
          <li>
            <Link className="navbar-item" to="/contact">
              Store
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Notes
            </Link>
          </li>{" "}
          <li>
            <Link className="navbar-item" to="/contact">
              Scholarships
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
