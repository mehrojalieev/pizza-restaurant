import './App.scss';
import Routesslar from './routes/Routess';
import Nav from './layout/nav/Nav'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Nav />
      <Routesslar />
      <ToastContainer />
    </>
  );
}

export default App;
