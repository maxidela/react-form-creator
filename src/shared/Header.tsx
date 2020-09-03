import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: "25px" }}
    >
      <a className="navbar-brand" href="#">
        Forms Admin
      </a>
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/forms" className="nav-link">
              Forms
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-form" className="nav-link">
              Add Form
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
