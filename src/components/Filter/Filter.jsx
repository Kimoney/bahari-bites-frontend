import { useEffect, useState } from 'react';

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/menu');
        const data = await response.json();
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

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
