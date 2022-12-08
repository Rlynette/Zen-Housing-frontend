import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css"

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-link">
        {/* <NavLink to="/login">Login</NavLink> */}
      </div>

      <div className="menubar">
        <div className="logo">
          <p>
            {" "}
            <a>Zen Housing Listings</a>
          </p>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/housedetails">House Listings</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
        <div className="navbuttons">
          <NavLink to="/signup">
            <button id="start">Sign Up</button>
          </NavLink>{" "}
          {/* <NavLink to="/login">
            <button id="start">Login</button>
          </NavLink> */}
        </div>
      </div>
      <hr width="100%" />
    </div>
  );
}

export default NavBar;
