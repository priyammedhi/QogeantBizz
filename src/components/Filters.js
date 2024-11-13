import React from 'react';
import "../screens/Projects.css";

const Filter = ({ categories, onFilterChange }) => {
  return (
    <div className="filter-container mb-5">
      <select onChange={(e) => onFilterChange(e.target.value)} className="filter-button">
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default Filter;