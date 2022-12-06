import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import OutlineGrayButton from './outline-gray-button'

const Hero2 = (props) => {
  return (
    <>
      <div className="hero2-hero2">
        <div className="hero2-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="hero2-image"
          />
        </div>
        <div className="hero2-card">
          <h1 className="hero2-text">{props.heading}</h1>
          <span className="hero2-text1">
            <span>
              Fruiting Body only tinctures specifically formulated to taste good
              and make you feel good
            </span>
            <span className="Lead">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="Lead">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="hero2-container1">
            <div className="hero2-container2">
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                className="hero2-link"
              >
                <PrimaryPinkButton
                  button="Shop Now"
                  className="hero2-component"
                ></PrimaryPinkButton>
              </a>
            </div>
            <OutlineGrayButton button="Learn More"></OutlineGrayButton>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero2-hero2 {
            width: 100%;
            display: flex;
            padding: 48px;
            position: relative;
            max-width: 1400px;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero2-container {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .hero2-image {
            width: 238px;
            z-index: 2;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .hero2-card {
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
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .hero2-text {
            font-size: 48px;
            text-align: center;
            font-family: Italiana;
            text-transform: uppercase;
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero2-text1 {
            color: var(--dl-color-secondary-600);
            padding: 0px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .hero2-container1 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero2-container2 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero2-link {
            display: contents;
          }
          .hero2-component {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hero2-hero2 {
              flex-direction: column;
            }
            .hero2-container {
              width: 100%;
              margin-right: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .hero2-image {
              width: auto;
              margin-right: 0px;
              padding-right: 0px;
            }
            .hero2-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hero2-hero2 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .hero2-image {
              margin-right: 0px;
              padding-right: 0px;
            }
            .hero2-card {
              align-items: center;
            }
            .hero2-text1 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero2-hero2 {
              z-index: 2;
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .hero2-image {
              width: 174px;
              height: 387px;
              padding: 10px;
            }
            .hero2-card {
              padding: var(--dl-space-space-unit);
            }
            .hero2-container1 {
              align-items: center;
              flex-direction: column;
            }
            .hero2-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Hero2.defaultProps = {
  image_src:
    '/playground_assets/merkaba%20mushrooms%20lions%20mane%20mushroom%20tincture-300w.png',
  image_alt: 'image',
  heading: 'A New Way to Cultivate Your Mind and Body ',
}

Hero2.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default Hero2
