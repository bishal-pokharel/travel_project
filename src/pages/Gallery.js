import React from 'react';
import MiniHeader from '../components/MiniHeader';

const Gallery = () => {
  return (
    <>
    <MiniHeader title={"Gallery"} />
    <div id="portfolio" className="gallery">
      <div className="container">
        <div className="session-title row">
          <h2>Portfolio</h2>
          <p>Take a look at some of our latest work</p>
          <div className="heading-line"></div>
        </div>
        <div className="row">
          <div className="gallery-filter d-none d-sm-block">
            <button className="btn btn-default filter-button" data-filter="all">
              All
            </button>
            <button className="btn btn-default filter-button" data-filter="hdpe">
              Finance
            </button>
            <button className="btn btn-default filter-button" data-filter="sprinkle">
              Digital Marketing
            </button>
            <button className="btn btn-default filter-button" data-filter="spray">
              Money
            </button>
            <button className="btn btn-default filter-button" data-filter="irrigation">
              Business Analysis
            </button>
          </div>
          <br />

          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
            <img src="assets/images/gallery/gallery_01.jpg" className="img-responsive" alt="Gallery Item 1" />
          </div>

          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter sprinkle">
            <img src="assets/images/gallery/gallery_02.jpg" className="img-responsive" alt="Gallery Item 2" />
          </div>

          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe">
            <img src="assets/images/gallery/gallery_03.jpg" className="img-responsive" alt="Gallery Item 3" />
          </div>

          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/gallery_04.jpg" className="img-responsive" alt="Gallery Item 4" />
          </div>

          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
            <img src="assets/images/gallery/gallery_05.jpg" className="img-responsive" alt="Gallery Item 5" />
          </div>

          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter spray">
            <img src="assets/images/gallery/gallery_06.jpg" className="img-responsive" alt="Gallery Item 6" />
          </div>

          <div className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/gallery_09.jpg" className="img-responsive" alt="Gallery Item 7" />
          </div>

          <div className="gallery_product col-lg-3 col-md-4 col-sm-3 col-xs-6 filter irrigation">
            <img src="assets/images/gallery/gallery_08.jpg" className="img-responsive" alt="Gallery Item 8" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Gallery;
