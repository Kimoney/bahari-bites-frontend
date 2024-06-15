// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import {  FaHistory, FaBullseye, FaHeart, FaConciergeBell } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="p-8">
      {/* Intro Section */}
      <section id='home' className="grid grid-cols-6 gap-4 h-screen">
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

{/* About Us Section */}
<section id='about' className="mt-12 h-screen">
  <h3 className="text-3xl font-bold text-center">Who is <span className='text-orange-500'>Bahari Bites</span></h3>
  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="col-span-1 md:col-span-1 flex justify-center items-center">
      <img
        src="https://p1.hiclipart.com/preview/891/739/825/seafood-background-logo-line-character-beak-fish-orange-sa-wing-png-clipart.jpg"
        alt="Bahari Bites Logo"
        className="w-3/4 h-auto"
      />
    </div>
    <div className="col-span-2 flex flex-col justify-center items-center md:items-start">
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
        <div className="p-4 bg-white shadow-md flex flex-col items-center">
          <FaHistory className="text-orange-500" size={40}/>
          <p className="mt-2 text-gray-600 text-center font-bold">Bahari Bites, supplying fresh seafood since 2020</p>
        </div>
        <div className="p-4 bg-white shadow-md flex flex-col items-center">
          <FaBullseye className="text-orange-500" size={40}/>
          <p className="mt-2 text-gray-600 text-center font-bold"> Customer First </p>
          <p className="mt-2 text-gray-600 text-center font-bold"> Own It </p>
          <p className="mt-2 text-gray-600 text-center font-bold"> Be Good </p>
          <p className="mt-2 text-gray-600 text-center font-bold"> Simplicity </p>
        </div>
        <div className="p-4 bg-white shadow-md flex flex-col items-center">
          <FaHeart className="text-orange-500" size={40}/>
          <p className="mt-2 text-gray-600 text-center font-bold">To become a cherished Nairobi institution known for its delicious and innovative seafood creations.</p>
        </div>
        <div className="p-4 bg-white shadow-md flex flex-col items-center">
          <FaConciergeBell className="text-orange-500" size={40}/>
          <p className="mt-2 text-gray-600 text-center font-bold"> Unique culinary delights</p>
          <p className="mt-2 text-gray-600 text-center font-bold"> Exceptional service </p>
          <p className="mt-2 text-gray-600 text-center font-bold"> Diet restriction friendly </p>
          <p className="mt-2 text-gray-600 text-center font-bold"> Events </p>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <img src="https://media.istockphoto.com/id/1492359326/photo/portrait-digital-tablet-and-black-man-in-office-happy-smile-and-empowered-ambition-and.jpg?s=2048x2048&w=is&k=20&c=Xs8z5r_CQtVS7BsbotyBPAT7O1BpIgZuizyvz41GYSk=" alt="CEO" className="w-32 h-32 rounded-full mb-4"/>
      <h4 className="text-xl font-bold">John Doe</h4>
      <p className="text-orange-500 font-semibold">CEO, Bahari Bites</p>
      <p className="mt-4 text-gray-600 italic text-center"> `Exemplary food cuisines are our passion.` </p>
    </div>
    <div className="flex flex-col justify-center items-center">
      <img src="https://media.istockphoto.com/id/638962674/photo/african-american-female-chef-in-commercial-kitchen.jpg?s=2048x2048&w=is&k=20&c=hOJORajLBoCAClTdYvwxK7GhDOywPLPuF1dCWNgq2fE=" alt="Chief Chef" className="w-32 h-32 rounded-full mb-4"/>
      <h4 className="text-xl font-bold">Jane Smith</h4>
      <p className="text-orange-500 font-semibold">Chief Chef, Bahari Bites</p>
      <p className="mt-4 text-gray-600 italic text-center"> `Crafting unique and delicious seafood dishes.` </p>
    </div>
  </div>
</section>



</div>
  );
};

export default HomePage;
