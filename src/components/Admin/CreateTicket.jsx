import React, { useState } from "react";
import "./styles/CreateTicket.css";

const TicketModal = ({ isOpen, onClose, onSave }) => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ type, price, quantity });
    setType("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Create Ticket</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Ticket Type</label>
            <input
              type="text"
              placeholder="Ticket Name"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="form-group textarea-group">
            <label>Ticket Description</label>
            <textarea placeholder="Ticket Description" />
          </div>

          <div className="form-group">
            <label>Ticket Price</label>
            <input
              type="text"
              placeholder="$100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Max seats/capacity</label>
            <input
              type="number"
              placeholder="500"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="form-group full-width">
            <select>
              <option>One attendee per ticket</option>
              <option>Multiple attendees per ticket</option>
            </select>
          </div>
        </div>

        <a href="#" className="advanced-options">
          Advanced options
        </a>

        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
