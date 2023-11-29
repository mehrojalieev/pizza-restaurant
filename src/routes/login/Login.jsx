import { useState } from 'react'
import { apiInstance } from '../../api'
import './login.scss'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

const Login = () => {
    const [loginName, setLoginName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


    const handleLoginUser = (e) => {
        e.preventDefault()
        apiInstance.post("/auth/login/", {
            email: loginName,
            password: loginPassword
        })
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem("user-token", response.data.access_token)
                }
            })
    }

    return (
        <>
            <div className="login-wrapper">
                <h1>LOGIN</h1>
                <form onSubmit={handleLoginUser} className='login-form'>
                    <input value={loginName} onChange={(e) => setLoginName(e.target.value)} type="text" placeholder='Your Name' />
                    <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder='Your Password' />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login