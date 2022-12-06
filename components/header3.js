import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PrimaryPinkButton2 from './primary-pink-button2'

const Header3 = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`header3-header ${props.rootClassName} `}
      >
        <nav className="header3-nav">
          <div className="header3-container">
            <div className="header3-container1">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="header3-image"
              />
              <span className="header3-text">Merkaba Mushrooms</span>
            </div>
            <div className="header3-menu">
              <Link href="/about">
                <a className="header3-link">
                  <span className="Large header3-text1">About Us</span>
                  <br></br>
                </a>
              </Link>
              <span className="header3-text3 Large">Coming Soon</span>
              <span className="header3-text4 Large">Learn</span>
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                className="header3-link1"
              >
                <span className="Large header3-text5">Shop</span>
                <br></br>
              </a>
            </div>
            <div className="header3-container2">
              <div className="header3-container3">
                <a
                  href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                  className="header3-link2"
                >
                  <PrimaryPinkButton2
                    button="buy now"
                    className="header3-component"
                  ></PrimaryPinkButton2>
                </a>
              </div>
              <div data-role="BurgerMenu" className="header3-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header3-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header3-mobile-menu">
          <div className="header3-top">
            <div className="header3-container4">
              <img
                alt={props.image_alt1}
                src="/playground_assets/asset%2011-200w.png"
                className="header3-image1"
              />
              <span className="header3-text7 Large">Merkaba Mushrooms</span>
            </div>
            <div data-role="CloseMobileMenu" className="header3-close-menu">
              <svg viewBox="0 0 1024 1024" className="header3-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header3-mid">
            <div className="header3-menu1">
              <Link href="/">
                <a className="header3-link3 Large">Home</a>
              </Link>
              <Link href="/about">
                <a className="header3-link4">Meet Merkaba</a>
              </Link>
              <span className="header3-text8 Large">Coming Soon</span>
            </div>
          </div>
          <div className="header3-bot">
            <a
              href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
              className="header3-link5"
            >
              <PrimaryPinkButton2
                button="Shop"
                className="header3-component1"
              ></PrimaryPinkButton2>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header3-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 3;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header3-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: var(--dl-radius-radius-radius40);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .header3-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header3-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .header3-image {
            width: auto;
            height: 45px;
            object-fit: contain;
            text-decoration: none;
          }
          .header3-text {
            align-self: center;
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header3-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header3-link {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header3-link:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-text1:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-text3 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header3-text3:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-text4 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header3-text4:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-link1 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header3-link1:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-text5:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header3-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header3-link2 {
            display: contents;
          }
          .header3-component {
            text-decoration: none;
          }
          .header3-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header3-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header3-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-unitandahalfunit);
            z-index: 100;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .header3-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header3-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .header3-image1 {
            width: auto;
            object-fit: contain;
          }
          .header3-text7 {
            font-weight: 600;
            text-decoration: none;
          }
          .header3-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header3-icon2 {
            width: 24px;
            height: 24px;
          }
          .header3-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header3-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header3-link3 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header3-link3:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-link4 {
            font-size: 0.875rem;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header3-text8 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header3-text8:hover {
            color: var(--dl-color-gray-500);
          }
          .header3-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }
          .header3-link5 {
            display: contents;
          }
          .header3-component1 {
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .header3-nav {
              max-width: 960px;
            }
          }
          @media (max-width: 767px) {
            .header3-menu {
              display: none;
            }
            .header3-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header3-menu {
              display: none;
              align-items: flex-start;
            }
            .header3-container3 {
              display: none;
            }
            .header3-mobile-menu {
              display: none;
            }
            .header3-container4 {
              width: auto;
            }
            .header3-image1 {
              width: 64px;
              height: 52px;
            }
            .header3-text7 {
              text-align: center;
            }
            .header3-icon2 {
              width: 38px;
              height: 38px;
            }
          }
        `}
      </style>
    </>
  )
}

Header3.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/asset%2011-200w.png',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  rootClassName: '',
}

Header3.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Header3
