import React from 'react';
import './styles/Sidebar.css';
import {
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaEnvelope,
  FaCalendarAlt,
  FaIdBadge,
  FaPoll,
  FaChartBar,
  FaWallet,
} from 'react-icons/fa';

const menuItems = [
  { label: 'Dashboard', icon: <FaTachometerAlt /> },
  { label: 'Contacts', icon: <FaUsers /> },
  { label: 'Committee', icon: <FaBuilding /> },
  { label: 'Email Center', icon: <FaEnvelope /> },
  { label: 'Events', icon: <FaCalendarAlt /> },
  { label: 'Membership', icon: <FaIdBadge /> },
  { label: 'Surveys', icon: <FaPoll /> },
  { label: 'Report', icon: <FaChartBar /> },
  { label: 'Accounts', icon: <FaWallet /> },
];

const Sidebar = ({ isOpen, onClose }) => (
  <>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${item.label === 'Events' ? 'active' : ''}`}
            onClick={onClose} 
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>

    <div
      className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
      onClick={onClose}
    />
  </>
);

export default Sidebar;
