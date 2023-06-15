import React from 'react'

import PropTypes from 'prop-types'

const ProductCard = (props) => {
  return (
    <>
      <div className="product-card-product-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="product-card-image"
        />
        <div className="product-card-container">
          <h3 className="product-card-text">
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
            <span>Tinctu</span>
          </h3>
          <h4 className="product-card-text6">{props.heading}</h4>
          <div className="product-card-container1">
            <div className="product-card-profile">
              <a href={props.link_button} className="product-card-link button">
                {props.button}
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product-card-product-card {
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
          .product-card-product-card:hover {
            transform: scale(1.02);
          }
          .product-card-image {
            width: 100%;
            height: 250px;
            object-fit: contain;
          }
          .product-card-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .product-card-text {
            font-size: 20px;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-unit);
          }
          .product-card-text6 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .product-card-container1 {
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
          .product-card-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .product-card-link {
            padding-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .product-card-product-card {
              width: 100%;
              margin-right: var(--dl-space-space-unit);
            }
            .product-card-container {
              padding: var(--dl-space-space-unit);
            }
            .product-card-text {
              font-size: 24px;
              font-weight: 300;
              margin-bottom: var(--dl-space-space-unit);
            }
            .product-card-text6 {
              color: var(--dl-color-gray-500);
              font-weight: 700;
              margin-bottom: var(--dl-space-space-unit);
              text-transform: uppercase;
            }
            .product-card-link {
              margin-right: 16px;
            }
          }
          @media (max-width: 991px) {
            .product-card-product-card {
              flex-direction: row;
            }
            .product-card-image {
              width: 50%;
              height: 350px;
            }
            .product-card-container {
              width: 40%;
            }
          }
          @media (max-width: 767px) {
            .product-card-product-card {
              flex-direction: row;
            }
          }
          @media (max-width: 479px) {
            .product-card-product-card {
              margin-top: var(--dl-space-space-unit);
              margin-right: 0px;
              flex-direction: row;
            }
            .product-card-image {
              width: 50%;
              height: 200px;
            }
            .product-card-container {
              width: 50%;
              padding: var(--dl-space-space-halfunit);
              flex-direction: column;
            }
            .product-card-text {
              font-size: 24px;
              font-weight: 300;
            }
            .product-card-text6 {
              color: var(--dl-color-gray-500);
              font-size: 20px;
              font-weight: 700;
              text-transform: uppercase;
            }
            .product-card-link {
              font-size: 14px;
              font-family: Montserrat;
              padding-top: var(--dl-space-space-halfunit);
              margin-right: 0px;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

ProductCard.defaultProps = {
  image_alt: "Lion's Mane Mushroom with 2oz Lion's Mane Tincture",
  link_button:
    'https://www.merkabamushrooms.com/shop#!/Dual-Extracted-Lions-Mane-Mushroom-Tincture-2-oz/p/559094948/category=0',
  heading: 'clarity',
  image_src:
    '/lions_mane/lions%20mane%20with%202oz%20lions%20mane%20mushroom%20tincture_286-1500w.png',
  button: 'Buy Now',
}

ProductCard.propTypes = {
  image_alt: PropTypes.string,
  link_button: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
  button: PropTypes.string,
}

export default ProductCard
