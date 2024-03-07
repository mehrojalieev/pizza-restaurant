import './nav.scss'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../../assets/Images/logofood.png'
import Home from '../../pages/home/Home';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Container } from '../../utils/Utils';

const Nav = () => {

  const checkToken = localStorage.getItem("user-token")

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [openMenu, setOpenMenu] = useState(false)
  const [closeMenu, setCloseMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 556) {
      setCloseMenu(true);
    } 
    if(!closeMenu){
      setCloseMenu(false)
    }
    else {
      setCloseMenu(false);
    }
  }, [screenWidth]);


  const { pathname } = useLocation()
  return  (
    <nav>
      <Container>
        <div className="nav-wrapper">
        <div className="nav-logo">
          {
            closeMenu ?  <button onClick={() => setOpenMenu(true)} className='hamburg-btn'><GiHamburgerMenu/></button>
                 : <button onClick={() => setOpenMenu(false)}  className='hamburg-btn'> <IoMdClose/></button>
          }
          <img src={Logo} alt="Logo" className='nav-logo' />
        </div>
          <div style={!closeMenu  ? {display: 'flex'} : {display: 'none'}} className="nav-menu">
            <ul >
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
                <NavLink className={'register-btn'} to='signup'>Get Started</NavLink>
              </>
            }
          </div>
        </div>
      </Container>
    </nav>

  )
}

export default Nav;