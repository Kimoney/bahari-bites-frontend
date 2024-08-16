import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import { useCart } from '../../context/CartContext';
import { FiHeart, FiStar, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import CONFIG from '../../../config';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/menu`);
        const data = await response.json();
        setMenuItems(data);
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };
    fetchMenuItems();
  }, []);

  useEffect(() => {
    setFilteredItems(menuItems);
  }, [menuItems]);

  const handleFilter = (category) => {
    let filtered = menuItems;
    if (category) {
      filtered = menuItems.filter(item => item.category === category);
    }
    setFilteredItems(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleSort = (option) => {
    let sorted = [...filteredItems];
    if (option === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    setFilteredItems(sorted);
    setSortOption(option);
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handleIncrement = (id) => {
    updateQuantity(id, (cart.find(item => item.id === id)?.quantity || 0) + 1);
  };

  const handleDecrement = (id) => {
    const currentQuantity = cart.find(item => item.id === id)?.quantity || 1;
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  // Compute cart quantities
  const cartQuantities = cart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`px-3 py-1 rounded-lg mb-6 ${i === currentPage ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row lg:pt-28 pt-20 px-4 lg:px-16 justify-center">  
      
      {/* Menu Items */}

      <div className="lg:w-4/5 w-full lg:sticky lg:top-24"> {/* Adjust top value here */}
        {/* Filter & Sort */}
        <div className="flex justify-around w-full mb-4">
          <Filter onFilter={handleFilter} category={category} setCategory={setCategory} categories={categories} />
          <Sort onSort={handleSort} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-3 lg:gap-x-8 lg:gap-y-6 ">
          {currentItems.map(item => (
            <div key={item.id} className="overflow-hidden rounded-lg border p-2 transition-all duration-300 hover:border-orange-500 hover:shadow-xl">
              <div className="group relative divide-y divide-default-200 overflow-hidden rounded-lg">
                <div className="mx-auto mb-4 h-48">
                  <img src={item.image_url} alt={item.name} className="h-full w-full object-cover transition-all group-hover:scale-105" />
                </div>
                <div className="pt-2">
                  <div className="mb-4 flex items-center justify-between">
                    <Link to={`/menu/${item.id}`} className="line-clamp-1 text-base lg:text-xl font-bold text-default-800 after:absolute after:inset-0">
                      {item.name}
                    </Link>
                    <button type="button"><FiHeart className="relative z-10 cursor-pointer transition-all hover:fill-red-500 hover:text-red-500" /></button>
                  </div>
                  
                  <div className="mb-4 flex items-end justify-between">
                    <h4 className="text-base lg:text-xl leading-9 text-default-900">KES {item.price}</h4>
                    <span className="mb-4 inline-flex items-center gap-2">
                      <span className="rounded-full bg-orange-500 p-1">
                        <FiStar className="fill-white text-white text-sm lg:text-base" />
                      </span>
                      <span className="text-xs lg:text-sm text-default-950">{item.rating}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {cartQuantities[item.id] ? (
                      <>
                        <div className="relative z-10 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium shadow-sm space-x-4">
                          <button type="button" onClick={() => handleDecrement(item.id)} className="text-orange-500 text-base lg:text-lg p-2 cursor-pointer">
                            <FiMinus />
                          </button>
                          <span className="text-base lg:text-lg font-bold">{cartQuantities[item.id]}</span>
                          <button type="button" onClick={() => handleIncrement(item.id)} className="text-orange-500 text-base lg:text-lg p-2 cursor-pointer">
                            <FiPlus />
                          </button>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-600 text-base lg:text-lg p-2 cursor-pointer">
                            <FiTrash2 />
                          </button>
                        </div>
                      </>
                    ) : (
                      <button
                        className="relative z-10 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-orange-600"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center space-x-2">
          {paginationButtons}
        </div>
      </div>
    </div>
  );
};

export default Menu;
