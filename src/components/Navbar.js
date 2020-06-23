import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container-fluid bg-dark mt-1">
      <nav className="navbar navbar-expand-md navbar-light">
        <NavLink to="/" className="navbar-brand">
          <h1 className="nav-brand pt-3">Kamal's Cafe</h1>
        </NavLink>
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
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/basket" className="nav-link text-white">
                Basket
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
