import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useIsFetching } from 'react-query';
import { useDispatch } from 'react-redux';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import BlogDetails from './pages/BlogDetails';
import DestinationDetail from './pages/DestinationDetail';
import Booking from './pages/Booking';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import { fetchDestinations } from './redux/destinationApiSlice';

import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';

const queryClient = new QueryClient();

const RedirectToAdmin = () => {
  useEffect(() => {
    window.location.href = "https://apiecoheartadv.xyz.elyakadventures.com/admin";
  }, []);
  return null;
};

function App() {
  const dispatch = useDispatch();
  // const isFetching = useIsFetching(); // Returns count of active queries in React Query v3
  // console.log('Active queries:', isFetching);


  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* {isFetching > 0 && <LoadingScreen />} */}
      <Router>
        <ScrollToTop />
        <LoadingScreen />
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<RedirectToAdmin />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
