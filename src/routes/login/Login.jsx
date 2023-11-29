import { useState } from 'react'
import { apiInstance } from '../../api'
import './login.scss'
import { AiOutlineEye, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const [loginName, setLoginName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


    // SHOW PASSWORD
    const [showPasswordIcon, setShowPasswordIcon] = useState(false)
    const [inputType, setInputType] = useState('password')
    const toggleInputType = () => {
        setShowPasswordIcon(!showPasswordIcon)
        const newType = inputType === 'text' ? 'password' : 'text';
        setInputType(newType);
    };


    const handleLoginUser = (e) => {
        e.preventDefault()
        apiInstance.post("/auth/login/", {
            email: loginName,
            password: loginPassword
        })
            .then(response => {
                if (response.data.access_token) {
                    navigate("/")
                    localStorage.setItem("user-token", response.data.access_token)
                }
                console.log(response);
            })
    }

    return (
        <>
            <div className="login-wrapper">
                <h2>LOGIN</h2>
                <form onSubmit={handleLoginUser} className='login-form'>
                    <div className="email-card">
                        <i><AiOutlineMail /></i>
                        <input value={loginName} onChange={(e) => setLoginName(e.target.value)} type="text" placeholder='Email' />
                    </div>
                    <div className="password-card">
                        <i><AiOutlineLock /></i>
                        <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type={inputType} placeholder=' Password' />
                        <i onClick={toggleInputType}>{showPasswordIcon ? <FaRegEyeSlash /> : <AiOutlineEye />}</i>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login