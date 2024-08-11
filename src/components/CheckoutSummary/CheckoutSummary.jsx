import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutSummary = () => {

    const { cart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className="grid lg:grid-cols-6">
    <div className="lg:col-start-3 lg:col-span-2">
    <div className="border border-orange-500 rounded-lg shadow-sm p-4 mt-28">
      <div className="pb-4 mb-4">
        <h4 className="text-xl font-bold uppercase text-left">Order Summary</h4>
        <Link to="/cart">
            <p className="text-orange-500 text-right uppercase">See Details </p>
        </Link>
      </div>
      <div className="flex justify-between mt-5 mb-5 p-4 border rounded-lg border-gray-300 bg-orange-100">
        <p className="text-gray-700 uppercase">Total to pay</p>
        <p className="text-gray-700">KES {totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mt-5 mb-5">
        <p className="text-gray-700 uppercase text-sm">You will pay using</p>
      </div>
      <div className="flex justify-between mt-5 mb-5 p-4 border rounded-lg border-gray-300 bg-orange-100">
        <p className="text-gray-700">MPESA +254 XXX XXX 287 </p>
        <p className="text-gray-700">MPESA-LOGO</p>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/checkout" className="w-full">
          <button className="border font-extrabold border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-4 rounded-lg w-full">
            PAY NOW KES {totalPrice.toFixed(2)}
          </button>
        </Link>
      </div>
      <div className="flex justify-between mt-5 mb-5 p-4">
        <p className="text-xs ">By clicking 'PAY NOW' you agree to <span className="text-orange-500">Bahari Bites</span> terms and conditions. Please note: We wil never ask for your M-Pesa PIN, CVV or full card details over the phone or via e-mail. Need help? <span className="text-orange-500">Contact Us</span></p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CheckoutSummary;
