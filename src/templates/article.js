import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "../components/layout.css"

export default function Article({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="article">
        <div class="article-img">
          <img src={post.frontmatter.image.publicURL}></img>
        </div>
        <h2>{post.frontmatter.title}</h2>
        <h3>{post.frontmatter.author}</h3>
        <h4>{post.frontmatter.date}</h4>
        <div
          className="article-content"
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
        }
      }
    }
  }
`