import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Destinations = ({ flag }) => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);

  // Simulating an API call to fetch destination data
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        // Simulate API data
        const response = [
          { id: 'abc', name: 'Annapurna Base Camp', img: '/assets/images/destination/d1.jpg', description: 'Annapurna Base Camp offers stunning mountain views and serene trekking adventures.' },
          { id: 'ebc', name: 'Everest Base Camp', img: '/assets/images/destination/d2.jpg', description: 'Everest Base Camp is a gateway to the world’s highest peak, offering awe-inspiring views and thrilling adventures.' },
          { id: 'langtang', name: 'Langtang Himal', img: '/assets/images/destination/d3.jpg', description: 'Langtang Himal is a serene escape, known for its lush valleys, rich culture, and stunning Himalayan vistas' },
          // Add more destinations here
        ];
        setDestinations(response);
      } catch (error) {
        console.error("Error fetching destinations data:", error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className="destinations container-fluid">
      <div className="container">
        <div className="session-title">
          <h2>Our Destinations</h2>
          <p>Discover a world of breathtaking experiences with us! From serene landscapes to vibrant cities, each destination offers a unique blend of culture, adventure, and beauty.</p>
        </div>
        <div className="dest-row row">
          {destinations.map((destination) => (
            <div className="col-lg-4 col-md-6" key={destination.id}>
              <div className="dest-col">
                <div className="dest-img">
                  <img src={destination.img} alt={destination.name} />
                </div>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate(`/destinations/${destination.id}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
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
