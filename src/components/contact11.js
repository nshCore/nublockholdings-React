import React from 'react'

import PropTypes from 'prop-types'

import './contact11.css'

const Contact11 = (props) => {
  return (
    <div
      className={`contact11-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact11-max-width thq-section-max-width">
        <div className="contact11-header">
          <h2 className="contact11-title heading">{props.title}</h2>
        </div>
        <div className="contact11-section-title">
          <div className="contact11-content">
            <p className="content-body-text">{props.content1}</p>
          </div>
        </div>
        <div className="contact11-content1 thq-flex-row">
          <div className="contact11-content2">
            <div className="contact11-content3">
              <svg
                viewBox="0 0 1024 1024"
                className="contact11-icon thq-icon-medium"
              >
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact11-contact-info">
                <h3 className="contact11-text1 faq-title">Email</h3>
                <p className="contact11-text2 faq-content">{props.content2}</p>
                <span className="contact11-email faq-content">
                  {props.email}
                </span>
              </div>
            </div>
            <div className="contact11-content4">
              <svg
                viewBox="0 0 1024 1024"
                className="contact11-icon2 thq-icon-medium"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact11-contact-info1">
                <h3 className="contact11-text3 faq-title">Office</h3>
                <p className="contact11-text4 faq-content">{props.content5}</p>
                <span className="contact11-address faq-content">
                  {props.address1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact11.defaultProps = {
  content1:
    "We are here to help you with any inquiries you may have. Reach out to us and let's discuss how we can empower your business.",
  rootClassName: '',
  content2: 'Contac us via email bellow',
  title: 'Get In Touch',
  content5:
    'Join our newsletter to stay informed about our latest services and offerings.',
  address1:
    'Marshall Islands Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Marshall Islands, MH96960',
  email: 'contact@nublock.holdings',
}

Contact11.propTypes = {
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  content2: PropTypes.string,
  title: PropTypes.string,
  content5: PropTypes.string,
  address1: PropTypes.string,
  email: PropTypes.string,
}

export default Contact11
