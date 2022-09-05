import React from 'react'

import PropTypes from 'prop-types'

const StatsCard = (props) => {
  return (
    <>
      <div className={`stats-card-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="stats-card-image"
        />
        <div className="stats-card-container1">
          <h3 className="stats-card-text headline4">{props.process}</h3>
          <span className="stats-card-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .stats-card-container {
            width: 200px;
            margin: var(--dl-space-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            overflow-wrap: break-word;
            flex-direction: row;
          }
          .stats-card-image {
            width: 32px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .stats-card-container1 {
            flex: 0 0 auto;
            width: 350px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            overflow-wrap: break-word;
            flex-direction: column;
          }
          .stats-card-text {
            overflow-wrap: break-all;
          }
          .stats-card-text1 {
            font-size: 16px;
            font-family: Inter;
            font-weight: 400;
            line-height: 1.55;
            overflow-wrap: break-word;
            text-transform: none;
            text-decoration: none;
          }
          .stats-card-root-class-name {
            width: 400px;
          }
          .stats-card-root-class-name1 {
            width: 400px;
          }
          @media (max-width: 767px) {
            .stats-card-root-class-name {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .stats-card-root-class-name {
              width: auto;
            }
            .stats-card-root-class-name1 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

StatsCard.defaultProps = {
  rootClassName: '',
  process: 'Double Extracted',
  image_src: 'd1b1341b-3dd9-4f91-b9fb-58aada385730',
  description: 'Description',
  image_alt: 'image',
}

StatsCard.propTypes = {
  rootClassName: PropTypes.string,
  process: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default StatsCard
