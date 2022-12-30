import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import LogedInOutlet from './Outlets/LogedInOutlet';
import {clearUserInfo} from '../utils/Common'
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
    
              <NavLink  className='logout' to="Login" onClick={()=> clearUserInfo() }>Logout</NavLink>
          </div>
        </nav>
      </header>
      
      <LogedInOutlet />
    </>
  );
};

export default Header;
