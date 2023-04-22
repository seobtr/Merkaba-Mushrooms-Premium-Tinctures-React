import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard1 = (props) => {
  return (
    <>
      <div className={`feature-card1-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card1-image"
        />
        <h5 className="feature-card1-text HeadingThree">
          {props.featuredTitle}
        </h5>
        <span className="feature-card1-text1">{props.benefits1}</span>
        <span className="feature-card1-text2">{props.benefits2}</span>
        <span className="feature-card1-text3">{props.benefit3}</span>
      </div>
      <style jsx>
        {`
          .feature-card1-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            margin-top: var(--dl-space-space-triplequarterunit);
            align-items: center;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .feature-card1-image {
            height: 30px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .feature-card1-text {
            color: var(--dl-color-secondary-600);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .feature-card1-text1 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card1-text2 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card1-text3 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card1-root-class-name {
            width: 33%;
          }
          .feature-card1-root-class-name1 {
            width: 33%;
          }
          .feature-card1-root-class-name2 {
            width: 33%;
          }
          @media (max-width: 767px) {
            .feature-card1-container {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .feature-card1-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard1.defaultProps = {
  benefits1: 'Add benefits 1',
  featuredTitle: 'Add Title',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  benefits2: 'Add benefits 2',
  benefit3: 'Add benefits 3',
  rootClassName: '',
}

FeatureCard1.propTypes = {
  benefits1: PropTypes.string,
  featuredTitle: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  benefits2: PropTypes.string,
  benefit3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard1
