import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard1 from './feature-card1'

const MeetMerkaba = (props) => {
  return (
    <>
      <section className={`meet-merkaba-container ${props.rootClassName} `}>
        <section className="meet-merkaba-features">
          <FeatureCard1
            text="Choose the best design system for your next product."
            title="Components"
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
          ></FeatureCard1>
          <FeatureCard1 image_src="https://play.teleporthq.io/static/svg/default-img.svg"></FeatureCard1>
          <FeatureCard1
            text="Make your code easier to maintain using variables."
            title="Less Code"
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
          ></FeatureCard1>
          <FeatureCard1
            text="This design system is fully supported on any device."
            title="Fully Responsive"
            image_src="https://play.teleporthq.io/static/svg/default-img.svg"
          ></FeatureCard1>
          <section className="meet-merkaba-container1">
            <div className="meet-merkaba-container2">
              <h1 className="meet-merkaba-text HeadingOne">
                <span className="meet-merkaba-text01">{props.text1}</span>
              </h1>
              <span className="meet-merkaba-text02">
                <span className="meet-merkaba-text03">{props.text2}</span>
              </span>
            </div>
            <div className="meet-merkaba-container3">
              <div className="meet-merkaba-container4">
                <img
                  alt={props.image_alt3}
                  src={props.image_src3}
                  className="meet-merkaba-image"
                />
                <span className="meet-merkaba-text04 Small">
                  <span className="meet-merkaba-text05">{props.Quote}</span>
                  <br></br>
                  <span className="meet-merkaba-text07">{props.Quoted}</span>
                </span>
                <div className="meet-merkaba-container5">
                  <img
                    alt={props.image_alt5}
                    src={props.image_src5}
                    className="meet-merkaba-image1"
                  />
                </div>
              </div>
              <div className="meet-merkaba-container6">
                <img
                  alt={props.image_alt4}
                  src={props.image_src4}
                  className="meet-merkaba-image2"
                />
                <div className="meet-merkaba-container7">
                  <h3 className="HeadingTwo">
                    <span className="meet-merkaba-text09">{props.text5}</span>
                  </h3>
                  <p>
                    <br></br>
                    <span className="meet-merkaba-text11">{props.text6}</span>
                    <br></br>
                    <span>{props.text7}</span>
                    <br></br>
                    <span className="meet-merkaba-text14">{props.text8}</span>
                    <br></br>
                    <span>{props.text9}</span>
                    <br></br>
                    <span className="meet-merkaba-text17">{props.text10}</span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <style jsx>
        {`
          .meet-merkaba-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .meet-merkaba-features {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .meet-merkaba-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .meet-merkaba-container2 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .meet-merkaba-text {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .meet-merkaba-text01 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .meet-merkaba-text02 {
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .meet-merkaba-text03 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .meet-merkaba-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            margin-left: var(--dl-space-space-unitandahalfunit);
            margin-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
          }
          .meet-merkaba-container4 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-merkaba-image {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            object-fit: cover;
            margin-left: 3rem;
            margin-right: -3rem;
            border-radius: var(--dl-radius-radius-radius75);
          }
          .meet-merkaba-text04 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            border-color: #cb0c9f;
            border-style: solid;
            border-width: 1px;
            border-radius: 0.25rem;
            margin-bottom: 8rem;
            flex-direction: column;
          }
          .meet-merkaba-text05 {
            color: rgb(203, 12, 159);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .meet-merkaba-text07 {
            color: rgb(203, 12, 159);
            font-weight: 400;
            background-color: rgb(255, 255, 255);
          }
          .meet-merkaba-container5 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-merkaba-image1 {
            top: 0px;
            left: auto;
            width: 90%;
            bottom: auto;
            display: block;
            position: absolute;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: -1.5rem;
            object-fit: cover;
            margin-left: 2rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .meet-merkaba-container6 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .meet-merkaba-image2 {
            width: 100%;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 8rem;
            object-fit: cover;
            margin-left: -1.5rem;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .meet-merkaba-container7 {
            width: 90%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .meet-merkaba-text09 {
            color: rgb(37, 47, 64);
            font-weight: 700;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .meet-merkaba-text11 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .meet-merkaba-text14 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .meet-merkaba-text17 {
            color: rgb(103, 116, 142);
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }

          @media (max-width: 991px) {
            .meet-merkaba-features {
              max-width: 960px;
            }
            .meet-merkaba-container1 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .meet-merkaba-container2 {
              max-width: 80%;
            }
            .meet-merkaba-text {
              text-align: center;
            }
            .meet-merkaba-text02 {
              text-align: center;
            }
            .meet-merkaba-text04 {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .meet-merkaba-features {
              max-width: 720px;
              padding-top: var(--dl-space-space-doubleunit);
              padding-left: var(--dl-space-space-unitandahalfunit);
              padding-right: var(--dl-space-space-unitandahalfunit);
              padding-bottom: var(--dl-space-space-doubleunit);
            }
            .meet-merkaba-container1 {
              max-width: 720px;
            }
            .meet-merkaba-container3 {
              align-items: center;
              flex-direction: column;
            }
            .meet-merkaba-container4 {
              width: 80%;
            }
            .meet-merkaba-image {
              margin-left: 0px;
              margin-right: 0px;
            }
            .meet-merkaba-text04 {
              width: 70%;
              align-self: center;
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .meet-merkaba-image1 {
              display: none;
            }
            .meet-merkaba-container6 {
              width: 80%;
            }
            .meet-merkaba-image2 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .meet-merkaba-features {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

MeetMerkaba.defaultProps = {
  rootClassName: '',
  text1:
    'The South’s Leading Medicinal Mushroom Company Providing Quality Mushroom Tinctures',
  text2:
    'The highest status people in human history are those that asked for nothing and gave everything',
  image_src3:
    'https://images.unsplash.com/photo-1669101283561-642d16d924ba?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGxhYiUyMHxlbnwwfHx8fDE2ODIxNzgxMjI&ixlib=rb-4.0.3&w=1100',
  image_alt3: 'image',
  image_src4: '/playground_assets/cordyceps_unsaturated-bg-1100w.png',
  image_alt4: 'image',
  Quote:
    "We're always constantly testing the potency as well as the taste without compromising the benefits",
  Quoted: '-Jordan Gros',
  image_src5:
    'https://images.unsplash.com/photo-1625286535466-68a6d71e4568?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGxpb25zJTIwbWFuZXxlbnwwfHx8fDE2ODIxNzgxNjI&ixlib=rb-4.0.3&w=1000',
  image_alt5: 'image',
  text5:
    'Cordyceps is known for providing increase performance in athletic abilities',
  text6:
    "Lion's Mane mushrooms, also called Hericium Erinaceus, are prized for their nootropic properties. Our dual extract lion's mane tinctures offer cognitive support, immune support, anti-inflammatory and gut health benefits.",
  text7: '',
  text8: '',
  text9: '',
  text10: '',
}

MeetMerkaba.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt4: PropTypes.string,
  Quote: PropTypes.string,
  Quoted: PropTypes.string,
  image_src5: PropTypes.string,
  image_alt5: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
}

export default MeetMerkaba
