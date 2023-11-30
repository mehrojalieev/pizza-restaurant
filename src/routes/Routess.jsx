import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../routes/about/About'
import Contact from '../../src/routes/contact/Contact'
import Login from './login/Login'
import SignUp from './signup/SignUp'
import MyAccount from './sub-routes/my-account/MyAccount'
import Orders from './sub-routes/orders/Orders'
import Settings from './sub-routes/settings/Settings'
import CabinetContainer from './cabinet-container/CabinetContainer'

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='cabinet' element={<CabinetContainer />} >
          <Route path='account' element={<MyAccount />} />
          <Route path='orders' element={<Orders />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routess;
