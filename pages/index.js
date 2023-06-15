import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import ShopBtn from '../components/shop-btn'
import LearnBtn from '../components/learn-btn'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Merkaba Mushrooms - 100% Fruiting Body Medicinal Mushrooms
          </title>
          <meta
            property="og:title"
            content="Merkaba Mushrooms - 100% Fruiting Body Medicinal Mushrooms"
          />
        </Head>
        <Header rootClassName="header-root-class-name5"></Header>
        <div className="home-hero">
          <img
            alt="image"
            src="/cordyceps/cordyceps%20with%202oz%20cordyceps%20mushroom%20tincture_319-1400w.png"
            className="home-image"
          />
          <div className="home-container01">
            <div className="home-container02">
              <div className="home-container03">
                <div className="home-text">
                  <span className="home-text01">
                    <span>Merkaba Mushrooms Premium Tinctures</span>
                  </span>
                  <span className="home-text03">
                    Embark on Your Wellness Odyssey
                  </span>
                  <span className="home-text04">
                    Unearth the power of Merkaba Mushrooms and elevate your
                    well-being
                  </span>
                </div>
              </div>
              <div className="home-btn-group">
                <ShopBtn button="Shop"></ShopBtn>
                <div className="home-container04"></div>
                <LearnBtn></LearnBtn>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="/cordyceps/cordyceps%20with%202oz%20cordyceps%20mushroom%20tincture_319-1400w.png"
            className="home-image1"
          />
        </div>
        <div className="home-banner">
          <h1 className="home-text05">Meet Merkaba</h1>
          <span className="home-text06">
            <span>
              We are the torchbearers of a new era in natural wellness, built on
              the foundation of millennia-old wisdom and cutting-edge scientific
              research. Our founders, a biological engineer, and a full stack
              programmer, have combined their diverse expertise to lead a
              revolution in medicinal mushrooms
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <button className="home-button button">Read More</button>
        </div>
        <div className="home-features">
          <h1 className="home-text09">
            <span>Our Products</span>
            <br></br>
          </h1>
          <span className="home-text12">
            Our carefully curated selection of Cordyceps, Lion&apos;s Mane,
            Turkey Tail, and Reishi mushroom tinctures are the key allies on
            your wellness adventure. Each tincture is meticulously crafted ,
            ensuring unparalleled potency and effectiveness in supporting your
            unique journey.
          </span>
        </div>
        <div className="home-products">
          <div className="home-container05">
            <div className="home-product-card">
              <img
                alt="Lion's Mane Mushroom with 2oz Lion's Mane Tincture"
                src="/lions_mane/lions%20mane%20with%202oz%20lions%20mane%20mushroom%20tincture_286-1400w.png"
                className="home-image2"
              />
              <div className="home-container06">
                <h3 className="home-text13">
                  <span>
                    2oz
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Lion&apos;s Mane</span>
                  <br></br>
                  <span>Tincture</span>
                </h3>
                <label className="home-text19">clarity</label>
                <div className="home-container07">
                  <div className="home-profile">
                    <a
                      href="https://www.merkabamushrooms.com/shop#!/Dual-Extracted-Lions-Mane-Mushroom-Tincture-2-oz/p/559094948/category=0"
                      className="home-link button"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-product-card1">
              <img
                alt="image"
                src="/reishi/reishi%20with%202oz%20reish%20mushroom%20tincture_311-1400w.png"
                className="home-image3"
              />
              <div className="home-container08">
                <h3 className="home-text20">
                  <span>
                    2oz
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Reishi
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Tincture</span>
                </h3>
                <h4 className="home-text26">longevity</h4>
                <div className="home-container09">
                  <div className="home-profile1">
                    <a
                      href="https://www.merkabamushrooms.com/shop#!/Dual-Extracted-Reishi-Mushroom-Tincture-2-oz/p/559107259/category=0"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link1 button"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-product-card2">
              <img
                alt="image"
                src="/cordyceps/cordyceps%20with%202oz%20cordyceps%20mushroom%20tincture_319-1400w.png"
                className="home-image4"
              />
              <div className="home-container10">
                <h3 className="home-text27">
                  <span>
                    2oz
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Cordyceps
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Tincture</span>
                </h3>
                <h4 className="home-text33">Vitality</h4>
                <div className="home-container11">
                  <div className="home-profile2">
                    <a
                      href="https://www.merkabamushrooms.com/shop#!/Dual-Extracted-Cordyceps-Mushroom-Tincture-2-oz/p/496594131/category=0"
                      className="home-link2 button"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner1">
          <div className="home-container12">
            <div className="home-stat">
              <h1 className="home-text34">100%</h1>
              <span className="home-text35">Fruiting Body</span>
            </div>
          </div>
          <div className="home-container13">
            <h1 className="home-text36">Why Merkaba</h1>
            <span className="home-text37">
              We harness the power of Cordyceps, Lion’s Mane, Turkey Tail, and
              Reishi Mushrooms through our proprietary extraction technology.
              Our tinctures are more concentrated than most competitors,
              delivering maximum benefit from 100% fruiting bodies. But we
              don&apos;t just stop at offering superior products. We are
              committed to becoming a world leader in research and machine
              learning for medicinal mushrooms.
            </span>
          </div>
        </div>
        <div className="home-banner2">
          <div className="home-container14">
            <h1 className="home-text38">The Science Behind Our Tinctures</h1>
            <span className="home-text39">
              At the heart of Merkaba Mushrooms is a fusion of ancient wisdom
              and cutting-edge technology. Our team of experts, including a
              biological engineer and skilled programmers, combine their passion
              for holistic health with innovative research to create potent and
              effective mushroom tinctures that elevate your wellness journey.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1595154038281-4beb9195415b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBldHJpfGVufDB8fHx8MTY4NTU0NzI1OXww&amp;ixlib=rb-4.0.3&amp;w=600"
            className="home-image5"
          />
        </div>
        <div className="home-banner3">
          <div className="home-container15">
            <h1 className="home-text40">
              Explore Our Medicinal Mushroom Resource Page - Unlock the Power of
              Fungi for Wellness
            </h1>
            <span className="home-text41">
              <span>
                We have curated a wealth of knowledge and information about the
                fascinating world of medicinal mushrooms. Whether you&apos;re a
                seasoned mycophile or just beginning your journey into the realm
                of fungi, our resource page is designed to empower you with the
                information you need to harness the potential of these
                incredible organisms for your well-being. Join us as we delve
                into the depths of mycology and discover the wonders of
                medicinal mushrooms.
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-blog-post-card">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1602664719969-5cb83870efb3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxtdXNocm9vbXN8ZW58MHx8fHwxNjg1NTQ4MDI1fDA&amp;ixlib=rb-4.0.3&amp;h=400"
              className="home-image6"
            />
            <div className="home-container16">
              <Link href="/resources">
                <a className="home-link3 category-link">Medicinal Mushrooms</a>
              </Link>
              <h4 className="home-text44">
                The Ultimate Guide to Medicinal Mushrooms
              </h4>
              <p className="home-text45">
                Discover the health benefits of medicinal mushrooms
              </p>
              <Link href="/the-ultimate-guide-to-medicinal-mushrooms">
                <a className="home-link4">Learn More</a>
              </Link>
              <div className="home-container17">
                <div className="home-profile3">
                  <span className="home-text46">Tommy Nguyen</span>
                </div>
                <span className="home-text47">5 min read</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner4">
          <span className="home-text48">Subrscribe to our newsletter</span>
          <h1 className="home-text49">Join the Mushroom Revolution</h1>
          <span className="home-text50">
            {' '}
            Don&apos;t miss a moment of the Merkaba Mushrooms journey. Get
            insider access to new product launches, exclusive discounts, and
            breakthrough research by signing up for our newsletter.
          </span>
          <div className="home-container18">
            <input
              type="text"
              placeholder="Email here..."
              className="home-textinput input"
            />
            <button className="home-button1 button">Subscribe</button>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            flex-wrap: wrap;
            max-width: 1200px;
            margin-top: var(--dl-space-space-fiveunits);
            min-height: auto;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 400px;
            display: none;
            object-fit: cover;
          }
          .home-container01 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 60%;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container03 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text {
            gap: 20px;
            width: 495px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-text01 {
            color: var(--dl-color-light_text-primary);
            width: 425px;
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: left;
            font-family: Heebo;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text03 {
            color: var(--dl-color-light_text-primary);
            height: auto;
            font-size: 86px;
            font-style: Regular;
            text-align: left;
            font-family: sans-serif;
            line-height: 120%;
            font-stretch: normal;
            text-transform: none;
            text-decoration: none;
            background-image: linear-gradient(
              310deg,
              rgb(121, 40, 202),
              rgb(255, 0, 128)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-text04 {
            color: var(--dl-color-light_text-primary);
            height: auto;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: Montserrat;
            font-weight: 400px;
            line-height: 22px;
            font-stretch: normal;
          }
          .home-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-container04 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
          }
          .home-image1 {
            width: 40%;
            max-width: 450px;
            object-fit: cover;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 1200px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text05 {
            font-size: 3rem;
            align-self: center;
            text-align: center;
          }
          .home-text06 {
            max-width: 100%;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-button {
            align-self: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-button:hover {
            transform: scale(1.02);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 1400px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text09 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text12 {
            color: var(--dl-color-gray-700);
            width: 70%;
            font-size: 1.15rem;
            text-align: left;
          }
          .home-products {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-container05 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-product-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-product-card:hover {
            transform: scale(1.02);
          }
          .home-image2 {
            width: 100%;
            height: 250px;
            object-fit: contain;
          }
          .home-container06 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text13 {
            font-size: 20px;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text19 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .home-container07 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link {
            padding-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-product-card1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .home-product-card1:hover {
            transform: scale(1.02);
          }
          .home-image3 {
            width: 100%;
            height: 250px;
            object-fit: contain;
          }
          .home-container08 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text20 {
            font-size: 20px;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text26 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .home-container09 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-profile1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link1 {
            padding-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-product-card2 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-product-card2:hover {
            transform: scale(1.02);
          }
          .home-image4 {
            width: 100%;
            height: 250px;
            object-fit: contain;
          }
          .home-container10 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text27 {
            font-size: 20px;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text33 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .home-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-profile2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link2 {
            padding-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-banner1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 1200px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container12 {
            width: 300px;
            height: 300px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            background-size: cover;
            justify-content: center;
            background-position: center;
          }
          .home-stat {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text34 {
            color: #ff7c4c;
            font-size: 3rem;
          }
          .home-text35 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .home-container13 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text36 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text37 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-banner2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1400px;
            align-items: center;
            justify-content: space-between;
          }
          .home-container14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text38 {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text39 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-image5 {
            width: 40%;
            object-fit: cover;
          }
          .home-banner3 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1400px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-container15 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text40 {
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text41 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: auto;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-blog-post-card:hover {
            transform: scale(1.02);
          }
          .home-image6 {
            width: 40%;
            height: 250px;
            object-fit: cover;
          }
          .home-container16 {
            display: flex;
            padding: var(--dl-space-space-unit);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link3 {
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text44 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
            text-overflow: ellipsis;
          }
          .home-text45 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
            text-overflow: ellipsis;
          }
          .home-link4 {
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
          }
          .home-container17 {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-profile3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text46 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-text47 {
            color: var(--dl-color-gray-700);
            font-weight: 300;
          }
          .home-banner4 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            background-size: cover;
            justify-content: space-between;
            background-image: url('/lions_mane/merkaba_bg-1500w.jpg');
          }
          .home-text48 {
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
            letter-spacing: 2px;
          }
          .home-text49 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text50 {
            max-width: 50%;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-textinput {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
          }
          .home-button1 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .home-button1:hover {
            color: var(--dl-color-gray-black);
            background-color: transparent;
          }
          @media (max-width: 1200px) {
            .home-hero {
              max-width: 1200px;
              margin-top: var(--dl-space-space-fiveunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image {
              display: none;
            }
            .home-container02 {
              width: 50vw;
            }
            .home-container03 {
              padding-right: 0px;
            }
            .home-text04 {
              width: 100%;
              font-size: 18px;
            }
            .home-btn-group {
              margin-top: var(--dl-space-space-unit);
            }
            .home-image1 {
              width: 100%;
              max-width: 400px;
            }
            .home-banner {
              max-width: 1200 px;
              margin-top: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-text05 {
              font-size: 36px;
            }
            .home-text06 {
              max-width: 100%;
              margin-top: var(--dl-space-space-unit);
              text-align: center;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features {
              padding: var(--dl-space-space-unit);
              max-width: 1200 px;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text09 {
              font-size: 36px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text12 {
              color: var(--dl-color-gray-700);
              font-size: 18px;
            }
            .home-products {
              align-self: center;
              justify-content: space-between;
            }
            .home-container05 {
              width: 100%;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: row;
              justify-content: center;
            }
            .home-product-card {
              width: 100%;
              margin: var(--dl-space-space-unit);
            }
            .home-container06 {
              padding: var(--dl-space-space-unit);
            }
            .home-text13 {
              font-size: 24px;
              font-weight: 300;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text19 {
              color: var(--dl-color-gray-500);
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .home-link {
              margin-right: 16px;
            }
            .home-product-card1 {
              width: 100%;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-container08 {
              padding: var(--dl-space-space-unit);
            }
            .home-text20 {
              font-size: 24px;
              font-weight: 300;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text26 {
              color: var(--dl-color-gray-500);
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .home-link1 {
              margin-right: 16px;
            }
            .home-product-card2 {
              margin: var(--dl-space-space-unit);
            }
            .home-container10 {
              padding: var(--dl-space-space-unit);
            }
            .home-text27 {
              font-size: 24px;
              font-weight: 300;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text33 {
              color: var(--dl-color-gray-500);
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .home-link2 {
              margin-right: 16px;
            }
            .home-banner1 {
              margin-top: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-container12 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-text34 {
              color: rgb(255, 124, 76);
              font-size: 3rem;
            }
            .home-text35 {
              font-size: 1.15rem;
            }
            .home-text36 {
              font-weight: 600;
            }
            .home-banner2 {
              margin-top: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              background-color: #ffe6a8;
            }
            .home-text38 {
              font-weight: 600;
            }
            .home-banner3 {
              margin-top: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text40 {
              font-weight: 600;
            }
            .home-container16 {
              box-shadow: 5px 5px 10px 0px #d4d4d4;
            }
            .home-banner4 {
              opacity: 1;
              margin-top: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-unit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-unit);
              background-size: cover;
              background-color: transparent;
              background-image: url('/lions_mane/merkaba_bg-1500w.jpg');
            }
            .home-text48 {
              font-size: 0.75rem;
              font-weight: 600;
              margin-bottom: var(--dl-space-space-unit);
              letter-spacing: 2px;
              text-transform: uppercase;
            }
            .home-text49 {
              font-size: 2rem;
            }
            .home-text50 {
              max-width: 50%;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-wrap: wrap;
              max-width: 960px;
              margin-top: var(--dl-space-space-fiveunits);
              flex-direction: row;
            }
            .home-image {
              width: 40vw;
              display: flex;
              flex-direction: row;
            }
            .home-container02 {
              width: 40vw;
            }
            .home-container03 {
              width: auto;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text {
              gap: 16px;
              width: auto;
              max-width: auto;
            }
            .home-text03 {
              font-size: 40px;
              text-align: left;
              line-height: 42px;
            }
            .home-text04 {
              color: var(--dl-color-light_text-primary);
              width: auto;
              font-size: 20px;
              font-style: normal;
              text-align: left;
              font-family: Montserrat;
              line-height: 22px;
            }
            .home-image1 {
              flex: 1;
              width: 100%;
              display: none;
            }
            .home-text06 {
              max-width: 100%;
            }
            .home-text09 {
              text-align: center;
            }
            .home-text12 {
              text-align: center;
            }
            .home-products {
              flex-direction: column;
            }
            .home-container05 {
              margin-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-product-card {
              flex-direction: row;
            }
            .home-image2 {
              width: 50%;
              height: 350px;
            }
            .home-container06 {
              width: 40%;
            }
            .home-product-card1 {
              flex-direction: row;
            }
            .home-image3 {
              width: 50%;
              height: 350px;
            }
            .home-container08 {
              width: 40%;
            }
            .home-product-card2 {
              flex-direction: row;
            }
            .home-image4 {
              width: 50%;
              height: 350px;
            }
            .home-container10 {
              width: 40%;
            }
            .home-banner1 {
              flex-direction: column;
            }
            .home-container12 {
              width: 288px;
              height: 288px;
            }
            .home-text34 {
              text-align: center;
            }
            .home-container13 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text37 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-banner2 {
              flex-direction: column;
            }
            .home-container14 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text39 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-banner3 {
              flex-direction: column;
            }
            .home-container15 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text41 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-blog-post-card {
              justify-content: center;
            }
            .home-image6 {
              height: 350px;
              display: none;
            }
            .home-link3 {
              font-size: 14px;
            }
            .home-text44 {
              font-size: 24px;
            }
            .home-text45 {
              font-size: 18px;
            }
            .home-text50 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              max-width: auto;
              margin-top: var(--dl-space-space-fiveunits);
              min-height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image {
              width: 40vw;
            }
            .home-text {
              width: 100%;
            }
            .home-text03 {
              font-size: 32px;
              align-self: flex-start;
              text-align: left;
            }
            .home-text04 {
              width: auto;
              font-size: 18px;
            }
            .home-image1 {
              width: 80%;
            }
            .home-banner {
              flex-wrap: wrap;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text06 {
              margin-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text09 {
              align-self: center;
              text-align: center;
            }
            .home-products {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container05 {
              margin: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-product-card {
              margin: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-product-card1 {
              margin: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-banner1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text35 {
              text-align: center;
            }
            .home-text37 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text39 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-banner3 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text41 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-image6 {
              display: none;
            }
            .home-link3 {
              font-size: 14px;
            }
            .home-text44 {
              font-size: 24px;
            }
            .home-banner4 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text50 {
              max-width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              max-width: auto;
              min-height: auto;
              margin-left: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image {
              width: auto;
              height: auto;
              align-self: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .home-container02 {
              width: auto;
              height: auto;
              align-items: flex-start;
            }
            .home-container03 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              width: 80vw;
            }
            .home-text01 {
              width: auto;
            }
            .home-text03 {
              font-size: 42px;
              align-self: flex-start;
              text-align: left;
            }
            .home-text04 {
              width: auto;
            }
            .home-btn-group {
              width: 80vw;
              align-self: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text05 {
              align-self: flex-start;
              padding-left: var(--dl-space-space-unit);
            }
            .home-text06 {
              text-align: left;
            }
            .home-button {
              align-self: flex-start;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text09 {
              align-self: flex-start;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text12 {
              width: auto;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-products {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container05 {
              flex-direction: column;
            }
            .home-product-card {
              margin-top: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-image2 {
              width: 50%;
              height: 200px;
            }
            .home-container06 {
              width: 50%;
              padding: var(--dl-space-space-halfunit);
              flex-direction: column;
            }
            .home-text13 {
              font-size: 24px;
              font-weight: 300;
            }
            .home-text19 {
              color: var(--dl-color-gray-500);
              font-size: 20px;
              font-weight: 700;
              text-transform: uppercase;
            }
            .home-link {
              font-size: 14px;
              font-family: Montserrat;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-product-card1 {
              margin: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-image3 {
              width: 50%;
              height: 200px;
            }
            .home-container08 {
              width: 50%;
              padding: var(--dl-space-space-halfunit);
            }
            .home-text20 {
              font-size: 20px;
            }
            .home-text26 {
              font-size: 24px;
            }
            .home-link1 {
              font-size: 14px;
              font-family: Montserrat;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-product-card2 {
              margin: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-image4 {
              width: 50%;
              height: 200px;
            }
            .home-container10 {
              width: 50%;
              padding: var(--dl-space-space-halfunit);
            }
            .home-text27 {
              font-size: 20px;
            }
            .home-text33 {
              font-size: 24px;
            }
            .home-link2 {
              font-size: 14px;
              font-family: Montserrat;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-banner1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container12 {
              width: 192px;
              height: 192px;
              margin-left: var(--dl-space-space-unit);
            }
            .home-text36 {
              font-size: 28px;
              align-self: flex-start;
              padding-left: var(--dl-space-space-unit);
            }
            .home-text37 {
              font-size: 16px;
              text-align: left;
            }
            .home-banner2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text38 {
              font-size: 28px;
              align-self: flex-start;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
            }
            .home-text39 {
              font-size: 16px;
              text-align: left;
            }
            .home-banner3 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text40 {
              font-size: 28px;
              align-self: flex-start;
              text-align: left;
              padding-left: var(--dl-space-space-unit);
            }
            .home-text41 {
              font-size: 16px;
              text-align: left;
            }
            .home-link3 {
              font-size: 14px;
            }
            .home-text44 {
              font-size: 20px;
            }
            .home-text45 {
              font-size: 16px;
            }
            .home-banner4 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text50 {
              max-width: 100%;
            }
            .home-container18 {
              align-items: center;
              flex-direction: column;
            }
            .home-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
