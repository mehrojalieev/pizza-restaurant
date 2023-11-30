import { NavLink, useNavigate } from "react-router-dom"
import "./Sidebar.scss"
import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5";
const Sidebar = () => {
    const navigate = useNavigate()
    const [logoutModal, setLogoutModal] = useState(false)


    useEffect(() => {
        if (logoutModal) {
            document.body.style = "overflow: hidden";
        }
    }, [logoutModal])

    const directHome = () => {
        navigate("/")
    }


    // LOGOUT USER
    const handleLogoutUser = () => {
        localStorage.removeItem("user-token")
        setTimeout(() => { navigate("/login") }, 2400)
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
            <div style={logoutModal ? { display: "flex" } : { display: "none" }} className="logout-card">
                <p>Do you want to logout ?</p>
                <button onClick={() => setLogoutModal(false)} className="close__modal-icon"><IoClose /></button>
                <button onClick={handleLogoutUser}>Log Out</button>
            </div>
            <div style={logoutModal ? { display: "block" } : { display: "none" }} className="bgwrapper-modal"></div>
        </div>
    )
}

export default Sidebar