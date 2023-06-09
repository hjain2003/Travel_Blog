import React, { useState } from 'react'
import './Register.css';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);

    try {
      const response = await axios.post('http://localhost:5000/user/signup', user);
      console.log(response.data); // Assuming the server returns the registered user data
      // Perform any additional actions after successful registration
    } catch (error) {
      console.log(error.response.data); // Log any error response from the server
    }

  }
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <Navbar />
      <div className="register_box">
        <form>
          <h1 align="center">Register</h1>
          <br /><br />
          <span>Name: <input type="name" name="name" placeholder='Enter Name' onChange={handleChange} /></span>
          <br /><br />
          <span>Email: <input type="email" name="email" placeholder='Enter Email' onChange={handleChange} /></span>
          <br /><br />
          <span>Password: <input type="password" name="password" placeholder='Enter password' onChange={handleChange} /></span>
          <br /><br />
          <input type="submit" name="submit" id="submit" onClick={handleSubmit} />
        </form>
        <br /><br />
        Already have an account ? <NavLink to='/login'>Login</NavLink>
      </div>
    </>
  )
}

export default Register
