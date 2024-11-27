import React, { useState, useEffect } from 'react';
import MiniHeader from '../components/MiniHeader';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// Default image data with tags (for fallback if API is not available or during loading)
const defaultImages = [
  { url: "assets/images/b.jpg", tags: ["mountain", "trekking"] },
  { url: "/assets/images/c.jpg", tags: ["culture", "animals"] },
  { url: "/assets/images/d.jpg", tags: ["animals"] },
  { url: "/assets/images/e.jpg", tags: ["mountain"] },
  { url: "/assets/images/f.jpg", tags: ["culture"] },
  { url: "/assets/images/g.jpg", tags: ["trekking", "animals"] }
];

const Gallery = () => {
  const [images, setImages] = useState(defaultImages); // Use the default images initially
  const [filteredImages, setFilteredImages] = useState(defaultImages); // Initially show all images
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [error, setError] = useState(null); // Error state in case of failure

  // Function to fetch images from an API (mock API call for now)
  const fetchImages = async () => {
    setLoading(true);  // Set loading state to true while fetching data
    try {
      // Simulate an API call with a delay for demonstration (replace with real API call later)
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: defaultImages }), 1000) // Mock API response
      );
      setImages(response.data); // Set API data to state
      setFilteredImages(response.data); // Also filter images based on API data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError('Failed to load images'); // Handle any errors
      setLoading(false); // Set loading to false in case of error
    }
  };

  // Preload images (this simulates the preloading of images even though they're already available locally)
  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.url; // Preload the image
    });
  };

  useEffect(() => {
    fetchImages(); // Fetch data on component mount
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      preloadImages(images); // Preload images once they are set
    }
  }, [images]);

  // Handle tag selection to filter images
  const handleTagClick = (tag) => {
    if (tag === 'all') {
      setFilteredImages(images); // Show all images if 'All' is selected
    } else {
      const filtered = images.filter(image => image.tags.includes(tag));
      setFilteredImages(filtered);
    }
  };

  // Open lightbox when an image is clicked
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  if (loading) {
    // return <div>Loading...</div>; // Display loading state while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if data fetch fails
  }

  return (
    <>
      <MiniHeader title={"Gallery"} />
      <div id="portfolio" className="gallery">
        <div className="container">
          <div className="session-title row">
            <h2>Our Gallery</h2>
            <p>Explore our stunning captures, showcasing the beauty of nature, adventure, and unforgettable moments. Each image tells a story of incredible journeys and vibrant cultures.</p>
            <div className="heading-line"></div>
          </div>

          {/* Gallery Filter Buttons */}
          <div className="gallery-filter d-none d-sm-block">
            <button className="btn btn-default filter-button" onClick={() => handleTagClick('all')}>All</button>
            <button className="btn btn-default filter-button" onClick={() => handleTagClick('mountain')}>Mountain</button>
            <button className="btn btn-default filter-button" onClick={() => handleTagClick('culture')}>Culture</button>
            <button className="btn btn-default filter-button" onClick={() => handleTagClick('animals')}>Animals</button>
            <button className="btn btn-default filter-button" onClick={() => handleTagClick('trekking')}>Trekking</button>
          </div>

          {/* Gallery Images */}
          <div className="row">
            {filteredImages.map((img, index) => (
              <div key={index} className="gallery_product col-lg-3 col-md-3 col-sm-4 col-xs-6 filter"
                onClick={() => openLightbox(index)}
                style={{ cursor: "pointer" }}
              >
                <img src={img.url} className="img-responsive" alt={`Gallery Item ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {isOpen && (
          <Lightbox
            mainSrc={filteredImages[photoIndex].url}
            nextSrc={filteredImages[(photoIndex + 1) % filteredImages.length].url}
            prevSrc={filteredImages[(photoIndex + filteredImages.length - 1) % filteredImages.length].url}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + filteredImages.length - 1) % filteredImages.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % filteredImages.length)
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
