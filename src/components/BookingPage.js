import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcStripe } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons/faCcVisa';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons/faCcPaypal';
import { useMutation } from 'react-query';
import { poster } from '../api';
import { API_URLS, BASE_IMAGE_URL } from '../api/url';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BookingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showDetails, setShowDetails] = useState(false);
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  if (!state) {
    return <h2>No booking details provided. Please start the booking process again.</h2>;
  }

  const {id, title, startDate, endDate, persons, totalCost, deposit } = state;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { mutate } = useMutation(
    async (formData) => poster(API_URLS.BOOK_DESTINATION , formData),
    {
      onMutate: () => {
        setIsLoading(true); // Set loading to true when mutation starts
        setSuccessMessage(null); // Clear success message before sending
        setErrorMessage(null); // Clear any previous error message
      },
      onSuccess: (data) => {
        setIsLoading(false); // Stop loading once the request is successful
        setSuccessMessage('Your booking was sent successfully. You will receive a confirmation email. Thank you!');
      },
      onError: (error) => {
        setIsLoading(false); // Stop loading if there's an error
        setErrorMessage('There was an error while processing your booking. Please try again later.');
      },
    }
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      destination: id,
      title,
      start_date: startDate,
      end_date: endDate,
      no_of_persons: persons,
      price : totalCost,
      deposit,
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      email_address: e.target.email.value,
      country: e.target.country.value,
      city: e.target.city.value,
      postalCode: e.target.postalCode.value,
      houseNumber: e.target.houseNumber.value,
      phone_number: `+`+phone,
      // paymentMethod: e.target.paymentMethod.value,
      // paymentOption: e.target.paymentOption.value,
    };

    // console.log(formData)
    mutate(formData); // Call mutate to send the data to the API
  };
  // Details data object
  const detailsData = {
    included: [
      "Pick up and transfer to and from airport",
      "Transfers",
      "Salary, food, insurance, and accommodation for guide and porter",
      "Breakfast, Lunch, and Dinner",
      "Coffee and Tea",
      "Permit and TIMS",
      "Down Jacket and Sleeping Bags",
      "T-Shirt & Route Map",
      "Assistant Guide for a Group of over 6 People",
      "Altitude Sickness & First Aid Kit",
      "Helicopter Kathmandu - Lukla",
      "Accommodation in Phakding Lodge, Namche Lodge, and Hotel Everest View",
      "Desserts, Hot Shower, Hot Water, and Wi-Fi",
      "Personal porter",
      "Upgraded accommodation",
      "English speaking guide",
      "Helicopter Gorak Shep - Kathmandu",
      "Hotel in Kathmandu before and after the trek",
    ],
    excluded: [
      "Visa for Nepal",
      "Flights to and from Nepal",
      "Personal expenses",
      "Travel Insurance Including Repatriation",
      "Tipping",
    ],
  };

  return (
    <div className="booking-page container">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-8">
          <button className="btn backbtn" onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} /> 
            <span> Back</span>
          </button>
          <h1>Book your Adventure Now</h1>
          <h2>{title}</h2>
          <p>
            Start date: <strong>{startDate}</strong>
          </p>
          <p>
            End date: <strong>{endDate}</strong>
          </p>
          <p>
            Number of Persons: <strong>{persons}</strong>
          </p>
          <p>
            Price: <strong>${totalCost}</strong>
          </p>
          <a
            href="#details"
            onClick={(e) => {
              e.preventDefault();
              setShowDetails(!showDetails);
            }}
          >
            {showDetails ? "Hide details" : "Show all details"}
          </a>

          {showDetails && (
            <div className="details-section mt-3">
              <div className="d-flex justify-content-between">
                {Object.entries(detailsData).map(([key, items]) => (
                  <div key={key} className={`${key}-details me-4`}>
                    <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                    <ul>
                      {items.map((item, index) => (
                        <li key={index}><span className='pr-2 pt-1'>*</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form className="booking-form mt-4" onSubmit={handleFormSubmit}>
            <h3>Personal Details</h3>
            <label>
              Your first name
              <input type="text" name='firstName' required />
            </label>
            <label>
              Your last name
              <input type="text" name='lastName' required />
            </label>
            <label>
              Your e-mail address
              <input type="email" name='email' required />
            </label>
            <div className='d-flex justify-content-between flex-wrap'>
            <label className='w-50 pr-2'>
              In which country do you live?
              <input type="text" name='country' required />
            </label>
            <label className='w-50 pr-2'>
              City
              <input type="text" name='city' required />
            </label>
            </div>
            <div className='d-flex justify-content-between flex-wrap'>
            <label className='pr-2 w-50'>
              Zip Code / Postal Code
              <input type="text" name='postalCode' required />
            </label>
            <label className='w-50'>
              House number
              <input type="text" name='houseNumber' />
            </label>
            </div>
            <div className='d-flex justify-content-between flex-wrap'>
            <PhoneInput
              // country={"np"}
              value={phone}
              onChange={setPhone}
              // onlyCountries={["np"]} // Limit to Nepal only (Optional)
              inputStyle={{ width: "100%", height: "40px" }}
            />
            {/* <label>
              Your phone number
              <input type="text" name='phoneNumber' required />
            </label> */}
            </div>
            <div className="mt-3">
              <label>
                <input type="checkbox" required /> I have read and agreed to the Terms and
                Conditions.
              </label>
              <br />
              <label>
                <input type="checkbox" /> I would like to receive personalized marketing emails.
              </label>
            </div>

            <h3 className="mt-4">How would you like to pay?</h3>
            <p>
              You can choose to pay the full amount now or pay only a deposit. If you choose to make
              a deposit, the full amount must be paid no later than 8 weeks before your adventure
              begins.
            </p>
            <label>
              <input type="radio" name="payment" value="full" required /> I will pay the full amount
              now - ${totalCost}
            </label>
            <label>
              <input type="radio" name="payment" value="deposit" /> I prefer to make a deposit - $
              {deposit}
            </label>

            <h3 className="mt-4">Payment Method</h3>
            <label>
              <input type="radio" name="paymentMethod" value="card" disabled /> Card
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="paypal" disabled /> PayPal
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="paypal" required /> Currently, We accept Cash, we will send you a bank details in a Email.
            </label>

            <button type="submit" className="btn btn-success mt-4" disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Book your adventure'}
            </button>


            {/* Success or Error Message */}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </form>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          {/* Why Bookatrekking.com? Card */}
          <div className="card mb-4">
            <div className="card-body">
              <h3>Why EchoHeartAdventure.com?</h3>
              <ul>
                <li><FontAwesomeIcon icon={faCheck} color='green' />  Expert support</li>
                <li><FontAwesomeIcon icon={faCheck} color='green' /> No additional fees</li>
                <li><FontAwesomeIcon icon={faCheck} color='green' /> Pay only a deposit now</li>
              </ul>
              <h4>Payment Methods</h4>
              <div className="d-flex justify-content-start">
              <span className='pr-2'><FontAwesomeIcon color='#009347' icon={faCcPaypal} size='2xl' /></span>
              <span className='pr-2'><FontAwesomeIcon color='#009347' icon={faCcVisa} size='2xl' /></span>
              <span className='pr-2'><FontAwesomeIcon color='#009347' icon={faCcStripe} size='2xl' /></span>
                {/* <img src="/path/to/visa-logo.png" alt="Visa" width="50" />
                <img src="/path/to/mastercard-logo.png" alt="MasterCard" width="50" />
                <img src="/path/to/paypal-logo.png" alt="PayPal" width="50" />
                <img src="/path/to/amex-logo.png" alt="American Express" width="50" /> */}
              </div>
            </div>
          </div>

          {/* Related Trek Blogs */}
          <div className="card">
            <div className="card-body">
              <h3>Related Blogs</h3>
              <ul>
                <li>
                  <a href="/blog/everest-base-camp-guide">
                    Everest Base Camp: Everything You Need to Know
                  </a>
                </li>
                <li>
                  <a href="/blog/high-altitude-trekking-tips">
                    High Altitude Trekking Tips
                  </a>
                </li>
                <li>
                  <a href="/blog/how-to-prepare-for-trekking">
                    How to Prepare for Your First Trek
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
