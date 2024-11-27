import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faAngleDoubleRight, faHome } from '@fortawesome/free-solid-svg-icons';

const MiniHeader = ({title}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <>
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
                <li><FontAwesomeIcon icon={faSquareFacebook} style={{color : "#FFF"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faTwitterSquare} style={{color : "#FFF"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faInstagramSquare} style={{color : "#FFF"}} size='xl' /></li>
                <li><FontAwesomeIcon icon={faLinkedin} style={{color : "#FFF"}} size='xl' /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-jk" 
      className={`header-nav ${isMenuOpen ? '' : 'd-none d-md-block'} ${isFixed ? 'scroll-to-fixed-fixed fixed' : ''}`}
      ref={menuRef}
      >
        <div className="container">
          <div className="row nav-row">
          {isFixed && (
              <div className="mini-header-logo">
                <Link to='/'><img src='/assets/images/mini_eco_heart.png' alt="Mini Logo" /></Link>
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

<div className="page-nav no-margin row">
<div className="container">
    <div className="row">
        <h2>About Traveler</h2>
        <ul>
            <li> 
                <FontAwesomeIcon icon={faHome} size='sm' />
                <a href="#"> Home
                </a>
                </li>
            <li>
            <FontAwesomeIcon icon={faAngleDoubleRight} size='sm' />
                <span> {title} </span>
            </li>
        </ul>
    </div>
</div>
</div>
</>
  );
};

export default MiniHeader;
