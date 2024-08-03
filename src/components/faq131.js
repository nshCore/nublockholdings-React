import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq131.css'

const FAQ131 = (props) => {
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  return (
    <div className="faq131-faq8 thq-section-padding">
      <div className="faq131-max-width thq-section-max-width">
        <div className="faq131-container thq-flex-column">
          <div className="faq131-section-title thq-section-max-width thq-flex-column">
            <div className="faq131-content">
              <h2 className="faq131-text heading">{props.heading1}</h2>
            </div>
          </div>
          <div className="thq-section-max-width thq-flex-column">
            <div className="thq-divider-horizontal"></div>
            <div className="faq131-faq3">
              <div
                onClick={() => setFaq3Visible(!faq3Visible)}
                className="faq131-trigger faq-title"
              >
                <p className="faq131-faq2-question faq-title">
                  {props.faq3Question}
                </p>
                <div className="faq131-icons-container">
                  {!faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon02">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible && (
                <div className="faq131-container03">
                  <span className="faq-content">
                    A holding company is a type of business entity that owns the
                    outstanding stock of other companies. Its primary purpose is
                    to control these companies, which are referred to as
                    subsidiaries. Holding companies typically do not produce
                    goods or services themselves; rather, they manage and
                    oversee the operations of their subsidiaries.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq131-faq1">
              <div
                onClick={() => setFaq1Visible(!faq1Visible)}
                className="faq131-trigger1"
              >
                <p className="faq131-faq1-question faq-title">
                  {props.faq1Question}
                </p>
                <div className="faq131-icons-container1">
                  {!faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon04">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon06">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible && (
                <div className="faq131-container06">
                  <span className="faq-content">
                    <span>
                      Holding companies, such as NUBLOCK HOLDINGS UK LTD, play a
                      crucial role in our corporate structure due to several
                      strategic benefits:
                    </span>
                    <br></br>
                    <br></br>
                    <span>Centralized Management and Control:</span>
                    <br></br>
                    <br></br>
                    <span>
                      Holding companies enable centralized oversight, ensuring
                      that all subsidiaries align with the overall corporate
                      vision and objectives, facilitating strategic
                      decision-making.
                    </span>
                    <br></br>
                    <span>Risk Mitigation:</span>
                    <br></br>
                    <br></br>
                    <span>
                      By segregating assets and liabilities across various
                      subsidiaries, we minimize the impact of financial or legal
                      issues in one subsidiary on the entire corporate group.
                    </span>
                    <br></br>
                    <span>Enhanced Financial Flexibility:</span>
                    <br></br>
                    <br></br>
                    <span>
                      Holding companies provide the ability to allocate capital
                      and resources efficiently, optimizing investment
                      opportunities and ensuring smooth operations across all
                      business units.
                    </span>
                    <br></br>
                    <span>Tax Efficiency:</span>
                    <br></br>
                    <br></br>
                    <span>
                      Utilizing holding companies can lead to significant tax
                      benefits, such as consolidated tax obligations and
                      advantages from tax treaties and incentives, resulting in
                      overall tax savings.
                    </span>
                    <br></br>
                    <span>Simplified Reporting and Compliance:</span>
                    <br></br>
                    <br></br>
                    <span>
                      Holding companies streamline financial reporting and
                      compliance processes by consolidating subsidiaries&apos;
                      financial statements, making regulatory compliance easier
                      and ensuring transparency.
                    </span>
                    <br></br>
                    <span>Asset Protection:</span>
                    <br></br>
                    <br></br>
                    <span>
                      Holding companies safeguard valuable assets like
                      intellectual property and real estate by holding them
                      separately from operating entities, minimizing exposure to
                      operational risks.
                    </span>
                    <br></br>
                    <span>Facilitating Mergers and Acquisitions:</span>
                    <br></br>
                    <br></br>
                    <span>
                      Holding companies provide a flexible structure for
                      integrating new businesses, facilitating growth and
                      expansion without disrupting existing operations.
                    </span>
                    <br></br>
                    <span>Operational Efficiency:</span>
                    <br></br>
                    <br></br>
                    <span>
                      Centralizing administrative and support functions within
                      the holding company leads to economies of scale and cost
                      savings, enhancing the overall performance of the
                      corporate group.
                    </span>
                    <br></br>
                    <span>
                      Overall, the use of holding companies like NUBLOCK
                      HOLDINGS UK LTD provides significant strategic advantages,
                      contributing to the robust and sustainable growth of our
                      business.
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq131-faq2">
              <div
                onClick={() => setFaq2Visible(!faq2Visible)}
                className="faq131-trigger2"
              >
                <p className="faq131-faq2-question1 faq-title">
                  {props.faq2Question}
                </p>
                <div className="faq131-icons-container2">
                  {!faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon08">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon10">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible && (
                <div className="faq131-container09">
                  <span className="faq-content faq131-text047">
                    <span>
                      Appointing NUBLOCK HOLDINGS UK LTD as a corporate director
                      offers several strategic advantages aimed at enhancing
                      governance, operational efficiency, and regulatory
                      compliance.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text051">Rationale:</span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text054">
                      Centralized Governance:
                    </span>
                    <br className="faq131-text055"></br>
                    <br></br>
                    <span>
                      NUBLOCK HOLDINGS UK LTD helps centralize decision-making
                      processes and governance functions. This centralization
                      ensures smoother communication and alignment of strategic
                      objectives across the subsidiary and other entities within
                      our corporate group.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text060">Risk Mitigation:</span>
                    <br></br>
                    <br></br>
                    <span>
                      As a UK entity adhering to stringent regulatory standards
                      and corporate governance practices, NUBLOCK HOLDINGS UK
                      LTD provides an additional layer of risk management. This
                      helps mitigate risks associated with directorial
                      responsibilities and ensures compliance with statutory
                      obligations and fiduciary duties.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text066">
                      Enhanced Credibility:
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      The involvement of a reputable corporate entity like
                      NUBLOCK HOLDINGS UK LTD enhances the credibility of our
                      subsidiary among stakeholders, including investors,
                      clients, and regulatory bodies. This boosts confidence in
                      our corporate governance practices and strengthens our
                      market reputation.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text072">
                      Flexibility and Continuity:
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Corporate directors offer flexibility and continuity,
                      especially during changes in management or ownership.
                      NUBLOCK HOLDINGS UK LTD ensures stability and seamless
                      transitions, safeguarding the interests of our subsidiary
                      and stakeholders.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text078">Level of Control:</span>
                    <br></br>
                    <br></br>
                    <span>
                      While NUBLOCK HOLDINGS UK LTD holds the directorship
                      position, its control over the subsidiary is limited to
                      governance and decision-making processes as outlined by
                      applicable laws and regulations. Operational control and
                      day-to-day management remain with the subsidiary&apos;s
                      executive management team.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      In summary, appointing NUBLOCK HOLDINGS UK LTD as a
                      corporate director enhances governance, mitigates risks,
                      bolsters credibility, and ensures continuity within our
                      directorship structure. We are committed to maintaining
                      the highest standards of corporate governance and
                      regulatory compliance.
                    </span>
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq131-faq4">
              <div
                onClick={() => setFaq4Visible(!faq4Visible)}
                className="faq131-trigger3"
              >
                <p className="faq131-faq2-question2 faq-title">
                  {props.faq4Question}
                </p>
                <div className="faq131-icons-container3">
                  {!faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon12">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon14">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible && (
                <div className="faq131-container12">
                  <span className="faq-content">
                    A holding company primarily owns shares in other companies
                    and does not engage in day-to-day business operations. In
                    contrast, an operating company is directly involved in
                    producing goods or providing services. The holding company
                    oversees and manages its operating subsidiaries but does not
                    participate in their daily activities.
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="faq131-faq5">
              <div
                onClick={() => setFaq5Visible(!faq5Visible)}
                className="faq131-trigger4"
              >
                <p className="faq131-faq1-question1 faq-title">
                  {props.faq5Question}
                </p>
                <div className="faq131-icons-container4">
                  {!faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon16">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq5Visible && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq131-icon18">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq5Visible && (
                <div className="faq131-container15">
                  <span className="faq-content">
                    <span>
                      According to HMRC (Her Majesty&apos;s Revenue and
                      Customs), the classification of group companies and
                      subsidiaries is based on the percentage of equity
                      ownership and the level of control exercised by the parent
                      company.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text090">Group Companies:</span>
                    <br className="faq131-text091"></br>
                    <br></br>
                    <span>
                      {' '}
                      For HMRC purposes, group companies are defined as
                      companies where the parent company owns 75% or more of the
                      equity shares.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text096">Equity Ownership</span>
                    <span>
                      : The parent company must hold at least 75% of the voting
                      shares of the subsidiary to be considered part of the same
                      group for tax and regulatory purposes.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text100">
                      Control and Influence
                    </span>
                    <span>
                      : This level of ownership allows the parent company to
                      exert significant control and influence over the group
                      companies, including the ability to direct strategic
                      decisions and policies.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text104">Tax Implications:</span>
                    <span>
                      {' '}
                      Group companies can benefit from tax advantages such as
                      group relief, which allows losses in one company to be
                      offset against profits in another within the same group.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text108">Subsidiary Companies</span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      A subsidiary is a company that is controlled by another
                      company, known as the parent company, typically through
                      majority ownership of its voting shares.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text114">Equity Ownership:</span>
                    <span>
                      {' '}
                      The parent company must own more than 50% of the voting
                      shares in the subsidiary to establish control.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text118">Full Control:</span>
                    <span>
                      {' '}
                      With a majority stake, the parent company has full control
                      over the subsidiary’s operations, management, and
                      strategic direction.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text122">Financial Reporting:</span>
                    <span>
                      {' '}
                      Subsidiaries are required to consolidate their financial
                      statements with those of the parent company, providing a
                      comprehensive view of the group’s financial health.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text126">Associated Companies</span>
                    <br></br>
                    <br></br>
                    <span>
                      {' '}
                      When a company owns less than 50% of another company, it
                      is typically referred to as an &quot;associated
                      company&quot;
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text132">
                      Ownership Percentage:
                    </span>
                    <span>
                      {' '}
                      An associated company is generally defined as a company
                      where another company owns at least 25% but less than 50%
                      of its shares.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text136">
                      Significant Influence:
                    </span>
                    <span>
                      {' '}
                      The ownership stake allows the parent company to exert
                      significant influence over the associated company, but not
                      full control.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="faq131-text140">Tax Implications:</span>
                    <span>
                      {' '}
                      The relationship between associated companies can affect
                      certain tax calculations, such as the distribution of
                      corporation tax allowances.
                    </span>
                    <br></br>
                  </span>
                </div>
              )}
            </div>
            <div className="thq-divider-horizontal"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ131.defaultProps = {
  faq3Question: 'What is a holding company',
  faq4Question: 'How does a holding company differ from an operating company',
  heading1: 'Frequently Asked Questions',
  faq5Question: 'What is a group, subsidiary and associated company',
  faq2Question: 'How can I benefit from your services?',
  faq1Question: 'Why Do You use holding companies in your corporate structure',
}

FAQ131.propTypes = {
  faq3Question: PropTypes.string,
  faq4Question: PropTypes.string,
  heading1: PropTypes.string,
  faq5Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Question: PropTypes.string,
}

export default FAQ131
