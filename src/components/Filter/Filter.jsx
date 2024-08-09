import { useState } from 'react';

const Filter = ({ onFilter, category, setCategory, categories }) => {


  const handleFilterChange = (e) => {
    setCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-lg font-bold mb-2">Filter by Category:</label>
      <select
        id="category"
        value={category}
        onChange={handleFilterChange}
        className="block w-full p-2 border border-gray-300 rounded"
      >
        <option value="">All</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
