import React from 'react';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import SidebarCheckout from '../SidebarCheckout/SidebarCheckout';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrement = (id) => {
    updateQuantity(id, (cart.find(item => item.id === id)?.quantity || 0) + 1);
  };

  const handleDecrement = (id) => {
    const currentQuantity = cart.find(item => item.id === id)?.quantity || 1;
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row pt-20 justify-center gap-8 px-4 lg:px-16 mt-8">
      <div className="w-full lg:w-8/12">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
        <h1 className="text-xl font-bold mb-6 uppercase text-left">Shopping Cart</h1>
          {cart.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-xl font-bold mb-4">Your cart is empty</p>
              <Link 
                to="/menu" 
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg inline-block"
              >
                Shop Here
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-orange-100 border whitespace-nowrap">
                  <th className="text-left py-2 uppercase px-4">Product</th>
                  <th className="text-left py-2 uppercase px-4">Price</th>
                  <th className="text-left py-2 uppercase px-4">Quantity</th>
                  <th className="text-left py-2 uppercase px-4">Sub-Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id} className="border-b whitespace-nowrap">
                  
                    <td className="py-4 px-4 items-center">
                    <Link to={`/menu/${item.id}`}>
                      <img 
                        src={item.image_url} 
                        alt={item.name} 
                        className="h-[1.5cm] w-[2.5cm] rounded-lg mr-4 mb-2" 
                      />
                      <span className="font-bold capitalize">{item.name}</span>
                      </Link>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-600">KES {item.price}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleDecrement(item.id)} 
                          className="text-orange-500 text-lg p-2"
                        >
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          onClick={() => handleIncrement(item.id)} 
                          className="text-orange-500 text-lg p-2"
                        >
                          <FiPlus />
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)} 
                          className="text-red-500 text-lg p-2"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-600">KES {item.price * item.quantity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-left py-4">
                    <Link 
                      to="/menu" 
                      className="text-orange-500 px-4 py-2 rounded-lg border border-orange-500 mr-4 inline-block hover:bg-orange-500 hover:text-white"
                    >
                      Shop More
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
            </div>
          )}
        </div>
      </div>
      { cart.length > 0 && (
        <div className="w-full lg:w-4/12 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <SidebarCheckout totalPrice={totalPrice} cart={cart} />
        </div>
      )}
    </div>
  );
};

export default Cart;
