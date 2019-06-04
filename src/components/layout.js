import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import IssueNav from "./issuenav"
import "./layout.css"

const Layout = ({path, children }) => (
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
          <div id="wrapper">
            <Header siteTitle={data.site.siteMetadata.title}/>
            <IssueNav path={path}></IssueNav>
            <main>{children}</main>
            <Footer />
          </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
