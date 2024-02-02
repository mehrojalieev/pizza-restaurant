import './nav.scss'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../../assets/Images/logofood.png'
import Home from '../../pages/home/Home';
import { Container } from '../../utils/Utils';

const Nav = () => {

  const checkToken = localStorage.getItem("user-token")

  const { pathname } = useLocation()
  return pathname.includes("/signup") || pathname.includes("/login") || pathname.includes("/cabinet") ? null : (
    <nav>
      <Container>
        <div className="nav-wrapper">
          <img src={Logo} alt="Logo" />

          <div className="nav-menu">
            <ul>
              <li>
                <NavLink className={({ isActive }) => isActive ? "active" : "pending"} to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "active" : "pending"} to='menu'>Our Menu</NavLink>
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
            {
              checkToken ? <Link to="/cabinet">Account</Link> : <>
                <NavLink className={'register-btn'} to='signup'>Sign up</NavLink>
                <NavLink className={'register-btn'} to='login'>Login</NavLink>
              </>
            }
          </div>
        </div>
      </Container>
    </nav>

  )
}

export default Nav;