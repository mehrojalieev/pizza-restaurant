import './App.scss';
import  Routesslar  from './routes/Routess';
import Nav from './components/nav/Nav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/Footer';
import Home from './routes/home/Home';


function App() {
  return (
    <div className='App'>
        <Nav/>
        <Routesslar/>
        <ToastContainer/>
        <Footer/>
    </div>
  );
}

export default App;
