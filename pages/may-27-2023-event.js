import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const May272023Event = (props) => {
  return (
    <>
      <div className="may27202-event-container">
        <Head>
          <title>May-27-2023-Event - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="May-27-2023-Event - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header rootClassName="header-root-class-name7"></Header>
        <div className="may27202-event-hero">
          <div className="may27202-event-container1">
            <div className="may27202-event-blog-post">
              <img
                alt="image"
                src="/event_photos/5-27-23marketphoto1-1400w.jpg"
                className="may27202-event-image"
              />
              <div className="may27202-event-container2">
                <span className="may27202-event-text">
                  <span className="may27202-event-text1">
                    Saturday, May 27, 2023
                  </span>
                  <br></br>
                </span>
                <span className="may27202-event-text3">
                  Successful Debut Product Launch at May 27th Market - Get Ready
                  for Our Official Launch!
                </span>
                <div className="may27202-event-container3">
                  <div className="may27202-event-profile">
                    <span className="may27202-event-text4">Sarah McEwen</span>
                  </div>
                </div>
                <span className="may27202-event-text5">
                  Hello, mushroom enthusiasts! We are excited to share the
                  highlights of our recent debut product launch event at the May
                  27th market. The response we received was overwhelming, and we
                  can&apos;t wait to take you through the journey of our
                  successful launch. But that&apos;s not all! We have another
                  exciting announcement to make - our official launch of
                  products and website this coming weekend on June 3rd. So, stay
                  tuned for more mushroom magic! Let&apos;s dive into the
                  wonderful world of our debut product launch.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .may27202-event-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .may27202-event-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .may27202-event-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .may27202-event-blog-post {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .may27202-event-blog-post:hover {
            transform: scale(1.02);
          }
          .may27202-event-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .may27202-event-container2 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .may27202-event-text {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .may27202-event-text1 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .may27202-event-text3 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .may27202-event-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .may27202-event-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .may27202-event-text4 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .may27202-event-text5 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 1200px) {
            .may27202-event-hero {
              margin-top: var(--dl-space-space-fiveunits);
              justify-content: flex-start;
            }
            .may27202-event-blog-post {
              flex-direction: row;
            }
            .may27202-event-image {
              width: 50%;
            }
            .may27202-event-container2 {
              width: 50%;
            }
            .may27202-event-text {
              color: var(--dl-color-gray-500);
            }
            .may27202-event-text3 {
              font-size: 1.5rem;
              font-weight: 300;
              margin-bottom: var(--dl-space-space-unit);
            }
            .may27202-event-container3 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .may27202-event-text4 {
              font-weight: 300;
            }
            .may27202-event-text5 {
              color: var(--dl-color-gray-500);
              font-weight: 400;
            }
          }
          @media (max-width: 991px) {
            .may27202-event-hero {
              flex-direction: column;
            }
            .may27202-event-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .may27202-event-image {
              height: 350px;
            }
          }
          @media (max-width: 767px) {
            .may27202-event-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .may27202-event-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .may27202-event-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default May272023Event
