import { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState('');

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
        <option value="lobster">Lobster</option>
        <option value="redsnapper">Red Snapper</option>
        <option value="whitesnapper">White Snapper</option>
        <option value="prawns">Prawns</option>
        <option value="crab">Crab</option>
        <option value="octopus">Octopus</option>
        <option value="platter">Platter</option>
      </select>
    </div>
  );
};

export default Filter;