import React from 'react'
import Footer from '../Footer/Footer'
import './Home.css';
import Navbar from '../Navbar/Navbar';
import grass from '../Assets/grass_color.jpg'

const Home = () => {
    return (
        <>
            <div className="home_container">
                <Navbar />
                {/* <img src={cloud} alt="" /> */}
                <div className="home_content">
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
                    <img src={grass} className='last_grass' alt="" />

                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home
