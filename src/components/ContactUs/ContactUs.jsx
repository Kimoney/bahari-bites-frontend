import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  return (
<div className="mt-12 h-screen">
  <h3 className="text-3xl font-bold text-center text-orange-500">Contact Us</h3>
  <div className="container mx-auto flex flex-col lg:flex-row justify-center h-full">
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-bold">First Name</label>
          <input type="text" id="firstName" name="firstName" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-bold">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-bold">Phone</label>
          <input type="text" id="phone" name="phone" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold">Email</label>
          <input type="email" id="email" name="email" className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold">Message</label>
          <textarea id="message" name="message" className="border p-2 w-full h-32"></textarea>
        </div>
        <button type="submit" className="bg-orange-500 text-white py-2 px-4">Submit</button>
      </form>
    </div>
    <div className="flex-1 p-8 flex flex-col items-center justify-center">
      <img src="https://p1.hiclipart.com/preview/891/739/825/seafood-background-logo-line-character-beak-fish-orange-sa-wing-png-clipart.jpg" alt="Company Logo" className="w-32 h-32 mb-4" />
      <h3 className="text-xl text-orange-500 font-bold mb-2">Bahari Bites</h3>
      <p className="mb-2">Address: 123 GPO, Nairobi, Kenya</p>
      <div className="flex items-center mb-2">
        <FaPhone className="mr-2" /> +254 721 345 678
      </div>
      <div className="flex items-center">
        <FaEnvelope className="mr-2" /> info@baharibites.com
      </div>
    </div>
  </div>
</div>
  )
}
