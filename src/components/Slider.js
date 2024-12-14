import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
// import { useQuery } from 'react-query';
// import { fetcher } from '../api';
// import { API_URLS, BASE_IMAGE_URL } from '../api/url';
import { useSelector } from 'react-redux';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false); // State to manage animation

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current) => {
      setActiveIndex(current);
      setShouldAnimate(true); // Trigger animation
      setTimeout(() => setShouldAnimate(false), 1000); // Reset animation after 1 second
    },
  };

  const {data, isLoading, error} = useSelector((state) => state.destinations);
  console.log(data)

  useEffect(() => {
    if(data){
      console.log(data);
    }
  },[data])

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(error){
    console.error("Error fetching data:", error);
    return <div>Error: {error.message || error}</div>;
  }

  const slides = [
    {
      imgSrc: "assets/images/slider1.jpg",
      title: `Want to Make Your <span class="highlight-text1">Trip Best?</span>`,
      description: "Choose us to make your travel adventure in Nepal",
    },
    {
      imgSrc: "assets/images/c.jpg",
      title: `Exicting offer to visit <span class="highlight-text1">Mustang</span>`,
      description: "We always dedicated to our customer for best services.",
    },
    {
      imgSrc: "assets/images/c.jpg",
      title: `Exicting offer to visit <span class="highlight-text1">Mustang</span>`,
      description: "We always dedicated to our customer for best services.",
    },
  ];

  return (
    <div className="slider-detail">
      <Slider {...settings}>
        {data?.results?.slice(0,3).map((slide, index) => {
          const staticImage = slides[index % slides.length].imgSrc;
          const titleParts = slide.title.split(" ");
          const highlightedTitle = titleParts.slice(0, -1).join(" ") + 
          ` <span class="highlight-text1">${titleParts.slice(-1)}</span>`;
          return(
          <div key={index} className="slide carousel-item">
            <div className='front-layer'></div>
            <img className="d-block w-100 slider-image" src={staticImage} alt={`Slide ${index + 1}`} />
            <div className={`carousel-caption fvgb d-none d-md-block ${activeIndex === index && shouldAnimate ? 'animated bounceInDown' : ''}`}>
              <h5 dangerouslySetInnerHTML={{ __html: highlightedTitle }}></h5>
              <p className='slider_discription'>{slide.subtitle}</p>
              <div className="row vbh">
                <div className="btn booktrip-btn animated bounceInUp"><Link className='text-white' to={`/destinations/${slide.id}`}>Book Trip</Link></div>
              </div>
            </div>
          </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
