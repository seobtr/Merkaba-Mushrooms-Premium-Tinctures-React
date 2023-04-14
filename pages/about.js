import React from 'react'
import Head from 'next/head'

import Header2 from '../components/header2'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="About - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header2 rootClassName="header2-root-class-name1"></Header2>
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
