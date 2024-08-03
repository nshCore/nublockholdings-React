import React from 'react'

import PropTypes from 'prop-types'

import './testimonial2.css'

const Testimonial2 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="testimonial2-max-width thq-section-max-width">
        <div className="testimonial2-stars">
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <p className="testimonial2-text thq-body-large">{props.review1}</p>
        <div className="testimonial2-avatar">
          <img
            alt={props.author1Alt}
            src={props.author1Src}
            className="testimonial2-avatar-image thq-img-ratio-1-1 thq-img-round"
          />
          <div className="testimonial2-avatar-content">
            <span className="testimonial2-text1 thq-body-small">
              {props.author1Name}
            </span>
            <span className="testimonial2-text2 thq-body-small">
              {props.author1Position}
            </span>
          </div>
          <img
            alt={props.company1LogoAlt}
            src={props.company1LogoSrc}
            className="testimonial2-logo"
          />
        </div>
      </div>
    </div>
  )
}

Testimonial2.defaultProps = {
  author1Name: 'John Smith',
  rootClassName: '',
  author1Src:
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjMwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review1:
    'Working with this company has been a game-changer for our business. Their innovative solutions have helped us streamline our operations and achieve significant growth.',
  company1LogoAlt: 'Tech Solutions Inc. logo',
  author1Alt: 'John Smith, CEO of Tech Solutions Inc.',
  author1Position: 'CEO of Tech Solutions Inc.',
}

Testimonial2.propTypes = {
  author1Name: PropTypes.string,
  rootClassName: PropTypes.string,
  author1Src: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  review1: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.string,
}

export default Testimonial2
