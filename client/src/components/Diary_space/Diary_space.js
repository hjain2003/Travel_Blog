import React, { useEffect, useState } from 'react';
import Diary_item from '../Diary_item/Diary_item.js';
import Navbar from '../Navbar/Navbar.js';
import './Diary_space.css';
import { getAllPosts } from '../../api-helpers/helpers.js';
import { NavLink, useNavigate } from "react-router-dom";

const Diary_space = ({isLoggedIn}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const callDiariesPage = async () => {
    try {
      const res = await fetch("http://localhost:5000/post", {
        method: "GET",
        headers: {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : 'include'
      });

      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      
      if(!res.status ===200){
        const error = new Error(res.error);
        throw error;
      }
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }
  useEffect(() => {
    callDiariesPage();
  },[]);

  console.log(posts);

  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br />
      <button id="add_post"><NavLink to='/addpost'>Add a post</NavLink></button>
      <div className="row">
        {isLoading ? <h1>Loading....</h1> :
          <div className="grid-container">
            {posts.map((item, index) => (
              <Diary_item
                key={item._id}
                title={item.title}
                location={item.location}
                description={item.description}
              />
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default Diary_space;
