import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
// import 'animate.css'; // Ensure animate.css is imported

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false); // State to manage animation

  const settings = {
    dots: true,
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
  ];

  return (
    <div className="slider-detail">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide carousel-item">
            <div className='front-layer'></div>
            <img className="d-block w-100 slider-image" src={slide.imgSrc} alt={`Slide ${index + 1}`} />
            <div className={`carousel-caption fvgb d-none d-md-block ${activeIndex === index && shouldAnimate ? 'animated bounceInDown' : ''}`}>
              <h5 dangerouslySetInnerHTML={{ __html: slide.title }}></h5>
              <p className='slider_discription'>{slide.description}</p>
              <div className="row vbh">
                <div className="btn booktrip-btn animated bounceInUp">Book Trip</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
