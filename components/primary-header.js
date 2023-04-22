import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PrimaryPinkButton2 from './primary-pink-button2'

const PrimaryHeader = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`primary-header-header ${props.rootClassName} `}
      >
        <nav className="primary-header-nav">
          <div className="primary-header-container">
            <div className="primary-header-container1">
              <img
                alt={props.image_alt}
                src={props.image_src2}
                className="primary-header-image"
              />
              <span className="primary-header-text">Merkaba Mushrooms</span>
            </div>
            <div className="primary-header-menu">
              <Link href="/about">
                <a className="primary-header-link">
                  <span className="Large primary-header-text1">About Us</span>
                  <br></br>
                </a>
              </Link>
              <Link href="/home-2">
                <a className="primary-header-link1 Large">Coming Soon</a>
              </Link>
              <span className="primary-header-text3 Large">Learn</span>
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                className="primary-header-link2"
              >
                <span className="Large primary-header-text4">Shop</span>
                <br></br>
              </a>
            </div>
            <div className="primary-header-container2">
              <div className="primary-header-container3">
                <a
                  href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                  className="primary-header-link3"
                >
                  <PrimaryPinkButton2
                    button="buy now"
                    className="primary-header-component"
                  ></PrimaryPinkButton2>
                </a>
              </div>
              <div
                data-role="BurgerMenu"
                className="primary-header-burger-menu"
              >
                <svg viewBox="0 0 1024 1024" className="primary-header-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="primary-header-mobile-menu">
          <div className="primary-header-top">
            <div className="primary-header-container4">
              <img
                alt={props.image_alt1}
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className="primary-header-image1"
              />
              <span className="primary-header-text6 Large">
                Merkaba Mushrooms
              </span>
            </div>
            <div
              data-role="CloseMobileMenu"
              className="primary-header-close-menu"
            >
              <svg viewBox="0 0 1024 1024" className="primary-header-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="primary-header-mid">
            <div className="primary-header-menu1">
              <Link href="/">
                <a className="primary-header-link4 Large">Home</a>
              </Link>
              <Link href="/about">
                <a className="primary-header-link5">Meet Merkaba</a>
              </Link>
              <span className="primary-header-text7 Large">Coming Soon</span>
            </div>
          </div>
          <div className="primary-header-bot">
            <a
              href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
              className="primary-header-link6"
            >
              <PrimaryPinkButton2
                button="Shop"
                className="primary-header-component1"
              ></PrimaryPinkButton2>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .primary-header-header {
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
          .primary-header-nav {
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
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            backdrop-filter: saturate(200%) blur(30px);
            justify-content: space-between;
            background-color: hsla(0, 0%, 100%, 0.8) !important;
          }
          .primary-header-container {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .primary-header-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .primary-header-image {
            width: auto;
            height: 45px;
            object-fit: contain;
            text-decoration: none;
          }
          .primary-header-text {
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .primary-header-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .primary-header-link {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .primary-header-link:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-text1:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-link1 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .primary-header-link1:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-text3 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .primary-header-text3:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-link2 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .primary-header-link2:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-text4:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .primary-header-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .primary-header-link3 {
            display: contents;
          }
          .primary-header-component {
            text-decoration: none;
          }
          .primary-header-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .primary-header-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .primary-header-mobile-menu {
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
          .primary-header-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .primary-header-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .primary-header-image1 {
            width: auto;
            object-fit: contain;
          }
          .primary-header-text6 {
            font-weight: 600;
            text-decoration: none;
          }
          .primary-header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .primary-header-icon2 {
            width: 24px;
            height: 24px;
          }
          .primary-header-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .primary-header-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .primary-header-link4 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .primary-header-link4:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-link5 {
            font-size: 0.875rem;
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .primary-header-text7 {
            transition: 0.3s;
            text-decoration: none;
          }
          .primary-header-text7:hover {
            color: var(--dl-color-gray-500);
          }
          .primary-header-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }
          .primary-header-link6 {
            display: contents;
          }
          .primary-header-component1 {
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .primary-header-nav {
              max-width: 960px;
            }
            .primary-header-menu {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .primary-header-menu {
              display: none;
            }
            .primary-header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .primary-header-menu {
              display: none;
              align-items: flex-start;
            }
            .primary-header-container3 {
              display: none;
            }
            .primary-header-mobile-menu {
              display: none;
            }
            .primary-header-container4 {
              width: auto;
            }
            .primary-header-image1 {
              width: 64px;
              height: 52px;
            }
            .primary-header-text6 {
              text-align: center;
            }
            .primary-header-icon2 {
              width: 38px;
              height: 38px;
            }
          }
        `}
      </style>
    </>
  )
}

PrimaryHeader.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  image_src2: '/playground_assets/merkaba_logo2-200w.png',
  image_src: 'bac6af95-3d01-4a5f-95bf-2803f85dcdc0',
}

PrimaryHeader.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
}

export default PrimaryHeader
