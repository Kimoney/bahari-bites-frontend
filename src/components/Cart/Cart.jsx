import React from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const Cart = ({ cartQuantities, menuItems, handleIncrement, handleDecrement, handleRemove }) => {
  // Calculate the total price of items in the cart
  const totalPrice = menuItems.reduce((total, item) => {
    if (cartQuantities[item.id]) {
      return total + item.price * cartQuantities[item.id];
    }
    return total;
  }, 0);

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold text-orange-500 mb-4">Your Cart</h2>
      {Object.keys(cartQuantities).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {menuItems
            .filter(item => cartQuantities[item.id])
            .map(item => (
              <div key={item.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">KES {item.price} x {cartQuantities[item.id]}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleDecrement(item.id)} className="bg-orange-500 text-white p-2 rounded-lg">
                    <FiMinus />
                  </button>
                  <span>{cartQuantities[item.id]}</span>
                  <button onClick={() => handleIncrement(item.id)} className="bg-orange-500 text-white p-2 rounded-lg">
                    <FiPlus />
                  </button>
                  <button onClick={() => handleRemove(item.id)} className="bg-red-500 text-white p-2 rounded-lg">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          <div className="text-right mt-4">
            <h4 className="text-xl font-bold">Total: KES {totalPrice.toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
