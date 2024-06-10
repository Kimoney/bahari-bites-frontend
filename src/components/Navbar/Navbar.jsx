import { FaShoppingCart, FaUser, FaHome, FaUtensils, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white p-7 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <img
          src="https://p1.hiclipart.com/preview/891/739/825/seafood-background-logo-line-character-beak-fish-orange-sa-wing-png-clipart.jpg"
          alt="Bahari Bites Logo"
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-orange-500 text-2xl font-bold hidden md:block">Bahari Bites</h1>
      </div>
      <ul className="flex space-x-7">
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer hidden md:inline">Home</li>
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer hidden md:inline">Menu</li>
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer hidden md:inline">About</li>
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer hidden md:inline">Contact Us</li>
        <li className="md:hidden"><FaHome className="text-black hover:text-orange-500 cursor-pointer" size={20} /></li>
        <li className="md:hidden"><FaUtensils className="text-black hover:text-orange-500 cursor-pointer" size={20} /></li>
        <li className="md:hidden"><FaInfoCircle className="text-black hover:text-orange-500 cursor-pointer" size={20} /></li>
        <li className="md:hidden"><FaPhone className="text-black hover:text-orange-500 cursor-pointer" size={20} /></li>
      </ul>
      <div className="flex space-x-6">
        <FaShoppingCart className="text-black hover:text-orange-500 cursor-pointer" size={20} />
        <FaUser className="text-black hover:text-orange-500 cursor-pointer" size={20} />
      </div>
    </nav>
  );
};

export default Navbar;