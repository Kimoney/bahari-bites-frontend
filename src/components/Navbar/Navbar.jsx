import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaHome, FaUtensils, FaInfoCircle, FaPhone, FaReceipt } from 'react-icons/fa';
import { TbShoppingCartQuestion } from "react-icons/tb";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav className="bg-white p-4 shadow-md fixed w-full z-50 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://p1.hiclipart.com/preview/891/739/825/seafood-background-logo-line-character-beak-fish-orange-sa-wing-png-clipart.jpg"
          alt="Bahari Bites Logo"
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-orange-500 text-2xl font-bold hidden md:block">Bahari Bites</h1>
      </div>
      <ul className="flex space-x-7 items-center">
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'home' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <NavLink to="/" activeClassName="text-orange-500" onClick={() => handleSetActive('home')}>
            Home
          </NavLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'menu' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <NavLink to="/menu" activeClassName="text-orange-500" onClick={() => handleSetActive('menu')}>
            Menu
          </NavLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'howtoorder' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <NavLink to="/howtoorder" activeClassName="text-orange-500" onClick={() => handleSetActive('howtoorder')}>
            How to Order
          </NavLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'about' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <NavLink to="/about" activeClassName="text-orange-500" onClick={() => handleSetActive('about')}>
            About Us
          </NavLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'testimonials' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <NavLink to="/testimonials" activeClassName="text-orange-500" onClick={() => handleSetActive('testimonials')}>
            Testimonials
          </NavLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'contact' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <NavLink to="/contact" activeClassName="text-orange-500" onClick={() => handleSetActive('contact')}>
            Contact Us
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/" activeClassName="text-orange-500" onClick={() => handleSetActive('home')}>
            <FaHome className={`text-black ${activeSection === 'home' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/menu" activeClassName="text-orange-500" onClick={() => handleSetActive('menu')}>
            <FaUtensils className={`text-black ${activeSection === 'menu' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/howtoorder" activeClassName="text-orange-500" onClick={() => handleSetActive('howtoorder')}>
            <TbShoppingCartQuestion className={`text-black ${activeSection === 'howtoorder' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/about" activeClassName="text-orange-500" onClick={() => handleSetActive('about')}>
            <FaInfoCircle className={`text-black ${activeSection === 'about' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/testimonials" activeClassName="text-orange-500" onClick={() => handleSetActive('testimonials')}>
            <FaReceipt className={`text-black ${activeSection === 'testimonials' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/contact" activeClassName="text-orange-500" onClick={() => handleSetActive('contact')}>
            <FaPhone className={`text-black ${activeSection === 'contact' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
      </ul>
      <div className="flex space-x-6">
        <FaShoppingCart className="text-black hover:text-orange-500 cursor-pointer" size={20} />
        <FaUser className="text-black hover:text-orange-500 cursor-pointer" size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
