import React, {useState} from 'react';
import MiniHeader from '../components/MiniHeader';
import { useMutation } from 'react-query';
import { poster } from '../api';
import { API_URLS, BASE_IMAGE_URL } from '../api/url';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [phone, setPhone] = useState("");

    const { mutate } = useMutation(
        async (formData) => poster(API_URLS.CONTACT_US , formData),
        {
          onMutate: () => {
            setIsLoading(true); // Set loading to true when mutation starts
            setSuccessMessage(null); // Clear success message before sending
            setErrorMessage(null); // Clear any previous error message
          },
          onSuccess: (data) => {
            setIsLoading(false); // Stop loading once the request is successful
            setSuccessMessage('Your Respones was send. Thank you for your valuable message!');
          },
          onError: (error) => {
            setIsLoading(false); // Stop loading if there's an error
            setErrorMessage('There was something error. Please Try Again!');
          },
        }
      );

    const handleContactFormSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            number: `+`+phone,
            message: e.target.message.value,
          };
          console.log(formData)
          mutate(formData);
    }
  return (
    <>
      {/* Google Map Section */}
      <div className="row no-margin" style={{ marginTop: '0px' }}>
      {/* <iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe
          title="Google Map"
          style={{ width: '100%' }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28250.631593996015!2d85.3431591990621!3d27.737998208699832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be5bea00987%3A0x70cf02a942554e97!2sKapan%2C%2044600!5e0!3m2!1sen!2snp!4v1734160863748!5m2!1sen!2snp"
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
            <div className="col-sm-12 col-md-7" style={{ padding: '20px' }}>
              <h2>Contact Form</h2>
              <br />
              <form onSubmit={handleContactFormSubmit}>
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
                  <PhoneInput
                    value={phone}
                    onChange={setPhone}
                    // onlyCountries={["np"]} // Limit to Nepal only (Optional)
                    inputStyle={{ width: "100%", height: "40px" }}
                  />
                  <br></br>
                </div>
              </div>
              <div className="row cont-row">
                <div className="col-sm-3">
                  <label>Enter Message</label><span>:</span>
                </div>
                <div className="col-sm-8">
                  <textarea
                    rows="5"
                    name= "message"
                    placeholder="Enter Your Message"
                    className="form-control input-sm"
                  ></textarea>
                </div>
              </div>
              <div className="row" style={{ marginTop: '10px' }}>
                <div className="col-sm-3" style={{ paddingTop: '10px' }}></div>
                <div className="col-sm-8">
                  <button className="btn btn-success btn-sm">
                  {isLoading ? 'Processing...' : 'Send Message'}
                  </button>
                  {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </div>
              </div>
              </form>
            </div>

            {/* Address Section */}
            <div className="col-sm-5">
              <div className="serv" style={{ margin: '50px' }}>
                <h2 style={{ marginTop: '10px' }}>Address</h2>
                <p>
                  Kapan, Kathmandu <br />
                  Bhrikuti Chowk<br />
                  Bagmati, Nepal<br />
                  Phone: +91 9159669599<br />
                  Email: support@ecoheartadventure.com<br />
                  Website: www.ecoheartadventure.com
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
