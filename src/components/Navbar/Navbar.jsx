import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaHome, FaUtensils, FaInfoCircle, FaPhone, FaReceipt } from 'react-icons/fa';
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useCart } from '../../context/CartContext';


const Navbar = () => {

  const { cart } = useCart();
  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalUniqueItems = cart.length;


  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Set active section based on current URL path
    const path = location.pathname;
    switch (path) {
      case '/':
        setActiveSection('home');
        break;
      case '/menu':
        setActiveSection('menu');
        break;
      case '/howtoorder':
        setActiveSection('howtoorder');
        break;
      case '/about':
        setActiveSection('about');
        break;
      case '/testimonials':
        setActiveSection('testimonials');
        break;
      case '/contact':
        setActiveSection('contact');
        break;
      case '/cart':
        setActiveSection('cart');
        break;
      default:
        setActiveSection('');
    }
  }, [location]);

  return (
    <nav className="bg-white p-4 shadow-md fixed w-full z-50 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://p1.hiclipart.com/preview/891/739/825/seafood-background-logo-line-character-beak-fish-orange-sa-wing-png-clipart.jpg"
          alt="Bahari Bites Logo"
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-orange-500 text-2xl font-bold hidden md:block whitespace-nowrap">Bahari Bites</h1>
      </div>
      <ul className="flex space-x-6 items-center">
        <li className={`hidden md:inline text-sm md:text-lg font-bold cursor-pointer ${activeSection === 'home' ? 'text-orange-500' : 'text-black hover:text-orange-500'} whitespace-nowrap`}>
          <NavLink to="/" onClick={() => setActiveSection('home')}>
          Home
          </NavLink>
        </li>
        <li className={`hidden md:inline text-sm md:text-lg font-bold cursor-pointer ${activeSection === 'menu' ? 'text-orange-500' : 'text-black hover:text-orange-500'} whitespace-nowrap`}>
          <NavLink to="/menu" onClick={() => setActiveSection('menu')}>
          Menu
          </NavLink>
        </li>
        <li className={`hidden md:inline text-sm md:text-lg font-bold cursor-pointer ${activeSection === 'howtoorder' ? 'text-orange-500' : 'text-black hover:text-orange-500'} whitespace-nowrap`}>
          <NavLink to="/howtoorder" onClick={() => setActiveSection('howtoorder')}>
          How to Order
          </NavLink>
        </li>
        <li className={`hidden md:inline text-sm md:text-lg font-bold cursor-pointer ${activeSection === 'about' ? 'text-orange-500' : 'text-black hover:text-orange-500'} whitespace-nowrap`}>
          <NavLink to="/about" onClick={() => setActiveSection('about')}>
          About Us
          </NavLink>
        </li>
        <li className={`hidden md:inline text-sm md:text-lg font-bold cursor-pointer ${activeSection === 'testimonials' ? 'text-orange-500' : 'text-black hover:text-orange-500'} whitespace-nowrap`}>
          <NavLink to="/testimonials" onClick={() => setActiveSection('testimonials')}>
          Testimonials
          </NavLink>
        </li>
        <li className={`hidden md:inline text-sm md:text-lg font-bold cursor-pointer ${activeSection === 'contact' ? 'text-orange-500' : 'text-black hover:text-orange-500'} whitespace-nowrap`}>
          <NavLink to="/contact" onClick={() => setActiveSection('contact')}>
          Contact Us
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/" onClick={() => setActiveSection('home')}>
            <FaHome className={`text-black ${activeSection === 'home' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/menu" onClick={() => setActiveSection('menu')}>
            <FaUtensils className={`text-black ${activeSection === 'menu' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/howtoorder" onClick={() => setActiveSection('howtoorder')}>
            <TbShoppingCartQuestion className={`text-black ${activeSection === 'howtoorder' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/about" onClick={() => setActiveSection('about')}>
            <FaInfoCircle className={`text-black ${activeSection === 'about' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/testimonials" onClick={() => setActiveSection('testimonials')}>
            <FaReceipt className={`text-black ${activeSection === 'testimonials' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
        <li className="md:hidden">
          <NavLink to="/contact" onClick={() => setActiveSection('contact')}>
            <FaPhone className={`text-black ${activeSection === 'contact' ? 'text-orange-500' : 'hover:text-orange-500'}`} size={20} />
          </NavLink>
        </li>
      </ul>
      <div className="flex space-x-5 relative ml-3">
        <NavLink to="/cart" onClick={() => setActiveSection('cart')}>
          <div className="relative">
            <FaShoppingCart 
                className={`text-black ${activeSection === 'cart' ? 'text-orange-500' : 'hover:text-orange-800'}`} 
                size={20} 
              />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </NavLink>
      <FaUser className="text-black hover:text-orange-500 cursor-pointer" size={20} />
    </div>
    </nav>
  );
};

export default Navbar;
