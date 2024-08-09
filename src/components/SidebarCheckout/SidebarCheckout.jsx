import React from 'react';

const SidebarCheckout = ({ totalPrice }) => {
  return (
    <div className="w-1/4 p-4 fixed right-0 top-20 h-full shadow-lg">
      <div className="text-right mt-4">
        <h4 className="text-xl font-bold text-center">Total: KES {totalPrice.toFixed(2)}</h4>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-orange-500 text-white p-4 rounded-lg w-48">Checkout</button>
      </div>
    </div>
  );
};

export default SidebarCheckout;
