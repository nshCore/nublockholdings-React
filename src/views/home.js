import React from 'react'

import { Helmet } from 'react-helmet'

import FAQ131 from '../components/faq131'
import Service from '../components/service'
import Statistic from '../components/statistic'
import Client from '../components/client'
import Contact11 from '../components/contact11'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>nublock.holdings</title>
        <meta property="og:title" content="nublock.holdings" />
      </Helmet>
      <header className="home-hero">
        <div className="home-header">
          <img
            alt="image"
            src="/nublock_holdings_light_large-1500h.png"
            className="home-image"
          />
        </div>
      </header>
      <div className="home-video">
        <video
          src
          poster="/video-preview-1500w.png"
          className="home-video1"
        ></video>
      </div>
      <div className="home-description">
        <div className="home-content">
          <div className="home-text thq-section-max-width">
            <div className="home-header01">
              <h2 className="home-title heading">
                <span>Introduction</span>
                <br></br>
              </h2>
            </div>
            <p className="content-body-text">
              <span>
                At the Nublock group, our mission is to redefine success in the
                business landscape. We provide cutting-edge technology
                solutions, strategic real estate investments, and expert
                consulting on business formations to empower enterprises. With a
                commitment to innovation and excellence, we propel growth and
                create lasting value, contributing to a thriving and dynamic
                business ecosystem..
              </span>
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="home-featured">
        <div className="home-container01 thq-section-max-width">
          <div className="home-header02">
            <h2 className="heading">Group Companies</h2>
          </div>
          <div className="home-list">
            <div className="home-work">
              <img
                alt="image"
                src="/whatsapp-nub-ven-light-1500w.png"
                loading="lazy"
                className="home-image1"
              />
              <div className="home-details">
                <div className="home-header03">
                  <div className="home-heading">
                    <span className="home-text05">Nublock Venture Labs</span>
                  </div>
                  <span className="group-company-names">
                    <span>
                      Is a cutting-edge tech incubator, pioneering innovation
                      and entrepreneurship in the digital landscape. At the
                      forefront of technology, NuBlock provides a nurturing
                      environment for startups to thrive, offering strategic
                      guidance, resources, and mentorship to transform visionary
                      ideas into scalable businesses. With a focus on fostering
                      creativity and collaboration, NuBlock Ventures Labs
                      empowers emerging tech leaders to disrupt industries,
                      drive positive change, and shape the future of innovation.
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-tags">
                  <a
                    href="https://nublock.ventures"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <div className="home-link01 link">
                      <span className="home-text09 view-company-link">
                        Visit Site
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-work1">
              <img
                alt="image"
                src="/whatsapp-nub-tech-light-1500w.png"
                loading="lazy"
                className="home-image2"
              />
              <div className="home-details01">
                <div className="home-header04">
                  <div className="home-heading1">
                    <span className="home-text10">Nublock Technology</span>
                  </div>
                  <span className="home-text11">
                    <span>
                      Is a software development firm specializing in fintech,
                      blockchain, cybersecurity, and AI solutions. We empower
                      businesses with cutting-edge technologies, personalized
                      strategies, and unwavering support, ensuring secure,
                      efficient, and innovative outcomes for our clients
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-tags1">
                  <a
                    href="https://nublock.tech"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02"
                  >
                    <div className="home-link03 link">
                      <span className="home-text14 view-company-link">
                        Visit Site
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-work2">
              <img
                alt="image"
                src="/whatsapp-nub-prop-light-1500w.png"
                loading="lazy"
                className="home-image3"
              />
              <div className="home-details02">
                <div className="home-header05">
                  <div className="home-heading2">
                    <span className="home-text15">Nublock Properties</span>
                  </div>
                  <span className="home-text16">
                    <span>
                      NuBlock Properties is a premier property management
                      company dedicated to excellence in real estate
                      stewardship. With a commitment to professionalism and
                      personalized service, NuBlock Properties efficiently
                      oversees a diverse portfolio of residential, commercial,
                      and industrial properties. Leveraging expertise in
                      leasing, maintenance, and tenant relations, NuBlock
                      ensures optimal performance and value for property owners
                      while enhancing the living and working experiences of
                      tenants. From asset optimization to community development,
                      NuBlock Properties sets the standard for integrity,
                      reliability, and innovation in property management
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-tags2">
                  <a
                    href="https://nublock.properties"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link04"
                  >
                    <div className="home-link05 link">
                      <span className="view-company-link">Visit Site</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon04">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-featured1">
        <div className="home-container02 thq-section-max-width">
          <div className="home-header06">
            <h2 className="home-title2 heading">Associated Companies</h2>
          </div>
          <div className="home-list1">
            <div className="home-work3">
              <img
                alt="image"
                src="/tss_logo-1400w.png"
                loading="lazy"
                className="home-image4"
              />
              <div className="home-details03">
                <div className="home-header07">
                  <div className="home-heading3">
                    <span className="home-text20">Third Strand Studios</span>
                  </div>
                  <span className="home-text21">
                    Third Strand Studio, specialize in conceptualizing,
                    designing, and developing cutting-edge applications and
                    websites for the digital realm. With a passion for Web3,
                    Metaverse, fintech, and game development, we thrive on
                    crafting innovative solutions in these dynamic spaces.
                  </span>
                </div>
                <div className="home-tags3">
                  <a
                    href="https://nublock.ventures"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link06"
                  >
                    <div className="home-link07 link">
                      <span className="home-text22 view-company-link">
                        Visit Site
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-work4">
              <img
                alt="image"
                src="/brain-svgrepocom.svg"
                loading="lazy"
                className="home-image5"
              />
              <div className="home-details04">
                <div className="home-header08">
                  <div className="home-heading4">
                    <span className="home-text23">Smart Formations AI</span>
                  </div>
                  <span className="home-text24">
                    <span>
                      Smart Formations, your trusted partner in company
                      formation and registration. Specializing in a wide range
                      of incorporation services across the globe, they cater to
                      startups, web3 projects, e-commerce businesses,
                      international enterprises, and wealthy individuals looking
                      to optimize their tax strategies. Whether you&apos;re
                      looking to establish a new business or need expert
                      guidance on Special Purpose Vehicles (SPVs), Smart
                      Formation AI driven engine will provide the most efficient
                      structure for your needs.
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-tags4">
                  <a
                    href="https://nublock.tech"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link08"
                  >
                    <div className="home-link09 link">
                      <span className="home-text27 view-company-link">
                        Visit Site
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon08">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ131 faq2Question=" Why do you  appoint NUBLOCK HOLDINGS UK as a corporate director"></FAQ131>
      <div className="home-client">
        <p className="home-text28">
          Become a client aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat.
        </p>
        <button className="start-button button home-button">
          <span className="home-text29">Start a project</span>
        </button>
      </div>
      <div className="home-services">
        <div className="home-header09">
          <h2 className="heading">SERVICES</h2>
        </div>
        <div className="home-grid">
          <Service rootClassName="service-root-class-name"></Service>
          <Service
            title="Strategy"
            rootClassName="service-root-class-name1"
          ></Service>
          <Service
            title="Marketing"
            rootClassName="service-root-class-name5"
          ></Service>
          <Service
            title="Copywriting"
            rootClassName="service-root-class-name2"
          ></Service>
          <Service
            title="UI / UX"
            rootClassName="service-root-class-name3"
          ></Service>
          <Service
            title="Web Development"
            rootClassName="service-root-class-name4"
          ></Service>
        </div>
      </div>
      <div className="home-about">
        <div className="home-statistics">
          <button className="start-button button home-button1">
            <span className="home-text30">Join our team</span>
          </button>
          <div className="home-statistic-list">
            <Statistic rootClassName="statistic-root-class-name3"></Statistic>
            <Statistic
              value="60"
              caption="Awards"
              rootClassName="statistic-root-class-name"
            ></Statistic>
            <Statistic
              value="15K"
              caption="Monthly Visits"
              rootClassName="statistic-root-class-name4"
            ></Statistic>
            <Statistic
              value="70+"
              caption="People on board"
              rootClassName="statistic-root-class-name1"
            ></Statistic>
            <Statistic
              value="300+"
              caption="Finished projects"
              rootClassName="statistic-root-class-name5"
            ></Statistic>
            <Statistic
              value="1M"
              caption="Active Users"
              rootClassName="statistic-root-class-name2"
            ></Statistic>
          </div>
        </div>
        <div className="home-clients">
          <div className="home-header10">
            <h2 className="home-title4 heading">Our Clients</h2>
          </div>
          <div className="home-grid1">
            <div className="home-column">
              <Client
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvdHJhaXR8ZW58MHx8fHwxNjY5MDYxMjQx&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@zeng"
                rootClassName="client-root-class-name"
              ></Client>
              <Client
                quote="“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“"
                author="Coco White"
                avatar="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@white_co"
                rootClassName="client-root-class-name1"
              ></Client>
            </div>
            <div className="home-column1">
              <Client
                quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                author="Jennifer Marle"
                avatar="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@motech"
              ></Client>
              <Client
                quote="“Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaduis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                author="Maria Martinez"
                avatar="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&amp;ixlib=rb-4.0.3&amp;h=200"
                mention="@yorgu.official"
              ></Client>
            </div>
          </div>
        </div>
        <div className="home-client-list">
          <div className="home-header11">
            <h2 className="home-title5 heading">History</h2>
          </div>
          <div className="home-row">
            <span className="home-text31">
              <span className="home-text32">2021</span>
              <br></br>
            </span>
            <div className="home-list2">
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/AsWtJSwwRq3kflcuo6PKsCLgcUAGEs-nkVFRnhItLkE/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3GJ5W2AO5%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T115026Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDqf3w5aqr4YhRobXlRCKJgG%2F5pMHfW1CCuu1gVxqu10gIgcIJczh9oFtRev1pS0MSBjL92UDg2pFOToUZP9K9aS2sqwwUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDOmSCijhzBLbHc5AiSqXBepMLN8LpubACBBziWu0JjeHOrwCYxz9entYZ5kj%2BubMZCGLSul%2B2NlnGACsek12ITVKlr0vBjODduT5WQbfkAeb5B0NpXcO%2BncJgvSMjX7x3CUjnA%2BBQhBAbr7odnqXK4AZ5r3NjMbqfSK1y1w%2BSVJrUMKcIi47jYKqsXqkmsEshb%2FLwKgjDof3ugBJ2tUhNR49AnseXt5dYUPArEcg90m%2B%2Fzaih2zPhQNFk1W3hp8MY695%2Bi0lMXT760tNWnZzBqcwjQ%2BzMgWht3Tfzqu%2BPEhOnPt9wJsAtfQo%2BOsSs7fkvPpLVDklJz3jmSeXVphGe7SWoUWDOFvOH9mWWcF2k3R91sx7mzmpu6n3lNr2bv6ab6SR0oJAvOBliK5CRLkCCrUCG5y1xwLJiYS0SJ030uhU%2FdptLb9tFB9%2BcjlEmPpQWBGaU5J43GSxeLkEOV45rPj8apaV5qhca%2BCE1gk4PGV8r2SGyPllpu%2BvBlQE4La3tsgQ07iMT4SRQM35G8mZrJz2bBQyjmfOtQ871EPBe1CbgqFld4XDjt1s%2BDgLVqOLn7ukL9dpBB9fbmDY5QGRoDb7VliaByVvYPhBANalzEGIpHdSpb7YqHiKklBS9xE1bwYnm3x3tpkrNOa6NOnVQQywQQUA785EeZnrxHla0RUrqB2cooJ%2FgkqheeHn29MjiZG5OIK2HX%2Fwex9bWrzxlbxmehELkDb3LaSmIGcZ2jk5sA18DDdYSJqU8Yw1NDYN%2BZSEXCpNgDuMWknAiDQPVr%2FX1kXnKheZRvP0m82LqwTuXUvhWqSEqaW%2BjtHIi6p%2F7IEQJ9bX%2B29N2jIcgZa%2F8xydfix%2BCPOkfplrKXmwlTHl1D%2BTc13PF%2FfA1FKzzzN3j8VoQQGk6zDUutO0BjqxATiVAmkP1cnnqHWDU4aBreFQwOoHy1JGqJ8cU%2FOlPbfRGDG1dv%2F13ZZLYYNcJ2UtNY1gHVkv8nMlLSlhn%2BehgBuK012Q9ONewNgoXA1o6p0PcDpg1lbNDCbJJq3t0KuxTNMDHgMDFj94lSau8Ldzq5sNbTNCfLUnX7ZDNUMBauuji44LbJhr4cthVpZJXnu9kKqeZcy42fktNDygdtdea10%2B3G81Z%2B1FspRp1tDBDSZuCA%3D%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2213377085_newinc_2021-05-05.pdf%22&amp;X-Amz-Signature=ddd26e9c0db83c1e37f4f07c55a0f410ddafb68995fca2013d524380d0e917a1"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <div className="home-item service">
                  <div className="home-container03">
                    <div className="home-details05">
                      <span className="home-text34">NuBlock Capital Ltd</span>
                    </div>
                    <div className="home-details06">
                      <span className="home-text35">Incorporated / UK</span>
                    </div>
                    <div className="home-details07">
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="home-row1">
            <span className="home-text36">
              <span className="home-text37">2023</span>
              <br></br>
              <br></br>
            </span>
            <div className="home-list3">
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/FbM6lnwzz9Wn1KxOJzseIqCFpdyPjQayUWbjE_oBTZM/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3ESJVEA6L%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T125243Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIAQXBDsNukkjt4%2FCpHqf7ZnnNlLFu5ASXn%2BPoEj1LpddAiEAkHj6%2BFYhae%2FpnKNpuLGw4Su%2BDfGG6dtQfborWuhz604qxAUIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDJ5lpccw9gTEqGaLlSqYBSIPWg8Fe87v9TsilgYCJRO7CA6BlBImIkIWip947sCqz8mIIvdebVeU9xnixcL3ZoY70kWVFyCg9mudJckLECLGQ3aZcsVJuBKhFq16OTrVxjpVwFR3TveEJ8qyP%2FK8lf6vO6i2GSM7Tm%2FMMKh8eEPXCQ3ZNx1Cwb2v7jm8qm92IfSDV5kiX5qW62q6xMpNaQb8dhQF%2BhTjWOizh1AhLnAYggBQW%2B3eF6gE5FU%2FbsZmzY%2BDpwmDGxyLNrka7n12zuKGFbVTRyzBuPSDt745tPrkFTluZRR3y0Qto%2BGcG%2FosZUo5aHk7UU%2F7SQaL2IyOXZzK51EesaCLRJb31xYmSS4VoL9rmUxr4qLyMAXbOBPBysMsW6ajRArm1N8H0jidh3DPfri0QcyRrV340FKRMVxcLCI6D8x6fiZfki70R3KlhYqerGhq5Kf2g30PglAM%2B7Sz7z895fcMK10f2OTOqWaLq9shSxD%2BekCi%2F6L91PXJF13qjFYtKZpo0kqUtILOoQh4ouuLDwopQvaeh05Xo4mYDdxKlD7UX8%2F8lm8fC6QTUwTHttynED1nLl4v4MbbejAW8%2FoHxY5B3IFKxifa6fqBm82UQeWRLB8eKkv%2Fc3DU9BYbxF63Qw0MBIkI9j6UdH7z7GqQr8kHGJEVBKsr9NCTM2lxO%2FW21qmI6KhayPS3jkoz%2BgsFaLo8M7rW3rBmrALzpktVg4JBDHxSxUCzCP9%2BqufNpwV9A6SGYZBs4fHaUoFn7RpK%2B49kjZGGerpeFtFZdfGsYIKT76MhmPvYZqomk9JtFjEzBJwruNyAeGlDbXyLg6REwaIVrSUS9sLPETo7wCQQmvdLhgQVSmLzShgtMhThwMMwQEMB0M3SUKmZPRZRuhDQ7cEw35rTtAY6sQFGfm7n7z%2BzxjYZFff5qP0pdijzrLvS72JSVgwgo7TvXHAMJeSUGbpk2DHB7%2BczDFQmvdqL1fi2sAR1qLOhCZ%2F0ZPb0EYFmu2JTy88KUEwudbQW3AOae6jQfOkL1G03vOz2KStg8jZ%2FcI%2FYnbeMxZlaaOJfbBOZL6hL4Q3XeJwYLWTPSAM8LZbzFYZCE6xIrOtj6r9w%2FnrDDj%2FME%2FbQn0%2Bei7%2BsAaijzekDIcOqN%2Bbf%2BL4%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2214776276_newinc_2023-04-03.pdf%22&amp;X-Amz-Signature=a380835f5a871ffe14d965541c7e415548c83a2dc8e7274813a31499179db2e8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <div className="home-item01 service">
                  <div className="home-container04">
                    <div className="home-details08">
                      <span className="home-text40">
                        0x1a4 Technologies Ltd
                      </span>
                    </div>
                    <div className="home-details09">
                      <span className="home-text41">
                        Incorporated / 50% Equity / UK
                      </span>
                    </div>
                    <div className="home-details10">
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/trPKJIpPgNMlbvoitXwvvBcaRKFFhhEhd2WbiMs7e1E/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3GJ5W2AO5%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T125418Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDqf3w5aqr4YhRobXlRCKJgG%2F5pMHfW1CCuu1gVxqu10gIgcIJczh9oFtRev1pS0MSBjL92UDg2pFOToUZP9K9aS2sqwwUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDOmSCijhzBLbHc5AiSqXBepMLN8LpubACBBziWu0JjeHOrwCYxz9entYZ5kj%2BubMZCGLSul%2B2NlnGACsek12ITVKlr0vBjODduT5WQbfkAeb5B0NpXcO%2BncJgvSMjX7x3CUjnA%2BBQhBAbr7odnqXK4AZ5r3NjMbqfSK1y1w%2BSVJrUMKcIi47jYKqsXqkmsEshb%2FLwKgjDof3ugBJ2tUhNR49AnseXt5dYUPArEcg90m%2B%2Fzaih2zPhQNFk1W3hp8MY695%2Bi0lMXT760tNWnZzBqcwjQ%2BzMgWht3Tfzqu%2BPEhOnPt9wJsAtfQo%2BOsSs7fkvPpLVDklJz3jmSeXVphGe7SWoUWDOFvOH9mWWcF2k3R91sx7mzmpu6n3lNr2bv6ab6SR0oJAvOBliK5CRLkCCrUCG5y1xwLJiYS0SJ030uhU%2FdptLb9tFB9%2BcjlEmPpQWBGaU5J43GSxeLkEOV45rPj8apaV5qhca%2BCE1gk4PGV8r2SGyPllpu%2BvBlQE4La3tsgQ07iMT4SRQM35G8mZrJz2bBQyjmfOtQ871EPBe1CbgqFld4XDjt1s%2BDgLVqOLn7ukL9dpBB9fbmDY5QGRoDb7VliaByVvYPhBANalzEGIpHdSpb7YqHiKklBS9xE1bwYnm3x3tpkrNOa6NOnVQQywQQUA785EeZnrxHla0RUrqB2cooJ%2FgkqheeHn29MjiZG5OIK2HX%2Fwex9bWrzxlbxmehELkDb3LaSmIGcZ2jk5sA18DDdYSJqU8Yw1NDYN%2BZSEXCpNgDuMWknAiDQPVr%2FX1kXnKheZRvP0m82LqwTuXUvhWqSEqaW%2BjtHIi6p%2F7IEQJ9bX%2B29N2jIcgZa%2F8xydfix%2BCPOkfplrKXmwlTHl1D%2BTc13PF%2FfA1FKzzzN3j8VoQQGk6zDUutO0BjqxATiVAmkP1cnnqHWDU4aBreFQwOoHy1JGqJ8cU%2FOlPbfRGDG1dv%2F13ZZLYYNcJ2UtNY1gHVkv8nMlLSlhn%2BehgBuK012Q9ONewNgoXA1o6p0PcDpg1lbNDCbJJq3t0KuxTNMDHgMDFj94lSau8Ldzq5sNbTNCfLUnX7ZDNUMBauuji44LbJhr4cthVpZJXnu9kKqeZcy42fktNDygdtdea10%2B3G81Z%2B1FspRp1tDBDSZuCA%3D%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2214776266_newinc_2023-04-03.pdf%22&amp;X-Amz-Signature=27dcc3b5a8ede33c51871551588b4c705a79005dc6051004d62ae7db845fa053"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <div className="home-item02 service">
                  <div className="home-container05">
                    <div className="home-details11">
                      <span className="home-text42">
                        Third Strand Studio Ltd
                      </span>
                    </div>
                    <div className="home-details12">
                      <span className="home-text43">
                        Incorporated / 33% Equity / UK
                      </span>
                    </div>
                    <div className="home-details13">
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="home-row2">
            <span className="home-text44">
              <span className="home-text45">2024</span>
              <br></br>
            </span>
            <div className="home-list4">
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/yzpLJHreSNMAKLeh-tLSB5yh8vBjGKniGy_P_NUUCWo/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3ESJVEA6L%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T123611Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIAQXBDsNukkjt4%2FCpHqf7ZnnNlLFu5ASXn%2BPoEj1LpddAiEAkHj6%2BFYhae%2FpnKNpuLGw4Su%2BDfGG6dtQfborWuhz604qxAUIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDJ5lpccw9gTEqGaLlSqYBSIPWg8Fe87v9TsilgYCJRO7CA6BlBImIkIWip947sCqz8mIIvdebVeU9xnixcL3ZoY70kWVFyCg9mudJckLECLGQ3aZcsVJuBKhFq16OTrVxjpVwFR3TveEJ8qyP%2FK8lf6vO6i2GSM7Tm%2FMMKh8eEPXCQ3ZNx1Cwb2v7jm8qm92IfSDV5kiX5qW62q6xMpNaQb8dhQF%2BhTjWOizh1AhLnAYggBQW%2B3eF6gE5FU%2FbsZmzY%2BDpwmDGxyLNrka7n12zuKGFbVTRyzBuPSDt745tPrkFTluZRR3y0Qto%2BGcG%2FosZUo5aHk7UU%2F7SQaL2IyOXZzK51EesaCLRJb31xYmSS4VoL9rmUxr4qLyMAXbOBPBysMsW6ajRArm1N8H0jidh3DPfri0QcyRrV340FKRMVxcLCI6D8x6fiZfki70R3KlhYqerGhq5Kf2g30PglAM%2B7Sz7z895fcMK10f2OTOqWaLq9shSxD%2BekCi%2F6L91PXJF13qjFYtKZpo0kqUtILOoQh4ouuLDwopQvaeh05Xo4mYDdxKlD7UX8%2F8lm8fC6QTUwTHttynED1nLl4v4MbbejAW8%2FoHxY5B3IFKxifa6fqBm82UQeWRLB8eKkv%2Fc3DU9BYbxF63Qw0MBIkI9j6UdH7z7GqQr8kHGJEVBKsr9NCTM2lxO%2FW21qmI6KhayPS3jkoz%2BgsFaLo8M7rW3rBmrALzpktVg4JBDHxSxUCzCP9%2BqufNpwV9A6SGYZBs4fHaUoFn7RpK%2B49kjZGGerpeFtFZdfGsYIKT76MhmPvYZqomk9JtFjEzBJwruNyAeGlDbXyLg6REwaIVrSUS9sLPETo7wCQQmvdLhgQVSmLzShgtMhThwMMwQEMB0M3SUKmZPRZRuhDQ7cEw35rTtAY6sQFGfm7n7z%2BzxjYZFff5qP0pdijzrLvS72JSVgwgo7TvXHAMJeSUGbpk2DHB7%2BczDFQmvdqL1fi2sAR1qLOhCZ%2F0ZPb0EYFmu2JTy88KUEwudbQW3AOae6jQfOkL1G03vOz2KStg8jZ%2FcI%2FYnbeMxZlaaOJfbBOZL6hL4Q3XeJwYLWTPSAM8LZbzFYZCE6xIrOtj6r9w%2FnrDDj%2FME%2FbQn0%2Bei7%2BsAaijzekDIcOqN%2Bbf%2BL4%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2215386851_newinc_2024-01-04.pdf%22&amp;X-Amz-Signature=580fb892e26895aaa3d3ace8365cb0bb66dd5aabd505703c3ea93d0a2af793a6"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <div className="home-item03 service">
                  <div className="home-container06">
                    <div className="home-details14">
                      <span className="home-text47">
                        NuBlock Holdings UK Ltd
                      </span>
                    </div>
                    <div className="home-details15">
                      <span className="home-text48">Incorporated / UK</span>
                    </div>
                    <div className="home-details16">
                      <svg viewBox="0 0 1024 1024" className="home-icon16">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/IBXkHZP7lnlKajJfGDUrDgpRji82Mqqdq08bK-R-Ltc/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3GJ5W2AO5%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T123643Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDqf3w5aqr4YhRobXlRCKJgG%2F5pMHfW1CCuu1gVxqu10gIgcIJczh9oFtRev1pS0MSBjL92UDg2pFOToUZP9K9aS2sqwwUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDOmSCijhzBLbHc5AiSqXBepMLN8LpubACBBziWu0JjeHOrwCYxz9entYZ5kj%2BubMZCGLSul%2B2NlnGACsek12ITVKlr0vBjODduT5WQbfkAeb5B0NpXcO%2BncJgvSMjX7x3CUjnA%2BBQhBAbr7odnqXK4AZ5r3NjMbqfSK1y1w%2BSVJrUMKcIi47jYKqsXqkmsEshb%2FLwKgjDof3ugBJ2tUhNR49AnseXt5dYUPArEcg90m%2B%2Fzaih2zPhQNFk1W3hp8MY695%2Bi0lMXT760tNWnZzBqcwjQ%2BzMgWht3Tfzqu%2BPEhOnPt9wJsAtfQo%2BOsSs7fkvPpLVDklJz3jmSeXVphGe7SWoUWDOFvOH9mWWcF2k3R91sx7mzmpu6n3lNr2bv6ab6SR0oJAvOBliK5CRLkCCrUCG5y1xwLJiYS0SJ030uhU%2FdptLb9tFB9%2BcjlEmPpQWBGaU5J43GSxeLkEOV45rPj8apaV5qhca%2BCE1gk4PGV8r2SGyPllpu%2BvBlQE4La3tsgQ07iMT4SRQM35G8mZrJz2bBQyjmfOtQ871EPBe1CbgqFld4XDjt1s%2BDgLVqOLn7ukL9dpBB9fbmDY5QGRoDb7VliaByVvYPhBANalzEGIpHdSpb7YqHiKklBS9xE1bwYnm3x3tpkrNOa6NOnVQQywQQUA785EeZnrxHla0RUrqB2cooJ%2FgkqheeHn29MjiZG5OIK2HX%2Fwex9bWrzxlbxmehELkDb3LaSmIGcZ2jk5sA18DDdYSJqU8Yw1NDYN%2BZSEXCpNgDuMWknAiDQPVr%2FX1kXnKheZRvP0m82LqwTuXUvhWqSEqaW%2BjtHIi6p%2F7IEQJ9bX%2B29N2jIcgZa%2F8xydfix%2BCPOkfplrKXmwlTHl1D%2BTc13PF%2FfA1FKzzzN3j8VoQQGk6zDUutO0BjqxATiVAmkP1cnnqHWDU4aBreFQwOoHy1JGqJ8cU%2FOlPbfRGDG1dv%2F13ZZLYYNcJ2UtNY1gHVkv8nMlLSlhn%2BehgBuK012Q9ONewNgoXA1o6p0PcDpg1lbNDCbJJq3t0KuxTNMDHgMDFj94lSau8Ldzq5sNbTNCfLUnX7ZDNUMBauuji44LbJhr4cthVpZJXnu9kKqeZcy42fktNDygdtdea10%2B3G81Z%2B1FspRp1tDBDSZuCA%3D%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2215419087_newinc_2024-01-17.pdf%22&amp;X-Amz-Signature=fcf271b2809f6dbca2cfa349e2ef0292eda582a82c2b2de359cfe6d8f19f738e"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                <div className="home-item04 service">
                  <div className="home-container07">
                    <div className="home-details17">
                      <span className="home-text49">
                        NuBlock Properties Ltd
                      </span>
                    </div>
                    <div className="home-details18">
                      <span className="home-text50">Incorporated / UK</span>
                    </div>
                    <div className="home-details19">
                      <svg viewBox="0 0 1024 1024" className="home-icon18">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/SjF-c4gbg8u3Y73WqDn9ZPfM8T3IvyvPOrMiSH0s_hM/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3GJ5W2AO5%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T123714Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDqf3w5aqr4YhRobXlRCKJgG%2F5pMHfW1CCuu1gVxqu10gIgcIJczh9oFtRev1pS0MSBjL92UDg2pFOToUZP9K9aS2sqwwUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDOmSCijhzBLbHc5AiSqXBepMLN8LpubACBBziWu0JjeHOrwCYxz9entYZ5kj%2BubMZCGLSul%2B2NlnGACsek12ITVKlr0vBjODduT5WQbfkAeb5B0NpXcO%2BncJgvSMjX7x3CUjnA%2BBQhBAbr7odnqXK4AZ5r3NjMbqfSK1y1w%2BSVJrUMKcIi47jYKqsXqkmsEshb%2FLwKgjDof3ugBJ2tUhNR49AnseXt5dYUPArEcg90m%2B%2Fzaih2zPhQNFk1W3hp8MY695%2Bi0lMXT760tNWnZzBqcwjQ%2BzMgWht3Tfzqu%2BPEhOnPt9wJsAtfQo%2BOsSs7fkvPpLVDklJz3jmSeXVphGe7SWoUWDOFvOH9mWWcF2k3R91sx7mzmpu6n3lNr2bv6ab6SR0oJAvOBliK5CRLkCCrUCG5y1xwLJiYS0SJ030uhU%2FdptLb9tFB9%2BcjlEmPpQWBGaU5J43GSxeLkEOV45rPj8apaV5qhca%2BCE1gk4PGV8r2SGyPllpu%2BvBlQE4La3tsgQ07iMT4SRQM35G8mZrJz2bBQyjmfOtQ871EPBe1CbgqFld4XDjt1s%2BDgLVqOLn7ukL9dpBB9fbmDY5QGRoDb7VliaByVvYPhBANalzEGIpHdSpb7YqHiKklBS9xE1bwYnm3x3tpkrNOa6NOnVQQywQQUA785EeZnrxHla0RUrqB2cooJ%2FgkqheeHn29MjiZG5OIK2HX%2Fwex9bWrzxlbxmehELkDb3LaSmIGcZ2jk5sA18DDdYSJqU8Yw1NDYN%2BZSEXCpNgDuMWknAiDQPVr%2FX1kXnKheZRvP0m82LqwTuXUvhWqSEqaW%2BjtHIi6p%2F7IEQJ9bX%2B29N2jIcgZa%2F8xydfix%2BCPOkfplrKXmwlTHl1D%2BTc13PF%2FfA1FKzzzN3j8VoQQGk6zDUutO0BjqxATiVAmkP1cnnqHWDU4aBreFQwOoHy1JGqJ8cU%2FOlPbfRGDG1dv%2F13ZZLYYNcJ2UtNY1gHVkv8nMlLSlhn%2BehgBuK012Q9ONewNgoXA1o6p0PcDpg1lbNDCbJJq3t0KuxTNMDHgMDFj94lSau8Ldzq5sNbTNCfLUnX7ZDNUMBauuji44LbJhr4cthVpZJXnu9kKqeZcy42fktNDygdtdea10%2B3G81Z%2B1FspRp1tDBDSZuCA%3D%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2215418963_newinc_2024-01-17.pdf%22&amp;X-Amz-Signature=200b3788a6a280317acd745298aaf36f08c186ea3a314631a30b3bfd94237511"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                <div className="home-item05 service">
                  <div className="home-container08">
                    <div className="home-details20">
                      <span className="home-text51">
                        NuBlock Technology Ltd
                      </span>
                    </div>
                    <div className="home-details21">
                      <span className="home-text52">Incorporated / UK</span>
                    </div>
                    <div className="home-details22">
                      <svg viewBox="0 0 1024 1024" className="home-icon20">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/Rc80QGz8AA_7zylZJYIrWFuczFC7oBfffrIHB2uc1eQ/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3GJ5W2AO5%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T123434Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIQDqf3w5aqr4YhRobXlRCKJgG%2F5pMHfW1CCuu1gVxqu10gIgcIJczh9oFtRev1pS0MSBjL92UDg2pFOToUZP9K9aS2sqwwUIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDOmSCijhzBLbHc5AiSqXBepMLN8LpubACBBziWu0JjeHOrwCYxz9entYZ5kj%2BubMZCGLSul%2B2NlnGACsek12ITVKlr0vBjODduT5WQbfkAeb5B0NpXcO%2BncJgvSMjX7x3CUjnA%2BBQhBAbr7odnqXK4AZ5r3NjMbqfSK1y1w%2BSVJrUMKcIi47jYKqsXqkmsEshb%2FLwKgjDof3ugBJ2tUhNR49AnseXt5dYUPArEcg90m%2B%2Fzaih2zPhQNFk1W3hp8MY695%2Bi0lMXT760tNWnZzBqcwjQ%2BzMgWht3Tfzqu%2BPEhOnPt9wJsAtfQo%2BOsSs7fkvPpLVDklJz3jmSeXVphGe7SWoUWDOFvOH9mWWcF2k3R91sx7mzmpu6n3lNr2bv6ab6SR0oJAvOBliK5CRLkCCrUCG5y1xwLJiYS0SJ030uhU%2FdptLb9tFB9%2BcjlEmPpQWBGaU5J43GSxeLkEOV45rPj8apaV5qhca%2BCE1gk4PGV8r2SGyPllpu%2BvBlQE4La3tsgQ07iMT4SRQM35G8mZrJz2bBQyjmfOtQ871EPBe1CbgqFld4XDjt1s%2BDgLVqOLn7ukL9dpBB9fbmDY5QGRoDb7VliaByVvYPhBANalzEGIpHdSpb7YqHiKklBS9xE1bwYnm3x3tpkrNOa6NOnVQQywQQUA785EeZnrxHla0RUrqB2cooJ%2FgkqheeHn29MjiZG5OIK2HX%2Fwex9bWrzxlbxmehELkDb3LaSmIGcZ2jk5sA18DDdYSJqU8Yw1NDYN%2BZSEXCpNgDuMWknAiDQPVr%2FX1kXnKheZRvP0m82LqwTuXUvhWqSEqaW%2BjtHIi6p%2F7IEQJ9bX%2B29N2jIcgZa%2F8xydfix%2BCPOkfplrKXmwlTHl1D%2BTc13PF%2FfA1FKzzzN3j8VoQQGk6zDUutO0BjqxATiVAmkP1cnnqHWDU4aBreFQwOoHy1JGqJ8cU%2FOlPbfRGDG1dv%2F13ZZLYYNcJ2UtNY1gHVkv8nMlLSlhn%2BehgBuK012Q9ONewNgoXA1o6p0PcDpg1lbNDCbJJq3t0KuxTNMDHgMDFj94lSau8Ldzq5sNbTNCfLUnX7ZDNUMBauuji44LbJhr4cthVpZJXnu9kKqeZcy42fktNDygdtdea10%2B3G81Z%2B1FspRp1tDBDSZuCA%3D%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2214776276_psc05_2024-04-23.pdf%22&amp;X-Amz-Signature=6369a9ca2fb775eeb2171bfd1c58c855f0e204e49d8a8211ad61f9c5e738f544"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                <div className="home-item06 service">
                  <div className="home-container09">
                    <div className="home-details23">
                      <span className="home-text53">
                        0x1a4 Technologies Ltd
                      </span>
                    </div>
                    <div className="home-details24">
                      <span className="home-text54">
                        Acquired / 100% Equity / UK
                      </span>
                    </div>
                    <div className="home-details25">
                      <svg viewBox="0 0 1024 1024" className="home-icon22">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://s3.eu-west-2.amazonaws.com/document-api-images-live.ch.gov.uk/docs/pffDLsaAKcEU_nwrcDvpFGXOqjuWHp7gPNzqglm2lNU/application-pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=ASIAWRGBDBV3ESJVEA6L%2F20240715%2Feu-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20240715T125805Z&amp;X-Amz-Expires=60&amp;X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMiJHMEUCIAQXBDsNukkjt4%2FCpHqf7ZnnNlLFu5ASXn%2BPoEj1LpddAiEAkHj6%2BFYhae%2FpnKNpuLGw4Su%2BDfGG6dtQfborWuhz604qxAUIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgw0NDkyMjkwMzI4MjIiDJ5lpccw9gTEqGaLlSqYBSIPWg8Fe87v9TsilgYCJRO7CA6BlBImIkIWip947sCqz8mIIvdebVeU9xnixcL3ZoY70kWVFyCg9mudJckLECLGQ3aZcsVJuBKhFq16OTrVxjpVwFR3TveEJ8qyP%2FK8lf6vO6i2GSM7Tm%2FMMKh8eEPXCQ3ZNx1Cwb2v7jm8qm92IfSDV5kiX5qW62q6xMpNaQb8dhQF%2BhTjWOizh1AhLnAYggBQW%2B3eF6gE5FU%2FbsZmzY%2BDpwmDGxyLNrka7n12zuKGFbVTRyzBuPSDt745tPrkFTluZRR3y0Qto%2BGcG%2FosZUo5aHk7UU%2F7SQaL2IyOXZzK51EesaCLRJb31xYmSS4VoL9rmUxr4qLyMAXbOBPBysMsW6ajRArm1N8H0jidh3DPfri0QcyRrV340FKRMVxcLCI6D8x6fiZfki70R3KlhYqerGhq5Kf2g30PglAM%2B7Sz7z895fcMK10f2OTOqWaLq9shSxD%2BekCi%2F6L91PXJF13qjFYtKZpo0kqUtILOoQh4ouuLDwopQvaeh05Xo4mYDdxKlD7UX8%2F8lm8fC6QTUwTHttynED1nLl4v4MbbejAW8%2FoHxY5B3IFKxifa6fqBm82UQeWRLB8eKkv%2Fc3DU9BYbxF63Qw0MBIkI9j6UdH7z7GqQr8kHGJEVBKsr9NCTM2lxO%2FW21qmI6KhayPS3jkoz%2BgsFaLo8M7rW3rBmrALzpktVg4JBDHxSxUCzCP9%2BqufNpwV9A6SGYZBs4fHaUoFn7RpK%2B49kjZGGerpeFtFZdfGsYIKT76MhmPvYZqomk9JtFjEzBJwruNyAeGlDbXyLg6REwaIVrSUS9sLPETo7wCQQmvdLhgQVSmLzShgtMhThwMMwQEMB0M3SUKmZPRZRuhDQ7cEw35rTtAY6sQFGfm7n7z%2BzxjYZFff5qP0pdijzrLvS72JSVgwgo7TvXHAMJeSUGbpk2DHB7%2BczDFQmvdqL1fi2sAR1qLOhCZ%2F0ZPb0EYFmu2JTy88KUEwudbQW3AOae6jQfOkL1G03vOz2KStg8jZ%2FcI%2FYnbeMxZlaaOJfbBOZL6hL4Q3XeJwYLWTPSAM8LZbzFYZCE6xIrOtj6r9w%2FnrDDj%2FME%2FbQn0%2Bei7%2BsAaijzekDIcOqN%2Bbf%2BL4%3D&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=inline%3Bfilename%3D%2213377085_econ_2024-04-24.pdf%22&amp;X-Amz-Signature=83250d9f4a2757331530c0f16c73a54bf4eb5661270487b665f2415575d85fd0"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <div className="home-item07 service">
                  <div className="home-container10">
                    <div className="home-details26">
                      <span className="home-text55">
                        NuBlock Venture Labs Ltd
                      </span>
                    </div>
                    <div className="home-details27">
                      <span className="home-text56">
                        Name Change / NuBlock Capital / UK
                      </span>
                    </div>
                    <div className="home-details28">
                      <svg viewBox="0 0 1024 1024" className="home-icon24">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://etherscan.io/nft/0x752B0073422A7F9Cda7f71B5fE7F12a1789e6506/1071"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <div className="home-item08 service">
                  <div className="home-container11">
                    <div className="home-details29">
                      <span className="home-text57">
                        NB International Holdings LLC
                      </span>
                    </div>
                    <div className="home-details30">
                      <span className="home-text58">Incorporated / RMH</span>
                    </div>
                    <div className="home-details31">
                      <svg viewBox="0 0 1024 1024" className="home-icon26">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://wyobiz.wyo.gov/Business/FilingDetails.aspx?eFNum=017157013119110029178161067160221030136207089030"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link19"
              >
                <div className="home-item09 service">
                  <div className="home-container12">
                    <div className="home-details32">
                      <span className="home-text59">
                        <span>AI Company Formations US Series LLC</span>
                        <br></br>
                      </span>
                    </div>
                    <div className="home-details33">
                      <span className="home-text62">
                        Incorporated / 33% Equity / US
                      </span>
                    </div>
                    <div className="home-details34">
                      <svg viewBox="0 0 1024 1024" className="home-icon28">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://smartformations.ai/#/business/34"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link20"
              >
                <div className="home-item10 service">
                  <div className="home-container13">
                    <div className="home-details35">
                      <span className="home-text63">
                        Third Strand Studio US LLC
                      </span>
                    </div>
                    <div className="home-details36">
                      <span className="home-text64">
                        Incorporated / 33% Equity / US
                      </span>
                    </div>
                    <div className="home-details37">
                      <svg viewBox="0 0 1024 1024" className="home-icon30">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://smartformations.ai/#/business/35"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link21"
              >
                <div className="home-item11 service">
                  <div className="home-container14">
                    <div className="home-details38">
                      <span className="home-text65">
                        NuBlock Holdings US LLC
                      </span>
                    </div>
                    <div className="home-details39">
                      <span className="home-text66">Incorporated / US</span>
                    </div>
                    <div className="home-details40">
                      <svg viewBox="0 0 1024 1024" className="home-icon32">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://smartformations.ai/#/business/36"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link22"
              >
                <div className="home-item12 service">
                  <div className="home-container15">
                    <div className="home-details41">
                      <span className="home-text67">
                        NuBlock Properties Holdings US LLC
                      </span>
                    </div>
                    <div className="home-details42">
                      <span className="home-text68">Incorporated / US</span>
                    </div>
                    <div className="home-details43">
                      <svg viewBox="0 0 1024 1024" className="home-icon34">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://smartformations.ai/#/business/37"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link23"
              >
                <div className="home-item13 service">
                  <div className="home-container16">
                    <div className="home-details44">
                      <span className="home-text69">
                        NuBlock Properties USMX L1E1 LLC
                      </span>
                    </div>
                    <div className="home-details45">
                      <span className="home-text70">Incorporated / US</span>
                    </div>
                    <div className="home-details46">
                      <svg viewBox="0 0 1024 1024" className="home-icon36">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="https://smartformations.ai/#/business/38"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link24"
              >
                <div className="home-item14 service">
                  <div className="home-container17">
                    <div className="home-details47">
                      <span className="home-text71">
                        NuBlock Properties USMX L1E2 LLC
                      </span>
                    </div>
                    <div className="home-details48">
                      <span className="home-text72">Incorporated / US</span>
                    </div>
                    <div className="home-details49">
                      <svg viewBox="0 0 1024 1024" className="home-icon38">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact11 rootClassName="contact11-root-class-name"></Contact11>
      <Footer4
        logoSrc="/nublock_holdings_light_large-1500h.png"
        rootClassName="footer4-root-class-name"
      ></Footer4>
    </div>
  )
}

export default Home
