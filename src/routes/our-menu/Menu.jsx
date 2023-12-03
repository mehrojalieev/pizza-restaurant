import "./Menu.scss"

// IMAGES
import Menu1 from "../../assets/Images/menu1.png"
import Menu2 from "../../assets/Images/menu2.png"
import Menu3 from "../../assets/Images/menu3.png"
import Menu4 from "../../assets/Images/menu4.png"
import Menu5 from "../../assets/Images/menu5.png"
import Menu6 from "../../assets/Images/menu6.png"

// ICONS
import { FaStar } from "react-icons/fa";
const Menu = () => {
    return (
        <>
            <div className="menu-wrapper">
                <div className="menu-title">
                    <strong>MENU</strong>
                    <h2>Food Full of treaty Love</h2>
                    <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                </div>
                <div className="menu__card-container">
                    <div className="menu__food-card">
                        <img src={Menu1} alt="MENU-FOOD" />
                        <div className="menu-title">
                            <strong>Vegie Muffen</strong>
                            <span>16$</span>
                        </div>
                        <p className="about-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="menu-feed">
                            <button>+</button>
                            <div className="menu-feed-icons">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </div>
                    <div className="menu__food-card">
                        <img src={Menu2} alt="MENU-FOOD" />
                        <div className="menu-title">
                            <strong>Salads</strong>
                            <span>12$</span>
                        </div>
                        <p className="about-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="menu-feed">
                            <button>+</button>
                            <div className="menu-feed-icons">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </div>
                    <div className="menu__food-card">
                        <img src={Menu3} alt="MENU-FOOD" />
                        <div className="menu-title">
                            <strong>Burgers</strong>
                            <span>10$</span>
                        </div>
                        <p className="about-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="menu-feed">
                            <button>+</button>
                            <div className="menu-feed-icons">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </div>
                    <div className="menu__food-card">
                        <img src={Menu4} alt="MENU-FOOD" />
                        <div className="menu-title">
                            <strong>Delmonico Steak dish</strong>
                            <span>14$</span>
                        </div>
                        <p className="about-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="menu-feed">
                            <button>+</button>
                            <div className="menu-feed-icons">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </div>
                    <div className="menu__food-card">
                        <img src={Menu5} alt="MENU-FOOD" />
                        <div className="menu-title">
                            <strong>Egg Masala</strong>
                            <span>9$</span>
                        </div>
                        <p className="about-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="menu-feed">
                            <button>+</button>
                            <div className="menu-feed-icons">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </div>
                    <div className="menu__food-card">
                        <img src={Menu6} alt="MENU-FOOD" />
                        <div className="menu-title">
                            <strong>Peach Melba dish</strong>
                            <span>15$</span>
                        </div>
                        <p className="about-text">
                            There are many things are needed to start the Fast Food Business.
                        </p>
                        <div className="menu-feed">
                            <button>+</button>
                            <div className="menu-feed-icons">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu