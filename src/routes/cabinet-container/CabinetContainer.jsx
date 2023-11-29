import React from 'react'
import Sidebar from "../../layout/sidebar/Sidebar"
import { Outlet } from 'react-router-dom'
const CabinetContainer = () => {
  return (
    <div className='cabinet-wrapper'>
        <Sidebar/>
        <div className="cabinet__content-container">
            <Outlet/>
        </div>
    </div>
  )
}

export default CabinetContainer