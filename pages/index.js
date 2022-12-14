import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header3 from '../components/header3'
import Hero from '../components/hero'
import MeetMerkaba from '../components/meet-merkaba'
import PrimaryPinkButton from '../components/primary-pink-button'
import FeatureCard from '../components/feature-card'
import StatsCard from '../components/stats-card'
import StoreBanner from '../components/store-banner'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Merkaba Mushrooms Premium Tinctures</title>
          <meta
            property="og:title"
            content="Merkaba Mushrooms Premium Tinctures"
          />
        </Head>
        <Header3 rootClassName="header3-root-class-name3"></Header3>
        <Hero rootClassName="hero-root-class-name"></Hero>
        <div className="home-main">
          <div className="home-blur-background"></div>
          <img
            alt="image"
            src="/playground_assets/turquoise-circle.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="home-purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left.svg"
            className="home-left"
          />
          <img
            alt="image"
            src="/playground_assets/right.svg"
            className="home-right"
          />
        </div>
        <MeetMerkaba rootClassName="meet-merkaba-root-class-name"></MeetMerkaba>
        <div className="home-features">
          <span className="home-text">meet merkaba mushrooms</span>
          <h2 className="home-text01">
            <span>
              The South’s Leading Medicinal Mushroom Company
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Providing Quality Mushroom Tinctures</span>
          </h2>
          <span className="home-text05">
            <span>
              Proprietary Formula Created by Our Mycologist Biological Engineer 
            </span>
            <span>Jordan Gros</span>
          </span>
          <div className="home-container01">
            <Link href="/about">
              <a className="home-link">
                <PrimaryPinkButton
                  button="Our Mission"
                  className="home-component03"
                ></PrimaryPinkButton>
              </a>
            </Link>
          </div>
          <div className="home-features1">
            <FeatureCard card_title="Dual Extracted"></FeatureCard>
            <FeatureCard
              image_src="https://images.unsplash.com/photo-1542691627-48dcdd6e2a29?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDkxfHxtdXNocm9vbXxlbnwwfHx8fDE2NjgzNjY2Nzk&amp;ixlib=rb-4.0.3&amp;w=300"
              card_title="100% Fruiting Body"
            ></FeatureCard>
            <FeatureCard
              image_src="https://images.unsplash.com/photo-1524083068160-0dcacf4e41ca?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHVuaXRlZCUyMHN0YXRlc3xlbnwwfHx8fDE2NjgzNjY3MDA&amp;ixlib=rb-4.0.3&amp;w=300"
              card_title="US Grown"
            ></FeatureCard>
          </div>
        </div>
        <div className="home-feature1">
          <div className="home-container02">
            <img
              alt="image"
              src="/playground_assets/cordyceps%20object%20%5B1%5D-500w.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className="home-image"
            />
          </div>
          <div className="home-container03">
            <span className="home-text08">Featured product</span>
            <h3 className="home-text09">
              <span className="Headline3">Merkaba Dual Extracted</span>
              <br className="Headline3"></br>
            </h3>
            <h3 className="home-text12 Headline3">
              <span className="Headline3">Lion&apos;s Mane </span>
              <span className="home-text14 Headline3">Tinctures</span>
            </h3>
            <span className="home-text15">
              Lion&apos;s Mane mushrooms, also called Hericium Erinaceus, are
              prized for their nootropic properties. Our dual extract
              lion&apos;s mane tinctures offer cognitive support, immune
              support, anti-inflammatory and gut health benefits.
            </span>
            <Link href="/about">
              <a className="home-link1">
                <PrimaryPinkButton
                  button="SHOP NOW"
                  className="home-component07"
                ></PrimaryPinkButton>
              </a>
            </Link>
          </div>
        </div>
        <div className="home-achievements">
          <div className="home-container04">
            <div className="home-container05">
              <StatsCard
                process="Beta Glucans"
                image_src="/playground_assets/01.svg"
                description="Beta-glucans are soluble fibers that come from the cell walls of bacteria, fungi, yeasts, and some plants. They might lower the risk for heart disease."
                rootClassName="stats-card-root-class-name"
              ></StatsCard>
              <StatsCard
                process="Benefits 2"
                image_src="/playground_assets/01.svg"
                description="Beta-glucans are soluble fibers that come from the cell walls of bacteria, fungi, yeasts, and some plants. They might lower the risk for heart disease."
                rootClassName="stats-card-root-class-name1"
              ></StatsCard>
            </div>
            <div className="home-container06"></div>
          </div>
        </div>
        <div className="home-c-t-a">
          <div className="home-container07">
            <div className="home-container08">
              <h2 className="Headline2 home-text16">Call to Action</h2>
              <span className="home-text17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
                className="home-link2"
              >
                <StoreBanner
                  rootClassName="store-banner-root-class-name"
                  className="home-component10"
                ></StoreBanner>
              </a>
            </div>
            <div className="home-container09">
              <div className="home-container10">
                <img
                  alt="image"
                  src="/playground_assets/cordyceps%20object%20%5B1%5D-500w.png"
                  image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                  className="home-image1"
                />
                <img
                  alt="image"
                  src="/playground_assets/mask%20group%2018-200w.png"
                  image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-blur-background {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            filter: blur(60px);
            height: 70vh;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: #f2f2f2;
          }
          .home-turquoise-cirble {
            top: 439px;
            left: auto;
            right: 430px;
            width: 170px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
          }
          .home-purple-circle {
            top: -100px;
            left: auto;
            right: -26px;
            width: 400px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .home-left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text {
            max-width: 500px;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text01 {
            color: var(--dl-color-gray-900);
            font-size: 1.95rem;
            text-align: center;
            font-family: Montserrat;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-text05 {
            max-width: 400px;
            text-align: center;
          }
          .home-container01 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-component03 {
            text-decoration: none;
          }
          .home-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 540px;
            height: 364px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-purple-100);
          }
          .home-image {
            width: 470px;
            height: 299px;
            margin-top: 100px;
            object-fit: cover;
          }
          .home-container03 {
            flex: 1;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text08 {
            max-width: 500px;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text09 {
            font-size: 28px;
            font-family: Montserrat;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-text12 {
            font-size: 31px;
            font-family: Montserrat;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-text14 {
            color: var(--dl-color-gray-900);
          }
          .home-text15 {
            font-size: 18px;
            max-width: 400px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Montserrat;
            font-weight: 400;
            line-height: 1.77;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-link1 {
            display: contents;
          }
          .home-component07 {
            text-decoration: none;
          }
          .home-achievements {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/merkaba_bg-1200w.png');
          }
          .home-container04 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container05 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container06 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-c-t-a {
            width: auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container08 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text17 {
            max-width: 500px;
          }
          .home-link2 {
            display: contents;
          }
          .home-component10 {
            text-decoration: none;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 520px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container10 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image1 {
            top: -82px;
            left: 113px;
            width: 305px;
            height: 198px;
            position: absolute;
            object-fit: cover;
          }
          .home-image2 {
            top: -153px;
            left: 92px;
            width: 96px;
            height: 321px;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-feature1 {
              flex-direction: column;
            }
            .home-container03 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-achievements {
              flex-direction: column;
            }
            .home-container04 {
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-container10 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .home-text01 {
              font-size: 40px;
            }
            .home-container02 {
              width: auto;
              max-width: 400px;
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-container07 {
              justify-content: center;
            }
            .home-container08 {
              width: auto;
              max-width: 400px;
            }
            .home-text16 {
              font-size: 40px;
            }
          }
          @media (max-width: 479px) {
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-text05 {
              text-align: center;
            }
            .home-container01 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-image {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .home-text08 {
              text-align: center;
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-container06 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
