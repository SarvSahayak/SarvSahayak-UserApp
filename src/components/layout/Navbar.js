import React from "react";
import { Link, NavLink } from "react-router-dom";
// import '../../style.css'
// import Logo from "https://lh3.googleusercontent.com/-_bvJHSWdW38/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnuAk8slSzdE8N7KzncONjFfKG-3Q/photo.jpg?sz=500";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" exact to="/">
          
          <img src="https://lh3.googleusercontent.com/-_bvJHSWdW38/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnuAk8slSzdE8N7KzncONjFfKG-3Q/photo.jpg?sz=40" alt ="sarvsahayak_logo" href="/" />
          &nbsp; SarvSahayak
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="/users/add">Register a complaint</Link>
        &nbsp; &nbsp; 
        <Link className="btn btn-outline-light" to="/">  Log IN</Link>
        &nbsp; &nbsp; 
        <Link className="btn btn-outline-light" to="#">  Sign UP</Link>
      </div>
    </nav>
  );
};

export default Navbar;
