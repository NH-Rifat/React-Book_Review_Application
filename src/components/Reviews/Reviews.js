import React from 'react';
import UseReviews from '../Hooks/UseReviews/UseReviews';

const Reviews = () => {
    const [reviews,setReviews]=UseReviews();
    // console.log(reviews);
    return (
        <div>
            <h1>This is Review</h1>
            <h3>{reviews.length}</h3>
        </div>
    );
};

export default Reviews;

