import React from "react";
import { assets } from "../assets/assets";
import { BsDot } from "react-icons/bs";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

function EventPage() {
  return (
    <div className="event-page">
      <section className="hero">
        <div className="content">
          <h5>--- APC ORGANISATION PRESETSN</h5>
          <h1>
            Recent Stories From
            <br />
            Google Network
          </h1>
          <div className="event-details">
            <p>
              <span className="event-location">
                <FiCalendar /> 24 May, 2022
              </span>
              <span className="event-location">
                <FiClock /> 6:00 PM EDT
              </span>
              <span className="event-location">
                <FiMapPin /> Melbourne
              </span>
            </p>
          </div>
          <button className="buy-ticket">
            Buy Ticket <FaCalendarAlt />{" "}
          </button>
        </div>
      </section>

      {/* Overlapping image */}
      <div className="event-image-wrapper">
        <img src={assets.Group} alt="Event" className="event-image" />
      </div>

      <section className="about">
        <p style={{ color: "#0062FF", fontWeight: "bold" }}>
          <BsDot size={16} color="#0062FF" />
          AUGUST 24th, 8:00AM - 9:00AM
        </p>
        <p style={{ color: "#2E2E3A", fontSize: "32px", fontWeight: "500" }}>
          About the event
        </p>
        <p
          style={{ color: "#7E7E8F", textAlign: "center", margin: "0px 100px" }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <a
          href="#read-more"
          className="read-more"
          style={{ color: "#0062FF", fontWeight: "bold" }}
        >
          Read More
        </a>
      </section>
    </div>
  );
}

export default EventPage;
