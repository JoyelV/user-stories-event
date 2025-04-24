import React, { useState } from "react";
import SingleEventCard from "./SingleEventCard"; 
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles/EventCard.css";

const EventCard = ({ events, loading }) => {
  const [showDropdownId, setShowDropdownId] = useState(null);

  return (
    <div className="event-grid">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <Skeleton height={180} />
              </div>

              <div className="event-content">
                <div className="date-view">
                  <Skeleton width={100} height={20} />
                  <Skeleton width={60} height={30} />
                </div>

                <h2 className="event-title">
                  <Skeleton width={`80%`} />
                </h2>

                <div className="event-stats">
                  <div>
                    <Skeleton width={50} />
                    <Skeleton width={80} />
                  </div>
                  <div>
                    <Skeleton width={60} />
                    <Skeleton width={90} />
                  </div>
                </div>

                <div className="status-edit-container">
                  <Skeleton width={100} />
                </div>

                <Skeleton height={40} />
              </div>
            </div>
          ))
        : events.map((event) => (
            <SingleEventCard
              key={event._id}
              event={event}
              showDropdownId={showDropdownId}
              setShowDropdownId={setShowDropdownId}
            />
          ))}
    </div>
  );
};

export default EventCard;
