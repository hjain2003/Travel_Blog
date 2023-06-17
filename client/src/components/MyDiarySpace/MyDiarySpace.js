import React, { useEffect, useState } from 'react';
import Diary_item from '../Diary_item/Diary_item';

const MyDiarySpace = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:5000/post/myposts?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const data = await response.json();
          setPosts(data.posts);
          setIsLoading(false);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>My Diary Space</h2>
      
      <div className="row">
        {isLoading ? <h1>Loading....</h1> :
          <div className="grid-container">
            {posts.map((item, index) => (
              <Diary_item
                key={item._id}
                postId={item._id}
                title={item.title}
                location={item.location}
                description={item.description}
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default MyDiarySpace;
