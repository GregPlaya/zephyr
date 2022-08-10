import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navigation from "./navigation/navigation"

const Header = ({ siteTitle, headerMode, pageInfo }) => (
  <>
    <header className={`banner ${headerMode ? headerMode : ""}`}>
      <div className="wrapper">
        <div className="d-flex justify-content-between align-items-end relative">
          <Link to="/" className="py-0">
            <img
              src={headerMode === "overlay" ? "/logo.svg" : "/logo-blue.svg"}
              alt="Zephyr"
            />
          </Link>
          <Navigation pageInfo={pageInfo} />
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
