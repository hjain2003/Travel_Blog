import React from 'react'
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';


const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="register_box">
        <form action="">
            <h1 align="center">Login</h1>
            <br /><br />
            <span>Email: <input type="email" name="email" placeholder='Enter Email' /></span>
            <br /><br />
            <span>Password: <input type="password" name="password" placeholder='Enter password' /></span>
            <br /><br />
            <input type="submit" name="submit" id="submit" />
        </form>
        <br /><br />
        Don't have an account ? <NavLink to='/register'>Register</NavLink>
    </div>
    </>    
  )
}

export default Login
