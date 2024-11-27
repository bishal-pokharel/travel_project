import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [customerData, setCustomerData] = useState([]);

  // Simulating an API call to fetch customer data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your API call in the future, for now we are using static data
        const response = [
          {
            message: "Annapurna Base Camp is a dream destination. The breathtaking views and serene atmosphere left me in awe. Highly recommend it for anyone seeking adventure and peace.",
            name: "Sabim Prajapati",
            country: "Nepal",
            star: 5
          },
          {
            message: "Everest Base Camp was an unforgettable journey! Standing in the shadow of the world's highest peak was a humbling and inspiring experience.",
            image: "assets/images/testimonial/member-02.jpg",
            name: "Pradeep Paudel",
            country: "Nepal",
            star: 5
          },
          {
            message: "Langtang Himal is simply magical. The lush valleys, friendly locals, and stunning Himalayan vistas made it a trip to cherish forever.",
            image: "assets/images/testimonial/member-03.jpg",
            name: "Sabin Gurung",
            country: "Nepal",
            star: 4
          }
        ];
        setCustomerData(response);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="customer-serv">
      <div className="container">
        <div className="row session-title">
          <h2>Happy Customers</h2>
          <p>Hear the heartfelt experiences of our delighted travelers, sharing the joy and memories they've created with us.</p>
        </div>

        <div className="row">
          {customerData.map((data, index) => {
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="shado-2 card-b">
                  <p>{data.message}</p>
                </div>
                <div className="cust-det row">
                  <div className="col-sm-3 col-3 img-circl">
                    {data?.image ? <img alt="" src={data.image} /> : <FontAwesomeIcon icon={faUser} size='2xl' />}
                  </div>
                  <div className="col-sm-5 col-5 an-mtc no-padding">
                    <b>{data.name}</b>
                    <p>{data.country}</p>
                  </div>
                  <div className="col-sm-4 col-4 star-par">
                    <ul className="stars">
                      <li>
                        {Array.from({ length: data.star }).map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} size="lg" />
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
