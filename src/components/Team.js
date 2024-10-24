import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitterSquare, faInstagramSquare, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { inArray } from 'jquery';
// import team1 from './assets/images/team/team-1.jpg';
// import team2 from '../assets/images/team/team-2.jpg';
// import team3 from '../assets/images/team/team-3.jpg';
// import team4 from '../assets/images/team/team-4.jpg';

const Team = () => {

  const teamMember = [
    {
      'name': 'Bhusan Bhandari',
      'degination': 'CEO',
      'image': '/assets/images/team/team-1.jpg',
      'socialMedia': [
        'www.facebook.com',
        'twitter',
        'linkedin'
      ]
      },
      {
        'name': 'Bhusan Bhandari',
        'degination': 'CEO',
        'image': '/assets/images/team/team-1.jpg',
        'socialMedia': [
          'www.facebook.com',
          'twitter',
          'linkedin'
        ]
        },
        {
          'name': 'Bhusan Bhandari',
          'degination': 'CEO',
          'image': '/assets/images/team/team-1.jpg',
          'socialMedia': [
            'www.facebook.com',
            'twitter',
            'linkedin'
          ]
          }
  ]
  return (
    <div className="our-team">
      <div className="container">
        <div className="row session-title">
          <h2>Meeto our team</h2>
          <p>Meet our team who are passonate and have experience in trekking who make always safe for your journey! </p>
        </div>
        <div className="row">
            {
            teamMember.map((item, index) => {
              return(
                <div className="col-md-4 col-sm-6">
                <div className="card-1 team-member">
                  <img src={item.image} alt="Team Member 1" />
                  <p><b>{item.name}</b> {item.degination}</p>
                  <ul className="row justify-content-center">
                    <li><FontAwesomeIcon icon={faFacebook} /><Link to={`${item.socialMedia[0]}`}></Link></li>
                    <li><FontAwesomeIcon icon={faTwitter} /></li>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    {/* <li><i className="fab fa-google-plus-g"></i></li>
                    <li><i className="fab fa-pinterest-p"></i></li> */}
                  </ul>
                </div>
              </div>
              )
            })
            }

        </div>
      </div>
    </div>
  );
};

export default Team;
