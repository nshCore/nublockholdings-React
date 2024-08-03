import React from 'react'

import { Helmet } from 'react-helmet'

import Hero7 from '../components/hero7'
import Features18 from '../components/features18'
import Team5 from '../components/team5'
import Testimonial2 from '../components/testimonial2'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'
import './about1.css'

const About1 = (props) => {
  return (
    <div className="about1-container">
      <Helmet>
        <title>About1 - nublock.holdings</title>
        <meta property="og:title" content="About1 - nublock.holdings" />
      </Helmet>
      <div className="about1-header">
        <img
          alt="image"
          src="/nublock_holdings_light_large-1500h.png"
          className="about1-image"
        />
      </div>
      <Hero7></Hero7>
      <Features18></Features18>
      <Team5 rootClassName="team5-root-class-name"></Team5>
      <Testimonial2 rootClassName="testimonial2-root-class-name"></Testimonial2>
      <Contact11></Contact11>
      <Footer4
        logoSrc="/nublock_holdings_light_large-1500h.png"
        rootClassName="footer4-root-class-name2"
      ></Footer4>
    </div>
  )
}

export default About1
