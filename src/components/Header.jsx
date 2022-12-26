import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="nav__menu">
            <NavLink
              to="Home"
              className={(obj) => {
                const { isActive } = obj;
                return `hello ${isActive ? "active" : ""}`;
              }}
            >
              Home
            </NavLink>
            <NavLink to="Settings">Settings</NavLink>
            <NavLink to="Users">Users</NavLink>
            <NavLink to="Usage">Usage</NavLink>
          </div>
        </nav>
      </header>
      <Outlet/>
    </>
  );
};

export default Header;
