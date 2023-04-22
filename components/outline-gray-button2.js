import React from 'react'

import PropTypes from 'prop-types'

const OutlineGrayButton2 = (props) => {
  return (
    <>
      <div className="outline-gray-button2-container">
        <button className="outline-gray-button2-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .outline-gray-button2-container {
            display: flex;
            position: relative;
          }
          .outline-gray-button2-button {
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
          .outline-gray-button2-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

OutlineGrayButton2.defaultProps = {
  button: 'Button',
}

OutlineGrayButton2.propTypes = {
  button: PropTypes.string,
}

export default OutlineGrayButton2
