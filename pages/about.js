import React from 'react'
import Head from 'next/head'

import Header from '../components/header'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Merkaba Mushrooms Premium Tinctures</title>
          <meta
            property="og:title"
            content="About - Merkaba Mushrooms Premium Tinctures"
          />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
      </div>
      <style jsx>
        {`
          .about-container {
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

export default About
