import React from 'react';

const Blog = () => {
  return (
    <div className="container-fluid blog">
      <div className="container">
        <div className="session-title">
          <h2>Our Blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin nisi id consequat bibendum. Phasellus at convallis elit. In purus enim, scelerisque id arcu vitae.</p>
        </div>
        <div className="blog-row row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-col">
              <img src="assets/images/destination/d1.jpg" alt="" />
              <span>August 9, 2019</span>
              <h4>Orci varius consectetur adipiscing natoque penatibus</h4>
              <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent accumsan, leo in venenatis dictum.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-col">
              <img src="assets/images/destination/d2.jpg" alt="" />
              <span>August 9, 2019</span>
              <h4>Orci varius consectetur adipiscing natoque penatibus</h4>
              <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent accumsan, leo in venenatis dictum.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-col">
              <img src="assets/images/destination/d3.jpg" alt="" />
              <span>August 9, 2019</span>
              <h4>Orci varius consectetur adipiscing natoque penatibus</h4>
              <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent accumsan, leo in venenatis dictum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
