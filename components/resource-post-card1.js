import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const ResourcePostCard1 = (props) => {
  return (
    <>
      <div
        className={`resource-post-card1-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt="image"
          src="/cordyceps_unsaturated-bg-1500w.png"
          className="resource-post-card1-image"
        />
        <div className="resource-post-card1-container">
          <Link href="/resources">
            <a className="resource-post-card1-link category-link">
              {props.Category}
            </a>
          </Link>
          <h4 className="resource-post-card1-text">{props.title}</h4>
          <p className="resource-post-card1-text1">{props.description}</p>
          <Link href="/the-ultimate-guide-to-medicinal-mushrooms">
            <a className="resource-post-card1-link1">{props.anchor_text}</a>
          </Link>
          <div className="resource-post-card1-container1">
            <div className="resource-post-card1-profile">
              <span className="resource-post-card1-text2">{props.author}</span>
            </div>
            <span className="resource-post-card1-text3">{props.time}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .resource-post-card1-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: 300px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            justify-content: center;
          }
          .resource-post-card1-blog-post-card:hover {
            transform: scale(1.02);
          }
          .resource-post-card1-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .resource-post-card1-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .resource-post-card1-link {
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .resource-post-card1-text {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
            text-overflow: ellipsis;
          }
          .resource-post-card1-text1 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-unit);
            text-overflow: ellipsis;
          }
          .resource-post-card1-link1 {
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
          }
          .resource-post-card1-container1 {
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
          .resource-post-card1-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .resource-post-card1-text2 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .resource-post-card1-text3 {
            color: var(--dl-color-gray-700);
            font-weight: 300;
          }

          .resource-post-card1-root-class-name6 {
            max-width: 300 px;
          }
          .resource-post-card1-root-class-name7 {
            max-width: 300 px;
          }
          @media (max-width: 1200px) {
            .resource-post-card1-root-class-name6 {
              max-width: 300 px;
            }
            .resource-post-card1-root-class-name7 {
              max-width: 300 px;
            }
          }
          @media (max-width: 991px) {
            .resource-post-card1-image {
              height: 350px;
              display: none;
            }
            .resource-post-card1-link {
              font-size: 14px;
            }
            .resource-post-card1-text {
              font-size: 24px;
            }
            .resource-post-card1-text1 {
              font-size: 18px;
            }
            .resource-post-card1-root-class-name7 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .resource-post-card1-image {
              display: none;
            }
            .resource-post-card1-link {
              font-size: 14px;
            }
            .resource-post-card1-text {
              font-size: 24px;
            }
          }
          @media (max-width: 479px) {
            .resource-post-card1-link {
              font-size: 14px;
            }
            .resource-post-card1-text {
              font-size: 20px;
            }
            .resource-post-card1-text1 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

ResourcePostCard1.defaultProps = {
  time: '5 min read',
  Category: 'Medicinal Mushrooms',
  image_src: '',
  profile_alt: 'profile',
  profile_src: '',
  link_text: 'https://example.com',
  anchor_text: 'Learn More',
  title: 'The Ultimate Guide to Medicinal Mushrooms',
  rootClassName: '',
  description: 'Discover the health benefits of medicinal mushrooms',
  image_alt: 'image',
  author: 'Tommy Nguyen',
}

ResourcePostCard1.propTypes = {
  time: PropTypes.string,
  Category: PropTypes.string,
  image_src: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  link_text: PropTypes.string,
  anchor_text: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
}

export default ResourcePostCard1
