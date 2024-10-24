import React from 'react';
// import destination1 from '../assets/images/destination/d2.jpg';
// import destination2 from '../assets/images/destination/d3.jpg';
// import destination3 from '../assets/images/destination/d4.jpg';

const Destinations = () => {
  return (
    <div className="destinations container-fluid">
      <div className="container">
        <div className="session-title">
          <h2>Our Destinations</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin nisi id consequat bibendum.</p>
        </div>
        <div className="dest-row row">
          <div className="col-lg-4 col-md-6">
            <div className="dest-col">
              <div className="dest-img">
                <img src='/assets/images/destination/d1.jpg' alt="Switzerland" />
              </div>
              <h3>Switzerland</h3>
              <p>Duis neque sem, ultrices et erat</p>
              <button className="btn btn-outline-success">Book Now</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="dest-col">
              <div className="dest-img">
                <img src='/assets/images/destination/d2.jpg' alt="Maldives" />
              </div>
              <h3>Maldives</h3>
              <p>Duis neque sem, ultrices et erat</p>
              <button className="btn btn-outline-success">Book Now</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="dest-col">
              <div className="dest-img">
                <img src='/assets/images/destination/d3.jpg' alt="Srilanka" />
              </div>
              <h3>Srilanka</h3>
              <p>Duis neque sem, ultrices et erat</p>
              <button className="btn btn-outline-success">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
