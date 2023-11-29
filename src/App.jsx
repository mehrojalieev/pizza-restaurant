import './App.scss';
import  Routesslar  from './routes/Routess';
import Nav from './components/nav/Nav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='App'>
        <Nav/>
        <Routesslar/>
        <ToastContainer/>
    </div>
  );
}

export default App;
