import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import PrimaryPinkButton1 from './primary-pink-button1'

const Header2 = (props) => {
  return (
    <>
      <header className={`header2-header ${props.rootClassName} `}>
        <nav className="header2-nav">
          <div className="header2-container">
            <div className="header2-container1">
              <Link href="/">
                <a className="header2-link">
                  <img
                    alt={props.image_alt}
                    src={props.image_src}
                    className="header2-image"
                  />
                </a>
              </Link>
              <span className="header2-text Large">Merkaba Mushrooms</span>
            </div>
            <div className="header2-menu">
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                target="_blank"
                rel="noreferrer noopener"
                className="header2-link1"
              >
                Shop
              </a>
              <span className="header2-text1">Blog</span>
              <Link href="/shop">
                <a className="header2-link2">About</a>
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
            <div className="header2-container2">
              <div className="header2-container3">
                <a
                  href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="header2-link3"
                >
                  <PrimaryPinkButton1
                    button="buy now"
                    className="header2-component"
                  ></PrimaryPinkButton1>
                </a>
              </div>
              <div data-role="BurgerMenu" className="header2-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header2-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header2-mobile-menu">
          <div className="header2-top">
            <div className="header2-container4">
              <Link href="/">
                <a className="header2-link4">
                  <img
                    alt={props.image_alt1}
                    src={props.image_src1}
                    className="header2-image1"
                  />
                </a>
              </Link>
              <span className="header2-text2">
                <span>Merkaba Mushrooms</span>
                <br></br>
              </span>
            </div>
            <div data-role="CloseMobileMenu" className="header2-close-menu">
              <svg viewBox="0 0 1024 1024" className="header2-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header2-mid">
            <div className="header2-menu1">
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop#!/~/"
                className="header2-link5 Large"
              >
                Shop
              </a>
              <span className="header2-text5 Large">Blog</span>
            </div>
          </div>
          <div className="header2-bot">
            <PrimaryPinkButton1 button="buy now"></PrimaryPinkButton1>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .header2-header {
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
          .header2-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            height: 60px;
            display: flex;
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
          .header2-container {
            flex: 0 0 auto;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .header2-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .header2-link {
            display: contents;
          }
          .header2-image {
            width: auto;
            height: 41px;
            object-fit: cover;
            text-decoration: none;
          }
          .header2-text {
            align-self: center;
            font-weight: 600;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header2-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header2-link1 {
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
          .header2-text1 {
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
          .header2-link2 {
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
          .header2-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header2-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header2-link3 {
            display: contents;
          }
          .header2-component {
            text-decoration: none;
          }
          .header2-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header2-icon {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
          }
          .header2-mobile-menu {
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
          .header2-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header2-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
          }
          .header2-link4 {
            display: contents;
          }
          .header2-image1 {
            width: 100px;
            object-fit: contain;
            text-decoration: none;
          }
          .header2-text2 {
            font-weight: 600;
            text-decoration: none;
          }
          .header2-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header2-icon2 {
            width: 24px;
            height: 24px;
          }
          .header2-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header2-menu1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header2-link5 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header2-link5:hover {
            color: var(--dl-color-gray-500);
          }
          .header2-text5 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header2-text5:hover {
            color: var(--dl-color-gray-500);
          }
          .header2-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }

          @media (max-width: 991px) {
            .header2-header {
              padding: var(--dl-space-space-halfunit);
            }
            .header2-nav {
              max-width: 960px;
              margin-top: var(--dl-space-space-halfunit);
            }
            .header2-link1 {
              font-family: Montserrat;
            }
            .header2-text1 {
              font-family: Montserrat;
            }
            .header2-link2 {
              font-family: Montserrat;
            }
          }
          @media (max-width: 767px) {
            .header2-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header2-header {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .header2-nav {
              margin: 0px;
              align-self: stretch;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .header2-container {
              width: 100%;
              height: 0px;
              justify-content: space-between;
            }
            .header2-container1 {
              width: auto;
              height: auto;
            }
            .header2-image {
              align-self: center;
            }
            .header2-menu {
              display: none;
            }
            .header2-link2 {
              font-size: 0.875rem;
              font-family: Montserrat;
              font-weight: 400;
              letter-spacing: -0.025rem;
              text-transform: none;
              text-decoration: none;
            }
            .header2-container3 {
              display: none;
            }
            .header2-mobile-menu {
              display: none;
            }
            .header2-container4 {
              width: auto;
            }
            .header2-image1 {
              width: 111px;
              height: 42px;
              min-height: auto;
            }
            .header2-text2 {
              align-self: center;
              font-weight: 600;
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

Header2.defaultProps = {
  rootClassName: '',
  image_src: '/playground_assets/asset%2011-200w.png',
  image_alt: 'image',
  image_alt1: 'image',
  image_src1: '/playground_assets/asset%2011-200w.png',
}

Header2.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Header2
