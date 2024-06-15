import {  FaHistory, FaBullseye, FaHeart, FaConciergeBell } from 'react-icons/fa';

export default function About() {
  return (
<div className="mt-12 h-screen">
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
</div>
  )
}
