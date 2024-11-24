import React from 'react';
import MiniHeader from '../components/MiniHeader';
import Team from '../components/Team';

const AboutUs = () => {
  return (
    <>
    <MiniHeader title={"About Us"} />
    <section id="about" className="container-fluid about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-7 text">
            <h1>About Our <span className='highlight-text'>Traveler</span></h1>
            <p>
            Our travel agency is dedicated to providing unforgettable experiences for adventure seekers, cultural enthusiasts, and relaxation lovers alike. We offer a range of personalized travel packages to the world's most stunning destinations, ensuring that each journey is tailored to your unique preferences. Whether you're dreaming of exploring ancient cities, trekking through majestic landscapes, or relaxing on pristine beaches, we have the perfect itinerary for you.
            </p>
            <p>
            We pride ourselves on working with expert guides who are passionate about their regions, offering deep insights and enriching your travels with authentic local experiences. From curated city tours to off-the-beaten-path adventures, our guides ensure you get a real taste of each destination's culture and heritage.
            </p>
            <p>
            With our attention to detail and commitment to customer satisfaction, your comfort and safety are our top priorities. Let us take care of the logistics while you focus on creating memories that will last a lifetime.
            </p>
          </div>
          <div className="col-md-5 center image">
            <img src="assets/images/about.png" alt="About Smart Traveler" />
          </div>
        </div>
      </div>
    </section>
    <Team />
    </>
  );
};

export default AboutUs;
