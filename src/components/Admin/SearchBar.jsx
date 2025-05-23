import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-bar-form">
        <div className="search-input-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            className="search-input-with-icon"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;


// import React, { useCallback, useState } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import './styles/SearchBar.css';

// // Custom debounce function
// const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func(...args), delay);
//   };
// };

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   // Debounced search function
//   const debouncedSearch = useCallback(
//     debounce((value) => {
//       onSearch(value);
//     }, 500),
//     [onSearch] // Dependency: re-create if onSearch changes
//   );

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     debouncedSearch(value); // Call debounced search
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <div className="search-bar-container">
//       <form onSubmit={handleSubmit} className="search-bar-form">
//         <div className="search-input-wrapper">
//           <FiSearch className="search-icon" />
//           <input
//             type="text"
//             value={query}
//             onChange={handleChange}
//             placeholder="Search..."
//             className="search-input-with-icon"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
