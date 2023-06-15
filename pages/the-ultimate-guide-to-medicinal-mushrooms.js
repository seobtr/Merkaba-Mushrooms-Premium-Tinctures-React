import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const TheUltimateGuideToMedicinalMushrooms = (props) => {
  return (
    <>
      <div className="the-ultimate-guide-to-medicinal-mushrooms-container">
        <Head>
          <title>
            The-Ultimate-Guide-to-Medicinal-Mushrooms - Merkaba Mushrooms
            E-Commerce
          </title>
          <meta
            property="og:title"
            content="The-Ultimate-Guide-to-Medicinal-Mushrooms - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header rootClassName="header-root-class-name9"></Header>
        <div className="the-ultimate-guide-to-medicinal-mushrooms-hero">
          <div className="the-ultimate-guide-to-medicinal-mushrooms-container1">
            <h1 className="the-ultimate-guide-to-medicinal-mushrooms-text">
              The Ultimate Guide to Medicinal Mushrooms
            </h1>
            <span className="the-ultimate-guide-to-medicinal-mushrooms-text1">
              <span>
                From boosting your immune system to fighting cancer, medicinal
                mushrooms have a lot to offer. In this guide, you&apos;ll learn
                everything you need to know about these powerful plants,
                including:
              </span>
              <br></br>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1602664719969-5cb83870efb3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxtdXNocm9vbSUyMGZvcmFnaW5nfGVufDB8fHx8MTY4NTU0NjkyNHww&amp;ixlib=rb-4.0.3&amp;h=1500"
            className="the-ultimate-guide-to-medicinal-mushrooms-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .the-ultimate-guide-to-medicinal-mushrooms-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .the-ultimate-guide-to-medicinal-mushrooms-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1400px;
            margin-top: var(--dl-space-space-fiveunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .the-ultimate-guide-to-medicinal-mushrooms-container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .the-ultimate-guide-to-medicinal-mushrooms-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .the-ultimate-guide-to-medicinal-mushrooms-text1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .the-ultimate-guide-to-medicinal-mushrooms-image {
            width: 50%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .the-ultimate-guide-to-medicinal-mushrooms-hero {
              flex-direction: column;
            }
            .the-ultimate-guide-to-medicinal-mushrooms-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .the-ultimate-guide-to-medicinal-mushrooms-text {
              text-align: center;
            }
            .the-ultimate-guide-to-medicinal-mushrooms-text1 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .the-ultimate-guide-to-medicinal-mushrooms-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .the-ultimate-guide-to-medicinal-mushrooms-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .the-ultimate-guide-to-medicinal-mushrooms-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .the-ultimate-guide-to-medicinal-mushrooms-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .the-ultimate-guide-to-medicinal-mushrooms-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .the-ultimate-guide-to-medicinal-mushrooms-text {
              font-size: 3rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default TheUltimateGuideToMedicinalMushrooms
