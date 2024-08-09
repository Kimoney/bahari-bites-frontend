import React from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import SidebarCheckout from '../SidebarCheckout/SidebarCheckout';

const Cart = () => {
  const { cart, updateQuantity, addToCart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex pt-20 justify-center">
    <div className="w-3/6 p-4">
      <h1 className="text-2xl font-bold text-orange-500 mb-4 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-xl font-bold mb-4 text-center">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <div className="mx-auto mt-4 mb-4 h-48">
                  <img src={item.image_url} alt={item.name} className="h-full w-full rounded-lg" />
                </div>
                <p className="text-gray-600">KES {item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-orange-500 text-white p-2 rounded-lg">
                  <FiMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-orange-500 text-white p-2 rounded-lg">
                  <FiPlus />
                </button>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white p-2 rounded-lg">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
          {/* Sidebar with total and checkout button */}
          <SidebarCheckout totalPrice={totalPrice} />
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
