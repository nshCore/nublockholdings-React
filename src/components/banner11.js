import React from 'react'

import PropTypes from 'prop-types'

import './banner11.css'

const Banner11 = (props) => {
  return (
    <div className="banner11-container thq-section-padding">
      <div className="banner11-max-width thq-section-max-width">
        <div className="banner11-container1">
          <h2 className="banner11-title heading">{props.heading1}</h2>
          <span className="banner11-text content-body-text">
            {props.content1}
          </span>
        </div>
        <button type="button" className="banner11-button thq-button-filled">
          {props.action1}
        </button>
      </div>
    </div>
  )
}

Banner11.defaultProps = {
  action1: 'Get Started',
  heading1: 'Innovative Business Solutions',
  content1:
    'Explore our range of services to elevate your business to new heights.',
}

Banner11.propTypes = {
  action1: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
}

export default Banner11
