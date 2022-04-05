
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseReviews from '../Hooks/UseReviews/UseReviews';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews,setReviews]=UseReviews();
    const navigate=useNavigate();

    // console.log(reviews);
    let slicedReviews=reviews.slice(0,3)

    const handleClick=()=>{
        navigate('/reviews')
    }

    return (
        <div className='container'>
            <div className="main-section">
                <div className="info-section">
                    <h1>Do You know Javascript Better?</h1>
                    <h1 className='explore_txt'>Explore The You don't JS Series</h1>
                    <div className="bio">
                        <p><span className='first-word'>Are</span> you looking for a better way to deeply learn the fundamentals of JavaScript? Look no further!The foundation of all programs is the organization of its variables and functions into different nested scopes.JavaScript is awesome. It's easy to learn partially, and much harder to learn completely (or even sufficiently). When developers encounter confusion, they usually blame the language instead of their lack of understanding. These books aim to fix that, inspiring a strong appreciation for the language you can now, and should, deeply know...<span>more</span></p>
                    </div>
                    <div className="explore">
                    <button>Explore</button>
                    </div>
                </div>
                <div className="photo-section">
                    <img src='https://images-na.ssl-images-amazon.com/images/I/71mKvD89oEL.jpg' alt="" />
                </div>
            </div>
            <div className="review_item">
                <h2>Readers Reviews({slicedReviews.length})</h2>
            </div>
            <div className="All-review">
            
                {
                    slicedReviews.map((review)=><Review
                    key={review.name}
                    reviewData={review}
                    ></Review>)
                }
            </div>
            <div className="see_all-review">
                <button onClick={handleClick}>See All Review 
                <div className="arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                </button>

            </div>
        </div>
    );
};

export default Home;