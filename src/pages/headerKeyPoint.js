import { faHackerNews } from '@fortawesome/free-brands-svg-icons'
import { faHandshakeAlt, faNetworkWired, faPerson, faStopwatch, faTimes, faWater } from '@fortawesome/free-solid-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const headerKeyPoint = () => {
  return (
    <div className='keypoint_container'>
      <div className='keypoint_row'>
        <div className='key_card'>
            <FontAwesomeIcon icon={faHandshakeAlt} size='2xl' />
            <div className='key_card_text'>
                <h3>Best Travel Friend</h3>
                <p>We are best for travelling friendly. We treat our each team as a good friend.</p>
            </div>
        </div>
        <div className='key_card'>
            <FontAwesomeIcon icon={faNetworkWired} size='2xl' />
            <div className='key_card_text'>
                <h3>Secure Trip</h3>
                <p>We are providing your travel safe and safety.</p>
            </div>
        </div>
        <div className='key_card'>
            <FontAwesomeIcon icon={faPerson} size='2xl' />
            <div className='key_card_text'>
                <h3>Best Review</h3>
                <p>We are receiving the best feedback from our happy costumer</p>
            </div>
        </div>
        <div className='key_card'>
            <FontAwesomeIcon icon={faStopwatch} size='2xl' />
            <div className='key_card_text'>
                <h3>24 Hours Services</h3>
                <p>We are providing 24/7 services for your better experiences.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default headerKeyPoint
