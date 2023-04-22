import React from 'react'

import PropTypes from 'prop-types'

const PrimaryPinkButton4 = (props) => {
  return (
    <>
      <div className="primary-pink-button4-container">
        <button className="primary-pink-button4-button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-pink-button4-container {
            display: flex;
            position: relative;
          }
          .primary-pink-button4-button {
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
          }
        `}
      </style>
    </>
  )
}

PrimaryPinkButton4.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton4.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton4
