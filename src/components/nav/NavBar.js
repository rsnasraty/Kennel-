import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
       Crystal Tokyo Cat Sitting
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/animals">
            Animals
            </Link>
          </li>
          <li><Link className="nav-link" to="/location">
          Location
            </Link></li>
          <li><Link className="nav-link" to="/employees">
          Employees
            </Link></li>
            <li><Link className="nav-link" to="/owners">
          Owners
            </Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;