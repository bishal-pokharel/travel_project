import React from 'react';
import { useNavigate } from 'react-router-dom';
// import destination1 from '../assets/images/destination/d2.jpg';
// import destination2 from '../assets/images/destination/d3.jpg';
// import destination3 from '../assets/images/destination/d4.jpg';

const Destinations = () => {
  const navigate = useNavigate();

  const destinations = [
    { id: 'switzerland', name: 'Switzerland', img: '/assets/images/destination/d1.jpg', description: 'Duis neque sem, ultrices et erat' },
    { id: 'maldives', name: 'Maldives', img: '/assets/images/destination/d2.jpg', description: 'Duis neque sem, ultrices et erat' },
    { id: 'srilanka', name: 'Sri Lanka', img: '/assets/images/destination/d3.jpg', description: 'Duis neque sem, ultrices et erat' },
  ];
  return (
    <div className="destinations container-fluid">
      <div className="container">
        <div className="session-title">
          <h2>Our Destinations</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin nisi id consequat bibendum.</p>
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
      </div>
    </div>
  );
};

export default Destinations;
