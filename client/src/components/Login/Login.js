import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const res = await fetch('http://localhost:5000/user/login', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (res.status === 400) {
      window.alert("Login failed");
      console.log("Login failed");
      console.log(res.status);
      console.log(data);
    } else if (res.status !== 400) {
      window.alert("Login successful");
      console.log("Login successful");
      navigate('/');
      setIsLoggedIn(true);
      // localStorage.setItem("userId", data._id); // Save the user ID in local storage
      console.log(data._id);
      localStorage.setItem("userId", data.userId);
      console.log(res.status);
      console.log(data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register_box">
        <form>
          <h1 align="center">Login</h1>
          <br /><br />
          <span>Email: <input type="email" name="email" placeholder='Enter Email' onChange={handleChange} /></span>
          <br /><br />
          <span>Password: <input type="password" name="password" placeholder='Enter password' onChange={handleChange} /></span>
          <br /><br />
          <input type="submit" name="submit" id="submit" onClick={loginUser} />
        </form>
        <br /><br />
        Don't have an account? <NavLink to='/register'>Register</NavLink>
      </div>
    </>
  );
};

export default Login;
