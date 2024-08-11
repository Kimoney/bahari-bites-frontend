import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutSummary = () => {
    const { cart } = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-md mx-auto lg:max-w-3xl">
                <div className="border border-orange-500 rounded-lg shadow-sm p-4 mt-10 bg-white">
                    <div className="pb-4 mb-4 flex flex-col items-center sm:items-start">
                        <h4 className="text-xl font-bold uppercase text-center sm:text-left">Order Summary</h4>
                        <Link to="/cart" className="mt-2 text-orange-500 text-center sm:text-right uppercase">
                            See Details
                        </Link>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between mt-5 mb-5 p-4 border rounded-lg border-gray-300 bg-orange-100">
                        <p className="text-gray-700 uppercase">Total to pay</p>
                        <p className="text-gray-700">KES {totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col mt-5 mb-5">
                        <p className="text-gray-700 uppercase text-sm text-center sm:text-left">You will pay using</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between mt-5 mb-5 p-4 border rounded-lg border-gray-300 bg-orange-100">
                        <p className="text-gray-700">MPESA +254 XXX XXX 287</p>
                        <p className="text-gray-700">MPESA-LOGO</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link to="/checkout" className="w-full">
                            <button className="border font-extrabold border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-4 rounded-lg w-full">
                                PAY NOW KES {totalPrice.toFixed(2)}
                            </button>
                        </Link>
                    </div>
                    <div className="mt-5 mb-5 p-4 text-xs text-center sm:text-left">
                        <p>By clicking 'PAY NOW' you agree to <span className="text-orange-500">Bahari Bites</span> terms and conditions. Please note: We will never ask for your M-Pesa PIN, CVV, or full card details over the phone or via e-mail. Need help? <span className="text-orange-500">Contact Us</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;
