import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "../components/layout.css"
import IssueNav from "../components/issuenav";

export default function Article({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout path={post.frontmatter.path}>
      <SEO title="Home" />
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="article">
        {/* <div class="article-img">
          <img src={post.frontmatter.image.publicURL}></img>
        </div> */}
        {/* <h2>{post.frontmatter.title}</h2>
        <h3>{post.frontmatter.author}</h3>
        <h4>{post.frontmatter.date}</h4> */}
        <div class="article-imgs">
          <p>
            <img src={post.frontmatter.img1.publicURL}></img>
            <h5>
              {post.frontmatter.img1txt}
            </h5>
          </p>
          <p>
            <img src={post.frontmatter.img2.publicURL}></img>
            <h5>
              {post.frontmatter.img2txt}
            </h5>
          </p>
          <p>
            <img src={post.frontmatter.img3.publicURL}></img>
            <h5>
              {post.frontmatter.img3txt}
            </h5>
          </p>
          <p>
            <img src={post.frontmatter.img4.publicURL}></img>
            <h5>
              {post.frontmatter.img4txt}
            </h5>
          </p>
          <p>
            <img src={post.frontmatter.img5.publicURL}></img>
            <h5>
              {post.frontmatter.img5txt}
            </h5>
          </p>
          <p>
            <img src={post.frontmatter.img6.publicURL}></img>
            <h5>
              {post.frontmatter.img6txt}
            </h5>
          </p>
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
        img1txt
        img2txt
        img3txt
        img4txt
        img5txt
        img6txt
        image {
          absolutePath
          base
          publicURL
          relativePath
        }
        img1 {
          absolutePath
          base
          publicURL
          relativePath
        }
        img2 {
          absolutePath
          base
          publicURL
          relativePath
        }
        img3 {
          absolutePath
          base
          publicURL
          relativePath
        }
        img4 {
          absolutePath
          base
          publicURL
          relativePath
        }
        img5 {
          absolutePath
          base
          publicURL
          relativePath
        }
        img6 {
          absolutePath
          base
          publicURL
          relativePath
        }
      }
    }
  }
`