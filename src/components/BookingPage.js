import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showDetails, setShowDetails] = useState(false);

  if (!state) {
    return <h2>No booking details provided. Please start the booking process again.</h2>;
  }

  const { title, startDate, endDate, persons, totalCost, deposit } = state;

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
          <h1>Book your adventure now</h1>
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

          <form className="booking-form mt-4">
            <h3>Personal Details</h3>
            <label>
              Your first name
              <input type="text" required />
            </label>
            <label>
              Your last name
              <input type="text" required />
            </label>
            <label>
              Your e-mail address
              <input type="email" required />
            </label>
            <div className='d-flex justify-content-between flex-wrap'>
            <label className='w-50 pr-2'>
              In which country do you live?
              <input type="text" required />
            </label>
            <label className='w-50'>
              Street
              <input type="text" required />
            </label>
            </div>
            <div className='d-flex justify-content-between flex-wrap'>
            <label className='pr-2 w-50'>
              House number
              <input type="text" required />
            </label>
            <label className='w-50'>
              House number addition
              <input type="text" />
            </label>
            </div>
            <div className='d-flex justify-content-between flex-wrap'>
            <label className='w-50 pr-2'>
              City
              <input type="text" required />
            </label>
            <label className='w-50'>
              Zip Code / Postal Code
              <input type="text" required />
            </label>
            </div>
            <label>
              Your phone number
              <input type="text" required />
            </label>

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
            <br />
            <label>
              <input type="radio" name="payment" value="deposit" /> I prefer to make a deposit - $
              {deposit}
            </label>

            <h3 className="mt-4">Payment Method</h3>
            <label>
              <input type="radio" name="paymentMethod" value="card" required /> Card
            </label>
            <br />
            <label>
              <input type="radio" name="paymentMethod" value="paypal" /> PayPal
            </label>

            <button type="submit" className="btn btn-success mt-4">
              Book your adventure
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          {/* Why Bookatrekking.com? Card */}
          <div className="card mb-4">
            <div className="card-body">
              <h3>Why Bookatrekking.com?</h3>
              <ul>
                <li>Expert support</li>
                <li>No additional fees</li>
                <li>Pay only a deposit now</li>
              </ul>
              <h4>Payment Methods</h4>
              <div className="d-flex gap-2">
                <img src="/path/to/visa-logo.png" alt="Visa" width="50" />
                <img src="/path/to/mastercard-logo.png" alt="MasterCard" width="50" />
                <img src="/path/to/paypal-logo.png" alt="PayPal" width="50" />
                <img src="/path/to/amex-logo.png" alt="American Express" width="50" />
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
