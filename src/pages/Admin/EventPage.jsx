import React from "react";
import Sidebar from "../../components/Admin/Sidebar";
import TopNavbar from "../../components/Admin/TopNavbar";
import SearchBar from "../../components/Admin/SearchBar";
import EventCard from "../../components/Admin/EventCard";
import "./EventsList.css";

const EventsList = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      <TopNavbar />
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <div className="events-list-container">
            <div className="search-bar-container">
            <h1>Events List</h1>

              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="hamburger-menu">
              <button className="hamburger-button">☰</button>
            </div>
            <div>
              <button className="create-event-btn">Create new event</button>
            </div>
          </div>
          <div>
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
