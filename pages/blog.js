import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import BlogPostCard3 from '../components/blog-post-card3'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Blog - Merkaba Mushrooms E-Commerce</title>
          <meta
            property="og:title"
            content="Blog - Merkaba Mushrooms E-Commerce"
          />
        </Head>
        <Header rootClassName="header-root-class-name6"></Header>
        <div className="blog-hero">
          <div className="blog-container1">
            <h1 className="blog-text">Merkaba Mushroom Blog</h1>
            <span className="blog-text1">
              <br></br>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
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
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
          </div>
        </div>
        <div className="blog-blog">
          <div className="blog-container2">
            <Link href="/may-27-2023-event">
              <a className="blog-link">
                <BlogPostCard3
                  date="Events"
                  title="Events"
                  image_src="/event_photos/5-27-23marketphoto1-200h.jpg"
                  description=": Successful Debut Product Launch at May 27th Market - Get Ready for Our Official Launch!"
                  rootClassName="rootClassName1"
                  className="blog-component1"
                ></BlogPostCard3>
              </a>
            </Link>
          </div>
          <div className="blog-container3"></div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-text {
            font-size: 3rem;
          }
          .blog-text1 {
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .blog-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-link {
            display: contents;
          }
          .blog-component1 {
            text-decoration: none;
          }
          .blog-container3 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          @media (max-width: 1200px) {
            .blog-hero {
              width: auto;
              margin-top: var(--dl-space-space-fiveunits);
              min-height: auto;
            }
            .blog-text {
              font-size: 3rem;
            }
          }
          @media (max-width: 991px) {
            .blog-hero {
              flex-direction: column;
            }
            .blog-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-text {
              text-align: center;
            }
            .blog-text1 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .blog-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .blog-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .blog-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
