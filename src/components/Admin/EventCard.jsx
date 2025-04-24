import React, { useState } from "react";
import SingleEventCard from "./SingleEventCard"; // Import it
import "./styles/EventCard.css";

const EventCard = ({ events }) => {
  const [showDropdownId, setShowDropdownId] = useState(null);

  return (
    <div className="event-grid">
      {events.map((event) => (
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
