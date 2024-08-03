import React from 'react'

import PropTypes from 'prop-types'

import './work.css'

const Work = (props) => {
  return (
    <div className="work-work">
      <img alt="image" src={props.image} className="work-image" />
      <div className="work-details">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-text">{props.title}</span>
          </div>
          <span className="work-text1">{props.description}</span>
        </div>
        <div className="work-tags">
          <div className="link">
            <span className="work-text2">{props.text}</span>
            <svg viewBox="0 0 1024 1024" className="work-icon">
              <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

Work.defaultProps = {
  text: 'Learn More',
  rootClassName: '',
  image: '/work%20%231-1500w.png',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  title: 'MOTECH',
}

Work.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default Work
