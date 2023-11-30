import "./Social.scss"
import mobileImage from "../../assets/Images/mobileImage.png"
import playmarket from "../../assets/Images/playmarket.svg"
import appstore from "../../assets/Images/appstore.svg"
const Social = () => {
    return (
        <div className="social">
            <div className="social-content">
                <h2>Get 20% Discount</h2>
                <p> Get flat 20% off on your first order though The Foodmood App! </p>
                <div className="social-links">
                    <a href="https://play.google.com" target="_black"><img src={playmarket} alt="Play Market" /></a>
                    <a href="https://www.apple.com" target="_blank"><img src={appstore} alt="App Store" /></a>
                </div>
            </div>
            <div className="social-image">
                <img src={mobileImage} alt="Mobile Image" />
            </div>
        </div>
    )
}

export default Social