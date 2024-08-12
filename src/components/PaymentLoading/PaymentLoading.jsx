import React from 'react';
import baharilogo from '../../assets/logo/baharilogo.png';

const Loading = () => {
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
    </div>
  );
};

export default Loading;
