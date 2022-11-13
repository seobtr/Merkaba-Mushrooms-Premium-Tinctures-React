import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import PrimaryPinkButton1 from './primary-pink-button1'

const Header = (props) => {
  return (
    <>
      <header className={`header-header ${props.rootClassName} `}>
        <nav className="header-nav">
          <div className="header-container">
            <Link href="/">
              <a className="header-link">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="header-image"
                />
              </a>
            </Link>
            <span className="header-text Large">Merkaba Mushrooms</span>
          </div>
          <div className="header-container1">
            <div className="header-menu">
              <Link href="/shop">
                <a className="header-link1">Shop</a>
              </Link>
              <span className="header-text1">Blog</span>
              <Link href="/shop">
                <a className="header-link2">About</a>
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
            <div className="header-container2">
              <div className="header-container3">
                <Link href="/shop">
                  <a className="header-link3">
                    <PrimaryPinkButton1
                      button="buy now"
                      className="header-component"
                    ></PrimaryPinkButton1>
                  </a>
                </Link>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-top">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="header-image1"
            />
            <span className="header-text2">
              <span>Merkaba Mushrooms</span>
              <br></br>
            </span>
            <div data-role="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu1">
              <span className="header-text5 Large">Shop</span>
              <span className="header-text6 Large">Blog</span>
              <span className="header-text7 Large">Blog</span>
            </div>
          </div>
          <div className="header-bot">
            <PrimaryPinkButton1 button="buy now"></PrimaryPinkButton1>
          </div>
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
          .header-nav {
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
          .header-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .header-link {
            display: contents;
          }
          .header-image {
            width: auto;
            height: 41px;
            object-fit: cover;
            text-decoration: none;
          }
          .header-text {
            align-self: center;
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-container1 {
            color: var(--dl-color-gray-black);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-link1 {
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
          .header-text1 {
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
          .header-link2 {
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
          .header-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-container3 {
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
          .header-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header-mobile-menu {
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
          .header-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-image1 {
            width: 100px;
            object-fit: cover;
          }
          .header-text2 {
            font-weight: 600;
            text-decoration: none;
          }
          .header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-icon2 {
            width: 24px;
            height: 24px;
          }
          .header-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-text5 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-text5:hover {
            color: var(--dl-color-gray-500);
          }
          .header-text6 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-text6:hover {
            color: var(--dl-color-gray-500);
          }
          .header-text7 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header-text7:hover {
            color: var(--dl-color-gray-500);
          }
          .header-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .header-nav {
              max-width: 960px;
            }
            .header-link1 {
              font-family: Montserrat;
            }
            .header-text1 {
              font-family: Montserrat;
            }
            .header-link2 {
              font-family: Montserrat;
            }
          }
          @media (max-width: 767px) {
            .header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding-right: 2rem;
            }
            .header-container {
              width: 177px;
              height: 0px;
            }
            .header-image {
              align-self: center;
            }
            .header-menu {
              display: none;
            }
            .header-link2 {
              font-size: 0.875rem;
              font-family: Montserrat;
              font-weight: 400;
              letter-spacing: -0.025rem;
              text-transform: none;
              text-decoration: none;
            }
            .header-container3 {
              display: none;
            }
            .header-mobile-menu {
              display: none;
            }
            .header-image1 {
              width: auto;
              height: auto;
              min-height: auto;
            }
            .header-text2 {
              font-weight: 600;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/asset%2011-200w.png',
  image_src1: '/playground_assets/asset%2011-200w.png',
  image_alt1: 'image',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Header
