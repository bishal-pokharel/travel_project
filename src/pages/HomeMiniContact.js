import { faCcPaypal, faPaypal } from '@fortawesome/free-brands-svg-icons'
import { faMailchimp } from '@fortawesome/free-brands-svg-icons/faMailchimp'
import { faBank, faDollar, faHandshakeAlt, faLocation } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navigate } from 'react-router-dom'

const headerKeyPoint = () => {
  return (
    <div className='keypointcontact_container'>
      <div className='keypointcontact_row'>
        <div className='keypoint-contact ml-5'>
            <FontAwesomeIcon icon={faLocation} size='3x' />
            <div>
                <h3>ARE YOU LOOKING FOR YOUR NEPAL BEAUTIFUL PLACE VISIT?</h3>
                <p>Meet With Us We are Open now</p>
                <p>The team who are already visited and have more experience in trekking field</p>
            </div>
            <div className='text-center'>
                <button
                  className="btn"
                  onClick={() => Navigate(`/contact-us`)}
                >
                  Contact Us
                </button>
            </div>
        </div>
       
        <div className='keypoint-contact'>
            <FontAwesomeIcon icon={faMessage} size='3x' />
            <div className='text-center'>
                <h3>KEEP UPDATE ABOUT US</h3>
                <p>Subscribe us for our new updates...</p>
                {/* <p>Adventure is more good for reasonable price with easy payment methods and we are already accepting the online as well as cash for your easy access.</p> */}
            </div>
            <div className='d-flex justify-content-center align-items-center text-center'>
              <form className='form-inline gap-3'>
                <input type='email' className='form-control mr-2' placeholder='Enter your email' />
                <button type='submit' className='btn'>Subscribe</button>
              </form>
                {/* <FontAwesomeIcon className='pr-2' icon={faCcPaypal} size='2x' />
                <FontAwesomeIcon className='pr-2' icon={faCcPaypal} size='2x' />
                <FontAwesomeIcon className='pr-2' icon={faCcPaypal} size='2x' /> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default headerKeyPoint
