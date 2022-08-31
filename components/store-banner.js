import React from 'react'

import PropTypes from 'prop-types'

const StoreBanner = (props) => {
  return (
    <>
      <div className="store-banner-store-banner">
        <button className="store-banner-button button">{props.shopbtn}</button>
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
            background-color: #6209c6;
          }
        `}
      </style>
    </>
  )
}

StoreBanner.defaultProps = {
  shopbtn: 'SHOP',
}

StoreBanner.propTypes = {
  shopbtn: PropTypes.string,
}

export default StoreBanner
