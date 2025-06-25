import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid">
      {/* navbar-dark bg-dark */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span
            className="d-inline-block align-text-top"
            style={{
              fontFamily: "UnifrakturCook, cursive",
              fontSize: "1.5rem",
            }}
          >
            Vivit Lee
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center justify-content-lg-end"
          id="navbarNav" 
        >
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                Experience & Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contract
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
