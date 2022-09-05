import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const StoreBanner = (props) => {
  return (
    <>
      <div className={`store-banner-store-banner ${props.rootClassName} `}>
        <Link href="/shop">
          <a className="store-banner-link button">{props.shopbtn}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .store-banner-store-banner {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .store-banner-link {
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
  shopbtn: 'Shop Tinctures',
  rootClassName: '',
}

StoreBanner.propTypes = {
  shopbtn: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default StoreBanner
