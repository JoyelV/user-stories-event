import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";
import TopNavbar from "../../components/Admin/TopNavbar";
import SearchBar from "../../components/Admin/SearchBar";
import EventCard from "../../components/Admin/EventCard";
import "./EventsList.css";

const EventsList = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      <TopNavbar />
      <div className="container">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        X 
      </button>
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
        <div className="main-content">
          <div className="events-list-container">
            <div className="search-bar-container">
            <h1 className="events-title">Events List</h1>
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="hamburger-menu">
              <button className="hamburger-button">☰</button>
            </div>
            <div>
              <button
                className="create-event-btn"
                onClick={() => navigate("/create-event")}
              >
                Create new event
              </button>
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
