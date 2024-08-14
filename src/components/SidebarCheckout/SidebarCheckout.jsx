import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const SidebarCheckout = ({ totalPrice, cart }) => {
  const { authState } = useAuth();

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h4 className="text-xl font-bold uppercase text-left">Cart Summary</h4>
      </div>
      <div className="flex justify-between mt-5 mb-5">
        <p className="text-gray-700">Item's total ({cart.length})</p>
        <p className="text-gray-700">KES {totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-5 mb-5">
        <p className="text-gray-700">Delivery</p>
        <p className="text-gray-700">Free</p>
      </div>
      <div className="flex justify-between mt-5 mb-5 pb-4 border-b border-gray-300">
        <p className="text-gray-700">Discount</p>
        <p className="text-gray-700">KES 0.00</p>
      </div>
      <div className="flex justify-between mt-8">
        <p className="font-bold text-lg">Subtotal</p>
        <p className="font-bold text-lg">KES {totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex flex-col justify-center mt-8 gap-4">
        {authState.isAuthenticated ? (
          <Link to="/summary" className="w-full">
            <button className="bg-orange-500 text-white p-4 rounded-lg w-full">
              Checkout
            </button>
          </Link>
        ) : (
          <>
            <button className="bg-red-200 p-4 rounded-lg w-full cursor-not-allowed" disabled>
              You have to be logged in to checkout
            </button>
            <button className="bg-gray-400 text-white p-4 rounded-lg w-full cursor-not-allowed" disabled>
              Checkout
            </button>
            <div className="flex gap-4">
              <Link to="/login" className="w-1/2">
                <button className="border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 p-4 rounded-lg w-full">
                  Login
                </button>
              </Link>
              <Link to="/register" className="w-1/2">
                <button className="border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 p-4 rounded-lg w-full">
                  Register
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SidebarCheckout;
