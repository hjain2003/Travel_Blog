import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Diary_space from './components/Diary_space/Diary_space';
import Logout from './components/Login/Logout';
import { useEffect, useState } from 'react';
import Addpost from './components/AddPost/Addpost';
import Diary_item_update from './components/Diary_item/Diary_item_update';
import MyDiarySpace from './components/MyDiarySpace/MyDiarySpace';

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const currentPath = window.location.pathname;
    
    if(userId){
      setIsLoggedIn(true);
    }
    if (!userId && currentPath !== '/login' && currentPath !== '/register') {
      navigate('/login');
    }
  }, [navigate]);
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/diaries' element={<Diary_space isLoggedIn={isLoggedIn} />} />
        <Route path='/logout' element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/addpost' element={<Addpost />} />
        <Route path="/editPost/:id" element={<Diary_item_update />} />
        <Route path='/myPosts' element={<MyDiarySpace />} />
      </Routes>
    </>
  );
}

export default App;
