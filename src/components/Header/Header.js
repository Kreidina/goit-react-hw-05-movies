import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="nav-item">
            <NavLink className=" navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className=" navbar-link" to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
