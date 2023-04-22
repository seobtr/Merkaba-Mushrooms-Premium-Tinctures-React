import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard4 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card4-testimonial-card ${props.rootClassName} `}
      >
        <svg viewBox="0 0 1024 1024" className="testimonial-card4-icon">
          <path d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"></path>
        </svg>
        <span className="testimonial-card4-text">{props.quote}</span>
        <div className="testimonial-card4-profile">
          <img
            alt={props.picture_alt}
            src={props.picture_src}
            className="testimonial-card4-image"
          />
          <div className="testimonial-card4-container">
            <span className="testimonial-card4-text1">{props.name}</span>
            <span className="testimonial-card4-text2">{props.role}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card4-testimonial-card {
            width: 100%;
            display: flex;
            padding: 32px;
            max-width: 1400px;
            align-self: stretch;
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonial-card4-icon {
            width: 96px;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .testimonial-card4-text {
            color: var(--dl-color-gray-500);
            font-size: 1.15rem;
            padding-top: 48px;
            padding-bottom: 48px;
          }
          .testimonial-card4-profile {
            width: 100%;
            display: flex;
            margin-top: auto;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .testimonial-card4-image {
            width: 96px;
            filter: grayscale();
            height: 96px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-card4-container {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card4-text1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: 0.25rem;
          }
          .testimonial-card4-text2 {
            color: var(--dl-color-gray-500);
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
          }

          @media (max-width: 991px) {
            .testimonial-card4-icon {
              height: 96px;
            }
            .testimonial-card4-profile {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .testimonial-card4-image {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .testimonial-card4-testimonial-card {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .testimonial-card4-profile {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard4.defaultProps = {
  rootClassName: '',
  name: 'John Doe',
  picture_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.',
  role: 'Software Engineer',
  picture_alt: 'John Doe',
}

TestimonialCard4.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  picture_src: PropTypes.string,
  quote: PropTypes.string,
  role: PropTypes.string,
  picture_alt: PropTypes.string,
}

export default TestimonialCard4
