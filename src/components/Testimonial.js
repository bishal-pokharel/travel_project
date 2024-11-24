import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const Customerdata = [
    {
      "message": "Classic Aqua water purify is good. Because it cures our purify that is called health and gives good life. I suggest Classic Aqua for its best purify of water.",
      "image": "assets/images/testimonial/member-01.jpg",
      "name" : "Sabim Prajapati",
      "country": "Nepal",
      "star" : 5
    },
    {
      "message": "Classic Aqua water purify is good. Because it cures our purify that is called health and gives good life. I suggest Classic Aqua for its best purify of water.",
      "image": "assets/images/testimonial/member-01.jpg",
      "name" : "Pradeep Paudel",
      "country": "Nepal",
      "star" : 5
    },
    {
      "message": "Classic Aqua water purify is good. Because it cures our purify that is called health and gives good life. I suggest Classic Aqua for its best purify of water.",
      "image": "assets/images/testimonial/member-01.jpg",
      "name" : "Sabin Gurung",
      "country": "Nepal",
      "star" : 4
    }
  ]
  return (
    <section className="customer-serv">
      <div className="container">
        <div className="row session-title">
          <h2>Happy Customers</h2>
        </div>

        <div className="row ro-clo">
          {Customerdata.map((data, index) => {
          return(
            <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="shado-2 card-b">
              <p>
                {data.message}
              </p>
            </div>
            <div className="cust-det row">
              <div className="col-sm-3 col-3 img-circl">
                <img alt="" src={data.image} />
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
