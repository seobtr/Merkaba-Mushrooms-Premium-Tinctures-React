import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const ShopBtn = (props) => {
  return (
    <>
      <div className="shop-btn-container">
        <Link href="/shop">
          <a className="shop-btn-link ButtonSmall button">{props.button}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .shop-btn-container {
            display: flex;
            position: relative;
          }
          .shop-btn-link {
            color: #ffffff;
            outline: none;
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-decoration: none;
          }
          .shop-btn-link:hover {
            cursor: pointer;
            transform: scale(1.02);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </>
  )
}

ShopBtn.defaultProps = {
  link_button: 'https://merkabamushrooms.com/shop',
  button: 'Button',
}

ShopBtn.propTypes = {
  link_button: PropTypes.string,
  button: PropTypes.string,
}

export default ShopBtn
