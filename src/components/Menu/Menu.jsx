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
    console.log('first compute cart quantity')
    console.log(cart)
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  console.log(cart)

  return (
    <div className="flex pt-32 px-16">
      <div className="w-1/5 p-4">
        <h2 className="text-xl font-bold text-orange-500 mb-4">Filter & Sort</h2>
        <Filter onFilter={handleFilter} category={category} setCategory={setCategory} categories={categories} />
        <Sort onSort={handleSort} />
      </div>

      <div className="w-4/5 p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
        {filteredItems.map(item => (
          <div key={item.id} className="overflow-hidden rounded-lg border p-2 transition-all duration-300 hover:border-orange-500 hover:shadow-xl">
            <div className="group relative divide-y divide-default-200 overflow-hidden rounded-lg">
              <div className="mx-auto mb-4 h-48">
                <img src={item.image_url} alt={item.name} className="h-full w-full object-cover transition-all group-hover:scale-105" />
              </div>
              <div className="pt-2">
                <div className="mb-4 flex items-center justify-between">
                <Link to={`/menu/${item.id}`} className="line-clamp-1 text-xl font-semibold text-default-800 after:absolute after:inset-0">
                  {item.name}
                </Link>
                  <button type="button"><FiHeart className="relative z-10 cursor-pointer transition-all hover:fill-red-500 hover:text-red-500" /></button>
                </div>
                
                <div className="mb-4 flex items-end justify-between">
                  <h4 className="text-2xl font-semibold leading-9 text-default-900">KES {item.price}</h4>
                  <span className="mb-4 inline-flex items-center gap-2">
                    <span className="rounded-full bg-orange-500 p-1">
                      <FiStar className="fill-white text-white" />
                    </span>
                    <span className="text-sm text-default-950">{item.rating}</span>
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  {cartQuantities[item.id] ? (
                    <>
                    <div className="relative z-10 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium shadow-sm space-x-4">
                      <button type="button" onClick={() => handleDecrement(item.id)} className="text-orange-500 text-lg p-2 cursor-pointer">
                        <FiMinus />
                      </button>
                      <span className="text-lg font-bold">{cartQuantities[item.id]}</span>
                      <button type="button" onClick={() => handleIncrement(item.id)}
                            className="text-orange-500 text-lg p-2 cursor-pointer">
                        <FiPlus/>
                      </button>
                      <button 
                          onClick={() => removeFromCart(item.id)} 
                          className="text-red-600 text-lg p-2 cursor-pointer"
                        >
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

    </div>
  );
};

export default Menu;
