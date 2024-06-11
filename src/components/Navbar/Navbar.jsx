import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
          <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            Home
          </ScrollLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'menu' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <ScrollLink to="menu" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            Menu
          </ScrollLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'howtoorder' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <ScrollLink to="howtoorder" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            How to Order
          </ScrollLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'about' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            About Us
          </ScrollLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'testimonials' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <ScrollLink to="testimonials" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            Testimonials
          </ScrollLink>
        </li>
        <li className={`hidden md:inline text-lg font-bold cursor-pointer ${activeSection === 'contact' ? 'text-orange-500' : 'text-black hover:text-orange-500'}`}>
          <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            Contact Us
          </ScrollLink>
        </li>
        <li className="md:hidden">
          <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <FaHome className={`text-black ${activeSection === 'home' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </ScrollLink>
        </li>
        <li className="md:hidden">
          <ScrollLink to="menu" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <FaUtensils className={`text-black ${activeSection === 'menu' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </ScrollLink>
        </li>
        <li className="md:hidden">
          <ScrollLink to="howtoorder" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <TbShoppingCartQuestion className={`text-black ${activeSection === 'howtoorder' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </ScrollLink>
        </li>
        <li className="md:hidden">
          <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <FaInfoCircle className={`text-black ${activeSection === 'about' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </ScrollLink>
        </li>
        <li className="md:hidden">
          <ScrollLink to="testimonials" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <FaReceipt className={`text-black ${activeSection === 'testimonials' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </ScrollLink>
        </li>
        <li className="md:hidden">
          <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500} onSetActive={handleSetActive}>
            <FaPhone className={`text-black ${activeSection === 'contact' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </ScrollLink>
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
