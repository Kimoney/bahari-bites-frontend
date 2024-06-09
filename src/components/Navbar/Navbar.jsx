import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white p-7 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://p1.hiclipart.com/preview/891/739/825/seafood-background-logo-line-character-beak-fish-orange-sa-wing-png-clipart.jpg"
          alt="Bahari Bites Logo"
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-black text-2xl font-bold">Bahari Bites</h1>
      </div>
      <ul className="flex space-x-6">
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer">Home</li>
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer">Menu</li>
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer">About</li>
        <li className="text-black text-lg font-bold hover:text-orange-500 cursor-pointer">Contact Us</li>
      </ul>
      <div className="flex space-x-4">
        <FaShoppingCart className="text-black hover:text-orange-500 cursor-pointer" size={20} />
        <FaUser className="text-black hover:text-orange-500 cursor-pointer" size={20} />
      </div>
    </nav>
  );
};

export default Navbar;