import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export default function Artwork({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout path={post.frontmatter.path}>
      <SEO title="Home" />
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="article">
        <div className="article-meta" >
          <h3>{post.frontmatter.author}</h3>
          <h2>{post.frontmatter.title}</h2>
        </div>
        <div className="art-left" >
          <img src={post.frontmatter.image.publicURL} alt=""></img>
        </div>
        <div className="art-right" >
          <div
            className="art-text"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <p>
            <a target="none" href={post.frontmatter.btn}>
              <button>
                {post.frontmatter.btntxt}
              </button>
            </a>
          </p>
        </div>
        <div className="art-bottom">
          <div
            className="art-bios"
            dangerouslySetInnerHTML={{ __html: post.frontmatter.bios }}
          />
        </div>
      </div>


    </Layout >

  )
}

export const postQuery = graphql`
  query artworkPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        btn
        btntxt
        bios
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