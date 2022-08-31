import React from 'react'
import Head from 'next/head'

import StoreBanner from '../components/store-banner'
import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import StatsCard from '../components/stats-card'
import LinkIconButton from '../components/link-icon-button'

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
          <header className="home-header">
            <div className="home-logo">
              <img
                alt="image"
                src="/playground_assets/group%205019-1500h.png"
                className="home-image"
              />
            </div>
            <div className="home-menu">
              <span className="home-text">About</span>
              <span className="home-text01">All Products</span>
              <span className="home-text02">Tinctures</span>
              <span className="home-text03">Blog</span>
              <span className="home-text04">Research</span>
              <span className="home-text05">More</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="home-container01">
              <StoreBanner></StoreBanner>
            </div>
            <div data-type="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-logo1">
                <img
                  alt="image"
                  src="/playground_assets/group%205019-1500h.png"
                  className="home-image1"
                />
              </div>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon05">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <span className="home-text06">About</span>
              <span className="home-text07">Products</span>
              <span className="home-text08">Pricing</span>
              <span className="home-text09">Blog</span>
              <span className="home-text10">Jobs</span>
              <span className="home-text11">More</span>
            </div>
            <div className="home-bot">
              <div className="home-container02">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <div className="home-container03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon07"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-container04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon09"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <div className="home-container05">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon11"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <div className="home-container06">
                    <svg viewBox="0 0 1024 1024" className="home-icon13">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-main">
          <div className="home-blur-background"></div>
          <div className="home-hero">
            <div className="home-container07">
              <div className="home-container08">
                <h3 className="home-text12">
                  Enhancing Cognition Through Community and Research
                </h3>
                <h1 className="home-text13">
                  <span>MERKABA </span>
                  <br></br>
                  <span>MUSHROOMS</span>
                  <br></br>
                </h1>
                <PrimaryButton button="Learn More"></PrimaryButton>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/mask%20group%2018-1500h.png"
              className="home-image2"
            />
          </div>
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
          <h2 className="headline2 home-text18">Premium Tinctures</h2>
          <span className="home-text19">
            Fruiting Body Mushrooms Harvesting in Central Louisiana and
            Extracted with the most optimal
          </span>
          <div className="home-features1">
            <FeatureCard
              image_src="/playground_assets/cordyceps%20object%20%5B1%5D-500w.png"
              card_title="Cordyceps"
            ></FeatureCard>
            <FeatureCard
              image_src="/playground_assets/lions%20mane%20cutout-300w.png"
              card_title="Lions Mane"
            ></FeatureCard>
          </div>
        </div>
        <div className="home-achievements">
          <div className="home-container09">
            <div className="home-container10">
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
            <div className="home-container11"></div>
          </div>
        </div>
        <div className="home-feature1">
          <div className="home-container12">
            <img
              alt="image"
              src="/playground_assets/cordyceps%20object%20%5B1%5D-500w.png"
              image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
              className="home-image3"
            />
          </div>
          <div className="home-container13">
            <h3 className="headline3">Cordyceps</h3>
            <span className="home-text21 lead1">
              <span className="home-text22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Condimentum diam orci pretium a pharetra, feugiat cursus.
                Dictumst risus, sem egestas odio cras adipiscing vulputate.
                Nisi, risus in suscipit non. Non commodo volutpat, pharetra,
                vel.
              </span>
            </span>
            <LinkIconButton text="Get Started"></LinkIconButton>
          </div>
        </div>
        <div className="home-c-t-a">
          <div className="home-container14">
            <div className="home-container15">
              <h2 className="headline2 home-text23">Call to Action</h2>
              <span className="home-text24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
              <span className="home-text25 subtitle2">Get the Tincture</span>
              <StoreBanner></StoreBanner>
            </div>
            <div className="home-container16">
              <img
                alt="image"
                src="/playground_assets/cordyceps%20object%20%5B1%5D-500w.png"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image4"
              />
              <img
                alt="image"
                src="/playground_assets/mask%20group%2018-1500h.png"
                image_src="dab1286f-0104-48fa-bd7d-135e132129dd"
                className="home-image5"
              />
            </div>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-container17">
            <img
              alt="image"
              src="/playground_assets/group%205019-1500h.png"
              className="home-image6"
            />
            <div className="home-container18">
              <span className="home-text26">About</span>
              <span className="home-text27">Benefits</span>
              <span className="home-text28">Tinctures</span>
              <span className="home-text29">Careers</span>
              <span className="home-text30">Help</span>
              <span className="home-text31">Privacy Policy</span>
            </div>
            <div className="home-divider"></div>
            <div className="home-container19">
              <span className="home-text32 body2">
                © 2022 Merkaba Mushrooms. All rights reserved
              </span>
              <div className="home-container20">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  <div className="home-container21">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon15"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link5"
                >
                  <div className="home-container22">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon17"
                    >
                      <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link6"
                >
                  <div className="home-container23">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon19"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link7"
                >
                  <div className="home-container24">
                    <svg viewBox="0 0 1024 1024" className="home-icon21">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </footer>
        </div>
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
          .home-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: relative;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 67px;
            height: 76px;
            object-fit: cover;
          }
          .home-menu {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-text {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text01 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text01:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text02 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text02:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text03 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text03:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text04 {
            transition: 0.3s;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-text04:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text05 {
            transition: 0.3s;
          }
          .home-text05:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-icon {
            width: 24px;
            height: 24px;
          }
          .home-container01 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-menu1 {
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-unit);
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
          .home-logo1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 100px;
            object-fit: cover;
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon05 {
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
          .home-text06 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text06:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text07 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text07:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text08 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text08:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text09 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text09:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text10 {
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text10:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text11 {
            transition: 0.3s;
          }
          .home-text11:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-bot {
            flex: 0 0 auto;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            display: contents;
          }
          .home-container03 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon07 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon07:hover {
            fill: var(--dl-color-purple-default);
          }
          .home-link1 {
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
          .home-icon09 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon09:hover {
            fill: var(--dl-color-pink-default);
          }
          .home-link2 {
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
          .home-icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon11:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .home-link3 {
            display: contents;
          }
          .home-container06 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon13 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon13:hover {
            fill: var(--dl-color-orange-default);
          }
          .home-main {
            width: 100%;
            display: flex;
            position: relative;
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
          .home-hero {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            max-width: 1110px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text12 {
            font-size: 1.1em;
          }
          .home-text13 {
            color: var(--dl-color-gray-900);
            font-size: 64px;
            font-family: Italiana;
            font-weight: 800;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-image2 {
            width: 320px;
            z-index: 100;
            object-fit: cover;
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
          .home-text19 {
            max-width: 500px;
            text-align: center;
          }
          .home-features1 {
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
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
          .home-container09 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container10 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container11 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
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
          .home-container12 {
            flex: 0 0 auto;
            width: 540px;
            height: 364px;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-purple-100);
          }
          .home-image3 {
            width: 470px;
            height: 299px;
            margin-top: 100px;
            object-fit: cover;
          }
          .home-container13 {
            flex: 1;
            margin: var(--dl-space-space-doubleunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text21 {
            max-width: 400px;
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text22 {
            white-space: pre-wrap;
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
          .home-container14 {
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
          .home-container15 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text24 {
            max-width: 500px;
          }
          .home-text25 {
            max-width: 400px;
            margin-top: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-container16 {
            width: 520px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image4 {
            top: -82px;
            left: 113px;
            width: 305px;
            height: 198px;
            position: absolute;
            object-fit: cover;
          }
          .home-image5 {
            top: -195px;
            left: 90px;
            width: 122px;
            height: 344px;
            position: absolute;
            object-fit: cover;
          }
          .home-footer {
            flex: 0 0 auto;
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            flex-wrap: wrap;
            max-width: auto;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-image6 {
            object-fit: cover;
          }
          .home-container18 {
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text26 {
            color: #000000;
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text26:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text27 {
            color: #000000;
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text27:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text28 {
            color: #000000;
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text28:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text29 {
            color: #000000;
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text29:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text30 {
            color: #000000;
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }
          .home-text30:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-text31 {
            color: #000000;
            transition: 0.3s;
            white-space: nowrap;
          }
          .home-text31:hover {
            color: var(--dl-color-turquoise-default);
          }
          .home-divider {
            width: 100%;
            height: 1px;
            opacity: 0.2;
            background-color: #0a0707;
          }
          .home-container19 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text32 {
            color: #000000;
            margin-top: var(--dl-space-space-unit);
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link4 {
            display: contents;
          }
          .home-container21 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon15 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon15:hover {
            fill: var(--dl-color-purple-default);
          }
          .home-link5 {
            display: contents;
          }
          .home-container22 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon17 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon17:hover {
            fill: var(--dl-color-pink-default);
          }
          .home-link6 {
            display: contents;
          }
          .home-container23 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon19 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon19:hover {
            fill: var(--dl-color-turquoise-default);
          }
          .home-link7 {
            display: contents;
          }
          .home-container24 {
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon21 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-unit);
            height: var(--dl-size-size-unit);
            transition: 0.3s;
          }
          .home-icon21:hover {
            fill: var(--dl-color-orange-default);
          }
          @media (max-width: 991px) {
            .home-container01 {
              display: none;
            }
            .home-hero {
              height: auto;
              flex-direction: column;
            }
            .home-container08 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .home-text13 {
              text-align: center;
            }
            .home-achievements {
              flex-direction: column;
            }
            .home-container09 {
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-feature1 {
              flex-direction: column;
            }
            .home-container13 {
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-container16 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .home-menu {
              display: none;
            }
            .home-burger-menu {
              display: block;
            }
            .home-text13 {
              font-size: 50px;
              text-align: center;
            }
            .home-text18 {
              font-size: 40px;
            }
            .home-text23 {
              font-size: 40px;
            }
            .home-container18 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-container19 {
              flex-direction: column;
            }
            .home-text32 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-container01 {
              display: none;
            }
            .home-bot {
              width: 100%;
            }
            .home-text13 {
              align-self: flex-start;
              text-align: left;
            }
            .home-text18 {
              text-align: center;
            }
            .home-text19 {
              text-align: center;
            }
            .home-container10 {
              flex-direction: column;
            }
            .home-container11 {
              flex-direction: column;
            }
            .home-image3 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
