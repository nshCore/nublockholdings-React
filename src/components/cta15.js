import React from 'react'

import PropTypes from 'prop-types'

import './cta15.css'

const CTA15 = (props) => {
  return (
    <div className="cta15-container thq-section-padding">
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta15-background-image thq-img-ratio-16-9"
      />
      <div className="cta15-max-width thq-section-max-width">
        <div className="cta15-column">
          <div className="cta15-content">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
          <div className="cta15-actions">
            <button type="button" className="thq-button-filled">
              {props.action1}
            </button>
            <button type="button" className="thq-button-outline">
              {props.action2}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA15.defaultProps = {
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1589829068065-20154e8f9642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjI2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  backgroundImageAlt: 'Image of a team discussing business strategies',
  heading1: 'Ready to transform your business?',
  action1: 'Get in touch',
  action2: 'Learn more',
  content1:
    'Contact us today to discuss how our innovative solutions can take your business to the next level.',
}

CTA15.propTypes = {
  backgroundImageSrc: PropTypes.string,
  backgroundImageAlt: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
}

export default CTA15
