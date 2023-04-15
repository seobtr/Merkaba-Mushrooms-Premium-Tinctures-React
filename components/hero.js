import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton3 from './primary-pink-button3'
import MushroomBtn from './mushroom-btn'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-hero ${props.rootClassName} `}>
        <div className="hero-container">
          <div className="hero-card">
            <div className="hero-container1">
              <h1 className="hero-text">{props.heading}</h1>
              <h2 className="hero-text1">
                <span className="HeadingOne">A New Way to Cultivate </span>
                <span className="HeadingOne">Your Mind and Body</span>
                <br></br>
              </h2>
              <span className="hero-text5">{props.text}</span>
            </div>
            <div className="hero-container2">
              <div className="hero-container3">
                <PrimaryPinkButton3 button="contact us"></PrimaryPinkButton3>
              </div>
              <MushroomBtn button="read more"></MushroomBtn>
            </div>
          </div>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="hero-image"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="hero-image1"
        />
      </div>
      <style jsx>
        {`
          .hero-hero {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .hero-container {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius1);
            margin-bottom: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .hero-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .hero-text {
            font-size: 2.25rem;
            text-align: center;
            font-family: Italiana;
            font-weight: 700;
            line-height: 1.3;
            text-transform: uppercase;
            text-decoration: none;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero-text1 {
            text-align: left;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .hero-text5 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .hero-container2 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero-container3 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 50%;
            bottom: 0px;
            height: 80vh;
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .hero-image1 {
            top: 158px;
            right: 131px;
            width: 253px;
            height: 503px;
            position: absolute;
            object-fit: contain;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }

          @media (max-width: 991px) {
            .hero-container {
              max-width: 960px;
            }
            .hero-card {
              width: 90%;
              height: auto;
              margin-left: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .hero-container1 {
              width: 70%;
              height: auto;
            }
            .hero-text1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .hero-text5 {
              color: var(--dl-color-secondary-600);
            }
            .hero-image1 {
              z-index: 100;
            }
          }
          @media (max-width: 767px) {
            .hero-card {
              align-items: flex-start;
              margin-right: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-doubleunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .hero-text1 {
              width: 80%;
            }
            .hero-text5 {
              color: var(--dl-color-secondary-600);
              width: 80%;
              text-align: left;
              margin-right: 0px;
              padding-right: 0px;
            }
            .hero-image {
              display: none;
            }
            .hero-image1 {
              top: 0px;
              right: 58px;
              bottom: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .hero-container {
              max-width: 100%;
              min-height: auto;
              padding-right: 0px;
            }
            .hero-card {
              align-self: center;
              margin-top: var(--dl-space-space-sixunits);
              margin-left: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-tripleunit);
              margin-right: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .hero-container1 {
              align-self: center;
              align-items: center;
            }
            .hero-text {
              font-size: 2.25rem;
              align-self: flex-start;
              text-align: center;
              font-family: Italiana;
              font-weight: 700;
              line-height: 1.3;
              text-transform: uppercase;
              text-decoration: none;
              background-image: linear-gradient(
                310deg,
                rgb(121, 40, 202),
                rgb(255, 0, 128)
              );
            }
            .hero-text1 {
              align-self: center;
              text-align: center;
            }
            .hero-text5 {
              color: var(--dl-color-secondary-600);
              align-self: center;
              text-align: left;
            }
            .hero-container2 {
              align-self: center;
              align-items: center;
              flex-direction: column;
            }
            .hero-container3 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .hero-image {
              display: none;
            }
            .hero-image1 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image_src1:
    '/playground_assets/merkaba%20mushrooms%20lions%20mane%20mushroom%20tincture-300w.png',
  image_alt1: 'image',
  heading: 'Merkaba Mushrooms',
  image_alt: 'image',
  image_alt2: 'image',
  image_src2: '03a700b8-7d31-46f8-8ccb-cac4f826fda2',
  rootClassName: '',
  text: 'Fruiting Body only tinctures specifically formulated to taste good and make you feel good',
  image_src: '/playground_assets/merkaba_bg-1500h.png',
}

Hero.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Hero
