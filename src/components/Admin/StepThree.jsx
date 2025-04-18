import React, { useContext, useState, useEffect } from "react";
import { FiSettings, FiTrash2 } from "react-icons/fi";
import TicketModal from "./CreateTicket";
import { EventContext } from "./EventContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/StepThree.css";
const apiUrl = import.meta.env.VITE_BACKEND_URL;
const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL;

const StepThree = () => {
  const [tickets, setTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const { formData, setFormData } = useContext(EventContext);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData((prev) => ({ ...prev, tickets }));
  }, [tickets,setFormData]);

  const removeTicket = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  const updateTicket = (id, field, value) => {
    const updated = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, [field]: value } : ticket
    );
    setTickets(updated);
  };

  const handleSaveTicket = (newTicket) => {
    const updatedTickets = [...tickets, { id: Date.now(), ...newTicket }];
    setTickets(updatedTickets);
    setShowModal(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.description || formData.description.trim() === "") {
      newErrors.description = "Description is required.";
    }

    if (!formData.image || formData.image === "") {
      newErrors.image = "Event image is required.";
    }

    if(tickets.length===0){
      newErrors.ticket = "Ticket data is required.";
    }

    tickets.forEach((ticket, index) => {
      if (!ticket.type || ticket.type.trim() === "") {
        newErrors[`type-${index}`] = "Ticket type is required.";
      }
      if (!ticket.price || isNaN(ticket.price) || Number(ticket.price) <= 0) {
        newErrors[`price-${index}`] = "Price must be a positive number.";
      }
      if (!ticket.quantity || isNaN(ticket.quantity) || Number(ticket.quantity) <= 0) {
        newErrors[`quantity-${index}`] = "Quantity must be a positive number.";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePublish = async () => {
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    let imageUrl = "";

    if (formData.image && typeof formData.image !== "string") {
      const imgData = new FormData();
      imgData.append("file", formData.image);
      imgData.append("upload_preset", "images_preset");
      imgData.append("cloud_name", "dazdngh4i");

      try {
        const cloudRes = await fetch(`${cloudinaryUrl}`, {
          method: "POST",
          body: imgData,
        });
        const cloudData = await cloudRes.json();
        imageUrl = cloudData.url;
      } catch (error) {
        setSubmitError("Image upload failed. Please try again.");
        console.err(error);
        return;
      }
    } else {
      imageUrl = formData.image;
    }

    const payload = {
      ...formData,
      image: imageUrl,
      tickets: JSON.stringify(tickets),
    };

    try {
      const res = await fetch(`${apiUrl}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    
      if (!res.ok) throw new Error("Failed to submit event");
    
      const data = await res.json();
      console.log("Event saved:", data);
    
      toast.success("Event published successfully!");
      navigate("/");
    } catch (err) {
      setSubmitError("Failed to publish event. Please try again later.");
      toast.error("Event publishing failed. Try again later.");
      console.error("Event submit failed:", err);
    }    
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="ticket-form-container">
      <a className="back-link" onClick={handleBack}>
        Save & back to events list
      </a>
      <h2>Create new event</h2>

      <div className="tickets-header">
        <p className="section-label">Tickets</p>
        <button className="create-ticket-button" onClick={() => setShowModal(true)}>
          Create Ticket
        </button>
      </div>

      {tickets.map((ticket, index) => (
        <div className="ticket-row" key={ticket.id}>
          <input
            className="ticket-type"
            placeholder="Ticket Type"
            value={ticket.type}
            onChange={(e) => updateTicket(ticket.id, "type", e.target.value)}
          />
          {errors[`type-${index}`] && <p className="error">{errors[`type-${index}`]}</p>}

          <input
            className="ticket-input"
            placeholder="$Price"
            value={ticket.price}
            onChange={(e) => updateTicket(ticket.id, "price", e.target.value)}
          />
          {errors[`price-${index}`] && <p className="error">{errors[`price-${index}`]}</p>}

          <input
            className="ticket-input"
            placeholder="Quantity"
            value={ticket.quantity}
            onChange={(e) => updateTicket(ticket.id, "quantity", e.target.value)}
          />
          {errors[`quantity-${index}`] && <p className="error">{errors[`quantity-${index}`]}</p>}

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

      {errors.description && <p className="error">{errors.description}</p>}
      {errors.image && <p className="error">{errors.image}</p>}
      {submitError && <p className="submit-error">{submitError}</p>}

      <div className="button-group">
        <button className="skip-btn">Skip & Continue</button>
        <button onClick={handlePublish} className="primary-btn">Publish Event</button>
      </div>

      <TicketModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveTicket}
      />
      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
};

export default StepThree;
