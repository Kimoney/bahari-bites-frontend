import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdContactMail, MdAlternateEmail, MdLocationOn } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import baharilogo from '../../assets/logo/baharilogo.png';

export default function ContactUs() {
  return (
    <div className="mt-12 mb-8 pt-20 bg-gray-100 min-h-screen">
      <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">Contact Us</h3>
      <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row lg:space-x-8">
        
        {/* Contact Form Section */}
        <div className="flex-1 bg-white p-6 lg:p-8 rounded-lg shadow-lg mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block font-bold mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block font-bold mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-bold mb-1">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-bold mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-md p-2 w-full h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="border border-orange-500 text-orange-500 py-2 px-4 rounded-md hover:bg-orange-600 hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="flex-1 bg-white p-6 lg:p-8 rounded-lg shadow-lg">
          <img src={baharilogo} alt="Bahari Bites Logo" className="h-40 w-auto mb-4 mx-auto transform scale-125" />
          <h3 className="text-2xl font-bold mb-6 text-center">Get in touch</h3>
          <div className="flex items-center justify-center gap-4 mt-8 mb-10">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-orange-500 transition-colors duration-300" size={30} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-orange-500 transition-colors duration-300" size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-orange-500 transition-colors duration-300" size={30} />
            </a>
            <a href="x.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-orange-500 transition-colors duration-300" size={30} />
            </a>
          </div>
          <div className="flex items-left ml-8 mb-8">
            <MdContactMail className="text-orange-500 mr-4" size={20} />
            <span>123 GPO, Nairobi, Kenya</span>
          </div>
          <div className="flex items-left ml-8 mb-8">
            <PiPhoneCallFill className="text-orange-500 mr-4" size={20} />
            <span>+254 721 345 678</span>
          </div>
          <div className="flex items-left ml-8 mb-8">
            <MdAlternateEmail className="text-orange-500 mr-4" size={20} />
            <span>info@baharibites.com</span>
          </div>
          <div className="flex items-left ml-8 mb-8">
            <MdLocationOn className="text-orange-500 mr-4" size={20} />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </div>
  );
}
