import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import BlogDetails from './pages/BlogDetails';
import DestinationDetail from './pages/DestinationDetail';
import Booking from './pages/Booking';
import ScrollToTop from './components/ScrollToTop';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDestinations } from './redux/destinationApiSlice';

const queryClient = new QueryClient();

// import './assets/css/fontawsom-all.min.css';
// import './assets/css/all.min.css'; // Optional


// import './assets/js/jquery-3.2.1.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap.min.js';
// import './assets/plugins/scroll-fixed/jquery-scrolltofixed-min.js';
// import './assets/plugins/slider/js/owl.carousel.min.js';
// import './assets/js/script.js';

const RedirectToAdmin = () => {
  useEffect(() => {
    window.location.href = "https://apiecoheartadv.xyz.elyakadventures.com/admin";
  }, []);

  return null;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop />
      <QueryClientProvider client={queryClient} >
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/destinations/:id' element={<DestinationDetail />} />
          <Route path='/booking' element={<Booking />} />
          <Route path="/admin" element={<RedirectToAdmin />} />
        </Routes>
        <Footer />
      </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
