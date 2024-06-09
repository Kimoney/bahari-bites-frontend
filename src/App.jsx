// import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home className="flex-grow" />
      <Footer />
    </div>
  );
};

export default App;