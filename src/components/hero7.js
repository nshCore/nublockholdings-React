import React from 'react'

import PropTypes from 'prop-types'

import './hero7.css'

const Hero7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero7-max-width thq-section-max-width">
        <div className="hero7-content">
          <h1 className="hero7-text thq-heading-1">{props.heading1}</h1>
          <p className="hero7-text1 thq-body-large">{props.content1}</p>
          <div className="hero7-actions">
            <div className="hero7-container">
              <button className="thq-button-filled hero7-button">
                <span className="hero7-text2 thq-body-small">
                  {props.action1}
                </span>
              </button>
            </div>
            <div className="hero7-container1">
              <button className="thq-button-outline hero7-button1">
                <span className="hero7-text3 thq-body-small">
                  {props.action2}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero7.defaultProps = {
  action2: 'Contact Us',
  heading1: 'Empowering Enterprises with Innovative Solutions',
  action1: 'Explore Our Services',
  content1:
    'Welcome to our platform that offers a range of business solutions, technology services, consulting, and real estate investments to drive growth and create lasting value in the business ecosystem.',
}

Hero7.propTypes = {
  action2: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero7
