import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const Shop = (props) => {
  return (
    <>
      <div className="shop-container">
        <Head>
          <title>Shop - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="Shop - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="shop-container1">
          <section className="shop-container2">
            <div id="my-store-78742521">
              <Script
                id="my-store-78742521"
                html={`<script
    data-cfasync="false"
    type="text/javascript"
    src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-10-11"
    charset="utf-8"
  ></script>
  <script type="text/javascript">
xProductBrowser(
  "categoriesPerRow=3",
  "views=grid(20,3) list(60) table(60)",
  "categoryView=grid",
  "searchView=list",
  "id=my-store-78742521"
);
</script>
`}
              ></Script>
            </div>
          </section>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
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
          }
          .shop-container1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .shop-container2 {
            flex: 0 0 auto;
            width: 1200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .shop-container1 {
              margin-top: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 991px) {
            .shop-container1 {
              margin-top: var(--dl-space-space-sixunits);
            }
            .shop-container2 {
              width: 100%;
              max-width: 950px;
            }
          }
          @media (max-width: 767px) {
            .shop-container1 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .shop-container2 {
              max-width: 720px;
            }
          }
          @media (max-width: 479px) {
            .shop-container1 {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .shop-container2 {
              max-width: 450px;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Shop
