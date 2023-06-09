import React from 'react'
import './Diary_item.css';

const Diary_item = (props) => {
    return (
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
            <button className="edit_Delete">Edit</button>
            <button className="edit_Delete">Delete</button>
            </div>
        </div>
    )
}

export default Diary_item
