import React, { useState } from "react";

const ImageCard = ({ eventData }) => {
  const [count, setCount] = useState(1);

  if (!eventData || !eventData.tickets || eventData.tickets.length === 0) {
    return <p>Loading...</p>;
  }

  const ticket = eventData.tickets[0];

  return (
    <>
      <p className="content-heading">TICKETS</p>
      <h2 className="head">Select Your Ticket For A Unique Experience</h2>

      <div className="card">
        <div className="image-container">
          <img
            src={eventData.image}
            alt={eventData.title}
            className="card-image"
          />
        </div>

        <div className="card-content">
          <h2 className="title">{eventData.title}</h2>
          <p className="description">
            {eventData.description.length > 105
              ? eventData.description.slice(0, 105) + "..."
              : eventData.description}
          </p>

          <div className="counter">
            <button
              onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
              disabled={count === 1}
              style={{ opacity: count === 1 ? 0.5 : 1 }}
            >
              -
            </button>
            <span>{count}</span>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
          </div>
        </div>
      </div>

      <h4 className="price">${(ticket.price * count).toFixed(2)}</h4>
      <button className="cart-button">Add to Cart 🛒</button>
    </>
  );
};

export default ImageCard;
