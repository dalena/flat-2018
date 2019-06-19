import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export default function Article({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout path={post.frontmatter.path}>
      <SEO title="Home" />
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="article">
        <div class="article-meta">
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
  query articlePostByPath($path: String!) {
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