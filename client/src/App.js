import { Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <>
    <Routes>
    {/* <Navbar/> */}
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    {/* <Home/> */}
    </Routes>
    </>
  );
}

export default App;
