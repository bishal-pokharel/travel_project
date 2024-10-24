import React from 'react';
import MiniHeader from '../components/MiniHeader';

const ContactUs = () => {
  return (
    <>
    <MiniHeader title={'Contact us'} />
      {/* Google Map Section */}
      <div className="row no-margin" style={{ marginTop: '0px' }}>
        <iframe
          title="Google Map"
          style={{ width: '100%' }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249759.19784092825!2d79.10145254589841!3d12.009924873581818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1448883859107"
          height="450"
          frameBorder="0"
        //   style={{ border: '0' }}
          allowFullScreen
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="row contact-rooo no-margin">
        <div className="container">
          <div className="row">
            <div className="col-sm-7" style={{ padding: '20px' }}>
              <h2>Contact Form</h2>
              <br />
              <div className="row cont-row">
                <div className="col-sm-3">
                  <label>Enter Name</label><span>:</span>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="row cont-row">
                <div className="col-sm-3">
                  <label>Email Address</label><span>:</span>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email Address"
                    className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="row cont-row">
                <div className="col-sm-3">
                  <label>Mobile Number</label><span>:</span>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    className="form-control input-sm"
                  />
                </div>
              </div>
              <div className="row cont-row">
                <div className="col-sm-3">
                  <label>Enter Message</label><span>:</span>
                </div>
                <div className="col-sm-8">
                  <textarea
                    rows="5"
                    placeholder="Enter Your Message"
                    className="form-control input-sm"
                  ></textarea>
                </div>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div className="col-sm-3" style={{ paddingTop: '10px' }}></div>
                <div className="col-sm-8">
                  <button className="btn btn-success btn-sm">Send Message</button>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="col-sm-5">
              <div className="serv" style={{ margin: '50px' }}>
                <h2 style={{ marginTop: '10px' }}>Address</h2>
                <p>
                  Antonya Street, <br />
                  23/H-2, Building<br />
                  TA, AUS District<br />
                  Phone: +91 9159669599<br />
                  Email: support@smarteyeapps.com<br />
                  Website: www.smarteyeapps.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
