import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header";
import Footer from "../Footer";
import "./style.css";

const Layout = ({ path, children }) => {
  const slug = path ? `article-path-${path.replace(/\//g, '-')}` : '';
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery  {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div className={`pre-wrapper ${slug}`}>
            {/* <div className="header-wrapper"> */}
              <Header siteTitle={data.site.siteMetadata.title} isPost={path != null ? true : false} />
            {/* </div> */}
            <div id="wrapper" >
              {/* <IssueNav path={path}></IssueNav> */}
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
