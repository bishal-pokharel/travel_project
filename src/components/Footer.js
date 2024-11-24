import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
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
            <div className="blohjb">
              <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
              <span>22-1-2019</span>
            </div>
            <div className="blohjb">
              <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
              <span>22-1-2019</span>
            </div>
          </div>

          <div className="col-md-3 glink">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/"><FontAwesomeIcon icon={faAngleDoubleRight} /> Home</Link></li>
              <li><Link to="/about_us"><FontAwesomeIcon icon={faAngleDoubleRight} /> About Us</Link></li>
              <li><Link to="/services"><FontAwesomeIcon icon={faAngleDoubleRight} /> Services</Link></li>
              <li><Link to="/blog"><FontAwesomeIcon icon={faAngleDoubleRight} /> Blog</Link></li>
              <li><Link to="/pricing"><FontAwesomeIcon icon={faAngleDoubleRight} /> Gallery</Link></li>
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
            <Link to="#" className='footer-icon'><FontAwesomeIcon icon={faSquareFacebook} style={{color : "fff"}} size='xl' /></Link>
            <Link to="#" className='footer-icon'><FontAwesomeIcon icon={faLinkedin} style={{color : "fff"}} size='xl' /></Link>
            <Link to="#" className='footer-icon'><FontAwesomeIcon icon={faTwitterSquare} style={{color : "fff"}} size='xl' /></Link>
            <Link to="#" className='footer-icon'><FontAwesomeIcon icon={faInstagramSquare} style={{color : "fff"}} size='xl' /></Link>
            <Link to="#" className='footer-icon'><FontAwesomeIcon icon={faGooglePlusSquare} style={{color : "fff"}} size='xl' /></Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
