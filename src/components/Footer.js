import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 about">
            <h2>About Us</h2>
            <p>
              Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non scelerisque augue. Proin et sollicitudin velit.
            </p>
            <div className="foot-address">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="addet">
                BlueDart<br />
                Marthandam (K.K District)<br />
                Tamil Nadu, IND
              </div>
            </div>
            <div className="foot-address">
              <div className="icon">
                <i className="far fa-envelope-open"></i>
              </div>
              <div className="addet">
                info@smarteyeapps.com <br />
                sales@smarteyeapps.com
              </div>
            </div>
            <div className="foot-address">
              <div className="icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="addet">
                +23 323 43434 <br />
                +1 3232 434 55
              </div>
            </div>
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
              <li><a href="index.html"><i className="fas fa-angle-double-right"></i>Home</a></li>
              <li><a href="about_us.html"><i className="fas fa-angle-double-right"></i>About Us</a></li>
              <li><a href="services.html"><i className="fas fa-angle-double-right"></i>Services</a></li>
              <li><a href="blog.html"><i className="fas fa-angle-double-right"></i>Blog</a></li>
              <li><a href="pricing.html"><i className="fas fa-angle-double-right"></i>Gallery</a></li>
              <li><a href="contact_us.html"><i className="fas fa-angle-double-right"></i>Contact Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 tags">
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
