import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import StoreBanner from '../components/store-banner'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import StatsCard from '../components/stats-card'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Merkaba Mushrooms Premium Tinctures</title>
          <meta
            property="og:title"
            content="Merkaba Mushrooms Premium Tinctures"
          />
        </Head>
        <div data-role="Header" className="home-header-container">
          <Header></Header>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-logo">
                <Link href="/">
                  <a className="home-link">
                    <img
                      alt="image"
                      src="/playground_assets/asset%2011-1500h.png"
                      className="home-image"
                    />
                  </a>
                </Link>
              </div>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <span className="home-text">About</span>
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
                className="home-link01"
              >
                Products
              </a>
            </div>
            <a href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop">
              <StoreBanner
                rootClassName="store-banner-root-class-name1"
                className="home-component01"
              ></StoreBanner>
            </a>
            <div className="home-bot">
              <div className="home-container01">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link03"
                >
                  <div className="home-container02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon02"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link04"
                >
                  <div className="home-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon04"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link05"
                >
                  <div className="home-container04">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon06"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  <div className="home-container05">
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <div className="home-container06">
            <img
              alt="image"
              src="/playground_assets/merkaba%20mushrooms%20lions%20mane%20mushroom%20tincture-1500h.png"
              className="home-image1"
            />
          </div>
          <div className="home-card">
            <h1 className="home-text01">
              A New Way to Cultivate Your Mind and Body 
            </h1>
            <span className="home-text02">
              <span>
                Fruiting Body only tinctures specifically formulated to taste
                good and make you feel good
              </span>
              <span className="Lead">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="Lead">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-container07">
              <div className="home-container08">
                <Link href="/shop">
                  <a className="home-link07">
                    <PrimaryPinkButton
                      button="Shop Now"
                      className="home-component02"
                    ></PrimaryPinkButton>
                  </a>
                </Link>
              </div>
              <OutlineGrayButton button="Learn More"></OutlineGrayButton>
            </div>
          </div>
        </div>
        <div className="home-main">
          <div className="home-blur-background"></div>
          <img
            alt="image"
            src="/playground_assets/turquoise-circle.svg"
            className="home-turquoise-cirble"
          />
          <img
            alt="image"
            src="/playground_assets/purple-circle.svg"
            className="home-purple-circle"
          />
          <img
            alt="image"
            src="/playground_assets/left.svg"
            className="home-left"
          />
          <img
            alt="image"
            src="/playground_assets/right.svg"
            className="home-right"
          />
        </div>
        <div className="home-features">
          <span className="home-text06">meet merkaba mushrooms</span>
          <h2 className="home-text07">
            <span>
              The South’s Leading Medicinal Mushroom Company
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Providing Quality Mushroom Tinctures</span>
          </h2>
          <span className="home-text11">
            <span>
              Proprietary Formula Created by Our Mycologist Biological Engineer 
            </span>
            <span>Jordan Gros</span>
          </span>
          <div className="home-container09">
            <Link href="/about">
              <a className="home-link08">
                <PrimaryPinkButton
                  button="Our Mission"
                  className="home-component04"
                ></PrimaryPinkButton>
              </a>
            </Link>
          </div>
          <div className="home-features1">
            <FeatureCard card_title="Dual Extracted"></FeatureCard>
            <FeatureCard
              image_src="https://images.unsplash.com/photo-1542691627-48dcdd6e2a29?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDkxfHxtdXNocm9vbXxlbnwwfHx8fDE2NjgzNjY2Nzk&amp;ixlib=rb-4.0.3&amp;w=300"
              card_title="100% Fruiting Body"
            ></FeatureCard>
            <FeatureCard
              image_src="https://images.unsplash.com/photo-1524083068160-0dcacf4e41ca?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHVuaXRlZCUyMHN0YXRlc3xlbnwwfHx8fDE2NjgzNjY3MDA&amp;ixlib=rb-4.0.3&amp;w=300"
              card_title="US Grown"
            ></FeatureCard>
          </div>
        </div>
        <div className="home-feature1">
          <div className="home-container10">
            <img
              alt="image"
              src="/playground_assets/cordyceps%20object%20%5B1%5D-500w.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className="home-image2"
            />
          </div>
          <div className="home-container11">
            <span className="home-text14">Featured product</span>
            <h3 className="home-text15">
              <span className="Headline3">Merkaba Dual Extracted</span>
              <br className="Headline3"></br>
            </h3>
            <h3 className="home-text18 Headline3">
              <span className="Headline3">Lion&apos;s Mane </span>
              <span className="home-text20 Headline3">Tinctures</span>
            </h3>
            <span className="home-text21">
              Lion&apos;s Mane mushrooms, also called Hericium Erinaceus, are
              prized for their nootropic properties. Our dual extract
              lion&apos;s mane tinctures offer cognitive support, immune
              support, anti-inflammatory and gut health benefits.
            </span>
            <Link href="/about">
              <a className="home-link09">
                <PrimaryPinkButton
                  button="SHOP NOW"
                  className="home-component08"
                ></PrimaryPinkButton>
              </a>
            </Link>
          </div>
        </div>
        <div className="home-achievements">
          <div className="home-container12">
            <div className="home-container13">
              <StatsCard
                process="Beta Glucans"
                image_src="/playground_assets/01.svg"
                description="Beta-glucans are soluble fibers that come from the cell walls of bacteria, fungi, yeasts, and some plants. They might lower the risk for heart disease."
                rootClassName="stats-card-root-class-name"
              ></StatsCard>
              <StatsCard
                process="Benefits 2"
                image_src="/playground_assets/01.svg"
                description="Beta-glucans are soluble fibers that come from the cell walls of bacteria, fungi, yeasts, and some plants. They might lower the risk for heart disease."
                rootClassName="stats-card-root-class-name1"
              ></StatsCard>
            </div>
            <div className="home-container14"></div>
          </div>
        </div>
        <div className="home-c-t-a">
          <div className="home-container15">
            <div className="home-container16">
              <h2 className="Headline2 home-text22">Call to Action</h2>
              <span className="home-text23">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <a
                href="https://merkaba-mushrooms-premium-tinctures-react.vercel.app/shop"
                className="home-link10"
              >
                <StoreBanner
                  rootClassName="store-banner-root-class-name"
                  className="home-component11"
                ></StoreBanner>
              </a>
            </div>
            <div className="home-container17">
              <div className="home-container18">
                <img
                  alt="image"
                  src="/playground_assets/cordyceps%20object%20%5B1%5D-500w.png"
                  image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                  className="home-image3"
                />
                <img
                  alt="image"
                  src="/playground_assets/mask%20group%2018-200w.png"
                  image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                  className="home-image4"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 101;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link {
            display: contents;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
            text-decoration: none;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-link01 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-link01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-component01 {
            text-decoration: none;
          }
          .home-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link03 {
            display: contents;
          }
          .home-container02 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon02 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon02:hover {
            fill: var(--dl-color-purple-default);
          }
          .home-link04 {
            display: contents;
          }
          .home-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon04 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon04:hover {
            fill: var(--dl-color-pink-default);
          }
          .home-link05 {
            display: contents;
          }
          .home-container04 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon06 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon06:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .home-link06 {
            display: contents;
          }
          .home-container05 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon08 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon08:hover {
            fill: var(--dl-color-orange-default);
          }
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1150px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .home-image1 {
            width: 238px;
            z-index: 100;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .home-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .home-text01 {
            font-size: 48px;
            text-align: center;
            font-family: Italiana;
            text-transform: uppercase;
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text02 {
            color: var(--dl-color-secondary-600);
            padding: 0px;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .home-container07 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container08 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link07 {
            display: contents;
          }
          .home-component02 {
            text-decoration: none;
          }
          .home-main {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-blur-background {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            bottom: auto;
            filter: blur(60px);
            height: 70vh;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            background-color: #f2f2f2;
          }
          .home-turquoise-cirble {
            top: 439px;
            left: auto;
            right: 430px;
            width: 170px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.6;
            position: absolute;
            object-fit: cover;
          }
          .home-purple-circle {
            top: -100px;
            left: auto;
            right: -26px;
            width: 400px;
            bottom: auto;
            filter: blur(60px);
            opacity: 0.4;
            position: absolute;
            object-fit: cover;
          }
          .home-left {
            top: 653px;
            left: 0px;
            right: auto;
            width: 420px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-right {
            top: 441px;
            left: auto;
            right: 0px;
            width: 612px;
            bottom: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text06 {
            max-width: 500px;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text07 {
            color: var(--dl-color-gray-900);
            font-size: 1.95rem;
            text-align: center;
            font-family: Montserrat;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-text11 {
            max-width: 400px;
            text-align: center;
          }
          .home-container09 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link08 {
            display: contents;
          }
          .home-component04 {
            text-decoration: none;
          }
          .home-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 540px;
            height: 364px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-purple-100);
          }
          .home-image2 {
            width: 470px;
            height: 299px;
            margin-top: 100px;
            object-fit: cover;
          }
          .home-container11 {
            flex: 1;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            max-width: 500px;
            text-align: center;
            text-transform: uppercase;
          }
          .home-text15 {
            font-size: 28px;
            font-family: Montserrat;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-text18 {
            font-size: 31px;
            font-family: Montserrat;
            font-weight: 800;
            text-transform: none;
            text-decoration: none;
          }
          .home-text20 {
            color: var(--dl-color-gray-900);
          }
          .home-text21 {
            font-size: 18px;
            max-width: 400px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: Montserrat;
            font-weight: 400;
            line-height: 1.77;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-link09 {
            display: contents;
          }
          .home-component08 {
            text-decoration: none;
          }
          .home-achievements {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/merkaba_bg-1200w.png');
          }
          .home-container12 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container13 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container14 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-c-t-a {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container16 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text23 {
            max-width: 500px;
          }
          .home-link10 {
            display: contents;
          }
          .home-component11 {
            text-decoration: none;
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 520px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container18 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image3 {
            top: -82px;
            left: 113px;
            width: 305px;
            height: 198px;
            position: absolute;
            object-fit: cover;
          }
          .home-image4 {
            top: -153px;
            left: 92px;
            width: 96px;
            height: 321px;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-container06 {
              width: 100%;
              margin-right: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .home-image1 {
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-card {
              width: 100%;
            }
            .home-feature1 {
              flex-direction: column;
            }
            .home-container11 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-achievements {
              flex-direction: column;
            }
            .home-container12 {
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-container18 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .home-mobile-menu {
              display: none;
            }
            .home-image1 {
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-card {
              align-items: center;
            }
            .home-text02 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-text07 {
              font-size: 40px;
            }
            .home-container10 {
              width: auto;
              max-width: 400px;
            }
            .home-container13 {
              flex-direction: column;
            }
            .home-container15 {
              justify-content: center;
            }
            .home-container16 {
              width: auto;
              max-width: 400px;
            }
            .home-text22 {
              font-size: 40px;
            }
          }
          @media (max-width: 479px) {
            .home-mobile-menu {
              display: none;
            }
            .home-bot {
              width: 100%;
            }
            .home-card {
              padding: var(--dl-space-space-unit);
            }
            .home-container07 {
              align-items: center;
              flex-direction: column;
            }
            .home-container08 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text06 {
              text-align: center;
            }
            .home-text07 {
              text-align: center;
            }
            .home-text11 {
              text-align: center;
            }
            .home-container09 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-image2 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .home-text14 {
              text-align: center;
            }
            .home-container13 {
              flex-direction: column;
            }
            .home-container14 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
