import React from 'react'

import PropTypes from 'prop-types'

import './contact-form2.css'

const ContactForm2 = (props) => {
  return (
    <div className="contact-form2-contact5 thq-section-padding">
      <div className="contact-form2-max-width thq-section-max-width thq-flex-row">
        <div className="contact-form2-content thq-flex-column">
          <div className="contact-form2-container">
            <div className="contact-form2-container1">
              <div className="contact-form2-section-title">
                <h2 className="thq-heading-2">{props.heading1}</h2>
              </div>
              <div className="contact-form2-contact-info thq-flex-column">
                <div className="contact-form2-row thq-flex-row">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="thq-body-small">{props.email}</span>
                </div>
                <div className="contact-form2-row1 thq-flex-row">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <span className="thq-body-small">{props.phone}</span>
                </div>
                <div className="contact-form2-row2 thq-flex-row">
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="thq-body-small">{props.adress}</span>
                </div>
              </div>
            </div>
            <div className="contact-form2-container2">
              <form className="contact-form2-form">
                <div className="contact-form2-input">
                  <label
                    htmlFor="contact-form-2-name"
                    className="thq-body-small"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-form-2-name"
                    placeholder="Name"
                    className="contact-form2-text-input thq-input"
                  />
                </div>
                <div className="contact-form2-input1">
                  <label
                    htmlFor="contact-form-2-email"
                    className="thq-body-small"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-form-2-email"
                    required="true"
                    placeholder="Email"
                    className="contact-form2-text-input1 thq-input"
                  />
                </div>
                <div className="contact-form2-input2">
                  <label
                    htmlFor="contact-form-2-message"
                    className="thq-body-small"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-form-2-message"
                    rows="3"
                    placeholder="Enter your message"
                    className="contact-form2-textarea thq-input"
                  ></textarea>
                </div>
                <div className="contact-form2-checkbox">
                  <input
                    type="checkbox"
                    id="contact-form-2-check"
                    checked="true"
                    className="thq-checkbox"
                  />
                  <label
                    htmlFor="contact-form-2-check"
                    className="thq-body-small"
                  >
                    I accept the Terms
                  </label>
                </div>
                <button type="submit" className="thq-button-filled">
                  <span className="thq-body-small">{props.action}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactForm2.defaultProps = {
  action: '/submit_contact_form',
  email: 'Email',
  phone: 'Phone',
  heading1: 'Contact Us',
  adress: 'Address',
}

ContactForm2.propTypes = {
  action: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  heading1: PropTypes.string,
  adress: PropTypes.string,
}

export default ContactForm2
