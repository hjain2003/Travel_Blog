import React, { useContext } from 'react'
import './Diary_item.css';

const Diary_item = (props) => {
    const { userId, loggedInUserId , postId} = props;

    const handleDelete = async () => {
        try {
          const response = await fetch(`http://localhost:5000/post/${props.postId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          const data = await response.json();
    
          if (response.status === 201) {
            // Handle successful deletion
            window.alert("Post deleted");
            console.log(data.message);
          } else {
            // Handle error
            console.log(data.error);
          }
        } catch (error) {
          // Handle error
          console.log(error);
        }
      };

    return (
        <>
            <div className='diary_card'>
                <div className="profile_place_date">
                    <div className="profile"></div>
                    <div className="place_date">
                        <span>{props.location}</span>
                        <span id="date">{props.date}</span>
                    </div>
                </div>
                <br />
                <div className="image_text_container">
                    <div className="image_container"></div>
                    <span>{props.title}</span>
                    <div className="text_container">
                        {props.description}
                    </div>
                </div>
                <br />
                <div className="button_container_card">
                {userId === loggedInUserId && (
            <>
              <button className="edit_Delete">Edit</button>
              <button className="edit_Delete" onClick={handleDelete}>Delete</button>
            </>
          )}
                </div>
            </div>
        </>
    )
}

export default Diary_item
