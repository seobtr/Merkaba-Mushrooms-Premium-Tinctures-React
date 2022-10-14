import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import StoreBanner from './store-banner'

const Header = (props) => {
  return (
    <>
      <header className={`header-header ${props.rootClassName} `}>
        <div className="header-logo">
          <Link href="/">
            <a className="header-link">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="header-image"
              />
            </a>
          </Link>
        </div>
        <div className="header-menu">
          <span className="header-text">{props.text}</span>
          <a
            href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
            className="header-link1"
          >
            {props.text1}
          </a>
          <a
            href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
            target="_blank"
            rel="noreferrer noopener"
            className="header-link2"
          >
            {props.text2}
          </a>
          <span className="header-text1">{props.text3}</span>
        </div>
        <div className="header-container">
          <a
            href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/"
            className="header-link3"
          >
            <StoreBanner className="header-component"></StoreBanner>
          </a>
        </div>
        <div data-type="BurgerMenu" className="header-burger-menu">
          <svg viewBox="0 0 1024 1024" className="header-menu1">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
      </header>
      <style jsx>
        {`
          .header-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link {
            display: contents;
          }
          .header-image {
            width: 67px;
            height: 76px;
            object-fit: cover;
            text-decoration: none;
          }
          .header-menu {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-text {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .header-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .header-link1 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .header-link1:hover {
            color: var(--dl-color-turquoise-default);
          }
          .header-link2 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .header-link2:hover {
            color: var(--dl-color-turquoise-default);
          }
          .header-text1 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .header-text1:hover {
            color: var(--dl-color-turquoise-default);
          }
          .header-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link3 {
            display: contents;
          }
          .header-component {
            text-decoration: none;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-menu1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }

          @media (max-width: 991px) {
            .header-container {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .header-menu {
              display: none;
            }
            .header-burger-menu {
              display: block;
            }
          }
          @media (max-width: 479px) {
            .header-container {
              display: none;
            }
            .header-menu1 {
              width: 48px;
              height: 48px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  text2: 'Tinctures',
  image_src: '/playground_assets/asset%2011-200w.png',
  text1: 'All Products',
  image_alt: 'image',
  rootClassName: '',
  text3: 'Blog',
  text: 'About',
}

Header.propTypes = {
  text2: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default Header
