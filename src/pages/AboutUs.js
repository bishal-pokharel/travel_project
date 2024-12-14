import React, { useState } from 'react';
import MiniHeader from '../components/MiniHeader';
import Team from '../components/Team';
import { useQuery } from 'react-query';
import { fetcher } from '../api';
import { API_URLS, BASE_IMAGE_URL } from '../api/url';

const AboutUs = ({flag}) => {
  const {data, isLoading, isError, error} = useQuery("aboutus", () => fetcher(API_URLS.ABOUT_US));

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(isError){
    console.error("Error fetching data:", error);
    return <div>Error: {error.message || error}</div>;
  }
  if (!data) {
    return <div>No data available.</div>;
  }

  const { description_title, description, right_decor_image } = data || {};

  const descriptionLines = description.split("\r\n\r\n");

  return (
    <>
    {flag !== 'homepageflag' ? 
    <MiniHeader title={"About Us"} />
    : ''
    }
    <section id="about" className="container-fluid about-us">
      <div className="container">
        <div className="row position-relative">
          <div className="col-md-11 text">
            <h1>{description_title.split(" ").slice(0, 2).join(" ")}<span className='highlight-text'> {description_title.split(" ")[2]}</span></h1>
            {/* <h1>About Our <span className='highlight-text'>Traveler</span></h1> */}
            {/* <p>{description}</p> */}
            <p className='w-75'>{descriptionLines[0]}</p>
              <p className='w-75'>{descriptionLines[1]}</p>
              <p className='w-75'>{descriptionLines[2]}</p>
            {/* <p>
            Our travel agency is dedicated to providing unforgettable experiences for adventure seekers, cultural enthusiasts, and relaxation lovers alike. We offer a range of personalized travel packages to the world's most stunning destinations, ensuring that each journey is tailored to your unique preferences. Whether you're dreaming of exploring ancient cities, trekking through majestic landscapes, or relaxing on pristine beaches, we have the perfect itinerary for you.
            </p>
            <p>
            We pride ourselves on working with expert guides who are passionate about their regions, offering deep insights and enriching your travels with authentic local experiences. From curated city tours to off-the-beaten-path adventures, our guides ensure you get a real taste of each destination's culture and heritage.
            </p>
            <p>
            With our attention to detail and commitment to customer satisfaction, your comfort and safety are our top priorities. Let us take care of the logistics while you focus on creating memories that will last a lifetime.
            </p> */}
          </div>
          <div className="col-md-5 aboutus_img">
            <img src={`${BASE_IMAGE_URL}`+right_decor_image?.url || "assets/images/about.png"} alt={description_title} />
          </div>
        </div>
      </div>
    </section>
    {flag !== 'homepageflag' ? 
    <Team />
    : ''
    }
    </>
  );
};

export default AboutUs;
