import React from 'react';
import TodaysSpecial from '../TodaysSpecial/TodaysSpecial';

const Homepage = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1150447/pexels-photo-1150447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
      >
        <div className="container mx-auto px-6 text-left">
          <div className="animate-slide-in">
            <h1 className="text-5xl font-bold text-orange-100 mb-4">
              Unleash Your <span className='text-orange-500'>Taste Buds</span> With<br />
              Our <span className='text-orange-500'>Seafood</span> Delights
            </h1>
            <p className="text-lg text-orange-100 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
              sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div>
              <button className="bg-orange-500 text-white py-2 px-6 rounded-full mr-4">
                Order Now
              </button>
              <button className="bg-orange-500 text-white py-2 px-6 rounded-full">
                How to Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <TodaysSpecial />
    </>
  );
};

export default Homepage;
