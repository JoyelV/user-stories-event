import React, { useContext, useState } from "react";
import { EventContext } from "../Admin/EventContext";
import { useNavigate } from "react-router-dom";
import "./styles/StepTwo.css";

const StepTwo = ({ onNext }) => {
  const { formData, setFormData } = useContext(EventContext);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          image: "Only JPEG and PNG files are allowed",
        }));
        return;
      }

      setFormData({
        ...formData,
        image: file,
        previewImage: URL.createObjectURL(file),
      });

      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
    setErrors((prev) => ({ ...prev, description: "" })); 
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.image) {
      newErrors.image = "Image is required (JPEG or PNG)";
    }

    if (!formData.description || formData.description.trim() === "") {
      newErrors.description = "Description cannot be empty";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Final Data Submitted:", formData);
      if (onNext) onNext();
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="step-two-wrapper">
      <a className="back-link" onClick={handleBack}>
        Save & back to events list
      </a>
      <h2 className="page-title">Create new event</h2>

      <h4 className="section-title">Image & Description</h4>

      <div className="upload-header">
        <label className="upload-label">Upload Cover Image</label>
        <a href="#" className="add-library-link">
          Add From Library
        </a>
      </div>

      <div className="upload-container">
        <label htmlFor="upload-box" className="upload-box">
          Drop your file(s) here or <span className="browse-link">Browse</span>
          <br />
          <small>
            Max: 2 MB JPEG/PNG
            <br />
            Size: 2000×2000px
          </small>
        </label>
        <input
          id="upload-box"
          type="file"
          accept="image/jpeg,image/png"
          onChange={handleImageUpload}
          hidden
        />

        {formData.previewImage && (
          <img
            src={formData.previewImage}
            alt="cover"
            className="preview-img"
          />
        )}
        {errors.image && <p className="error-text">{errors.image}</p>}
      </div>

      <textarea
        placeholder="Event description"
        value={formData.description}
        onChange={handleChange}
        className="description-box"
      ></textarea>
      {errors.description && <p className="error-text">{errors.description}</p>}

      <div className="button-group">
        <button className="skip-btn">Skip & Continue</button>
        <button onClick={handleSubmit} className="primary">Next</button>
      </div>
    </div>
  );
};

export default StepTwo;
