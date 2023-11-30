import "./UserAccount.scss"
import React, { useEffect, useState } from 'react'
import { apiInstance } from '../../../api'

const MyAccount = () => {

  const [getUserData, setGetUserData] = useState({})
  const userId = localStorage.getItem("user_id")
  console.log(getUserData);
  useEffect(() => {
    apiInstance(`/users/${userId}`)
      .then(response => {
        setGetUserData(response.data)
        console.log(response)
      })
  }, [])

  return (
    <div className='user__info-container'>
      <div className="user__title">
        <h2>{getUserData.name}</h2>
      </div>
    </div>
  )
}

export default MyAccount