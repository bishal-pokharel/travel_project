import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_IMAGE_URL } from '../api/url';

const Destinations = ({ flag }) => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);

  const {data, isLoading, error} = useSelector((state) => state.destinations);

  // Simulating an API call to fetch destination data
  // useEffect(() => {
  //   const fetchDestinations = async () => {
  //     try {
  //       // Simulate API data
  //       const response = [
  //         { id: 'abc', name: 'Annapurna Base Camp', img: '/assets/images/destination/d1.jpg', description: 'Annapurna Base Camp offers stunning mountain views and serene trekking adventures.' },
  //         { id: 'ebc', name: 'Everest Base Camp', img: '/assets/images/destination/d2.jpg', description: 'Everest Base Camp is a gateway to the world’s highest peak, offering awe-inspiring views and thrilling adventures.' },
  //         { id: 'langtang', name: 'Langtang Himal', img: '/assets/images/destination/d3.jpg', description: 'Langtang Himal is a serene escape, known for its lush valleys, rich culture, and stunning Himalayan vistas' },
  //         // Add more destinations here
  //       ];
  //       setDestinations(response);
  //     } catch (error) {
  //       console.error("Error fetching destinations data:", error);
  //     }
  //   };

  //   fetchDestinations();
  // }, []);

  return (
    <div className="destinations container-fluid">
      <div className="container">
        <div className="session-title">
          <h2>OUR DESTINATIONS</h2>
          <p>Discover a world of breathtaking experiences with us! From serene landscapes to vibrant cities, each destination offers a unique blend of culture, adventure, and beauty.</p>
        </div>
        <div className="dest-row row">
          {data?.results?.map((destination) => {
            return(
            <div className="col-lg-4 col-md-6" key={destination.id}>
              <div className="dest-col position-relative">
                <div className="dest-img position-relative">
                  <img src={`${BASE_IMAGE_URL}${destination.thumbnail}`} alt={destination.name} />
                <h3>{destination.title}</h3>
                </div>
                <p className='pt-3'>{destination.subtitle}</p>
                <p className='.highlight-text'>{destination.price? '' : '$500 / person'}</p>
                <p className='card_days_popup'>{destination.day? destination.day : '7 days'}</p>
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate(`/destinations/${destination.id}`)}
                >
                  SEE MORE
                </button>
              </div>
            </div>
            )
          })}
        </div>
        <div className="see_all_class">
          {flag === 'homepageflag' ? (
            <Link to='/destinations' className="btn btn-outline-success">See All Destinations</Link>
          ) : ''}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
