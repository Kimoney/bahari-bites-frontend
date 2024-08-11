import React from 'react';
import { FaClock, FaShoppingCart, FaBoxes, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserProfile = () => {

  return (
    <div className="flex flex-col lg:flex-row pt-20 justify-center gap-8 px-4 lg:px-16 mt-8">
    {/* User Statistics  */}
        <div className="w-full lg:w-4/12 overflow-y-auto">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
            <div className="border-b border-gray-300 pb-4 mb-4">
                <h4 className="text-xl font-bold capitalize text-orange-500 text-left">John Doe</h4>
            </div>
            <div className="flex items-center justify-between mt-5 mb-5 pb-4 border-b border-gray-300">
                <div className="flex items-center">
                    <FaClock className="text-gray-700 mr-2" />
                    <p className="text-gray-700">Last Online</p>
                </div>
                <p className="text-gray-700">5 hours ago</p>
            </div>
            <div className="flex items-center justify-between mt-5 mb-5 pb-4 border-b border-gray-300">
                <div className="flex items-center">
                    <FaShoppingCart className="text-gray-700 mr-2" />
                    <p className="text-gray-700">Last Order</p>
                </div>
                <p className="text-gray-700">3 days ago</p>
            </div>
            <div className="flex items-center justify-between mt-5 mb-5 pb-4 border-b border-gray-300">
                <div className="flex items-center">
                    <FaBoxes className="text-gray-700 mr-2" />
                    <p className="text-gray-700">Total Orders</p>
                </div>
                <p className="text-gray-700">0</p>
            </div>
            <div className="flex items-center justify-between mt-5 mb-5">
                <div className="flex items-center">
                    <FaStar className="text-gray-700 mr-2" />
                    <p className="text-gray-700">Reviews</p>
                </div>
                <div className="text-red-500 border border-orange-500 rounded-lg p-2">None</div>
            </div>
        </div>
        </div>
    
    {/* Previous Orders */}


      <div className="w-full lg:w-8/12">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4">
        <h1 className="text-xl font-bold mb-6 uppercase text-left">Order History</h1>
        {/* Conditional 1 */}
            {/* <div className="text-center py-10">
              <p className="text-xl font-bold mb-4">You haven't ordered yet.</p>
              <Link 
                to="/menu" 
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg inline-block"
              >
                Order Here
              </Link>
            </div> */}
          {/* Conditional 2 */}
            <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-orange-100 border whitespace-nowrap">
                  <th className="text-left py-2 uppercase px-4">Order Number</th>
                  <th className="text-left py-2 uppercase px-4">Amount</th>
                  <th className="text-left py-2 uppercase px-4">Time</th>
                  <th className="text-left py-2 uppercase px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                  <tr className="border-b whitespace-nowrap">
                    <td className="py-4 px-4">
                      <span className="text-gray-600">123-2234-456</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-600">KES 1500.00</span>
                    </td>
                    <td className="py-4 px-4">
                    <td className="py-4 px-4">
                      <span className="text-gray-600">6-Aug-2024 17:30</span>
                    </td>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-green-600">Completed</span>
                    </td>
                  </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-left py-4">
                    <Link 
                      to="/menu" 
                      className="text-orange-500 px-4 py-2 rounded-lg border border-orange-500 mr-4 inline-block hover:bg-orange-500 hover:text-white"
                    >
                      Order Again
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
