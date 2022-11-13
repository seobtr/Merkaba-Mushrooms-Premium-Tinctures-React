import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import PrimaryPinkButton1 from './primary-pink-button1'

const Header1 = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`header1-header ${props.rootClassName} `}
      >
        <nav className="header1-nav">
          <div className="header1-container">
            <Link href="/">
              <a className="header1-link">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="header1-image"
                />
              </a>
            </Link>
            <span className="header1-text Large">Merkaba Mushrooms</span>
          </div>
          <div className="header1-container1">
            <div className="header1-menu">
              <Link href="/shop">
                <a className="header1-link1">Shop</a>
              </Link>
              <span className="header1-text1">Blog</span>
              <Link href="/shop">
                <a className="header1-link2">About</a>
              </Link>
              <div>
                <DangerousHTML
                  html={`<div class="ec-cart-widget"></div>
<div>
    <script data-cfasync="false" type="text/javascript"
        src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-11-13" charset="utf-8"></script>
    <script type="text/javascript">
        Ecwid.init();
    </script>
</div>`}
                ></DangerousHTML>
              </div>
            </div>
            <div className="header1-container2">
              <div className="header1-container3">
                <Link href="/shop">
                  <a className="header1-link3">
                    <PrimaryPinkButton1
                      button="buy now"
                      className="header1-component"
                    ></PrimaryPinkButton1>
                  </a>
                </Link>
              </div>
              <div data-role="BurgerMenu" className="header1-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header1-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header1-mobile-menu">
          <div className="header1-top">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="header1-image1"
            />
            <span className="header1-text2">
              <span>Merkaba Mushrooms</span>
              <br></br>
            </span>
            <div data-role="CloseMobileMenu" className="header1-close-menu">
              <svg viewBox="0 0 1024 1024" className="header1-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header1-mid">
            <div className="header1-menu1">
              <span className="header1-text5 Large">Shop</span>
              <span className="header1-text6 Large">Blog</span>
              <span className="header1-text7 Large">Blog</span>
            </div>
          </div>
          <div className="header1-bot">
            <PrimaryPinkButton1 button="buy now"></PrimaryPinkButton1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header1-header {
            top: 0px;
            left: auto;
            right: auto;
            width: 100%;
            bottom: auto;
            display: flex;
            z-index: 10;
            position: fixed;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header1-nav {
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
          .header1-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .header1-link {
            display: contents;
          }
          .header1-image {
            width: auto;
            height: 41px;
            object-fit: cover;
            text-decoration: none;
          }
          .header1-text {
            align-self: center;
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header1-container1 {
            color: var(--dl-color-gray-black);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header1-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header1-link1 {
            font-size: 0.875rem;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header1-text1 {
            font-size: 0.875rem;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header1-link2 {
            font-size: 0.875rem;
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            font-family: Open Sans;
            font-weight: 400;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: -0.025rem;
            text-transform: none;
            text-decoration: none;
          }
          .header1-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header1-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header1-link3 {
            display: contents;
          }
          .header1-component {
            text-decoration: none;
          }
          .header1-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header1-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header1-mobile-menu {
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
          .header1-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header1-image1 {
            width: 100px;
            object-fit: cover;
          }
          .header1-text2 {
            font-weight: 600;
            text-decoration: none;
          }
          .header1-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header1-icon2 {
            width: 24px;
            height: 24px;
          }
          .header1-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header1-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header1-text5 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header1-text5:hover {
            color: var(--dl-color-gray-500);
          }
          .header1-text6 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header1-text6:hover {
            color: var(--dl-color-gray-500);
          }
          .header1-text7 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header1-text7:hover {
            color: var(--dl-color-gray-500);
          }
          .header1-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }
          .header1-root-class-name {
            width: 95%;
            max-width: 1100px;
          }
          .header1-root-class-name1 {
            width: 95%;
            max-width: 1100px;
          }
          @media (max-width: 991px) {
            .header1-nav {
              max-width: 960px;
            }
            .header1-link1 {
              font-family: Montserrat;
            }
            .header1-text1 {
              font-family: Montserrat;
            }
            .header1-link2 {
              font-family: Montserrat;
            }
            .header1-root-class-name {
              width: 95%;
              max-width: 990px;
            }
            .header1-root-class-name1 {
              width: 95%;
              max-width: 990px;
            }
          }
          @media (max-width: 767px) {
            .header1-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header1-container {
              width: 177px;
              height: 0px;
            }
            .header1-image {
              align-self: center;
            }
            .header1-menu {
              display: none;
            }
            .header1-link2 {
              font-size: 0.875rem;
              font-family: Montserrat;
              font-weight: 400;
              letter-spacing: -0.025rem;
              text-transform: none;
              text-decoration: none;
            }
            .header1-container3 {
              display: none;
            }
            .header1-mobile-menu {
              display: none;
            }
            .header1-image1 {
              width: auto;
              height: auto;
              min-height: auto;
            }
            .header1-text2 {
              font-weight: 600;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

Header1.defaultProps = {
  image_alt: 'image',
  image_src1: '/playground_assets/asset%2011-200w.png',
  rootClassName: '',
  image_alt1: 'image',
  image_src: '/playground_assets/asset%2011-200w.png',
}

Header1.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header1
