import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export default function Page({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout path={post.frontmatter.path}>
      <SEO title={`${post.frontmatter.title}`} />
      <div class="page-cont">
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
        type
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