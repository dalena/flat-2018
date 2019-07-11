import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Footerart = ({ path, siteTitle, isPost }) => (
      <div className="footerArt">
        <Link to="/">
          <h1>FLAT</h1>
        </Link>
      </div>
)

Footerart.propTypes = {
  siteTitle: PropTypes.string,
}

Footerart.defaultProps = {
  siteTitle: ``,
}

export default Footerart;
