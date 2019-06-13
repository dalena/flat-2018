import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ path, siteTitle, isPost }) => (
  <div class={isPost === true ? "headWrapPost" : "headWrapIndex"} >
    <header>
      <div class="logo">
        <Link to="/">
          <h1>FLAT</h1>
        </Link>
        {/* <h3>Issue 1 : FLAT</h3> */}
      </div>
      <div class="nav">
        <li><a href="/">CFP</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">People</a></li>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
