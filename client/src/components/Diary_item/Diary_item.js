import React from 'react'
import './Diary_item.css';

const Diary_item = () => {
    return (
        <div className='diary_card'>
            <div className="profile_place_date">
                <div className="profile"></div>
                <div className="place_date">
                    <span>Bhopal, Madhya Pradesh</span>
                    <span id="date">June 13, 2023</span>
                </div>
            </div>
            <div className="image_text_container">
                <div className="image_container"></div>
                <div className="text_container">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque, quam tempore ea doloremque repudiandae rem ducimus ipsam ab sapiente laboriosam praesentium commodi nostrum id? Distinctio quasi accusantium magni tenetur!
                </div>
            </div>
        </div>
    )
}

export default Diary_item
