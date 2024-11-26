import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check the scroll position and set the "fixed" class
  const handleScroll = () => {
    const menuPosition = menuRef.current ? menuRef.current.offsetTop : 0;
    setIsFixed(window.scrollY > menuPosition);
    // if (window.scrollY >= menuPosition) {
    //   setIsFixed(true);
    //   console.log(menuPosition)
    // } else {
    //   setIsFixed(false);
    // }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <img src="/assets/images/eco_heart.svg" alt="Logo" />
              <Link onClick={toggleMenu}>
                <FontAwesomeIcon className='fas d-block d-sm-block d-md-none small-menu' icon={faBars} size='xl' />
              </Link>
            </div>
            <div className="col-md-4 d-none d-md-block social-link">
              <ul>
                <li><FontAwesomeIcon icon={faSquareFacebook} style={{color : "#fff"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faTwitterSquare} style={{color : "#fff"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faInstagramSquare} style={{color : "#fff"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faLinkedin} style={{color : "#fff"}} size='xl' /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-jk" 
        className={`header-nav ${isMenuOpen ? '' : 'd-none d-md-block'} ${isFixed ? 'scroll-to-fixed-fixed fixed' : ''}`}
        ref={menuRef}>
        <div className="container">
          <div className="row nav-row justify-content-center">
          {isFixed && (
              <div className="mini-header-logo">
                <img src='/assets/images/mini_eco_heart.png' alt="Mini Logo" />
              </div>
            )}
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
