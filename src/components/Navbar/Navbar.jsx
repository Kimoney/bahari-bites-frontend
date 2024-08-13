import { useState, useEffect } from 'react';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaHome, FaUtensils, FaInfoCircle, FaPhone, FaReceipt } from 'react-icons/fa';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { TbShoppingCartQuestion } from "react-icons/tb";
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import baharilogo from '../../assets/logo/baharilogo.png';

const Navbar = () => {

  const { cart, clearCart } = useCart();
  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalUniqueItems = cart.length;

  const { authState, logout } = useAuth();


  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  // Logout Logic
  const handleLogout = () => {
    clearCart();   // Clear the cart first
    logout();      // Then logout the user
    navigate('/'); // Redirect to the home page
  };

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
        <Link to="/">
        <img
          src={baharilogo}
          alt="Bahari Bites Logo"
          className="w-12 h-12 mr-2 transform scale-150"
        />
        </Link>
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
      <div className="flex space-x-5 relative ml-3 mr-3">
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

      <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton>
          <FaUser className="text-black hover:text-orange-500 cursor-pointer" size={20} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {authState.isAuthenticated ? (
            <>
              <MenuItem>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:bg-orange-100"
                >
                  Profile
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="/help"
                  className="block px-4 py-2 text-sm hover:bg-orange-100"
                >
                  Help
                </a>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-orange-100"
                >
                  Logout
                </button>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem>
                <a
                  href="/login"
                  className="block px-4 py-2 text-sm hover:bg-orange-100"
                >
                  Login
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="/register"
                  className="block px-4 py-2 text-sm hover:bg-orange-100"
                >
                  Register
                </a>
              </MenuItem>
            </>
          )}
        </div>
      </MenuItems>
    </Menu>
      
    </div>
    </nav>
  );
};

export default Navbar;
