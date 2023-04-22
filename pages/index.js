import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import PrimaryPinkButton4 from '../components/primary-pink-button4'
import OutlineGrayButton2 from '../components/outline-gray-button2'
import MeetMerkaba from '../components/meet-merkaba'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Merkaba Mushrooms E-Commerce</title>
          <meta property="og:title" content="Merkaba Mushrooms E-Commerce" />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="home-hero">
          <div className="home-container1">
            <div className="home-card">
              <img
                alt="image"
                src="/playground_assets/image-ypp8-1500h.png"
                className="home-image"
              />
              <div className="home-container2">
                <h1 className="home-text HeadingOne">Merkaba Mushrooms</h1>
                <h2 className="home-text1">Medicinal Mushroom Tinctures</h2>
                <p className="home-text2 Lead">
                  Fruiting Body only tinctures specifically formulated to taste
                  good and make you feel good.
                </p>
                <div className="home-container3">
                  <div className="home-container4">
                    <a
                      href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                      className="home-link"
                    >
                      <PrimaryPinkButton4
                        button="Shop Tincures"
                        className="home-component1"
                      ></PrimaryPinkButton4>
                    </a>
                  </div>
                  <OutlineGrayButton2 button="Learn More"></OutlineGrayButton2>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/image-nttj-1500h.jpg"
            className="home-image1"
          />
        </div>
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
        </div>
        <MeetMerkaba rootClassName="meet-merkaba-root-class-name"></MeetMerkaba>
        <div className="home-testimonial"></div>
        <div className="home-cta"></div>
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
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: row;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-image {
            width: 30%;
            align-self: center;
            object-fit: cover;
          }
          .home-container2 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text1 {
            color: var(--dl-color-secondary-700);
            text-align: center;
            font-family: Montserrat;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text2 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .home-container3 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container4 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-component1 {
            text-decoration: none;
          }
          .home-image1 {
            top: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 80vh;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-right-radius: 10rem;
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
          .home-testimonial {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .home-cta {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-container1 {
              max-width: 960px;
            }
            .home-card {
              width: 100%;
            }
            .home-image1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-card {
              align-items: center;
            }
            .home-text2 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-image1 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-card {
              padding: var(--dl-space-space-unit);
            }
            .home-container3 {
              align-items: center;
              flex-direction: column;
            }
            .home-container4 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
