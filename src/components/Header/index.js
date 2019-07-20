import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { header, nav, logo } from './style.module.css';


const Header = ({ path, siteTitle, isPost }) => (
  <div className="headWrapIndex">
    <header className={header}>
      <div className={logo}>
        <Link to="/">
          <h1>{siteTitle}</h1>
        </Link>
        {/* <h3>Issue 1 : FLAT</h3> */}
      </div>
      <ul className={nav}>
        <li><Link to="/cfp">CFP</Link>
        </li>

        <li><Link to="/about">About</Link></li>
        <li><Link to="/people">People</Link></li>
      </ul>
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
