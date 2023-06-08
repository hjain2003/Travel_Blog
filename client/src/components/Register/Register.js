import React from 'react'
import './Register.css';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <Navbar/>
    <div className="register_box">
        <form action="">
            <h1 align="center">Register</h1>
            <br /><br />
            <span>Name: <input type="name" name="name" placeholder='Enter Name' /></span>
            <br /><br />
            <span>Email: <input type="email" name="email" placeholder='Enter Email' /></span>
            <br /><br />
            <span>Password: <input type="password" name="password" placeholder='Enter password' /></span>
            <br /><br />
            <input type="submit" name="submit" id="submit" />
        </form>
        <br /><br />
        Already have an account ? <NavLink to='/login'>Login</NavLink>
    </div>
    </>
  )
}

export default Register
