import React from 'react'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
          <span className="features16-text thq-body-small">
            {props.slogan1}
          </span>
          <div className="features16-content">
            <h2 className="features16-text1 thq-heading-2">{props.heading1}</h2>
            <span className="features16-text2 thq-body-large">
              {props.content1}
            </span>
          </div>
        </div>
        <div className="features16-content1">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content2">
                <h3 className="features16-feature1-title thq-heading-3">
                  {props.feature1Title}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content3">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features16.defaultProps = {
  feature1Description:
    'Cutting-edge technology solutions to drive your business forward.',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjI2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Consulting Image',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjI2Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  slogan1: 'Slogan',
  feature3ImageAlt: 'Real Estate Investments Image',
  feature2Title: 'Consulting',
  feature3Description:
    'Opportunities for lucrative real estate investments tailored to your needs.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1551989745-347c28b620e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjI2MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Expert consulting services to optimize your business strategies.',
  feature3Title: 'Real Estate Investments',
  heading1: 'Discover the Key Features',
  feature1ImageAlt: 'Technology Services Image',
  feature1Title: 'Technology Services',
}

Features16.propTypes = {
  feature1Description: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  content1: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  slogan1: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  heading1: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features16
