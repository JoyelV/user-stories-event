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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${item.label === 'Events' ? 'active' : ''} ${
              item.label === 'Report' ? 'bold' : ''
            }`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
