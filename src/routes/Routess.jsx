import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../routes/about/About'
import Contact from '../../src/routes/contact/Contact'
import Login from './login/Login'
import SignUp from './signup/SignUp'

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='cabinet' >
          <Route path='account' />
          <Route path='orders' />
          <Route path='settings' />
        </Route>
      </Routes>
    </div>
  )
}

export default Routess;
