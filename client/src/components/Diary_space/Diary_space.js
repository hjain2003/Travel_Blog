import React, { useEffect, useState } from 'react';
import Diary_item from '../Diary_item/Diary_item.js';
import Navbar from '../Navbar/Navbar.js';
import './Diary_space.css';
import { getAllPosts } from '../../api-helpers/helpers.js';


const Diary_space = (props) => {

  const[isloading, setisloading] = useState(true);
  const [posts,setPosts] = useState();
  useEffect(()=>{
    getAllPosts().then(
      (data)=>{
        setPosts(data?.posts);
        setisloading(false);
      }
      ).catch((err)=>{
        console.log(err);
      });

      // console.log(posts[0].date);
  },[]);

  // setPosts(data);
  return (
    <>
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className="row"> {/* Apply the row class here */}
      {isloading && <span><h1>Loading....</h1></span>};
        <div className="grid-container"> {/* Apply the grid-container class here */}
          {posts && posts.map((item,index) => (
            // <div key={item} className="grid-item"> {/* Add a unique key and apply the grid-item class */}
              <Diary_item key={item} title= {item.title} location = {item.location} description = {item.description}  />
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Diary_space;
