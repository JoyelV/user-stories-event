import React, { useContext } from "react";
import { EventContext } from "../Admin/EventContext";
import "./styles/StepTwo.css";

const StepTwo = ({ onNext }) => {
  const { formData, setFormData } = useContext(EventContext);

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Final Data Submitted:", formData);
    if (onNext) onNext(); 
  };

  return (
    <div className="step-two-wrapper">
      <a href="#" className="back-link">Save & back to events list</a>
      <h2 className="page-title">Create new event</h2>

      <h4 className="section-title">Image & Description</h4>

      <div className="upload-header">
        <label className="upload-label">Upload Cover Image</label>
        <a href="#" className="add-library-link">Add From Library</a>
      </div>

      <div className="upload-container">
        <label htmlFor="upload-box" className="upload-box">
          Drop your file(s) here or <span className="browse-link">Browse</span><br />
          <small>Max: 2 MB JPEG/PNG<br />Size: 2000×2000px</small>
        </label>
        <input id="upload-box" type="file" accept="image/*" onChange={handleImageUpload} hidden />

        {formData.image && (
          <img src={formData.image} alt="cover" className="preview-img" />
        )}
      </div>

      <textarea
        placeholder="Event title"
        value={formData.description}
        onChange={handleChange}
        className="description-box"
      ></textarea>

      <div className="button-group">
        <button className="skip-button" onClick={onNext}>Skip & Continue</button>
        <button className="next-button" onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
