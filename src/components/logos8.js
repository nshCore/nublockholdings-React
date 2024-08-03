import React from 'react'

import PropTypes from 'prop-types'

import './logos8.css'

const Logos8 = (props) => {
  return (
    <div className="logos8-container thq-section-padding">
      <div className="logos8-max-width thq-section-max-width">
        <div className="logos8-container1">
          <h2 className="thq-heading-2 logos8-text">{props.heading1}</h2>
          <p className="logos8-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="logos8-container2 thq-grid-2">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos8-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos8-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos8-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos8-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos8-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos8-logo6 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo7Alt}
            src={props.logo7Src}
            className="logos8-logo7 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo8Alt}
            src={props.logo8Src}
            className="logos8-logo8 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos8.defaultProps = {
  logo8Alt: 'Innovative Solutions Logo',
  logo2Alt: 'Business Consulting Logo',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Alt: 'Technology Solutions Logo',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Alt: 'Real Estate Investments Logo',
  logo5Alt: 'Design Logo',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  heading1: 'Empowering Enterprises with Innovative Solutions',
  logo6Alt: 'Marketing Logo',
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Alt: 'Branding Logo',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Alt: 'Web Development Logo',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
}

Logos8.propTypes = {
  logo8Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo5Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo8Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo2Src: PropTypes.string,
  logo7Src: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  logo6Src: PropTypes.string,
}

export default Logos8
