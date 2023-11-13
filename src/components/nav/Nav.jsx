import './nav.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Images/logofood.png'

const Nav = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo" />

        <div className="nav-menu">
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? "active" : "pending"} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "active" : "pending"} to='our-menu'>Our Menu</NavLink>
            </li>
            <li>
              <NavLink to='offer'>Offer</NavLink>
            </li>
            <li>
              <NavLink to='about'>About</NavLink>
            </li>
            <li>
              <NavLink to='contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-register">
          <NavLink className={'register-btn'} to='signup'>Sign up</NavLink>
          <NavLink className={'register-btn'} to='login'>Login</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav;