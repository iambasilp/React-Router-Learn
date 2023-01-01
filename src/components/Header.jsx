import React from "react";
import PrivateLink from "./Links/PrivateLink";
import LogedInOutlet from './Outlets/LogedInOutlet';
import {clearUserInfo} from '../utils/Common'
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <div className="nav__menu">
            <PrivateLink
              to="Home"
              className={(obj) => {
                const { isActive } = obj;
                return `hello ${isActive ? "active" : ""}`;
              }}
            >
              Home
            </PrivateLink>
            <PrivateLink to="Settings">Settings</PrivateLink>
            <PrivateLink to="Users">Users</PrivateLink>
            <PrivateLink to="Usage">Usage</PrivateLink>
    
              <PrivateLink  className='logout' to="Login" onClick={()=> clearUserInfo() }>Logout</PrivateLink>
          </div>
        </nav>
      </header>
      
      <LogedInOutlet />
    </>
  );
};

export default Header;
