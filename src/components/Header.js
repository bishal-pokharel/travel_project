import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container-flui">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mail-detail d-none d-md-block">
              <ul>
                <li>Call US : +977 9814532234</li>
                <li>Email : info@abc.com</li>
              </ul>
            </div>
            <div className="col-md-4 logo">
              <img src="/assets/images/logo.png" alt="Logo" />
              <Link onClick={toggleMenu}>
                <FontAwesomeIcon className='fas d-block d-sm-block d-md-none small-menu' icon={faBars} size='xl' />
              </Link>
            </div>
            <div className="col-md-4 d-none d-md-block social-link">
              <ul>
                <li><FontAwesomeIcon icon={faSquareFacebook} style={{color : "black"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faTwitterSquare} style={{color : "black"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faInstagramSquare} style={{color : "black"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faLinkedin} style={{color : "black"}} size='xl' /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-jk" className={`header-nav ${isMenuOpen ? '' : 'd-none d-md-block'}`}>
        <div className="container">
          <div className="row nav-row">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
