import { NavLink, useNavigate } from "react-router-dom"
import "./Sidebar.scss"
import { useState } from "react"

const Sidebar = () => {
    const navigate = useNavigate()
    const [logoutModal, setLogoutModal] = useState(false)

    const directHome = () => {
        navigate("/")
    }
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <h2 onClick={directHome}>FOODMOOD</h2>
            </div>
            <ul className="sidebar-list">
                <li>
                    <NavLink className={({ isActive }) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"} to="/cabinet/account">My Account</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"} to="/cabinet/orders">Orders</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"} to="/cabinet/settings">Settings</NavLink>
                </li>
            </ul>
            <button onClick={() => setLogoutModal(true)} className="sidebar__logout-btn">LOG OUT</button>
            {/* LOGOUT MODAL */}
            <div style={logoutModal ? { display: "block" } : { display: "none" }} className="logout-card">
                <p>Do you want to logout ?</p>
                <button>Log Out</button>

            </div>
        </div>
    )
}

export default Sidebar