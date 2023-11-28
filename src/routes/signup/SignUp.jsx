import { useEffect, useState, useRef } from 'react'
import './signup.scss'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
const navigate = useNavigate()
    // Input ref={} qiymatlari
    // Bu yangi API => https://developers.onelogin.com/api-docs/1/users/create-user

    const [username, setUsername] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        fetch("https://api.escuelajs.co/api/v1/users/", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: username,
                email: userEmail,
                password: userPassword,
                avatar: avatar
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                    setTimeout(() => {navigate("/login")}, 1700)
            }
            console.log(data);
        })
    }

    return (
        <>
            <div className="signup-wrapper">
                <h1>SIGN UP</h1>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <div className="username-card">
                        <i><BiUser /></i>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
                    </div>
                    <div className="email-card">
                        <i><AiOutlineMail /></i>0
                        <input value={userEmail} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Your Email' />
                    </div>
                    <div className="password-card">
                        <i><AiOutlineLock /></i>
                        <input value={userPassword} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Your Password' />
                        <i><AiOutlineEye /></i>
                    </div>
                    <div className="username-card">
                        <input value={avatar} onChange={(e) => setAvatar(e.target.value)} type="text" placeholder='Avatar' />
                    </div>
                    <button type='submit'>Sign up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp