import React from 'react';
import TodaysSpecial from '../TodaysSpecial/TodaysSpecial';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/3192171/pexels-photo-3192171.jpeg')` }}
      >
        <div className="container mx-auto px-6 text-left">
          <div className="animate-slide-in">
            <h1 className="text-5xl font-bold  mb-4">
              Unleash Your <span className='text-orange-500'>Taste Buds</span> With<br />
              Our <span className='text-orange-500'>Seafood</span> Delights
            </h1>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div>
              <Link to="/menu" className="border border-orange-500 hover:text-black hover:bg-orange-500 py-2 px-6 rounded-full mr-4">
                Order Now
              </Link>
              <Link to="/howtoorder" className="border border-orange-500 hover:text-black hover:bg-orange-500 py-2 px-6 rounded-full">
                How to Order
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TodaysSpecial />
    </>
  );
};

export default Homepage;
