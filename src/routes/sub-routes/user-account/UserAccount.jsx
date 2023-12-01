import "./UserAccount.scss"
import React, { useEffect, useState } from 'react'
import { apiInstance } from '../../../api'

const MyAccount = () => {

  const [getUserData, setGetUserData] = useState({})
  const userId = localStorage.getItem("user_id")
  useEffect(() => {
    apiInstance(`/users/${userId}`)
      .then(response => {
        setGetUserData(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <>
      <div className='user__info-container'>
        <div className="user__header">
          <img src={getUserData.avatar} alt="User Image" />
          <button>Upload Photo</button>
        </div>
        <div className="user__about">
          <div className="info-card">
            <div className="username">
              <strong>Your Name</strong>
              <p>{getUserData.name}</p>
            </div>  
            <button>Edit</button>
          </div>
          <div className="info-card">
            <div className="username">
              <strong>Your Email</strong>
              <p>{getUserData.email}</p>
            </div>  
            <button>Edit</button>
          </div>
          <div className="info-card">
            <div className="username">
              <strong>Role</strong>
              <p>{getUserData.role}</p>
            </div>  
            <button>Edit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAccount