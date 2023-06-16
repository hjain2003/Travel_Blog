import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Diary_space from './components/Diary_space/Diary_space';
import Logout from './components/Login/Logout';
import { useEffect, useState } from 'react';
import Addpost from './components/AddPost/Addpost';


function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/diaries' element={<Diary_space isLoggedIn={isLoggedIn} />} />
        <Route path='/logout' element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/addpost' element={<Addpost/>}/>
      </Routes>
    </>
  );
}

export default App;
