import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "../components/layout.css"

export default function Page({ data }) {
  const { markdownRemark: post } = data
  if (post.frontmatter.pagetype == page)
  return (
    <Layout path={post.frontmatter.path}>
      <SEO title="Home" />
      <Helmet title={`${post.frontmatter.title}`} />
      <div class="issue-nav">
        <div class="article-meta">
          <h1>Test</h1>
          <h3>{post.frontmatter.author}</h3>
          <h2>{post.frontmatter.title}</h2>
        </div>
        <div
          className="article-text"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout >
  )
}
export const postQuery = graphql`
  query pagePostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        pagetype
        image {
          absolutePath
          base
          publicURL
          relativePath
          childImageSharp {
            id
            fluid {
              src
              sizes
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
  }
`