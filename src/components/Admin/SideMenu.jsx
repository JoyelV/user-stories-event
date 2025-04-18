import React from "react";
import "./styles/SideMenu.css";

const tabs = [
  "Basic Event Info",
  "Image & Description",
  "Tickets",
  "Payment Options",
  "Customer data collection",
  "Custom Email Templates",
  "Event Page Design",
  "Sponsor Section",
  "Event Terms & Conditions",
  "Agent Codes",
  "Discount Code & Rules",
  "Assign Ticket Checkers",
  "Multi Level Ticketing",
  "Seat numbered Ticketing",
  "Advanced Settings"
];

const SideMenu = ({ isOpen, onClose }) => (
  <>
    <div className={`sidemenu ${isOpen ? "open" : ""}`}>
      <div className="sidemenu-header">Event</div>
      <ul className="sidemenu-tabs">
        {tabs.map((tab, idx) => (
          <li key={idx} className="sidemenu-tab" onClick={onClose}>
            <span className="tab-text">{tab}</span>
            <span className="tab-arrow">›</span>
          </li>
        ))}
      </ul>
    </div>
    <div
      className={`sidemenu-overlay ${isOpen ? "active" : ""}`}
      onClick={onClose}
    />
  </>
);

export default SideMenu;
