import React from 'react'

import PropTypes from 'prop-types'

const OutlineGrayButton1 = (props) => {
  return (
    <>
      <div className="outline-gray-button1-container">
        <button className="outline-gray-button1-button ButtonSmall button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .outline-gray-button1-container {
            display: flex;
            position: relative;
          }
          .outline-gray-button1-button {
            color: var(--dl-color-secondary-200);
            outlinr: none;
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-color: var(--dl-color-secondary-200);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .outline-gray-button1-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineGrayButton1.defaultProps = {
  button: 'Button',
}

OutlineGrayButton1.propTypes = {
  button: PropTypes.string,
}

export default OutlineGrayButton1
