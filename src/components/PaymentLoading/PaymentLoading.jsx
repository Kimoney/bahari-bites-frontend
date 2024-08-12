import React from 'react';
import baharilogo from '../../assets/logo/baharilogo.png';
import { Link } from 'react-router-dom';

const PaymentLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img 
        src={baharilogo} 
        alt="Bahari Bites Logo" 
        className=" h-40 w-auto mb-4 animate-pulse border border-orange-500 rounded-full" 
      />
      <p className="text-center text-sm">
        You will receive a prompt on your MPesa number to authorize the payment.
      </p>
      <Link to="/profile" className="mt-8 ">
        <button className="border font-extrabold border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-4 rounded-lg w-full">
          Simulate Successful Payment
        </button>
      </Link>
      <Link to="/payment-error" className="mt-8">
        <button className="border font-extrabold border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-4 rounded-lg w-full">
        Simulate Error Payment
        </button>
      </Link>
    </div>
  );
};

export default PaymentLoading;
