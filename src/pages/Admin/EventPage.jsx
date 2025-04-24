import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";
import TopNavbar from "../../components/Admin/TopNavbar";
import SearchBar from "../../components/Admin/SearchBar";
import EventCard from "../../components/Admin/EventCard";
import "./EventsList.css";

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const EventsList = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${apiUrl}/api/events`);
        const data = await res.json();
        setAllEvents(data);
        setFilteredEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(searchQuery, "searched :");
    const filtered = allEvents.filter((event) =>
      event.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
    setCurrentPage(1);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div>
      <TopNavbar />
      <div className="container">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          X
        </button>
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <div className="main-content">
          <div className="events-list-container">
            <div className="search-bar-container">
              <h1 className="events-title">Events List</h1>
              <SearchBar onSearch={handleSearch} />
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

          {/* Event Cards */}
          {loading ? (
            <div className="loading-message">Loading events...</div> // or a spinner
          ) : (
            <EventCard events={currentEvents} />
          )}

          {/* Pagination */}
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="pagination-btn"
              disabled={currentPage === 1}
            >
              «
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`pagination-btn ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="pagination-btn"
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
