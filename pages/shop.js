import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

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
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<div id="my-store-78742521"></div>\n<div>\n    <script data-cfasync="false" type="text/javascript"\n        src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-10-11" charset="utf-8"></script>\n    <script type="text/javascript">\n        xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-78742521");\n    </script>\n</div>',
            }}
          />
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
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
        `}
      </style>
    </>
  )
}

export default Shop
