import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard1 = (props) => {
  return (
    <>
      <div className="feature-card1-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card1-image"
        />
        <h5 className="feature-card1-text HeadingThree">{props.new_prop}</h5>
        <span className="feature-card1-text1">{props.text}</span>
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
  text: 'Get the latest design ideas and turn it into reality.',
  new_prop: 'Design',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCard1.propTypes = {
  text: PropTypes.string,
  new_prop: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard1
