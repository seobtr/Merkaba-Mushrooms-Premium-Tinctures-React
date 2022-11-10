import React from 'react'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import OutlineGrayButton from './outline-gray-button'

const Component1 = (props) => {
  return (
    <>
      <div className="component1-container">
        <div className="component1-card">
          <h1 className="component1-text">{props.heading}</h1>
          <span className="component1-text1">
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
          <div className="component1-container1">
            <div className="component1-container2">
              <PrimaryPinkButton button="Shop Now"></PrimaryPinkButton>
            </div>
            <OutlineGrayButton button="Learn More"></OutlineGrayButton>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .component1-container {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .component1-card {
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
          .component1-text {
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
          .component1-text1 {
            color: var(--dl-color-secondary-600);
            text-align: center;
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .component1-container1 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .component1-container2 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          @media (max-width: 991px) {
            .component1-container {
              max-width: 960px;
            }
            .component1-card {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .component1-card {
              align-items: center;
            }
            .component1-text1 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
          }
          @media (max-width: 479px) {
            .component1-card {
              padding: var(--dl-space-space-unit);
            }
            .component1-container1 {
              align-items: center;
              flex-direction: column;
            }
            .component1-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Component1.defaultProps = {
  heading: 'A New Way to Cultivate Your Mind and Body ',
}

Component1.propTypes = {
  heading: PropTypes.string,
}

export default Component1
