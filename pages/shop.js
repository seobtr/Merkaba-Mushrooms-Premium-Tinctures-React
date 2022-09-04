import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const Shop = (props) => {
  return (
    <>
      <div className="shop-container">
        <Head>
          <title>Shop - Merkaba Mushrooms Premium Tinctures</title>
          <meta
            property="og:title"
            content="Shop - Merkaba Mushrooms Premium Tinctures"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="shop-content">
          <div className="shop-content-interaction-panel">
            <div className="shop-container1">
              <img
                alt="image"
                src="/playground_assets/mask%20group%2018-200w.png"
                className="shop-image"
              />
            </div>
            <div className="shop-content1">
              <span className="shop-text headingsScale5Default">
                Lion&apos;s Mane Tincture
              </span>
            </div>
            <div className="shop-pricing-panel">
              <span className="shop-text1 headingsScale3Default">$34.00</span>
              <span className="shop-text2">60ml</span>
            </div>
            <img
              alt="Divider2318"
              src="/playground_assets/divider2318-la6.svg"
              className="shop-divider"
            />
            <div className="shop-interaction-panel">
              <div className="shop-selects">
                <span className="shop-text3 paragraphsBodyDefault">
                  Pick size
                </span>
              </div>
              <button className="shop-button">
                <span className="shop-text4 othersButtonsLarge">
                  <span>Buy now</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .shop-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .shop-content {
            width: auto;
            height: auto;
            display: flex;
            padding: 24px;
            position: relative;
            max-width: auto;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
          }
          .shop-content-interaction-panel {
            width: 532px;
            display: flex;
            position: relative;
            flex-grow: 1;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .shop-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .shop-image {
            width: auto;
            height: auto;
            object-fit: cover;
          }
          .shop-content1 {
            display: flex;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 24px;
            flex-direction: column;
          }
          .shop-text {
            color: var(--dl-color-background-1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 20px;
            margin-right: 0;
            margin-bottom: 0;
          }
          .shop-pricing-panel {
            display: flex;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: flex-start;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 24px;
            flex-direction: column;
            justify-content: center;
          }
          .shop-text1 {
            color: var(--dl-color-background-1);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 32px;
            margin-right: 0;
            margin-bottom: 4px;
          }
          .shop-text2 {
            color: rgb(100, 100, 100);
            height: auto;
            align-self: stretch;
            text-align: left;
            line-height: 18px;
            margin-right: 0;
            margin-bottom: 0;
          }
          .shop-divider {
            width: 532px;
            height: 0px;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            margin-right: 0;
            margin-bottom: 24px;
          }
          .shop-interaction-panel {
            display: flex;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: center;
            border-color: transparent;
            margin-right: 0;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: 0;
            flex-direction: column;
          }
          .shop-selects {
            display: flex;
            padding: 0 16px;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(219, 219, 219, 1);
            border-style: solid;
            border-width: 1px;
            margin-right: 0;
            border-radius: 6px;
            margin-bottom: 16px;
            background-color: var(--dl-color-background-8);
          }
          .shop-text3 {
            color: var(--dl-color-background-4);
            height: auto;
            flex-grow: 1;
            align-self: auto;
            text-align: left;
            line-height: 22px;
            margin-right: 0;
            margin-bottom: 0;
          }
          .shop-button {
            display: flex;
            position: relative;
            align-self: stretch;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            padding-top: var(--dl-space-space-halfunit);
            border-color: transparent;
            margin-right: 0;
            padding-left: 0 16px;
            border-radius: 6px;
            margin-bottom: 0;
            padding-right: 0 16px;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: var(--dl-color-background-6);
          }
          .shop-text4 {
            color: var(--dl-color-background-1);
            height: auto;
            align-self: auto;
            text-align: left;
            line-height: 18px;
            margin-right: 0;
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  )
}

export default Shop
