import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch team data from the API
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        // Simulating an API call here, replace this with your actual API call
        const response = [
          {
            'name': 'Bhusan Bhandari',
            'designation': 'CEO',
            'image': '/assets/images/team/team-1.jpg',
            'socialMedia': [
              'https://www.facebook.com',
              'https://twitter.com',
              'https://www.linkedin.com'
            ]
          },
          {
            'name': 'Sita Sharma',
            'designation': 'Marketing Manager',
            'image': '/assets/images/team/team-1.jpg',
            'socialMedia': [
              'https://www.facebook.com',
              'https://twitter.com',
              'https://www.linkedin.com'
            ]
          },
          {
            'name': 'Anil Kumar',
            'designation': 'Product Lead',
            'image': '/assets/images/team/team-1.jpg',
            'socialMedia': [
              'https://www.facebook.com',
              'https://twitter.com',
              'https://www.linkedin.com'
            ]
          }
        ];

        setTeamMembers(response);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="our-team">
      <div className="container">
        <div className="row session-title">
          <h2>Meet our team</h2>
          <p>Meet our passionate and experienced team who make your journey safe and memorable!</p>
        </div>
        <div className="row">
          {teamMembers.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card-1 team-member">
                <img src={item.image} alt={`Team Member ${index + 1}`} />
                <p><b>{item.name}</b> </p>
                <p>{item.designation}</p>
                <ul className="row justify-content-center">
                  {item.socialMedia.map((link, i) => (
                    <li key={i}>
                      <FontAwesomeIcon 
                        icon={i === 0 ? faFacebook : i === 1 ? faTwitter : faLinkedin} 
                      />
                      <Link to={link} target="_blank" rel="noopener noreferrer"></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
