import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <>
    <header className="header">
        <nav className="nav container">
            <span to="/Home" className="nav__logo">Basil.</span>
            <div className="nav__menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="Home" className="nav__Link">Home</NavLink>
                        <NavLink to="About" className="nav__Link">About</NavLink>
                        <NavLink to="Users" className="nav__Link">Users</NavLink>
                        <NavLink to="Contact" className="nav__Link">Contact</NavLink>     
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <Outlet />
    </>
  )
}
export default Header