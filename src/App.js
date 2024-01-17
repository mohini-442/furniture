
import './App.css';
import Home from './pages/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div >
  );
}

export default App;
