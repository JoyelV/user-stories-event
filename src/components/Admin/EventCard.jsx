import React, { useEffect, useState } from "react";
import { FiMoreVertical, FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./styles/EventCard.css";
const apiUrl = import.meta.env.VITE_BACKEND_URL;

const EventCard = () => {
  const [showDropdownId, setShowDropdownId] = useState(null);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/events`);
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-grid">
      {events.map((event) => {
        const totalTickets = event.tickets.reduce((acc, ticket) => acc + ticket.quantity, 0);
        const totalRevenue = event.tickets.reduce((acc, ticket) => acc + ticket.quantity * ticket.price, 0);

        return (
          <div key={event._id} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} className="image" />
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
                onClick={() => navigate(`/${event._id}`)}
              >
                View Event Page
              </button>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventCard;
