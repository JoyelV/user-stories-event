import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { FiMoreVertical, FiEdit, FiTrash2 } from "react-icons/fi";
import "./styles/EventCard.css";

const EventCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={assets.Pic} alt="Event" className="image" />
      </div>

      <div className="event-content">
        <div className="date-view">
          <span className="event-date">27-09-2021</span>
          <button className="view-button">View</button>

          {/* Options icon with dropdown */}
          <div
            className="options-container"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <FiMoreVertical className="options-icon" />
            {showDropdown && (
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

        <h2 className="event-title">Event Name</h2>

        <div className="event-stats">
          <div>
            <strong>520/1000</strong>
            <p>Total sold tickets</p>
          </div>
          <div>
            <strong>$12000</strong>
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

        <button className="view-event-page-button">View Event Page</button>
      </div>
    </div>
  );
};

export default EventCard;
