import './login.scss'
import {  AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

const Login = () => {
    return (
        <>
            <div className="login-wrapper">
                <h1>LOGIN</h1>
                <form className='login-form'>
                    <input type="text" placeholder='Your Email' />
                    <input type="password" placeholder='Your Password' />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login