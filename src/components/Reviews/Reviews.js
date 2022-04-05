import React from 'react';
import UseReviews from '../Hooks/UseReviews/UseReviews';
const [reviews,setReviews]=UseReviews();
// console.log(reviews);
const Reviews = () => {
    return (
        <div>
            <h1>This is Review</h1>
        </div>
    );
};

export default Reviews;

