import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Header2 from '../components/header2'
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
        <Header2 rootClassName="header2-root-class-name"></Header2>
        <div className="shop-container1">
          <section className="shop-container2">
            <div id="my-store-78742521">
              <DangerousHTML
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
              ></DangerousHTML>
            </div>
          </section>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .shop-container {
            display: flex;
            overflow: auto;
            max-width: 100%;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .shop-container1 {
            flex: 0 0 auto;
            display: flex;
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
          @media (max-width: 991px) {
            .shop-container2 {
              width: 100%;
              max-width: 950px;
            }
          }
          @media (max-width: 767px) {
            .shop-container2 {
              max-width: 720px;
            }
          }
          @media (max-width: 479px) {
            .shop-container2 {
              max-width: 450px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Shop
