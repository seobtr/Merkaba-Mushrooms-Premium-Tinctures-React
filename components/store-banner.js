import React from 'react'

import PropTypes from 'prop-types'

const StoreBanner = (props) => {
  return (
    <>
      <div className={`store-banner-store-banner ${props.rootClassName} `}>
        <a
          href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
          className="store-banner-button button"
        >
          {props.shopbtn}
        </a>
      </div>
      <style jsx>
        {`
          .store-banner-store-banner {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .store-banner-button {
            color: #ffffff;
            text-decoration: none;
            background-color: #d6b1ff;
          }

          @media (max-width: 767px) {
            .store-banner-root-class-name {
              margin-top: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

StoreBanner.defaultProps = {
  rootClassName: '',
  shopbtn: 'Shop Tinctures',
}

StoreBanner.propTypes = {
  rootClassName: PropTypes.string,
  shopbtn: PropTypes.string,
}

export default StoreBanner
