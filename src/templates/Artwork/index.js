import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import SEO from '../../components/SEO';
import Bio from '../../components/Bio';

import {
  artLeft,
  artRight,
  artText,
  artCont
} from './style.module.css';

export default function Artwork({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout path={post.frontmatter.path}>
      <SEO title={`${post.frontmatter.title}`} />
      <div className="article">
        <div className="article-meta" >
          <h3>{post.frontmatter.artist}</h3>
          <h2>{post.frontmatter.title}</h2>
        </div>
        <div className={artCont} >
          <div className={artLeft} >
            <img src={post.frontmatter.image.publicURL} alt=""></img>
          </div>
          <div className={artRight}>
            <div
              className={artText}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
              <a target="none" href={post.frontmatter.btn}>
                <button>
                  {post.frontmatter.btntxt}
                </button>
              </a>
          </div>
        </div>
        <div className="article-footer">
          <Bio
            type="artist"
            name={post.frontmatter.artist}
            bio={post.frontmatter.artistBio}
            links={post.frontmatter.artistLinks}
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
        title
        artist
        artistBio
        artistLinks {
          url
          type
          name
        }
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