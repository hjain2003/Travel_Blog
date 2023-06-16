import React, { useState } from 'react'
import './Addpost.css';
import { useNavigate } from "react-router-dom";

const Addpost = () => {

    const navigate = useNavigate();
    const [post, setPost] = useState({
        location: "",
        title: "",
        description: "",
        image: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const AddIt = async (e) => {
        e.preventDefault();
    
        const {location,title,description,image } = post;
    
        const res = await fetch('http://localhost:5000/post/addPost', {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            location,
            title,
            description,
            image
          })
        });
    
        const data = await res.json();
    
        if (res.status === 422) {
          window.alert("Post Addition failed");
          console.log(res.status);
          console.log(data);
        } 
        else if (res.status !== 422) {
          window.alert("Post addition successfull");
        //   console.log("Login successful");
          navigate('/diaries');
          console.log(res.status);
          console.log(data);
        }
      }

    return (
        <>
            <h1 align="center">Add A Post</h1>
            <br />
            <div className="form_container">
                <form method='POST'>
                    <input type='text' name="location" placeholder='Enter location' onChange={handleChange} />
                    <br /><br />
                    <input type="text" name="title" placeholder='Enter Title' onChange={handleChange} />
                    <br /><br />
                    <input type="text" name="description" placeholder='Enter Description' onChange={handleChange} />
                    <br /><br />
                    <input type='text' name="image" placeholder='Image url' onChange={handleChange} />
                    <br /><br />

                    <input type="submit" name="submit" id="submit" value="Add" onClick={AddIt}/>
                </form>
            </div>
        </>
    )
}

export default Addpost
