import React, { useState } from "react";
import { FiSettings, FiTrash2 } from "react-icons/fi";
import TicketModal from "./CreateTicket";
import "./styles/StepThree.css";

const StepThree = () => {
  const [tickets, setTickets] = useState([
    { id: 1, type: "Platinum", price: "$100", quantity: "500" },
    { id: 2, type: "Gold", price: "$40", quantity: "No Limit" },
  ]);

  const [showModal, setShowModal] = useState(false); // For modal toggle

  const removeTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  const updateTicket = (id, field, value) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, [field]: value } : ticket
      )
    );
  };

  // Function to add a ticket from modal
  const handleSaveTicket = (newTicket) => {
    setTickets([...tickets, { id: Date.now(), ...newTicket }]);
    setShowModal(false);
  };

  return (
    <div className="ticket-form-container">
      <a href="#" className="back-link">
        Save & back to events list
      </a>
      <h2>Create new event</h2>
      <div className="tickets-header">
        <p className="section-label">Tickets</p>
        <button className="create-ticket-button" onClick={() => setShowModal(true)}>
          Create Ticket
        </button>
      </div>

      {tickets.map((ticket) => (
        <div className="ticket-row" key={ticket.id}>
          <input
            className="ticket-type"
            placeholder="Ticket Type"
            value={ticket.type}
            onChange={(e) => updateTicket(ticket.id, "type", e.target.value)}
          />
          <input
            className="ticket-input"
            placeholder="$Price"
            value={ticket.price}
            onChange={(e) => updateTicket(ticket.id, "price", e.target.value)}
          />
          <input
            className="ticket-input"
            placeholder="Quantity"
            value={ticket.quantity}
            onChange={(e) =>
              updateTicket(ticket.id, "quantity", e.target.value)
            }
          />
          <button className="icon-button settings-button" title="Settings">
            <FiSettings size={18} />
          </button>
          <button
            className="icon-button delete-button"
            title="Delete"
            onClick={() => removeTicket(ticket.id)}
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      ))}

      <div className="button-group">
        <button className="skip-btn">Skip & Continue</button>
        <button className="primary-btn">Publish Event</button>
      </div>

      {/* Ticket Modal */}
      <TicketModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveTicket}
      />
    </div>
  );
};

export default StepThree;
