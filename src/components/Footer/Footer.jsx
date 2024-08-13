import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4">
      <div className="container mx-auto flex sm:flex-row justify-between items-center">
        <div className="flex items-center md:space-x-4 space-x-2 mb-4 sm:mb-0">
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
        <p className="text-orange-500 font-bold mb-4 sm:mb-0 whitespace-nowrap">
          &copy; {currentYear} Bahari Bites
        </p>
        <div className="whitespace-nowrap flex flex-col sm:flex-row items-right space-y-2 sm:space-y-0 sm:space-x-4">
          <a href="#" className="hover:text-orange-400">FAQ</a>
          <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
          <a href="#" className="hover:text-orange-400">Careers</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
