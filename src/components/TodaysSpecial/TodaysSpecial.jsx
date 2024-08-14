import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiHeart, FiStar, FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CONFIG from '../../../config';
import { useCart } from '../../context/CartContext'; // Adjust the path as necessary

const TodaysSpecial = () => {
  const [specials, setSpecials] = useState([]);
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${CONFIG.API_BASE_URL}/menu`);
        const data = await response.json();
        const randomSpecials = data.sort(() => 0.5 - Math.random()).slice(0, 5);
        setSpecials(randomSpecials);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenu();
  }, []);

  const handleIncrement = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    updateQuantity(itemId, item.quantity + 1);
  };

  const handleDecrement = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    if (item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container border p-4 rounded-xl mx-auto my-16">
      <h2 className="text-3xl font-bold text-left text-orange-500 mb-8">Today's Special</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {specials.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <div key={item.id} className="p-4">
              <div className="overflow-hidden rounded-lg border p-2 transition-all duration-300 hover:border-orange-500 hover:shadow-xl">
                <div className="group relative divide-y divide-default-200 overflow-hidden rounded-lg">
                  <div className="mx-auto mb-4 h-48">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="h-full w-full object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-2">
                    <div className="mb-4 flex items-center justify-between">
                      <Link
                        to={`/menu/${item.id}`}
                        className="line-clamp-1 text-base lg:text-xl font-bold text-default-800 after:absolute after:inset-0"
                      >
                        {item.name}
                      </Link>
                      <button type="button">
                        <FiHeart className="relative z-10 cursor-pointer transition-all hover:fill-red-500 hover:text-red-500" />
                      </button>
                    </div>

                    <div className="mb-4 flex items-end justify-between">
                      <h4 className="text-base lg:text-2xl font-bold leading-9 text-default-900">
                        KES {item.price}
                      </h4>
                      <span className="mb-4 inline-flex items-center gap-2">
                        <span className="rounded-full bg-orange-500 p-1">
                          <FiStar className="fill-white text-white text-sm lg:text-base" />
                        </span>
                        <span className="text-xs lg:text-sm text-default-950">
                          {item.rating}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {quantity > 0 ? (
                        <div className="relative z-10 inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium shadow-sm space-x-4">
                          <button
                            type="button"
                            onClick={() => handleDecrement(item.id)}
                            className="text-orange-500 text-base lg:text-lg p-2 cursor-pointer"
                          >
                            <FiMinus />
                          </button>
                          <span className="text-base lg:text-lg font-bold">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleIncrement(item.id)}
                            className="text-orange-500 text-base lg:text-lg p-2 cursor-pointer"
                          >
                            <FiPlus />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 text-base lg:text-lg p-2 cursor-pointer"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      ) : (
                        <button
                          className="relative z-10 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-orange-600"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TodaysSpecial;
