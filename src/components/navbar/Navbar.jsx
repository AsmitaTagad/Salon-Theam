import React, { useState } from "react";
import "./Navbar.css";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg position-sticky ">
        <div className="container-fluid ">
          <a className="navbar-brand text-light" href="/">
            {<RiShoppingBag3Fill size={30} />} <span> Gostore</span>
          </a>
          <button
            className="navbar-toggler text-light"
            type="button"
            onClick={() => setShow(show ? false : true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              show
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse active"
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link className="nav-link text-light" to="/services">
                Services
              </Link>
              <Link className="nav-link text-light" to="/aboutUs">
                About Us
              </Link>

              <Link
                to="/appointment"
                className="btn nav-link text-light border rounded-pill border-light"
                role="button"
                aria-disabled="true"
              >
                Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
