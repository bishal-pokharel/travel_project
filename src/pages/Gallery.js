import React, { useState, useEffect } from 'react';
import MiniHeader from '../components/MiniHeader';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "assets/images/b.jpg",
  "/assets/images/c.jpg",
  "/assets/images/d.jpg",
  "/assets/images/e.jpg",
  "/assets/images/f.jpg",
  "/assets/images/g.jpg"
];

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Preload images
  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image; // Preload the image
    });
  };

  useEffect(() => {
    preloadImages(images);
  }, []);

  useEffect(() => {
    console.log("isOpen:", isOpen);
  }, [isOpen]);

  const openLightbox = (index) => {
    console.log("Selected Image Path:", images[index]); // Log the selected image path
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      console.log("Current Image:", images[photoIndex]); // Log the current image when lightbox opens
    }
  }, [photoIndex, isOpen]);

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
              <button className="btn btn-default filter-button" data-filter="all">All</button>
              <button className="btn btn-default filter-button" data-filter="hdpe">Finance</button>
              <button className="btn btn-default filter-button" data-filter="sprinkle">Digital Marketing</button>
              <button className="btn btn-default filter-button" data-filter="spray">Money</button>
              <button className="btn btn-default filter-button" data-filter="irrigation">Business Analysis</button>
            </div>
            <br />
            {images.map((img, index) => (
              <div key={index} className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter hdpe"
                onClick={() => openLightbox(index)}
                style={{ cursor: "pointer" }}
              >
                <img src={img} className="img-responsive" alt={`Gallery Item ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
            ariaModal="true"
            role="dialog"
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
