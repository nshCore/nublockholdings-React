import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq13.css'

const FAQ13 = (props) => {
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  return (
    <div className="faq13-faq8 thq-section-padding">
      <div className="faq13-max-width thq-section-max-width">
        <div className="faq13-container thq-flex-column">
          <div className="faq13-section-title thq-section-max-width thq-flex-column">
            <div className="faq13-content">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="thq-body-large">{props.content1}</p>
            </div>
            <button type="button" className="thq-button-filled">
              {props.action1}
            </button>
          </div>
          <div className="thq-section-max-width thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq13-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq13-trigger"
              >
                <p className="faq13-faq1-question thq-body-large">
                  {props.faq1Question}
                </p>
                <div className="faq13-icons-container">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon02">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq13-container03">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq13-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq13-trigger1"
              >
                <p className="faq13-faq2-question thq-body-large">
                  {props.faq2Question}
                </p>
                <div className="faq13-icons-container1">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon04">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon06">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq13-container06">
                  <span className="thq-body-small">
                    Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq13-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq13-trigger2"
              >
                <p className="faq13-faq2-question1 thq-body-large">
                  {props.faq3Question}
                </p>
                <div className="faq13-icons-container2">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon08">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon10">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq13-container09">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq13-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq13-trigger3"
              >
                <p className="faq13-faq2-question2 thq-body-large">
                  {props.faq4Question}
                </p>
                <div className="faq13-icons-container3">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon12">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon14">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq13-container12">
                  <span className="thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut
                    eligendi molestias. Ex ipsum incidunt ut excepturi eaque sed
                    nulla quia qui exercitationem alias aut consequuntur nihil
                    et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq13-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq13-trigger4"
              >
                <p className="faq13-faq1-question1 thq-body-large">
                  {props.faq5Question}
                </p>
                <div className="faq13-icons-container4">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon16">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq13-icon18">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq13-container15">
                  <span className="thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis
                    sunt aut deleniti illum non repudiandae voluptatem. Aut
                    praesentium doloribus qui distinctio neque ut unde
                    temporibus. Cum exercitationem eveniet in omnis animi in
                    corporis nulla. Sed tempora excepturi et voluptatem modi et
                    exercitationem voluptate cum illum quisquam 33 quia
                    blanditiis eos minus consequatur.Ut neque quam qui
                    dignissimos voluptates ut voluptate totam aut consequuntur
                    quod. Ut voluptas incidunt ut fuga nostrum ut quaerat enim
                    eum earum tenetur? Est esse harum et Quis officiis et enim
                    amet.Et minima tempore et neque voluptatem eos amet officiis
                    et temporibus Quis. Et suscipit esse id nemo sunt At nihil
                    earum et consequatur fuga aut sapiente voluptate est
                    cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
        <div className="faq13-content1 thq-section-max-width thq-flex-column">
          <h2 className="thq-heading-2">{props.heading2}</h2>
          <p className="thq-body-large">{props.content2}</p>
          <button type="button" className="thq-button-filled">
            {props.action2}
          </button>
        </div>
      </div>
    </div>
  )
}

FAQ13.defaultProps = {
  faq5Question: 'How can I apply to join your team?',
  faq2Question: 'How can I start a project with your agency?',
  heading2: 'Join Our Team',
  faq1Question: 'What services does your agency offer?',
  heading1: 'Frequently Asked Questions',
  content2:
    'You can start a project with us by filling out the contact form on our website or by reaching out to us directly via email or phone.',
  content1:
    'We offer branding, design, marketing, and web development services to help businesses establish a strong online presence.',
  faq3Question: 'Do you have any job openings at the moment?',
  action2: 'Apply Now',
  action1: 'View Open Positions',
  faq4Question: 'What qualities do you look for in potential team members?',
}

FAQ13.propTypes = {
  faq5Question: PropTypes.string,
  faq2Question: PropTypes.string,
  heading2: PropTypes.string,
  faq1Question: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  content1: PropTypes.string,
  faq3Question: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  faq4Question: PropTypes.string,
}

export default FAQ13
