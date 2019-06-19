import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

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
        <li><Link to="/cfp">CFP</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/people">People</Link></li>
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

export default Header;
