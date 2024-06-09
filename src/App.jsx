// import './App.css'
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HomePage className="flex-grow" />
      <Footer />
    </div>
  );
};

export default App;