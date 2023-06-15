import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-Us - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="About-Us - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header rootClassName="header-root-class-name10"></Header>
        <div className="about-us-hero">
          <span className="about-us-text">merkaba mushrooms</span>
          <h1 className="about-us-text1">About Us</h1>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: var(--dl-space-space-fiveunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-text {
            color: rgb(0, 0, 0);
            font-size: 0.75rem;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .about-us-text1 {
            color: #000000;
            font-size: 3rem;
            max-width: 450px;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .about-us-hero {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .about-us-text1 {
              color: var(--dl-color-gray-white);
              font-size: 3rem;
            }
          }
          @media (max-width: 767px) {
            .about-us-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .about-us-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
