import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'

const Resources = (props) => {
  return (
    <>
      <div className="resources-container">
        <Head>
          <title>Resources - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="Resources - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header rootClassName="header-root-class-name8"></Header>
        <div className="resources-hero">
          <div className="resources-container1">
            <h1 className="resources-text">Resources</h1>
            <span className="resources-text01">
              <span>
                Welcome to this resource page on medicinal mushrooms! Here, you
                will discover valuable facts and figures regarding mushrooms.
                Whether it&apos;s trends, academic research, health and wellness
                tips, or recommendations - we have everything covered.
              </span>
              <br></br>
              <br></br>
              <span>
                Our page is dedicated to providing accurate and trustworthy
                information so that you can trust what you read here. We aim to
                present information clearly and succinctly so that it&apos;s
                easier for you to understand and apply to your life.
              </span>
              <br></br>
              <br></br>
              <span>
                Please spend some time exploring our articles and discovering
                something new today! Our page is updated frequently with fresh
                material, so check back often to stay current!
              </span>
              <br></br>
              <br></br>
              <span>
                If you have any suggestions for topics to be covered on our
                site, don&apos;t hesitate to contact us. We welcome feedback and
                continuously seek ways to enhance it.
              </span>
              <br></br>
              <br></br>
              <span>
                Thank you for visiting our informational page; we hope the
                information here proves helpful and informative.
              </span>
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
        </div>
        <div className="resources-blog">
          <div className="resources-banner">
            <div className="resources-container2">
              <h1 className="resources-text17">
                Explore Our Medicinal Mushroom Resource Page - Unlock the Power
                of Fungi for Wellness
              </h1>
              <span className="resources-text18">
                <span>
                  We have curated a wealth of knowledge and information about
                  the fascinating world of medicinal mushrooms. Whether
                  you&apos;re a seasoned mycophile or just beginning your
                  journey into the realm of fungi, our resource page is designed
                  to empower you with the information you need to harness the
                  potential of these incredible organisms for your well-being.
                  Join us as we delve into the depths of mycology and discover
                  the wonders of medicinal mushrooms.
                </span>
                <br></br>
              </span>
            </div>
            <div className="resources-blog-post-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1602664719969-5cb83870efb3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxtdXNocm9vbXN8ZW58MHx8fHwxNjg1NTQ4MDI1fDA&amp;ixlib=rb-4.0.3&amp;h=400"
                className="resources-image"
              />
              <div className="resources-container3">
                <Link href="/resources">
                  <a className="resources-link category-link">
                    Medicinal Mushrooms
                  </a>
                </Link>
                <h4 className="resources-text21">
                  The Ultimate Guide to Medicinal Mushrooms
                </h4>
                <p className="resources-text22">
                  Discover the health benefits of medicinal mushrooms
                </p>
                <Link href="/the-ultimate-guide-to-medicinal-mushrooms">
                  <a className="resources-link1">Learn More</a>
                </Link>
                <div className="resources-container4">
                  <div className="resources-profile">
                    <span className="resources-text23">Tommy Nguyen</span>
                  </div>
                  <span className="resources-text24">5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .resources-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .resources-hero {
            width: 100%;
            display: flex;
            min-height: 80vh;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .resources-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .resources-text {
            font-size: 3rem;
          }
          .resources-text01 {
            max-width: 800px;
            margin-top: var(--dl-space-space-twounits);
            text-align: left;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .resources-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1400px;
            align-items: center;
            justify-content: space-between;
          }
          .resources-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1400px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .resources-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .resources-text17 {
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .resources-text18 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .resources-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: auto;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .resources-blog-post-card:hover {
            transform: scale(1.02);
          }
          .resources-image {
            width: 40%;
            height: 250px;
            object-fit: cover;
          }
          .resources-container3 {
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .resources-link {
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .resources-text21 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
            text-overflow: ellipsis;
          }
          .resources-text22 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
            text-overflow: ellipsis;
          }
          .resources-link1 {
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
          }
          .resources-container4 {
            width: 100%;
            display: none;
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
          .resources-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .resources-text23 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .resources-text24 {
            color: var(--dl-color-gray-700);
            font-weight: 300;
          }
          @media (max-width: 1200px) {
            .resources-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .resources-text {
              font-size: 3rem;
            }
            .resources-text01 {
              margin-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .resources-banner {
              margin-top: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .resources-text17 {
              font-weight: 600;
            }
            .resources-container3 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
          }
          @media (max-width: 991px) {
            .resources-hero {
              flex-direction: column;
            }
            .resources-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .resources-text {
              align-self: center;
              text-align: center;
            }
            .resources-text01 {
              text-align: left;
            }
            .resources-banner {
              flex-direction: column;
            }
            .resources-container2 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .resources-text18 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .resources-blog-post-card {
              justify-content: center;
            }
            .resources-image {
              height: 350px;
              display: none;
            }
            .resources-link {
              font-size: 14px;
            }
            .resources-text21 {
              font-size: 24px;
            }
            .resources-text22 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .resources-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .resources-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .resources-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .resources-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .resources-text18 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .resources-image {
              display: none;
            }
            .resources-link {
              font-size: 14px;
            }
            .resources-text21 {
              font-size: 24px;
            }
          }
          @media (max-width: 479px) {
            .resources-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .resources-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .resources-text01 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .resources-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .resources-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .resources-text17 {
              font-size: 28px;
              align-self: flex-start;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
            }
            .resources-text18 {
              font-size: 16px;
              text-align: left;
            }
            .resources-link {
              font-size: 14px;
            }
            .resources-text21 {
              font-size: 20px;
            }
            .resources-text22 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Resources
