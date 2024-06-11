import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-2 text-white flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black hover:text-orange-400">
          <FaFacebook />
        </a>
        <a href="#" className="text-black hover:text-orange-400">
          <FaTwitter />
        </a>
        <a href="#" className="text-black hover:text-orange-400">
          <FaInstagram />
        </a>
      </div>
      <p className="text-orange-500 font-bold">&copy; 2024 Bahari Bites</p>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black hover:text-orange-400">FAQ</a>
        <a href="#" className="text-black hover:text-orange-400">Terms & Conditions</a>
        <a href="#" className="text-black hover:text-orange-400">Careers</a>
      </div>
    </footer>
  );
};

export default Footer;
