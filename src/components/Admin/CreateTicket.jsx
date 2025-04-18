import React, { useState } from "react";
import "./styles/CreateTicket.css";

const TicketModal = ({ isOpen, onClose, onSave }) => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState(""); 
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!type.trim()) newErrors.type = "Ticket type is required.";
    if (!price) newErrors.price = "Price is required.";
    else if (isNaN(price) || Number(price) <= 0)
      newErrors.price = "Enter a valid positive number.";

    if (!quantity) newErrors.quantity = "Quantity is required.";
    else if (isNaN(quantity) || Number(quantity) <= 0)
      newErrors.quantity = "Enter a valid positive number.";

    return newErrors;
  };

  const handleSave = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSave({ type, price, quantity, description });
    setType("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setErrors({});
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Create Ticket</h2>

        <div className="form-layout">
          <div className="form-left">
            <div className="form-group">
              <label>Ticket Type</label>
              <input
                type="text"
                placeholder="Ticket Name"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              {errors.type && <span className="error-text">{errors.type}</span>}
            </div>

            <div className="form-row">
              <div className="form-group small-width">
                <label>Ticket Price</label>
                <input
                  type="number"
                  placeholder="$100"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors.price && <span className="error-text">{errors.price}</span>}
              </div>
              <div className="form-group small-width">
                <label>Max seats/capacity</label>
                <input
                  type="number"
                  placeholder="500"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                {errors.quantity && <span className="error-text">{errors.quantity}</span>}
              </div>
            </div>

            <div className="form-group full-width">
              <select>
                <option>One attendee per ticket</option>
                <option>Multiple attendees per ticket</option>
              </select>
            </div>

            <a href="#" className="advanced-options">
              Advanced options
            </a>
          </div>

          <div className="form-right">
            <div className="form-group">
              <label>Ticket Description</label>
              <textarea
                placeholder="Ticket Description"
                className="fixed-placeholder"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>

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
