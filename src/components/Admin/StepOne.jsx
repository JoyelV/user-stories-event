import React, { useContext, useState } from "react";
import { EventContext } from "./EventContext";
import { useNavigate } from "react-router-dom";
import "./styles/StepOne.css";

const StepOne = ({ onNext }) => {
  const { formData, setFormData } = useContext(EventContext);

  const [localData, setLocalData] = useState({
    title: "",
    date: "",
    startTime: "",
    startPeriod: "",
    endTime: "",
    endPeriod: "",
    venueName: "",
    venueAddress: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData({ ...localData, [name]: value });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!localData.title.trim()) newErrors.title = "Title is required";
    if (!localData.date) newErrors.date = "Date is required";
    if (!localData.venueName.trim()) newErrors.venueName = "Venue name is required";
    if (!localData.venueAddress.trim()) newErrors.venueAddress = "Venue address is required";
  
    const convertTo24Hour = (time, period) => {
      let [hours, minutes] = time.split(":").map(Number);
      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      return hours * 60 + minutes; 
    };
  
    const start = convertTo24Hour(localData.startTime, localData.startPeriod);
    const end = convertTo24Hour(localData.endTime, localData.endPeriod);
  
    if (end <= start) {
      newErrors.endTime = "End time must be after start time";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };  

  const handleNext = () => {
    if (validateForm()) {
      setFormData({ ...formData, ...localData });
      onNext();
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="step-one-wrapper">
      <a className="back-link" onClick={handleBack}>
        Save & back to events list
      </a>
      <h2 className="page-title">Create new event</h2>

      <h4 className="section-title">Basic Event Info</h4>

      <form className="event-form">
        <input
          type="text"
          name="title"
          placeholder="Event title"
          className="input full"
          value={localData.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error-text">{errors.title}</p>}

        <div className="input-row">
          <input
            type="date"
            name="date"
            className="input"
            value={localData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="error-text">{errors.date}</p>}

          <div className="form-group time-picker">
            <label htmlFor="start-time" className="label">Start Time</label>
            <div className="time-picker-row">
              <input
                type="time"
                name="startTime"
                className="time-input"
                value={localData.startTime}
                onChange={handleChange}
              />
              <select
                name="startPeriod"
                className="ampm-select"
                value={localData.startPeriod}
                onChange={handleChange}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <div className="form-group time-picker">
            <label htmlFor="end-time" className="label">End Time</label>
            <div className="time-picker-row">
              <input
                type="time"
                name="endTime"
                className="time-input"
                value={localData.endTime}
                onChange={handleChange}
              />
              <select
                name="endPeriod"
                className="ampm-select"
                value={localData.endPeriod}
                onChange={handleChange}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>

        <div className="input-row">
          <input
            type="text"
            name="venueName"
            placeholder="Venue Name"
            className="input"
            value={localData.venueName}
            onChange={handleChange}
          />
          {errors.venueName && <p className="error-text">{errors.venueName}</p>}

          <input
            type="text"
            name="venueAddress"
            placeholder="Venue Address... start typing"
            className="input"
            value={localData.venueAddress}
            onChange={handleChange}
          />
          {errors.venueAddress && <p className="error-text">{errors.venueAddress}</p>}
        </div>

        <a href="#" className="manual-link">
          Can’t find your address? Enter manually
        </a>

        <button type="button" className="next-button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default StepOne;
