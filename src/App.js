import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import Footer from './components/Footer';
import $ from 'jquery';

// import './assets/css/fontawsom-all.min.css';
// import './assets/css/all.min.css'; // Optional


// import './assets/js/jquery-3.2.1.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/plugins/scroll-fixed/jquery-scrolltofixed-min.js';
// import './assets/plugins/slider/js/owl.carousel.min.js';
// import './assets/js/script.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
