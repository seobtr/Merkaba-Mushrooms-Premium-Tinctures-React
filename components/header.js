import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PrimaryPinkButton2 from './primary-pink-button2'
import PrimaryPinkButton1 from './primary-pink-button1'

const Header = (props) => {
  return (
    <>
      <div
        data-role="Header"
        className={`header-header ${props.rootClassName} `}
      >
        <div className="header-container">
          <header data-thq="thq-navbar" className="header-navbar-interactive">
            <div className="header-container1">
              <Link href="/">
                <a className="header-link">
                  <img
                    alt="logo"
                    src="/brand_assets/logo%20with%20type-1500h.png"
                    className="header-logo"
                  />
                </a>
              </Link>
            </div>
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="header-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="header-nav"
              >
                <span className="header-text">About</span>
                <span className="header-text01">Shop</span>
                <Link href="/resources">
                  <a className="header-link1">Learn</a>
                </Link>
                <Link href="/blog">
                  <a className="header-link2">Blog</a>
                </Link>
              </nav>
            </div>
            <div data-thq="thq-navbar-btn-group" className="header-btn-group">
              <a
                href="https://merkabamushrooms.com/shop"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link3"
              >
                <PrimaryPinkButton2
                  button="SHOP"
                  rootClassName="primary-pink-button2-root-class-name"
                  className="header-component"
                ></PrimaryPinkButton2>
              </a>
            </div>
            <div data-thq="thq-burger-menu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="header-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="header-nav1"
              >
                <div className="header-container2">
                  <div className="header-container3">
                    <img
                      alt="image"
                      src="/brand_assets/logo%20with%20type-1500h.png"
                      className="header-image"
                    />
                  </div>
                  <div data-thq="thq-close-menu" className="header-menu-close">
                    <svg viewBox="0 0 1024 1024" className="header-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="header-nav2"
                >
                  <span className="header-text02">About</span>
                  <span className="header-text03">
                    <span className="header-text04">Shop</span>
                    <br></br>
                  </span>
                  <span className="header-text06">
                    <span className="header-text07">Shop</span>
                    <br></br>
                  </span>
                  <span className="header-text09">Learn</span>
                  <span className="header-text10">Blog</span>
                </nav>
                <div className="header-container4">
                  <a
                    href="https://merkabamushrooms.com/shop"
                    className="header-link4 button ButtonSmall"
                  >
                    {props.SHOP}
                  </a>
                </div>
              </div>
              <div className="header-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="header-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="header-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="header-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div data-role="MobileMenu" className="header-mobile-menu1">
          <div className="header-top">
            <span className="header-text11 Large">Soft UI Design System</span>
            <div data-role="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon10">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu">
              <span className="header-text12 Large">Home</span>
              <span className="header-text13 Large">Profile</span>
              <span className="header-text14 Large">Coming Soon</span>
            </div>
          </div>
          <div className="header-bot">
            <PrimaryPinkButton1 button="buy now"></PrimaryPinkButton1>
          </div>
          <header data-thq="thq-navbar" className="header-navbar-interactive1">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="header-logo1"
            />
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="header-desktop-menu1"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="header-nav3"
              >
                <span>About</span>
                <span className="header-text16">Features</span>
                <span className="header-text17">Pricing</span>
                <span className="header-text18">Team</span>
                <span className="header-text19">Blog</span>
              </nav>
            </div>
            <div data-thq="thq-navbar-btn-group" className="header-btn-group1">
              <button className="header-login button">Login</button>
              <button className="button">Register</button>
            </div>
            <div data-thq="thq-burger-menu" className="header-burger-menu1">
              <svg viewBox="0 0 1024 1024" className="header-icon12">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="header-mobile-menu2">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="header-nav4"
              >
                <div className="header-container5">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="header-image1"
                  />
                  <div data-thq="thq-close-menu" className="header-menu-close1">
                    <svg viewBox="0 0 1024 1024" className="header-icon14">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="header-nav5"
                >
                  <span className="header-text20">About</span>
                  <span className="header-text21">Features</span>
                  <span className="header-text22">Pricing</span>
                  <span className="header-text23">Team</span>
                  <span className="header-text24">Blog</span>
                </nav>
                <div className="header-container6">
                  <button className="header-login1 button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="header-icon-group1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="header-icon16"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="header-icon18"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="header-icon20"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <style jsx>
        {`
          .header-header {
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
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .header-navbar-interactive {
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
          .header-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-link {
            display: contents;
          }
          .header-logo {
            height: 2rem;
            text-decoration: none;
          }
          .header-desktop-menu {
            display: flex;
          }
          .header-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .header-text {
            text-decoration: none;
          }
          .header-text01 {
            margin-left: 32px;
          }
          .header-link1 {
            margin-left: 32px;
            text-decoration: none;
          }
          .header-link2 {
            margin-left: 32px;
            text-decoration: none;
          }
          .header-btn-group {
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
            justify-content: center;
          }
          .header-icon {
            width: 20px;
            height: 20px;
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .header-container3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .header-image {
            height: 2rem;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon02 {
            width: 16px;
            height: 16px;
          }
          .header-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-container4 {
            display: flex;
            position: relative;
          }
          .header-link4 {
            color: var(--dl-color-gray-white);
            outline: none;
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
            text-decoration: none;
          }
          .header-link4:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
          .header-icon-group {
            display: flex;
          }
          .header-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .header-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .header-icon08 {
            width: 16px;
            height: 16px;
          }
          .header-mobile-menu1 {
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
          .header-text11 {
            color: var(--dl-color-secondary-700);
            font-weight: 600;
            text-decoration: none;
          }
          .header-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-icon10 {
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
          .header-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .header-text12 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-text12:hover {
            color: var(--dl-color-gray-500);
          }
          .header-text13 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-text13:hover {
            color: var(--dl-color-gray-500);
          }
          .header-text14 {
            transition: 0.3s;
            text-decoration: none;
          }
          .header-text14:hover {
            color: var(--dl-color-gray-500);
          }
          .header-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            flex-direction: column;
          }
          .header-navbar-interactive1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .header-logo1 {
            height: 2rem;
          }
          .header-desktop-menu1 {
            display: flex;
          }
          .header-nav3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .header-text16 {
            margin-left: 32px;
          }
          .header-text17 {
            margin-left: 32px;
          }
          .header-text18 {
            margin-left: 32px;
          }
          .header-text19 {
            margin-left: 32px;
          }
          .header-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-login {
            border-width: 0px;
            margin-right: 32px;
          }
          .header-burger-menu1 {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .header-icon12 {
            width: 16px;
            height: 16px;
          }
          .header-mobile-menu2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .header-nav4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .header-image1 {
            height: 2rem;
          }
          .header-menu-close1 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon14 {
            width: 16px;
            height: 16px;
          }
          .header-nav5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-text20 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text22 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text23 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-text24 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .header-container6 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .header-login1 {
            margin-right: 32px;
          }
          .header-icon-group1 {
            display: flex;
          }
          .header-icon16 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .header-icon18 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .header-icon20 {
            width: 16px;
            height: 16px;
          }

          @media (max-width: 991px) {
            .header-navbar-interactive {
              max-width: 960px;
            }
          }
          @media (max-width: 767px) {
            .header-text01 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-link1 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-link2 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-icon {
              width: var(--dl-size-size-unit);
              height: var(--dl-size-size-unit);
            }
            .header-navbar-interactive1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .header-desktop-menu1 {
              display: none;
            }
            .header-text16 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-text17 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-text18 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-text19 {
              margin-left: var(--dl-space-space-unit);
            }
            .header-btn-group1 {
              display: none;
            }
            .header-burger-menu1 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              margin-bottom: 0px;
            }
            .header-desktop-menu {
              display: none;
            }
            .header-btn-group {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
            .header-icon {
              width: 35px;
              height: 28px;
            }
            .header-mobile-menu {
              padding: 16px;
            }
            .header-navbar-interactive1 {
              padding: var(--dl-space-space-unit);
            }
            .header-mobile-menu2 {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  SHOP: 'SHOP',
  rootClassName: '',
  rootClassName1: '',
  link_component: 'https://merkabamushrooms.com/shop',
  Brand: 'Merkaba Mushrooms',
}

Header.propTypes = {
  SHOP: PropTypes.string,
  rootClassName: PropTypes.string,
  rootClassName1: PropTypes.string,
  link_component: PropTypes.string,
  Brand: PropTypes.string,
}

export default Header
