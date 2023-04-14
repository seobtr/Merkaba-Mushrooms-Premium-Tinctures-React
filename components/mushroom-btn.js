import React from 'react'

import PropTypes from 'prop-types'

const MushroomBtn = (props) => {
  return (
    <>
      <div className="mushroom-btn-container">
        <button className="mushroom-btn-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .mushroom-btn-container {
            display: flex;
            position: relative;
          }
          .mushroom-btn-button {
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
          .mushroom-btn-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

MushroomBtn.defaultProps = {
  button: 'Button',
}

MushroomBtn.propTypes = {
  button: PropTypes.string,
}

export default MushroomBtn
