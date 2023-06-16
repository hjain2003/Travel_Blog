import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DiaryItemUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [updatedPost, setUpdatedPost] = useState({
    location: '',
    title: '',
    description: '',
    image: '',
    date : new Date()
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/post/${id}`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if (response.status === 201) {
          const { location, title, description, image ,date } = data.post;
          setUpdatedPost({ location, title, description, image, date: new Date(date) });
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const { location, title, description, image, date } = updatedPost;

    const response = await fetch(`http://localhost:5000/post/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        location,
        title,
        description,
        image,
        date: date.toISOString()
      })
    });

    const data = await response.json();

    if (response.status === 201) {
      window.alert('Post updated successfully');
      navigate('/diaries');
      console.log(data.message);
    } else {
      window.alert('Post update failed');
      console.log(data.message);
    }
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          value={updatedPost.location}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={updatedPost.title}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={updatedPost.description}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={updatedPost.image}
          onChange={handleChange}
        />
        <br /><br />
        <input type="submit" value="Update" onClick={updatePost} />
      </form>
    </>
  );
};

export default DiaryItemUpdate;
