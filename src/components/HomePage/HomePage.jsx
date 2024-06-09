// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const HomePage = () => {
  return (
    <div className="p-8">
      {/* Intro Section */}
      <section className="grid grid-cols-6 gap-4">
      <div className="col-span-6 md:col-span-3 flex flex-col justify-center items-center">
        <div className="text-left mb-8">
            <h2 className="text-5xl font-bold text-orange-500 py-2">Unleash</h2>
            <h2 className="text-5xl font-bold text-orange-500 py-2">Your Taste Buds</h2>
            <h2 className="text-5xl font-bold text-orange-500 py-2">With Our</h2>
            <h2 className="text-5xl font-bold text-orange-500 py-2">Unique Seafood Delights</h2>
        </div>
        <div className="flex justify-around mt-8 mb-8 space-x-7">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
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

      {/* Sneak Peek of the Menu Section */}
      <section className="mt-12">
        <h3 className="text-3xl font-bold text-center text-orange-500">Sneak Peek of the Menu</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow-md">Menu Item 1</div>
          <div className="p-4 bg-white shadow-md">Menu Item 2</div>
          <div className="p-4 bg-white shadow-md">Menu Item 3</div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="mt-12">
        <h3 className="text-3xl font-bold text-center text-orange-500">How to Order</h3>
        <p className="mt-4 text-center">Instructions on how to order go here...</p>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12">
        <h3 className="text-3xl font-bold text-center text-orange-500">Testimonials</h3>
        <div className="mt-4">
          <div className="p-4 bg-white shadow-md">Testimonial 1</div>
          <div className="p-4 bg-white shadow-md mt-4">Testimonial 2</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
