import React from 'react'

import PropTypes from 'prop-types'

const ResourceCard2 = (props) => {
  return (
    <>
      <div className={`resource-card2-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src="https://images.unsplash.com/photo-1595154038281-4beb9195415b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHBldHJpJTIwfGVufDB8fHx8MTY4NTU0MjMzNXww&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="resource-card2-image"
        />
        <div className="resource-card2-container">
          <span className="resource-card2-text">{props.date}</span>
          <span className="resource-card2-text1">{props.description}</span>
          <div className="resource-card2-separator"></div>
          <span className="resource-card2-text2">{props.label}</span>
        </div>
      </div>
      <style jsx>
        {`
          .resource-card2-blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1400px;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            flex-direction: column;
            justify-content: space-between;
          }
          .resource-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .resource-card2-image {
            width: 100%;
            height: 100%;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0px;
          }
          .resource-card2-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .resource-card2-text {
            color: var(--dl-color-gray-500);
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .resource-card2-text1 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 300;
          }
          .resource-card2-separator {
            width: 40%;
            height: 1px;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-900);
          }
          .resource-card2-text2 {
            color: var(--dl-color-gray-700);
            font-weight: 700;
          }
          .resource-card2-root-class-name {
            margin-bottom: 64px;
          }
        `}
      </style>
    </>
  )
}

ResourceCard2.defaultProps = {
  label: 'Medicinal Mushrooms',
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image_src: '2f2fb148-f10c-4d35-ba9a-a5551ab83be6',
  image_alt: 'image',
  rootClassName: '',
  date: 'JULY 24',
}

ResourceCard2.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  date: PropTypes.string,
}

export default ResourceCard2
