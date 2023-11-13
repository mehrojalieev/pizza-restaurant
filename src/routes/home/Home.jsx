import './home.css'
import Discount from '../../assets/Images/discountt.png'
import Pizza from '../../assets/Images/pizza.png'
import Pasta from '../../assets/Images/pasta.png'
import Shakes from '../../assets/Images/shake.png'
import Burger from '../../assets/Images/burger.png'
import Kamaz from '../../assets/Images/kamaz.svg'
import Dishes from '../../assets/Images/dishes.svg'
import Time from '../../assets/Images/time.svg'


const Home = () => {
  return (
    <>
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
      <div className="category-wrapper">
        <p className='categ-top'>TOP FOODS</p>
        <h2 className='category-title'>Our Categories</h2>
        <div className="category__card-container">
          <div className="category-card">
            <img src={Pizza} alt="Pizza" width={250} height={390} />
            <h5>Pizza</h5>
            <p>20 Restaurants Foods</p>
          </div>
          <div className="category-card">
            <img src={Pasta} alt="Pizza" width={250} height={390} />
            <h5>Pasta</h5>
            <p>15 Restaurants Foods</p>
          </div>
          <div className="category-card">
            <img src={Shakes} alt="Pizza" width={250} height={390} />
            <h5>Shakes</h5>
            <p>20 Restaurants Foods</p>
          </div>
          <div className="category-card">
            <img src={Burger} alt="Pizza" width={250} height={390} />
            <h5>Burger</h5>
            <p>25 Restaurants Foods</p>
          </div>
        </div>
        <div className="service__container">
          <div className="service-card">
            <img src={Kamaz} alt="kamaz" />
            <h4>Free Shipping on First Order</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
          </div>
          <div className="service-card">
            <img src={Dishes} alt="kamaz" />
            <h4>Variety of <br /> Dishes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
          </div>
          <div className="service-card">
            <img src={Time} alt="kamaz" />
            <h4>Thirty Minutes Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home