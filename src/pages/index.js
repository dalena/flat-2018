import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Img from "../components/image"
import SEO from "../components/seo"
import IssueNav from "../components/issuenav"


const IndexPage = ({ path }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2($path: String!) {
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
        <Layout>
          <SEO title="Home" />
          <IssueNav path={path}></IssueNav>
        </Layout>
      </>
    )}
  />
)

export default IndexPage
// const IndexPage = ({ path }) => (
//   <Layout>
//     <SEO title="Home" />
//     <IssueNav path={path}></IssueNav>
//   </Layout>
// )

// export default IndexPage
