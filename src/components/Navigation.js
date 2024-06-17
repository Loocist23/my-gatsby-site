import React from 'react';
import { Link } from 'gatsby';
import * as navStyles from './navigation.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Eat Good</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${navStyles.navLink}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${navStyles.navLink}`} to="/opening-times">Opening Times</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${navStyles.navLink}`} to="/our-menu">Our Menu</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${navStyles.navLink}`} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
