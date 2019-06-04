import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="logo">
      <Link to="/">
        <h1 >JOURNAL X</h1>
      </Link>
      <h3>Issue 1 : FLAT</h3>
    </div>
    <div class="nav">
      <li>Call For Proposals</li>
      <li>About</li>
      <li>People</li>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
