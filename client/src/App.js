import { Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Diary_space from './components/Diary_space/Diary_space';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/diaries' element={<Diary_space/>}/>
    </Routes>
    </>
  );
}

export default App;
