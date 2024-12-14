import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Blog data array
  const blogData = [
    {
      id: 1,
      title: "Trekking to Annapurna Base Camp: A Journey of a Lifetime",
      description: "The Annapurna Base Camp trek offers stunning views of snow-capped peaks and a deep immersion into the Himalayan culture. Passing through beautiful villages, lush forests, and picturesque landscapes, the trek is a once-in-a-lifetime experience that brings trekkers closer to the majesty of the Annapurna massif.",
      image: "assets/images/destination/d1.jpg",
      date: "August 9, 2019"
    },
    {
      id: 2,
      title: "Everest Base Camp: Conquering the Roof of the World",
      description: "Everest Base Camp trek is a dream for adventure lovers and trekkers alike. The journey leads you through Sherpa villages, lush forests, and towering Himalayan peaks, culminating in the breathtaking view of Mount Everest from its base camp. An incredible adventure, it combines stunning natural beauty with an extraordinary sense of achievement.",
      image: "assets/images/destination/d2.jpg",
      date: "August 9, 2019"
    },
    {
      id: 3,
      title: "Exploring the Serene Beauty of Shay Phoksundo Lake",
      description: "Shay Phoksundo Lake, located in the Dolpo region of Nepal, is one of the most stunning and serene places in the world. Surrounded by snow-capped mountains and Tibetan culture, the trek to this beautiful turquoise lake is an unforgettable experience. Its crystal-clear waters and breathtaking landscapes make it a hidden gem of Nepal.",
      image: "assets/images/destination/d3.jpg",
      date: "August 9, 2019"
    }
  ];
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 about">
            <h2>About Us</h2>
            <p>
            Our travel agency is dedicated to providing unforgettable experiences for adventure seekers, cultural enthusiasts, and relaxation lovers alike. We offer a range of personalized travel packages to the world's most stunning destinations, ensuring that each journey is tailored to your unique preferences.
            </p>
          </div>

          <div className="col-md-3 fotblog">
            <h2>From Latest Blog</h2>
            {blogData.slice(0, 2).map((blog, index) => (
              
              <div key={index} className="blohjb">
                <p>{blog.title}</p>
                <span>{blog.date}</span>
              </div>
            
            ))}
          </div>

          <div className="col-md-3 glink">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/"><FontAwesomeIcon icon={faAngleDoubleRight} /> Home</Link></li>
              <li><Link to="/about-us"><FontAwesomeIcon icon={faAngleDoubleRight} /> About Us</Link></li>
              <li><Link to="/destinations"><FontAwesomeIcon icon={faAngleDoubleRight} /> Services</Link></li>
              <li><Link to="/blog"><FontAwesomeIcon icon={faAngleDoubleRight} /> Blog</Link></li>
              <li><Link to="/gallery"><FontAwesomeIcon icon={faAngleDoubleRight} /> Gallery</Link></li>
              <li><Link to="/contact-us"><FontAwesomeIcon icon={faAngleDoubleRight} /> Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-3 contact">
            <h2>Contact Us</h2>
            <p>Bhusan dahal</p>
            <address>+977 9865434321</address>
            <p>Bhusan dahal</p>
            <address>+977 9865434321</address>
            {/* <ul>
              <li>Finance</li>
              <li>Web Design</li>
              <li>Internet Pro</li>
              <li>Node Js</li>
              <li>Java Swing</li>
              <li>Angular Js</li>
              <li>Vue Js</li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className="copy">
        <div className="container">
          <Link to="https://www.bishalpokharel.com.np/">2024 &copy; Organization Name</Link>
          <span className=''>
            <Link to="https://www.facebook.com" target='_blank' className='footer-icon'><FontAwesomeIcon icon={faSquareFacebook} style={{color : "fff"}} size='xl' /></Link>
            <Link to="https://www.linkedin.com" target='_blank' className='footer-icon'><FontAwesomeIcon icon={faLinkedin} style={{color : "fff"}} size='xl' /></Link>
            <Link to="https://www.x.com" target='_blank' className='footer-icon'><FontAwesomeIcon icon={faTwitterSquare} style={{color : "fff"}} size='xl' /></Link>
            <Link to="https://www.instagram.com" target='_blank' className='footer-icon'><FontAwesomeIcon icon={faInstagramSquare} style={{color : "fff"}} size='xl' /></Link>
            <Link to="https://www.google.com" target='_blank' className='footer-icon'><FontAwesomeIcon icon={faGooglePlusSquare} style={{color : "fff"}} size='xl' /></Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
