import FaStar from 'react-icons/fa';

export default function Testimonials() {
  return (
<div className="mt-12 py-16">
  <h3 className="text-3xl font-bold text-center text-orange-500">Testimonials</h3>
  <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        name: 'John Doe',
        date: 'March 5, 2024',
        review: 'The seafood here is simply amazing! I had a wonderful experience.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        rating: 5,
      },
      {
        name: 'Jane Smith',
        date: 'April 12, 2024',
        review: 'Absolutely delicious food and great service. Highly recommend!',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        rating: 4,
      },
      {
        name: 'Michael Brown',
        date: 'May 8, 2024',
        review: 'A delightful dining experience with unique seafood dishes.',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        rating: 4,
      },
      {
        name: 'Emily Davis',
        date: 'June 1, 2024',
        review: 'Exceptional flavors and fantastic customer service.',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        rating: 5,
      },
      {
        name: 'David Wilson',
        date: 'June 15, 2024',
        review: 'A must-visit for seafood lovers. Top-notch quality!',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        rating: 5,
      },
      {
        name: 'Sarah Johnson',
        date: 'July 3, 2024',
        review: 'Great ambiance and even better food. Loved every bite.',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        rating: 4,
      },
    ].map((testimonial, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="text-lg font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        </div>
        <p className="mb-4 text-gray-700">{testimonial.review}</p>
        <div className="flex">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-orange-500" />
          ))}
          {[...Array(5 - testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-gray-300" />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
  )
}
