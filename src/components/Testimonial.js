import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { fetcher } from '../api';
import {API_URLS, BASE_IMAGE_URL} from '../api/url';

const Testimonials = () => {
  // const [customerData, setCustomerData] = useState([]);

  const {data, isLoading, isError ,error} = useQuery('testimonials', () => fetcher(API_URLS.TESTIMONIALS))

  useEffect(() => {
    if(data){
      console.log(data);
    }
  },[data])

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(isError){
    console.error("Error fetching data:", error);
    return <div>Error: {error.message || error}</div>;
  }
  if (!data || data.length === 0) {
    return <div>No reviews available.</div>;
  }
  // Simulating an API call to fetch customer data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace with your API call in the future, for now we are using static data
  //       const response = [
  //         {
  //           message: "Annapurna Base Camp is a dream destination. The breathtaking views and serene atmosphere left me in awe. Highly recommend it for anyone seeking adventure and peace.",
  //           name: "Sabim Prajapati",
  //           country: "Nepal",
  //           star: 5
  //         },
  //         {
  //           message: "Everest Base Camp was an unforgettable journey! Standing in the shadow of the world's highest peak was a humbling and inspiring experience.",
  //           image: "assets/images/testimonial/member-02.jpg",
  //           name: "Pradeep Paudel",
  //           country: "Nepal",
  //           star: 5
  //         },
  //         {
  //           message: "Langtang Himal is simply magical. The lush valleys, friendly locals, and stunning Himalayan vistas made it a trip to cherish forever.",
  //           image: "assets/images/testimonial/member-03.jpg",
  //           name: "Sabin Gurung",
  //           country: "Nepal",
  //           star: 4
  //         }
  //       ];
  //       setCustomerData(response);
  //     } catch (error) {
  //       console.error("Error fetching customer data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="customer-serv">
      <div className="container">
        <div className="row session-title">
          <h2>HAPPY CUSTOMERS</h2>
          <p>Hear the heartfelt experiences of our delighted travelers, sharing the joy and memories they've created with us.</p>
        </div>

        <div className="row">
          {data.map((message, index) => {
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="shado-2 card-b">
                  <p>{message.review}</p>
                </div>
                <div className="cust-det row">
                  <div className="col-sm-3 col-3 img-circl">
                    {message?.image ? <img alt="" src={`${BASE_IMAGE_URL}${message.picture_url}`} /> : <FontAwesomeIcon icon={faUser} size='2xl' />}
                  </div>
                  <div className="col-sm-5 col-5 an-mtc no-padding">
                    <b>{message.name}</b>
                    <p>{message.role}</p>
                  </div>
                  <div className="col-sm-4 col-4 star-par">
                    <ul className="stars">
                      <li>
                        {Array.from({ length: message.stars }).map((_, i) => (
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
