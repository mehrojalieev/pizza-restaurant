import "./Footer.scss"
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
           <div className="container">
           <div className="footer__content-container">
                <div className="footer__content">
                    <Link className="footer__logo">FOODMOOD</Link>
                    <p>Vivamus convallis fermen sollicitudin et, vitae elit in vel ultrices sed in urna ipsum ullamcorper auctor.</p>
                    <div className="social-icons">
                        <i><AiOutlineTwitter /></i>
                        <i><FaFacebookF /></i>
                        <i><AiOutlineInstagram /></i>
                    </div>
                </div>
                <ul className="footer__menu">
                    <li ><Link className="menu-title">ABOUT US</Link></li>
                    <li><Link>Our Story</Link></li>
                    <li><Link>Our Locations</Link></li>
                    <li><Link>Current Deals</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <ul className="footer__menu">
                    <li><Link className="menu-title">OUR MENU</Link></li>
                    <li><Link>Pizza</Link></li>
                    <li><Link>Pasta</Link></li>
                    <li><Link>Desert</Link></li>
                    <li><Link>Take & Bake</Link></li>
                </ul>
                <ul className="footer__menu">
                    <li><Link className="menu-title">OUR LOCATION</Link></li>
                    <li><Link>CHILONZOR</Link></li>
                    <li><Link>CHIRCHIQ</Link></li>
                    <li><Link>UCH TEPA</Link></li>
                    <li><Link>QO'YLIQ</Link></li>
                </ul>
            </div>
            <div className="footer__copyright">
                <p>Copyright © 2022 The Pizzeria</p>
                <p>Powered by The FOODMOOD</p>
            </div>
           </div>
        </footer>
    )
}

export default Footer