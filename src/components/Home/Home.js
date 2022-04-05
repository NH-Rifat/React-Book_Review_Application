import React, { useEffect, useState } from 'react';
import UseReviews from '../Hooks/UseReviews/UseReviews';
import './Home.css'

const Home = () => {
    const [reviews,setReviews]=UseReviews();
    // console.log(reviews);
    let slicedReviews=reviews.slice(0,3)

    return (
        <div className='container'>
            <div className="main-section">
                <div className="left_bar"><h1>left side bar</h1></div>
                <div className="photo-section"><h1>Photo section</h1></div>
            </div>
            <div className="reviews">
                <h1>Customer Reviews(3)</h1>
                <h2>{slicedReviews.length}</h2>
                <div className="review_btn">
                <button>See All Review</button>
                </div>
            </div>
        </div>
    );
};

export default Home;