import { FaHistory, FaBullseye, FaHeart, FaConciergeBell } from 'react-icons/fa';
import baharilogo from '../../assets/logo/baharilogo.png';

export default function About() {
  return (
    <div className="pt-20 px-4 m-4 md:m-8 lg:m-24">
      <h3 className="text-3xl font-bold text-center mb-8">
        Who is <span className='text-orange-500'>Bahari Bites</span>
      </h3>
      <div className="mt-4 flex flex-col md:flex-row gap-8">
        <div className="flex justify-center items-center md:w-1/3">
          <img
            src={baharilogo}
            alt="Bahari Bites Logo"
            className="w-3/4 h-auto max-w-xs"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:border-orange-500 border-2 border-transparent hover:shadow-xl">
              <FaHistory className="text-orange-500 mb-4 mx-auto" size={40}/>
              <p className="mt-4 text-gray-600 text-left">Bahari Bites, supplying fresh seafood since 2020</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:border-orange-500 border-2 border-transparent hover:shadow-xl">
              <FaHeart className="text-orange-500 mb-4 mx-auto" size={40}/>
              <p className="mt-4 text-gray-600 text-center">To become a cherished Nairobi institution known for its delicious and innovative seafood creations.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:border-orange-500 border-2 border-transparent hover:shadow-xl">
              <FaBullseye className="text-orange-500 mb-4 mx-auto" size={40}/>
              <p className="mt-4 text-gray-600 text-center">Customer First</p>
              <p className="mt-4 text-gray-600 text-center">Own It</p>
              <p className="mt-4 text-gray-600 text-center">Be Good</p>
              <p className="mt-4 mb-3 text-gray-600 text-center">Simplicity</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:border-orange-500 border-2 border-transparent hover:shadow-xl">
              <FaConciergeBell className="text-orange-500 mb-4 mx-auto" size={40}/>
              <p className="mt-4 text-gray-600 text-center">Unique culinary delights</p>
              <p className="mt-4 text-gray-600 text-center">Exceptional service</p>
              <p className="mt-4 text-gray-600 text-center">Diet restriction friendly</p>
              <p className="mt-4 text-gray-600 text-center">Events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
