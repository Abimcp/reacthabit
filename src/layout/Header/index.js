import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="current">
        Home
      </NavLink>
      <NavLink to="/login" activeClassName="current">
        Login
      </NavLink>
      <NavLink to="/register" activeClassName="current">
        Register
      </NavLink>
      <NavLink to="/stats" activeClassName="current">
        Statistics
      </NavLink>
      {/* <BackButton /> */}
    </nav>
  );
};

export default Header;
