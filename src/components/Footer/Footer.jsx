import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <a href="#" className="hover:text-orange-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-orange-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-orange-400">
            <FaInstagram />
          </a>
        </div>
        <p className="text-orange-500 font-bold mb-4 sm:mb-0">
          &copy; {currentYear} Bahari Bites
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="#" className="hover:text-orange-400">FAQ</a>
          <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
          <a href="#" className="hover:text-orange-400">Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
