import "./Outles.scss"
import { FaLocationDot } from "react-icons/fa6";
import Out1 from "../../assets/Images/out1.png"
import Out2 from "../../assets/Images/out2.png"
import {Container} from '../../utils/Utils.jsx'
import Out3 from "../../assets/Images/out3.png"
const Outles = () => {
    return (
       <Container>
         <div className="outlets">
            <div className="outlets-title">
                <strong>OUR OUTLETS</strong>
                <h2>Find an Outlet Near You</h2>
            </div>
            <div className="outlets__location-container">
                <div className="outlets-card">
                    <div className="outlets-image">
                        <img src={Out1} alt="Location" />
                    </div>
                    <i><FaLocationDot /></i >
                    <p>762 Fulton St San Francisco, California(CA), 94102</p>
                </div>
                <div className="outlets-card">
                    <div className="outlets-image">
                        <img src={Out2} alt="Location" />
                    </div>
                    <i><FaLocationDot /></i >
                    <p>66 Ceres St San Francisco, California(CA), 94124</p>
                </div>
                <div className="outlets-card">
                    <div className="outlets-image">
                        <img src={Out3} alt="Location" />
                    </div>
                    <i><FaLocationDot /></i >
                    <p>766 Sutter St San Francisco, California(CA), 94109</p>
                </div>
            </div>
        </div>
       </Container>
    )
}

export default Outles