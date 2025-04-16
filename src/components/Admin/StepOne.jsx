import React from "react";
import "./styles/StepOne.css";

const StepOne = ({ onNext }) => {
  return (
    <div className="step-one-wrapper">
      <a href="#" className="back-link">Save & back to events list</a>
      <h2 className="page-title">Create new event</h2>

      <h4 className="section-title">Basic Event Info</h4>

      <form className="event-form">
        <input type="text" placeholder="Event title" className="input full" />

        <div className="input-row">
          <input type="date" className="input" />
          <div className="input time-group">
            <input type="time" className="time-input" placeholder="Start time" />
            <span>AM</span>
            <span>PM</span>
          </div>
          <div className="input time-group">
            <input type="time" className="time-input" placeholder="End time" defaultValue="12:00" />
            <span>AM</span>
            <span>PM</span>
          </div>
        </div>

        <div className="input-row">
          <input type="text" placeholder="Venue Name" className="input" />
          <input type="text" placeholder="Venue Address... start typing" className="input" />
        </div>

        <a href="#" className="manual-link">Can’t find your address? Enter manually</a>

        <button type="button" className="next-button" onClick={onNext}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default StepOne;
