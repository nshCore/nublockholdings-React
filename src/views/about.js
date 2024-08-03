import React from 'react'

import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import Features16 from '../components/features16'
import Logos8 from '../components/logos8'
import Team14 from '../components/team14'
import CTA15 from '../components/cta15'
import Footer4 from '../components/footer4'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - nublock.holdings</title>
        <meta property="og:title" content="About - nublock.holdings" />
      </Helmet>
      <div className="about-header">
        <img
          alt="image"
          src="/nublock_holdings_light_large-1500h.png"
          className="about-image"
        />
      </div>
      <Banner1></Banner1>
      <Features16></Features16>
      <Logos8></Logos8>
      <Team14></Team14>
      <CTA15></CTA15>
      <Footer4
        logoSrc="/nublock_holdings_light_large-1500h.png"
        rootClassName="footer4-root-class-name1"
      ></Footer4>
    </div>
  )
}

export default About
