import React from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-credits">
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="footer4-text thq-body-small">
                <span>© 2024 NB International Holdings LLC</span>
                <br></br>
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text3 thq-body-small">
                {props.privacyLink}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  rootClassName: '',
  privacyLink: 'Terms And Conditions',
}

Footer4.propTypes = {
  rootClassName: PropTypes.string,
  privacyLink: PropTypes.string,
}

export default Footer4
