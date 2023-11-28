import { useEffect, useState, useRef } from 'react'
import './signup.scss'
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'

const SignUp = () => {

    // Input ref={} qiymatlari
    const [userFirstname, setFirstname] = useState()
    const [userLastname, setLastname] = useState()
    const [userUsername, setUsername] = useState()
    const [userEmail, setEmail] = useState()
    const [userPassword, setPassword] = useState()

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch("https://developers.onelogin.com/api-docs/1/users/create-user", {
            method: "POST",
            headers: { 'Content-type': "application/json" },
            body: JSON.stringify(
                {
                    firstname: userFirstname.current.value,
                    lastname: userLastname.current.value,
                    email: userEmail.current.value,
                    username: userUsername.current.value,
                }
            )
        })
        console.log(response);
    }

    return (
        <>
            <div className="signup-wrapper">
                <h1>SIGN UP</h1>
                <form className='signup-form' onSubmit={handleSubmit}>
                    <div className="username-card">
                        <i><BiUser /></i>
                        <input ref={userUsername} type="text" placeholder='Username' />
                    </div>
                    <div className="email-card">
                        <i><AiOutlineMail /></i>0
                        <input ref={userEmail} type="text" placeholder='Your Email' />
                    </div>
                    <div className="password-card">
                        <i><AiOutlineLock /></i>
                        <input ref={userPassword} type="password" placeholder='Your Password' />
                        <i><AiOutlineEye /></i>
                    </div>
                    <div className="username-card">
                        <input ref={userUsername} type="text" placeholder='Avatar' />
                    </div>
                    <button type='submit'>Sign up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp