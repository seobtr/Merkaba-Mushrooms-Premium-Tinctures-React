import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import OutlineGrayButton from './outline-gray-button'

const HeroCta = (props) => {
  return (
    <>
      <div className="hero-cta-container">
        <div className="hero-cta-card">
          <h1 className="hero-cta-text">{props.heading}</h1>
          <span className="hero-cta-text1">
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
          <div className="hero-cta-container1">
            <div className="hero-cta-container2">
              <PrimaryPinkButton
                button="Shop Now"
                className="hero-cta-component"
              ></PrimaryPinkButton>
            </div>
            <OutlineGrayButton button="Learn More"></OutlineGrayButton>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-cta-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-cta-card {
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
          .hero-cta-text {
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
          .hero-cta-text1 {
            color: var(--dl-color-secondary-600);
            padding: 0px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .hero-cta-container1 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero-cta-container2 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .hero-cta-component {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hero-cta-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hero-cta-card {
              align-items: center;
            }
            .hero-cta-text1 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .hero-cta-card {
              padding: var(--dl-space-space-unit);
            }
            .hero-cta-container1 {
              align-items: center;
              flex-direction: column;
            }
            .hero-cta-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

HeroCta.defaultProps = {
  heading: 'A New Way to Cultivate Your Mind and Body ',
}

HeroCta.propTypes = {
  heading: PropTypes.string,
}

export default HeroCta
