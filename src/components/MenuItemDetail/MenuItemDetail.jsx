import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiStar, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import CONFIG from '../../../config';

const MenuItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    const fetchMenuItem = async () => {
      try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/menu/${itemId}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching menu item:', error);
      }
    };

    fetchMenuItem();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const cartQuantities = cart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  const handleIncrement = () => {
    updateQuantity(item.id, (cartQuantities[item.id] || 0) + 1);
  };

  const handleDecrement = () => {
    if (cartQuantities[item.id] > 1) {
      updateQuantity(item.id, cartQuantities[item.id] - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="flex flex-col lg:flex-row pt-32 px-4 lg:px-16 space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 p-4">
        <img src={item.image_url} alt={item.name} className="h-full w-full object-cover rounded-lg" />
      </div>

      {/* Right: Details */}
      <div className="w-full lg:w-1/2 p-4 space-y-4">
        {/* Food Name and Price */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl lg:text-3xl font-bold text-default-900">{item.name}</h2>
          <h3 className="text-xl lg:text-2xl font-semibold text-orange-500">KES {item.price}</h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <FiStar
              key={index}
              className={index < item.rating ? 'text-orange-500' : 'text-gray-300'}
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-default-700">{item.description}</p>

        {/* Food Category */}
        <div>
          <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full">{item.category}</button>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          {cartQuantities[item.id] ? (
            <>
              <div className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium shadow-sm space-x-4">
                <button type="button" onClick={handleDecrement} className="text-orange-500 text-lg p-2 cursor-pointer">
                  <FiMinus />
                </button>
                <span className="text-lg font-bold">{cartQuantities[item.id]}</span>
                <button type="button" onClick={handleIncrement} className="text-orange-500 text-lg p-2 cursor-pointer">
                  <FiPlus />
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
              className="inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-orange-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetail;
