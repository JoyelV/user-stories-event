import React, { useState } from "react";
import { FiMoreVertical, FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./styles/EventCard.css";

const SingleEventCard = ({ event, showDropdownId, setShowDropdownId }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const totalTickets = event.tickets.reduce(
    (acc, ticket) => acc + ticket.quantity,
    0
  );
  const totalRevenue = event.tickets.reduce(
    (acc, ticket) => acc + ticket.quantity * ticket.price,
    0
  );

  return (
    <div className="event-card">
      <div className="event-image">
        {!imageLoaded && <div className="skeleton-loader"></div>}
        <img
          src={event.image}
          alt={event.title}
          className="image"
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="event-content">
        <div className="date-view">
          <span className="event-date">{event.date}</span>
          <button className="view-button">View</button>

          <div
            className="options-container"
            onMouseEnter={() => setShowDropdownId(event._id)}
            onMouseLeave={() => setShowDropdownId(null)}
          >
            <FiMoreVertical className="options-icon" />
            {showDropdownId === event._id && (
              <div className="dropdown-menu">
                <button className="dropdown-item">
                  <FiEdit className="icon" /> Edit
                </button>
                <button className="dropdown-item">
                  <FiTrash2 className="icon" /> Delete
                </button>
              </div>
            )}
          </div>
        </div>

        <h2 className="event-title">{event.title}</h2>

        <div className="event-stats">
          <div>
            <strong>{totalTickets}</strong>
            <p>Total sold tickets</p>
          </div>
          <div>
            <strong>${totalRevenue}</strong>
            <p>Total revenue</p>
          </div>
        </div>

        <div className="status-edit-container">
          <p className="status-text" style={{ color: "green" }}>
            Active
          </p>
          <button className="edit-button">
            <FiEdit />
          </button>
        </div>

        <button
          className="view-event-page-button"
          onClick={() =>navigate(`/${event._id}`)}
        >
          View Event Page
        </button>
      </div>
    </div>
  );
};

export default SingleEventCard;
