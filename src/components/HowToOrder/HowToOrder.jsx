import {  FaUtensils, FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

export default function HowToOrder() {
  return (
<div id='howtoorder' className="mt-12 h-screen">
  <h3 className="text-3xl font-bold text-center text-orange-500">Order In Four Simple Steps</h3>
  <div className="mt-8 max-w-4xl mx-auto">
    <div className="mb-8 flex items-center">
      <FaUtensils className="text-orange-500 text-3xl mr-4" />
      <div>
        <h4 className="text-2xl font-bold text-gray-800">Browse the Menu</h4>
        <p className="mt-2 text-gray-600">Once you find your desired restaurant, explore their menu. Many websites allow filtering by category (appetizers, main course, etc.) or searching for specific dishes.</p>
      </div>
    </div>
    <div className="mb-8 flex items-center">
      <FaShoppingCart className="text-orange-500 text-3xl mr-4" />
      <div>
        <h4 className="text-2xl font-bold text-gray-800">Add and Review Items to Your Cart</h4>
        <p className="mt-2 text-gray-600">Click on the items you want to order. You can often adjust quantities or choose additional options (size, toppings, etc.). Double-check your selections and any special instructions before proceeding.</p>
      </div>
    </div>
    <div className="mb-8 flex items-center">
      <FaCreditCard className="text-orange-500 text-3xl mr-4" />
      <div>
        <h4 className="text-2xl font-bold text-gray-800">Checkout and Payment</h4>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Login or Create Account: Some websites require an account for checkout, while others allow guest checkout.</li>
          <li>Delivery Information: Enter your delivery address and any delivery instructions.</li>
          <li>Payment using M-Pesa.</li>
          <li>Review and Confirm: Review your order details, including price and estimated delivery time. Confirm your order once everything is correct.</li>
        </ul>
      </div>
    </div>
    <div className="mb-8 flex items-center">
      <FaTruck className="text-orange-500 text-3xl mr-4" />
      <div>
        <h4 className="text-2xl font-bold text-gray-800">Order Tracking (Optional)</h4>
        <p className="mt-2 text-gray-600">We offer order tracking, allowing you to see the status of your order and estimated arrival time.</p>
      </div>
    </div>
  </div>
</div>
  )
}
