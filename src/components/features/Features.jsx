import "./Features.scss"
import Kamaz from '../../assets/Images/kamaz.svg'
import Dishes from '../../assets/Images/dishes.svg'
import Time from '../../assets/Images/time.svg'
const Features = () => {
  return (
    <div className="service__container">
                <div className="service-card">
                    <img src={Kamaz} alt="Dastavka" />
                    <h4>Free Shipping on First Order</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    </p>
                </div>
                <div className="service-card">
                    <img src={Dishes} alt="Dishes" />
                    <h4>Variety of Dishes</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    </p>
                </div>
                <div className="service-card">
                    <img src={Time} alt="Vaqti" />
                    <h4>Thirty Minutes Delivery</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    </p>
                </div>
            </div>
  )
}

export default Features