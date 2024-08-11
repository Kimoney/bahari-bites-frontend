import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Menu from './components/Menu/Menu';
import HowToOrder from './components/HowToOrder/HowToOrder';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CheckoutSummary from './components/CheckoutSummary/CheckoutSummary';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className='flex-grow'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/howtoorder" element={<HowToOrder />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/summary" element={<CheckoutSummary />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
