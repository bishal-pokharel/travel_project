import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetcher } from '../api';
import { API_URLS, BASE_IMAGE_URL } from '../api/url';
import BaseComponent from 'bootstrap/js/dist/base-component';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const {data, isLoading, isError, error} = useQuery("team", () => fetcher(API_URLS.TEAM));

  useEffect(() => {
    if(data){
      console.log(data);
    }
  },[data])

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(isError){
    console.error("Error fetching data:", error);
    return <div>Error: {error.message || error}</div>;
  }
  if (!data || data.length === 0) {
    return <div>No data available.</div>;
  }

  // const {name, role, facebook, linkedin, twitter , iamge_url} = data || {} ;
  // console.log(name,role)

  // Fetch team data from the API
  // useEffect(() => {
  //   const fetchTeamData = async () => {
  //     try {
  //       // Simulating an API call here, replace this with your actual API call
  //       const response = [
  //         {
  //           'name': 'Bhusan Bhandari',
  //           'designation': 'CEO',
  //           'image': '/assets/images/team/team-1.jpg',
  //           'socialMedia': [
  //             'https://www.facebook.com',
  //             'https://twitter.com',
  //             'https://www.linkedin.com'
  //           ]
  //         },
  //         {
  //           'name': 'Sita Sharma',
  //           'designation': 'Marketing Manager',
  //           'image': '/assets/images/team/team-1.jpg',
  //           'socialMedia': [
  //             'https://www.facebook.com',
  //             'https://twitter.com',
  //             'https://www.linkedin.com'
  //           ]
  //         },
  //         {
  //           'name': 'Anil Kumar',
  //           'designation': 'Product Lead',
  //           'image': '/assets/images/team/team-1.jpg',
  //           'socialMedia': [
  //             'https://www.facebook.com',
  //             'https://twitter.com',
  //             'https://www.linkedin.com'
  //           ]
  //         }
  //       ];

  //       setTeamMembers(response);
  //     } catch (error) {
  //       console.error('Error fetching team data:', error);
  //     }
  //   };

  //   fetchTeamData();
  // }, []);

  return (
    <div className="our-team">
      <div className="container">
        <div className="row session-title">
          <h2>MEET OUR TEAM</h2>
          <p>Meet our passionate and experienced team who make your journey safe and memorable!</p>
        </div>
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card-1 team-member">
                <img src={`${BASE_IMAGE_URL}${item.image_url}`} alt={`Team Member ${index + 1}`} />
                <p><b>{item.name}</b> </p>
                <p>{item.role}</p>
                <ul className="row justify-content-center">
                    <li>
                      <FontAwesomeIcon 
                        icon={faFacebook} 
                      />
                      <Link to={item.facebook} target="_blank" rel="noopener noreferrer"></Link>
                    </li>
                    <li>
                      <FontAwesomeIcon 
                        icon={faTwitter} 
                      />
                      <Link to={item.twitter} target="_blank" rel="noopener noreferrer"></Link>
                    </li>
                    <li>
                      <FontAwesomeIcon 
                        icon={faLinkedin} 
                      />
                      <Link to={item.linkedin} target="_blank" rel="noopener noreferrer"></Link>
                    </li>
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
