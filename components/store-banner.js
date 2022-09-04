import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const StoreBanner = (props) => {
  return (
    <>
      <div className="store-banner-store-banner">
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
        `}
      </style>
    </>
  )
}

StoreBanner.defaultProps = {
  shopbtn: 'Shop Tinctures',
}

StoreBanner.propTypes = {
  shopbtn: PropTypes.string,
}

export default StoreBanner
