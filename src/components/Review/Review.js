import React from 'react';
import './Review.css'

const Review = ({reviewData}) => {
    const {name,email,rating,review,img}=reviewData;
    return (
        <div className="testimonial-box-container">
            <div className="testimonial-box">
                <div className="box-top">
                    <div className="profile">
                        <div className="profile-img">
                            <img src={img} alt="" />
                        </div>
                        <div className="name-user">
                            <p>{name}</p>
                            <span>{email}</span>
                        </div>
                    </div>
                    <div className="reviews">
                        <i>{rating}</i>
                    </div>
                </div>
                <div className="client-comment">
                    <p>{review.slice(0,230)}...More</p>
                </div>
            </div>
        </div>
    );
};

export default Review;