import { useState } from 'react';

const Sort = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="mt-2 mb-2">
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="block w-full p-2 border border-gray-300 hover:border-orange-500 rounded"
      >
        <option value="">Sort</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Sort;
