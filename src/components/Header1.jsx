import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header1 = () => {
  return (
    <>
       <header className="header" id="header">
        <nav className="nav container">
            <Link to="/" className="nav__logo">
                Basil
            </Link>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <PrivateLink 
                         to="Home"
                         className={(obj) => {
                           const { isActive } = obj;
                           return `nav__link ${isActive ? "active-link" : ""}`;
                         }}
                        >Home</PrivateLink>
                    </li>
                    <li className="nav__item">
                        <PrivateLink to="Settings" className="nav__link">Settings</PrivateLink>
                    </li>
                    <li className="nav__item">
                        <PrivateLink to="Users" className="nav__link">Users</PrivateLink>
                    </li>
                    <li className="nav__item">
                        <PrivateLink to="Usage" className="nav__link">Usage</PrivateLink>
                    </li>
                    <li className="nav__item">
                        <PrivateLink  className='nav__link logout' to="Login" onClick={()=> clearUserInfo() }>Logout</PrivateLink>
                    </li>
                </ul>

                
                <div className="nav__close" id="nav-close">
                    <i className="ri-close-line"></i>
                </div>
            </div>
            <div className="nav__buttons">
                
                <i className="ri-moon-line change-theme" id="theme-button"></i>
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-fill"></i>
                </div>
            </div>
        </nav>
    </header> 
    <LogedInOutlet />
    </>
  )
}

export default Header1
