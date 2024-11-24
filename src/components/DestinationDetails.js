import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { faWalking, faStopwatch, faDirections } from '@fortawesome/free-solid-svg-icons';

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const destinationData = {
    switzerland: {
      id: "switzerland",
      title: "Switzerland",
      subtitle: "Explore the beauty of the Alps",
      overview: `
        Discover the breathtaking landscapes of Switzerland, home to majestic mountains, serene lakes, and charming villages. Perfect for adventure enthusiasts and nature lovers.
      `,
      itinerary: [
        "Day 1: Arrival in Zurich",
        "Day 2: Visit the Rhine Falls",
        "Day 3: Explore Interlaken",
        "Day 4: Excursion to Jungfraujoch",
      ],
      included: ["Accommodation", "Meals", "Guided tours", "Transportation"],
      faq: ["What is the best time to visit Switzerland?", "Are the tours family-friendly?"],
      reviews: [
        { name: "Alice", comment: "An unforgettable experience!", rating: 5 },
        { name: "Bob", comment: "Absolutely loved it.", rating: 4 },
      ],
      duration: 7,
      pricePerPerson: 5165,
      distance: "10 - 20 km per day",
      ascent: "200 - 400 m per day",
      highlights: ["Experience the Swiss Alps", "Taste authentic Swiss chocolates", "Enjoy panoramic train rides"],
      tags: ["Everest", "Culture"],
      price: 5165,
      discounts: {
        1: 5690,
        2: 5165,
        "3+": 4383,
      },
    },
    maldives: {
        id: "maldives",
        title: "Maldives",
        subtitle: "Explore the beauty of the Alps",
        overview: `
          Discover the breathtaking landscapes of Switzerland, home to majestic mountains, serene lakes, and charming villages. Perfect for adventure enthusiasts and nature lovers.
        `,
        itinerary: [
          "Day 1: Arrival in Zurich",
          "Day 2: Visit the Rhine Falls",
          "Day 3: Explore Interlaken",
          "Day 4: Excursion to Jungfraujoch",
        ],
        included: ["Accommodation", "Meals", "Guided tours", "Transportation"],
        faq: ["What is the best time to visit Switzerland?", "Are the tours family-friendly?"],
        reviews: [
          { name: "Alice", comment: "An unforgettable experience!", rating: 5 },
          { name: "Bob", comment: "Absolutely loved it.", rating: 4 },
        ],
        duration: 7,
        pricePerPerson: 5165,
        distance: "10 - 20 km per day",
        ascent: "200 - 400 m per day",
        highlights: ["Experience the Swiss Alps", "Taste authentic Swiss chocolates", "Enjoy panoramic train rides"],
        tags: ["Everest", "Culture"],
        price: 5165,
        discounts: {
          1: 5690,
          2: 5165,
          "3+": 4383,
        },
      },
  };

  const destination = destinationData[id];

  const [activeTab, setActiveTab] = useState("overview");
  const [startDate, setStartDate] = useState("");
  const [persons, setPersons] = useState(2);
  const [showGroupDiscount, setShowGroupDiscount] = useState(false);

  if (!destination) {
    return <h2>Destination not found</h2>;
  }

  const calculateBookingDetails = () => {
    if (!startDate) return null;

    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + destination.duration);

    const costPerPerson = persons >= 3 ? destination.discounts["3+"] : destination.discounts[persons] || destination.discounts[1];
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
        title: destination.title,
        startDate: bookingDetails.startDate,
        endDate: bookingDetails.endDate,
        persons,
        totalCost: bookingDetails.totalCost,
        deposit: bookingDetails.payNow,
      },
    });
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
              {/* <i className="icon-trails"></i> */}
              <p>Trails: {destination.distance}</p>
            </div>
            <div className="info-box">
                <FontAwesomeIcon icon={faDirections} />
              {/* <i className="icon-ascent"></i> */}
              <p>Ascent per day: {destination.ascent}</p>
            </div>
          </div>
          <div className="tags mb-4">
            {destination.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="tabs">
            <ul className="tab-list">
              <li
                className={`tab-item ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </li>
              <li
                className={`tab-item ${activeTab === "faq" ? "active" : ""}`}
                onClick={() => setActiveTab("faq")}
              >
                FAQs
              </li>
              <li
                className={`tab-item ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </li>
            </ul>
            <div className="tab-content">
              {activeTab === "overview" && <p>{destination.overview}</p>}
              {activeTab === "faq" && (
                <ul>
                  {destination.faq.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {activeTab === "reviews" && (
                <ul>
                  {destination.reviews.map((review, index) => (
                    <li key={index}>
                      <strong>{review.name}:</strong> {review.comment} ({review.rating} stars)
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="booking-card">
            <p>Free cancellation up to eight weeks in advance!</p>
            <h3>
              Starting at <span className="price">${destination.pricePerPerson}</span> per person
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
                />
              </label>
              {showGroupDiscount && (
            <div className="group-discount mt-4">
              <h4>Group Discount</h4>
              <ul>
                {Object.entries(destination.discounts).map(([key, value]) => (
                  <li key={key}>
                    {key === "3+" ? "3+ persons" : `${key} person${key > 1 ? "s" : ""}`}: ${value}
                  </li>
                ))}
              </ul>
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
