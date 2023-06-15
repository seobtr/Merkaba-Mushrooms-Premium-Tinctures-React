import React from 'react'

const MyShop = (props) => {
  return (
    <>
      <div className="my-shop-container">
        <div className="my-shop-container1"></div>
      </div>
      <style jsx>
        {`
          .my-shop-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .my-shop-container1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default MyShop
