import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ path, siteTitle }) => (
  <StaticQuery
    query={graphql`
    query HeaderArticleQuery {
      allMarkdownRemark {
          edges {
          node {
              frontmatter {
              title
              path
              author
              pagetype
              image {
                  publicURL
              }
              }
          }
          }
      }
      site {
          siteMetadata {
          title
          }
      }
  }
`}
    render={data => (
      <>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          if (node.frontmatter.pagetype != null) {
            return <header class={node.frontmatter.pagetype != null ? "header"+node.frontmatter.pagetype : "headerIndex"}>
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
          }
        })}
      </>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
