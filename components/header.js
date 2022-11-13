import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Header1 from './header1'

const Header = (props) => {
  return (
    <>
      <header className={`header-header ${props.rootClassName} `}>
        <div className="header-container">
          <div>
            <DangerousHTML
              html={`<div class="ec-cart-widget"></div>
<div>
    <script data-cfasync="false" type="text/javascript"
        src="https://app.ecwid.com/script.js?78742521&data_platform=code&data_date=2022-11-13" charset="utf-8"></script>
    <script type="text/javascript">
        Ecwid.init();
    </script>
</div>`}
            ></DangerousHTML>
          </div>
        </div>
        <Header1 rootClassName="header1-root-class-name"></Header1>
      </header>
      <style jsx>
        {`
          .header-header {
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
          .header-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }

          @media (max-width: 991px) {
            .header-container {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .header-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding-right: 2rem;
            }
            .header-container {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
