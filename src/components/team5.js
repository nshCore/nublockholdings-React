import React from 'react'

import PropTypes from 'prop-types'

import './team5.css'

const Team5 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="team5-max-width thq-section-max-width">
        <div className="team5-section-title">
          <div className="team5-content">
            <h2 className="thq-heading-2 team5-text">{props.heading1}</h2>
            <p className="team5-text1 thq-body-large">{props.content2}</p>
          </div>
        </div>
        <div className="team5-content1">
          <div className="team5-row">
            <div className="team5-container">
              <div className="team5-card">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="team5-placeholder-image thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content2">
                  <div className="team5-title">
                    <span className="team5-text2 thq-body-small">
                      {props.member1}
                    </span>
                    <span className="team5-text3 thq-body-small">
                      {props.member1Job}
                    </span>
                  </div>
                  <span className="team5-text4 thq-body-small">
                    {props.member1Content}
                  </span>
                </div>
                <div className="team5-social-icons">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team5-card1">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="team5-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content3">
                  <div className="team5-title1">
                    <span className="team5-text5 thq-body-small">
                      {props.member2}
                    </span>
                    <span className="team5-text6 thq-body-small">
                      {props.member2Job}
                    </span>
                  </div>
                  <span className="team5-text7 thq-body-small">
                    {props.member2Content}
                  </span>
                </div>
                <div className="team5-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team5.defaultProps = {
  member3Src:
    'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjMwMXw&ixlib=rb-4.0.3&q=80&w=500',
  heading1: 'Meet Our Team',
  member2Content:
    'Jane is a technology expert with a focus on delivering cutting-edge solutions.',
  member2Job: 'CTO',
  member1Content:
    'John is a visionary leader with a passion for driving business growth and innovation.',
  member2: 'Jane Smith',
  member4Src:
    'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjMwMXw&ixlib=rb-4.0.3&q=80&w=500',
  member2Alt: 'Image of Jane Smith',
  member1Alt: 'Image of John Doe',
  member2Src:
    'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjMwMHw&ixlib=rb-4.0.3&q=80&w=500',
  member1Src:
    'https://images.unsplash.com/photo-1636041282690-8404f759538e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTA5MjMwMXw&ixlib=rb-4.0.3&q=80&w=500',
  member1Job: 'CEO & Founder',
  member1: 'John Doe',
  rootClassName: '',
  content2:
    'Together, we work towards achieving our mission of empowering enterprises through innovation and excellence.',
}

Team5.propTypes = {
  member3Src: PropTypes.string,
  heading1: PropTypes.string,
  member2Content: PropTypes.string,
  member2Job: PropTypes.string,
  member1Content: PropTypes.string,
  member2: PropTypes.string,
  member4Src: PropTypes.string,
  member2Alt: PropTypes.string,
  member1Alt: PropTypes.string,
  member2Src: PropTypes.string,
  member1Src: PropTypes.string,
  member1Job: PropTypes.string,
  member1: PropTypes.string,
  rootClassName: PropTypes.string,
  content2: PropTypes.string,
}

export default Team5
