import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHeart, faImage, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faAudible } from '@fortawesome/free-brands-svg-icons';

const KeyFeatures = () => {
  return (
    <div id="features" className="features container-fluid">
      <div className="container">
        <div className="session-title">
          <h2>Key Features of this Phone</h2>
        </div>
        <div className="ker-featur-row row">
          <div data-aos="fade-right" data-aos-duration="1500" className="col-md-4 featurecol feature-left">
            <div className="single-feature">
              <div className="detail">
                <h6>100% Safety</h6>
                <p>WE are taking important step for our client Safety</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faBell} size='2xl' />
                {/* <i className="far fa-bell"></i> */}
              </div>
            </div>
            <div className="single-feature">
              <div className="detail">
                <h6>Affordable Packages</h6>
                <p>We are providing the affordble package for our both national and international cilent</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faHeart} size='2xl' />
                {/* <i className="far fa-heart"></i> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 featur-image">
            <img src="assets/images/f_new.png" alt="" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className="col-md-4 featurecol feature-right">
            <div className="single-feature">
              <div className="icon">
                {/* <i className="far fa-images"></i> */}
                <FontAwesomeIcon icon={faImage} size='2xl' />
              </div>
              <div className="detail">
                <h6>Tourist Guide</h6>
                <p>We have experienced treaker guide for Himilayan Visit. They makes your Journey Best ever.</p>
              </div>
            </div>
            <div className="single-feature">
              <div className="icon">
                {/* <i className="fab fa-audible"></i> */}
                <FontAwesomeIcon icon={faLocation} size='2xl' />
              </div>
              <div className="detail">
                <h6>Exciting Places</h6>
                <p>Each place of Nepal is execiting also we promise to take you more execting place of Himalayas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeyFeatures;
