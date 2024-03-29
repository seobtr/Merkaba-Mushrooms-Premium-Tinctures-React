import React from 'react'

import PropTypes from 'prop-types'

const PrimaryPinkButton2 = (props) => {
  return (
    <>
      <div className={`primary-pink-button2-container ${props.rootClassName} `}>
        <a
          href="https://merkabamushrooms.com/shop"
          className="primary-pink-button2-link button ButtonSmall"
        >
          {props.button}
        </a>
      </div>
      <style jsx>
        {`
          .primary-pink-button2-container {
            display: flex;
            position: relative;
          }
          .primary-pink-button2-link {
            color: var(--dl-color-gray-white);
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
          .primary-pink-button2-link:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

PrimaryPinkButton2.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

PrimaryPinkButton2.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryPinkButton2
