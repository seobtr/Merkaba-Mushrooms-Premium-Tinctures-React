import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const Home2 = (props) => {
  return (
    <>
      <div className="home2-container">
        <Head>
          <title>Home-2 - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="Home-2 - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header rootClassName="header-root-class-name11"></Header>
      </div>
      <style jsx>
        {`
          .home2-container {
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

export default Home2
