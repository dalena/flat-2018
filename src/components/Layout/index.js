import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header";
import Footer from "../Footer";
import "./style.css";

const Layout = ({ path, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery($path: String!) {
        site {
          siteMetadata {
            title
          }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
          html
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
            image {
              absolutePath
              base
              publicURL
              relativePath
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div class="pre-wrapper">
          {/* <div class="header-wrapper"> */}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
