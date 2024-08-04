// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const HomePage = () => {
  return (
    <div className="p-8">
      {/* Intro Section */}
      <section id='home' className="grid grid-cols-6 gap-4 h-screen pt-20">
        <div className="col-span-6 md:col-span-3 flex flex-col justify-center items-center">
          <div className="text-left mb-8">
            <h2 className="text-5xl font-bold py-4">Unleash</h2>
            <h2 className="text-5xl font-bold py-4">Your <span className="text-orange-500">Taste</span> Buds</h2>
            <h2 className="text-5xl font-bold py-4">With Our</h2>
            <h2 className="text-5xl font-bold py-4"><span className="text-orange-500">Unique Seafood</span> Delights</h2>
            <p className="text-xl font-bold py-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        <div className="flex justify-around mt-8 mb-8 space-x-7">
          <button className="border-2 border-orange-500 bg-orange-500 rounded-lg hover:bg-black hover:text-orange-500 text-white font-bold py-2 px-4">
            Order Now
          </button>
          <button className="border-2 border-orange-500 rounded-lg hover:bg-black text-orange-500 font-bold py-2 px-4">
            How to Order
          </button>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3">
    {/* Image Carousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Seafood 1" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Seafood 2" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Seafood 3" />
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1661445014453-784cd6c59ac8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Seafood 4" />
        </div>
      </Carousel>
    </div>
  </section>

</div>
  );
};

export default HomePage;
