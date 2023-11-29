import "./Hero.scss"
import Discount from '../../assets/Images/discountt.png'
const Hero = () => {
    return (
        <header>
            <div className="header-content">
                <strong>Only $15.00</strong>
                <h2>AUTHENTIC ITALIAN PIZZA</h2>
                <div className="discount-card">
                    <img src={Discount} alt="Chegirma" />
                    <p>
                        On your first
                        order, if you order
                        online through
                        our App!
                    </p>
                </div>
                <button>ORDER 0NLINE</button>
            </div>
        </header>
    )
}

export default Hero