import React, { useState } from "react";
import { FiBell  } from "react-icons/fi";
import { FaCaretDown } from 'react-icons/fa'; 
import { assets } from "../../assets/assets";
import "./styles/TopNavbar.css";

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  return (
    <div className="top-navbar">
      <div className="title"><img src={assets.LogoBlue}></img></div>
      <div className="navbar-right">
      <div className="user-dropdown-container" onBlur={() => setIsOpen(false)} tabIndex="0">
      <button className="user-dropdown-button" onClick={toggleDropdown}>
        SYDMAL <FaCaretDown  className="dropdown-arrow" />
      </button>
      {isOpen && (
        <div className="user-dropdown-menu">
          <button className="dropdown-item">Profile</button>
          <button className="dropdown-item">Settings</button>
          <button className="dropdown-item">Logout</button>
        </div>
      )}
    </div>
        <div className="notification-icon">
          <FiBell />
        </div>
        <img src="https://i.pravatar.cc/40" alt="User" className="avatar" />
      </div>
    </div>
  );
};

export default TopNavbar;
