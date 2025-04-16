import React, { useState } from "react";
import { assets } from "../assets/assets";

const ImageCard = () => {
  const [count, setCount] = useState(1); 

  return (
    <>
      <p className="content-heading">TICKETS</p>
      <h2 className="head">Select Your Ticket For A Unique Experience</h2>

      <div className="card">
        <div className="image-container">
          <img
            src={assets.event}
            alt="Business Growth"
            className="card-image"
          />
        </div>

        <div className="card-content">
          <h2 className="title">Business Growth</h2>
          <p className="description">
            Discover how to grow your business and connect with new customers
            with Instagram's tools.
          </p>

          <div className="counter">
            <button
              onClick={() => setCount(prev => Math.max(prev - 1, 1))}
              disabled={count === 1}
              style={{ opacity: count === 1 ? 0.5 : 1 }}
            >
              -
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
          </div>
        </div>
      </div>

      <h4 className="price">$37.90</h4>
      <button className="cart-button">Add to Cart 🛒</button>
    </>
  );
};

export default ImageCard;
