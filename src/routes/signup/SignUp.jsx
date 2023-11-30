import { useState, } from 'react'
import './signup.scss'
import { AiOutlineEye, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { apiInstance } from '../../api';


const SignUp = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [avatar, setAvatar] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        apiInstance.post('/users', {
            name: username,
            email: userEmail,
            password: userPassword,
            avatar: avatar
        })
            .then(data => {
                if (data) {
                    toast('Wow so easy!', {
                        position: "top",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    localStorage.setItem("user_id", data.data.id)
                    setTimeout(() => { navigate("/login") }, 2700)
                }
                console.log(data);
            })
    }


    // SHOW PASSWORD
    const [showPasswordIcon, setShowPasswordIcon] = useState(false)
    const [inputType, setInputType] = useState('password');

    const toggleInputType = () => {
        setShowPasswordIcon(!showPasswordIcon)
        const newType = inputType === 'text' ? 'password' : 'text';
        setInputType(newType);
    };
    return (
        <>
            <div className="signup-wrapper">
                <h2>SIGN UP</h2>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <div className="username-card">
                        <i><BiUser /></i>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
                    </div>
                    <div className="email-card">
                        <i><AiOutlineMail /></i>
                        <input value={userEmail} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Your Email' />
                    </div>
                    <div className="password-card">
                        <i><AiOutlineLock /></i>
                        <input value={userPassword} onChange={(e) => setPassword(e.target.value)} type={inputType} placeholder='Your Password' />
                        <i onClick={toggleInputType}>{showPasswordIcon ? <FaRegEyeSlash /> : <AiOutlineEye />}</i>
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