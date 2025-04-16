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

const SideMenu = () => (
  <div className="sidebar">
    <div className="sidebar-header">Event</div>
    <ul className="sidebar-tabs">
      {tabs.map((tab, idx) => (
        <li key={idx} className="sidebar-tab">
          <span className="tab-text">{tab}</span>
          <span className="tab-arrow">›</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SideMenu;
