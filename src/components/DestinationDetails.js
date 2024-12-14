import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { faWalking, faStopwatch, faDirections } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { fetcher } from '../api';
import { API_URLS, BASE_IMAGE_URL } from '../api/url';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery(
    ['destinationDetails', id],
    () => fetcher(`${API_URLS.DESTINATION_DETAILS}/${id}/`), // API call with the `id`
    { enabled: !!id } // Ensure the query runs only when `id` is available
  );

  const destination = data;
  const [activeTab, setActiveTab] = useState("Overview");
  const [startDate, setStartDate] = useState("");
  const [persons, setPersons] = useState(1);
  const [showGroupDiscount, setShowGroupDiscount] = useState(false);

  // console.log(id)
  

  if (isLoading) return <h2>Loading...</h2>;
  if (isError || !data) return <h2>Error loading destination details.</h2>;

  if (!destination) {
    return <h2>Destination not found</h2>;
  }
  
  const calculateBookingDetails = () => {
    if (!startDate) return null;

    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + parseInt(destination.duration, 10));

    const defaultPrice = parseFloat(destination.price);
    const costPerPerson =
    destination.discounts && persons >= 3
      ? destination.discounts["3+"]
      : destination.discounts?.[persons] || defaultPrice;

    // const costPerPerson = persons >= 3 ? destination.discounts["3+"] : destination.discounts[persons] || destination.discounts[1];
    const totalCost = costPerPerson * persons;
    const payNow = totalCost * 0.25; // 25% upfront payment

    return {
      startDate: start.toISOString().split("T")[0],
      endDate: end.toISOString().split("T")[0],
      totalCost,
      payNow,
    };
  };

  const bookingDetails = calculateBookingDetails();

  const handleBookNow = () => {
    if (!startDate) {
      alert('Please select a start date before booking.');
      return;
    }
  
    navigate('/booking', {
      state: {
        id: id,
        title: destination.title,
        startDate: bookingDetails.startDate,
        endDate: bookingDetails.endDate,
        persons,
        totalCost: bookingDetails.totalCost,
        deposit: bookingDetails.payNow,
      },
    });
  };

  const renderTabBody = (body) => {
    if (Array.isArray(body)) {
      // If the body is an array, map over it
      return (
        <ul>
          {body.map((item, idx) => {
            if (typeof item === "object" && item !== null) {
              return (
                <li key={idx}
                dangerouslySetInnerHTML={{ __html: item.value }}
                />
              );
            }
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      );
    } else if (typeof body === "string") {
      // If the body is a string, split into paragraphs
      return body.split("\n").map((paragraph, idx) => <p key={idx}>{paragraph}</p>);
    } else if (typeof body === "object" && body !== null) {
      // Render object keys and values if the body is a single object
      return (
        <div>
          <strong>{body.type}:</strong> {body.value} (ID: {body.id})
        </div>
      );
    }
    return null; // Return nothing if the body format is not supported
  };

  return (
    <div className="destination-details container">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8">
          <h1>{destination.title}</h1>
          <h2>{destination.subtitle}</h2>
          <div className="info-boxes d-flex align-items-center mb-4">
            <div className="info-box">
              <i className="icon-duration"></i>
              <FontAwesomeIcon icon={faWalking} />
              <p>Duration: {destination.duration}</p>
            </div>
            <div className="info-box">
                <FontAwesomeIcon icon={faStopwatch} />
              <p>Trails: {destination.distance}</p>
            </div>
            <div className="info-box">
                <FontAwesomeIcon icon={faDirections} />
              <p>Ascent per day: {destination.ascent}</p>
            </div>
          </div>
          <div className="tags mb-4">
            {destination?.tags?.map((tag, index) => (
              
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="tabs">
            <ul className="tab-list">
              {destination?.tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`tab-item ${activeTab === tab.title ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.title)}
                >
                  {tab.title}
                </li>
        ))}
            </ul>
            <div className="tab-content">
            {destination?.tabs.map((tab, index) => (
              activeTab === tab.title && (
                <div key={index}>
                  {renderTabBody(tab.body)}
                </div>
              )
            ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="booking-card">
            <p>Free cancellation up to eight weeks in advance!</p>
            <h3>
              Starting at <span className="price">${destination.price}</span> per person
            </h3>
            <div className="booking-options">
              <label>
                Persons:
                <input type="number"
                 min="1" 
                 defaultValue="1"
                 value={persons}
                 onChange={(e) => setPersons(parseInt(e.target.value) || 1)}
                 />
              </label>
              <label>
                Pick a date:
                <input 
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                />
              </label>
              {showGroupDiscount && (
                <div className="group-discount mt-4">
                  <h4>Group Discount</h4>
                  {destination.discounts ? (
                    <ul>
                      {Object.entries(destination.discounts).map(([key, value]) => (
                        <li key={key}>
                          {key === "3+" ? "3+ persons" : `${key} person${key > 1 ? "s" : ""}`}: ${value}
                        </li>
                      ))}
                    </ul>
                    ) : (
                      <p>No group discounts available currently.</p>
                    )}
                </div>
              )}

            {bookingDetails && (
                <div className="booking-summary mt-4">
                <h4>Booking Summary</h4>
                <p>Start date: {bookingDetails.startDate}</p>
                <p>End date: {bookingDetails.endDate}</p>
                <p>Persons: {persons}</p>
                <p>Booking cost: ${bookingDetails.totalCost}</p>
                <p>Pay now: ${bookingDetails.payNow} (25%)</p>
                </div>
            )}
            </div>
            <button className="btn btn-primary" onClick={() => setShowGroupDiscount(!showGroupDiscount)}>Check group discount</button>
            <button className="btn btn-success" onClick={handleBookNow}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
