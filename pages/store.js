import React from 'react'
import Head from 'next/head'

const Store = (props) => {
  return (
    <>
      <div className="store-container">
        <Head>
          <title>Store - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="Store - Merkaba Mushrooms E-Commerce"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .store-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Store
