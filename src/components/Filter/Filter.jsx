const Filter = ({ onFilter, category, setCategory, categories }) => {


  const handleFilterChange = (e) => {
    setCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="mt-2 mb-2">
      <select
        id="category"
        value={category}
        onChange={handleFilterChange}
        className="block w-full p-2 border border-gray-300 hover:border-orange-500 rounded"
      >
        <option value="">Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
