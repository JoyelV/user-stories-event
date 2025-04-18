import React, { useState } from "react";
import { FiBell, FiMenu, FiX } from "react-icons/fi";
import { FaCaretDown } from 'react-icons/fa'; 
import { assets } from "../../assets/assets";
import "./styles/TopNavbar.css";

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <div className="top-navbar">
      <div className="title">
        <img src={assets.LogoBlue} alt="Logo" />
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`navbar-right ${isMobileMenuOpen ? "show" : ""}`}>
        <div
          className="user-dropdown-container"
          onBlur={() => setIsDropdownOpen(false)}
          tabIndex="0"
        >
          <button className="user-dropdown-button" onClick={toggleDropdown}>
            SYDMAL <FaCaretDown className="dropdown-arrow" />
          </button>
          {isDropdownOpen && (
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
