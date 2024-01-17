import './App.css';
import Festival from './components/Festival';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstSlide from './components/FirstSlide';
import ShopingShop from './components/ShopingShop';
import Wooden from './components/Wooden';
import Terminal from './components/Terminal';
import Latest from './components/Latest';
import { useEffect, useState } from 'react';
import Preload from './components/Preload';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToTop from './components/BackToTop';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';

function App() {
  const [PreLoader, setPreLoader] = useState(false)
  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 3000)
  }, [])
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, [])
  return (
    <div>
      {PreLoader ? (<div> <Preload /> </div>) :
        (<div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Shop />} />
          </Routes>
        </div>)
      }
    </div>
  );
}

export default App;