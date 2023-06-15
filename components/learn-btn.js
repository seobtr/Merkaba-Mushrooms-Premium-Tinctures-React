import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const LearnBtn = (props) => {
  return (
    <>
      <div className="learn-btn-container">
        <Link href="/blog">
          <a className="learn-btn-link button ButtonSmall">{props.button}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .learn-btn-container {
            display: flex;
            position: relative;
          }
          .learn-btn-link {
            color: #ffffff;
            outline: none;
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-decoration: none;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .learn-btn-link:hover {
            color: #ffffff;
            cursor: pointer;
            outline: none;
            transform: scale(1.02);
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            -webkit-background-clip: none;
            -webkit-text-fill-color: var(--dl-color-light_primary-contrast);
          }
        `}
      </style>
    </>
  )
}

LearnBtn.defaultProps = {
  button: 'Learn More ',
}

LearnBtn.propTypes = {
  button: PropTypes.string,
}

export default LearnBtn
