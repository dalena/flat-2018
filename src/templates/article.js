import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function Article({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="article">
        <img src={post.frontmatter.image.publicURL}></img>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.excerpt}</h4>
        <h3>{post.frontmatter.date}</h3>
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