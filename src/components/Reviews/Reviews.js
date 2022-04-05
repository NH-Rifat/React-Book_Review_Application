import React from 'react';
import UseReviews from '../Hooks/UseReviews/UseReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews]=UseReviews();
    // console.log(reviews);
    return (
        <div>
        <h2>All Review from Readers</h2>
        <div className="All-review">
        {
            reviews.map((review)=><Review
            key={review.name}
            reviewData={review}
            ></Review>)
        }
    </div>
        </div>
    );
};

export default Reviews;

