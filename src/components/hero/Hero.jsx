import "./Hero.scss"
import Discount from '../../assets/Images/discountt.png'
import { Container } from "../../utils/Utils"
const Hero = () => {
    return (
        <header>
           <Container>
           <div className="header-content">
                <strong>Only $15.00</strong>
                <h2>AUTHENTIC ITALIAN PIZZA</h2>
                <div className="discount-card">
                    <img src={Discount} alt="Chegirma" className="discount-image" />
                    <p>
                        On your first
                        order, if you order
                        online through
                        our App!
                    </p>
                </div>
                <button className="order-btn">Order Online</button>
            </div>
           </Container>
        </header>
    )
}

export default Hero