import { NavLink, useNavigate } from "react-router-dom"
import "./Sidebar.scss"

const Sidebar = () => {
    const navigate = useNavigate()

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
                <NavLink className={({isActive}) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"} to="/cabinet/account">My Account</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"} to="/cabinet/orders">Orders</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"} to="/cabinet/settings">Settings</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar