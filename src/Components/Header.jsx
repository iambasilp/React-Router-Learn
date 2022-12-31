import React from 'react'
import { NavLink} from 'react-router-dom'
import { navToggle } from '../Utils/common'
import { navClose } from '../Utils/common'
import { navLink } from '../Utils/common'
import LoggedInOutlet from './Outlets/LoggedInOutlet'
import { clearUserInfo } from '../Utils/common'
import './Header.css'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <>
    <header className="header">
        <nav className="nav container">
            <span to="/Home" className="nav__logo">Basil.</span>
            <div className="nav__menu" id='nav-menu'>
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="Home" className="nav__Link" onClick={()=>{
                            navLink()
                        }}>Home</NavLink>
                        <NavLink to="About" className="nav__Link"
                        onClick={()=>{
                            navLink()
                        }}>About</NavLink>
                        <NavLink to="Users" className="nav__Link"
                        onClick={()=>{
                            navLink()
                        }}>Users</NavLink>
                        <NavLink to="Contact" className="nav__Link"
                        onClick={()=>{
                            navLink()
                        }}>Contact</NavLink>     
                        <NavLink to="Login" className="nav__Link"  onClick={()=>{clearUserInfo()}}>Logout</NavLink>     
                    </li>
                </ul>
                <div className="nav__close" id='nav-close' onClick={()=>{
                    navClose()
                }} >
                    <i className="ri-close-line"></i>
                </div>
            </div>
            <div className="nav__toggle" id='nav-toggle' >
            <i className="ri-menu-line" onClick={()=>{
                navToggle()
            }}></i>
            </div>
        </nav>
    </header>
    <LoggedInOutlet />
    </>
  )
}
export default Header