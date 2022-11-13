import React from 'react'

import PropTypes from 'prop-types'

const NavMenu = (props) => {
  return (
    <>
      <div className={`nav-menu-nav-menu ${props.rootClassName} `}>
        <span className="nav-menu-text">{props.text}</span>
        <a
          href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
          className="nav-menu-link"
        >
          {props.text1}
        </a>
        <a
          href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
          target="_blank"
          rel="noreferrer noopener"
          className="nav-menu-link1"
        >
          {props.text2}
        </a>
        <span className="nav-menu-text1">{props.text3}</span>
      </div>
      <style jsx>
        {`
          .nav-menu-nav-menu {
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: row;
          }

          .nav-menu-text {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .nav-menu-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .nav-menu-link {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .nav-menu-link:hover {
            color: var(--dl-color-turquoise-default);
          }
          .nav-menu-link1 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .nav-menu-link1:hover {
            color: var(--dl-color-turquoise-default);
          }
          .nav-menu-text1 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .nav-menu-text1:hover {
            color: var(--dl-color-turquoise-default);
          }
          @media (max-width: 767px) {
            .nav-menu-nav-menu {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .nav-menu-nav-menu {
              display: flex;
              flex-direction: row;
            }
          }
        `}
      </style>
    </>
  )
}

NavMenu.defaultProps = {
  text2: 'Tinctures',
  text1: 'All Products',
  rootClassName: '',
  text3: 'Blog',
  text: 'About',
}

NavMenu.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default NavMenu
