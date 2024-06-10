// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { FaPhone, FaEnvelope, FaStar, FaHistory, FaBullseye, FaHeart, FaConciergeBell, FaUtensils, FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="p-8">
      {/* Intro Section */}
<section className="grid grid-cols-6 gap-4 h-screen">
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
<section className="mt-12 h-screen">
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


{/* How to Order Section */}
<section className="mt-12 h-screen">
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
</section>

{/* Testimonials Section */}
<section className="mt-12 py-16">
  <h3 className="text-3xl font-bold text-center text-orange-500">Testimonials</h3>
  <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        name: 'John Doe',
        date: 'March 5, 2024',
        review: 'The seafood here is simply amazing! I had a wonderful experience.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 5,
      },
      {
        name: 'Jane Smith',
        date: 'April 12, 2024',
        review: 'Absolutely delicious food and great service. Highly recommend!',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 4,
      },
      {
        name: 'Michael Brown',
        date: 'May 8, 2024',
        review: 'A delightful dining experience with unique seafood dishes.',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        rating: 4,
      },
      {
        name: 'Emily Davis',
        date: 'June 1, 2024',
        review: 'Exceptional flavors and fantastic customer service.',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        rating: 5,
      },
      {
        name: 'David Wilson',
        date: 'June 15, 2024',
        review: 'A must-visit for seafood lovers. Top-notch quality!',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        rating: 5,
      },
      {
        name: 'Sarah Johnson',
        date: 'July 3, 2024',
        review: 'Great ambiance and even better food. Loved every bite.',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        rating: 4,
      },
    ].map((testimonial, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="text-lg font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        </div>
        <p className="mb-4 text-gray-700">{testimonial.review}</p>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-orange-500" />
          ))}
          {[...Array(5 - testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-gray-300" />
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

{/* Contact Us Section */}

<section className="mt-12 h-screen">
  <h3 className="text-3xl font-bold text-center text-orange-500">Contact Us</h3>
  <div className="container mx-auto flex flex-col lg:flex-row justify-center h-full">
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-bold">First Name</label>
          <input type="text" id="firstName" name="firstName" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-bold">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-bold">Phone</label>
          <input type="text" id="phone" name="phone" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold">Email</label>
          <input type="email" id="email" name="email" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold">Message</label>
          <textarea id="message" name="message" className="border p-2 w-full h-32"></textarea>
        </div>
        <button type="submit" className="bg-orange-500 text-white py-2 px-4">Submit</button>
      </form>
    </div>
    <div className="flex-1 p-8 flex flex-col items-center justify-center">
      <img src="https://p1.hiclipart.com/preview/891/739/825/seafood-background-logo-line-character-beak-fish-orange-sa-wing-png-clipart.jpg" alt="Company Logo" className="w-32 h-32 mb-4" />
      <h3 className="text-xl text-orange-500 font-bold mb-2">Bahari Bites</h3>
      <p className="mb-2">Address: 123 GPO, Nairobi, Kenya</p>
      <div className="flex items-center mb-2">
        <FaPhone className="mr-2" /> +254 721 345 678
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-2" /> info@baharibites.com
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default HomePage;
