import { FaUtensils, FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

export default function HowToOrder() {
  return (
    <div id="howtoorder" className="mt-12 pt-20">
      <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Order In Four Simple Steps
      </h3>
      <div className="max-w-4xl mx-auto px-4">
        {/* Step 1 */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
          <FaUtensils className="text-orange-500 text-3xl mb-4 md:mb-0 md:mr-4" />
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-800">
              Browse the Menu
            </h4>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Once you find your desired restaurant, explore their menu. Many websites allow filtering by category (appetizers, main course, etc.) or searching for specific dishes.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
          <FaShoppingCart className="text-orange-500 text-3xl mb-4 md:mb-0 md:mr-4" />
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-800">
              Add and Review Items to Your Cart
            </h4>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Click on the items you want to order. You can often adjust quantities or choose additional options (size, toppings, etc.). Double-check your selections and any special instructions before proceeding.
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
          <FaCreditCard className="text-orange-500 text-3xl mb-4 md:mb-0 md:mr-4" />
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-800">
              Checkout and Payment
            </h4>
            <ul className="mt-2 text-gray-600 list-disc list-inside text-sm md:text-base">
              <li>Login or Create Account: Some websites require an account for checkout, while others allow guest checkout.</li>
              <li>Delivery Information: Enter your delivery address and any delivery instructions.</li>
              <li>Payment using M-Pesa.</li>
              <li>Review and Confirm: Review your order details, including price and estimated delivery time. Confirm your order once everything is correct.</li>
            </ul>
          </div>
        </div>
        {/* Step 4 */}
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
          <FaTruck className="text-orange-500 text-3xl mb-4 md:mb-0 md:mr-4" />
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-800">
              Order Tracking (Optional)
            </h4>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              We offer order tracking, allowing you to see the status of your order and estimated arrival time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}