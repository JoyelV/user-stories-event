import React from "react";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

function EventPage({ eventData }) {
  if (!eventData) return null;

  const {
    title,
    date,
    startTime,
    startPeriod,
    endTime,
    endPeriod,
    venueName,
    venueAddress,
    image,
  } = eventData;

  return (
    <div className="event-page">
      <section className="hero">
        <div className="content">
          <h5>--- APC ORGANISATION PRESENTS</h5>
          <h1>
            {title}
          </h1>
          <div className="event-details">
            <p>
              <span className="event-location">
                <FiCalendar /> {new Date(date).toDateString()}
              </span>
              <span className="event-location">
                <FiClock /> {startTime} {startPeriod} - {endTime} {endPeriod}
              </span>
              <span className="event-location">
                <FiMapPin /> {venueName}, {venueAddress}
              </span>
            </p>
          </div>
          <button className="buy-ticket">
            Buy Ticket <FaCalendarAlt style={{ fontSize: "1.2em" }} />{" "}
          </button>
        </div>
      </section>

      <div className="event-image-wrapper">
        <img src={image} alt="Event" className="event-image" />
      </div>
    </div>
  );
}

export default EventPage;
