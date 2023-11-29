import { NavLink } from "react-router-dom"
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__logo">
            <h2>FOODMOOD</h2>
        </div>
        <ul className="sidebar-list">
            <li>
                <NavLink className={({isActive}) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"}>My Account</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"}>Orders</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "sidebar-link sidebar-link--active" : "sidebar-link"}>Settings</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar