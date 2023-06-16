import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import './Home.css';
import Navbar from '../Navbar/Navbar';
import grass from '../Assets/grass_color.jpg'
import { NavLink, useNavigate } from "react-router-dom";

const Home = ({isLoggedIn}) => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState('');

    const callHomePage = async () => {
        try {
          const res = await fetch("http://localhost:5000/user/homeCall", {
            method: "GET",
            headers: {
              Accept : "application/json",
              "Content-Type" : "application/json"
            },
            credentials : 'include'
          });
    
          const data = await res.json();
          console.log(data);
          setUserData(data);
    
          if(!res.status ===200){
            const error = new Error(res.error);
            throw error;
          }
        } catch (err) {
          console.log(err);
          navigate('/login');
        }
      }
      useEffect(() => {
        callHomePage();
      },[]);


    return (
        <>
            <div className="home_container">
                <Navbar isLoggedIn={isLoggedIn} />
                {/* <img src={cloud} alt="" /> */}
                <div className="home_content">
                    {/* <span><h1 align="center"><span>WELCOME</span><span> {userData.name}</span></h1></span> */}
                    <span>WELCOME {userData.name}</span> <br />
                   <span> TO</span>
                    <h1 align="center">Travel Blog</h1>
                    <br />
                    <div className="row_it">
                    <button className='add_diary_btn'>Add a Post</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='add_diary_btn'>View diaries</button>
                    </div>
                </div>
                <div className="grass">
                    <img src={grass} alt="" />
                    <img src={grass} alt="" />
                    <img src={grass} alt="" />
                    <img src={grass} alt="" />
                    {/* <img src={grass} alt="" /> */}
                    <img src={grass} className='last_grass' alt="" />

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home
