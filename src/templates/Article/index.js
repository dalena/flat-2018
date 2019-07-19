import React from "react";
import { graphql } from "gatsby";

import Bio from '../../components/Bio';
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export default function Article({ data }) {
  const { markdownRemark: {html, frontmatter} } = data
  return (
    <Layout path={frontmatter.path}>
      <SEO title={`${frontmatter.title}`} />
      <div className='article'>
        <div className="article-meta" >
          <h3>{frontmatter.author ? frontmatter.author : frontmatter.artist}</h3>
          <h2>{frontmatter.title}</h2>
        </div>
        <div
          className="article-text"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="article-footer">
          {
            frontmatter.author &&
            <Bio
              type="author"
              name={frontmatter.author}
              bio={frontmatter.authorBio}
              links={frontmatter.authorLinks}
            />
          }
          {
            frontmatter.artist &&
            <Bio
              type={frontmatter.author ? 'art' : 'artist'}
              name={frontmatter.artist}
              bio={frontmatter.artistBio}
              links={frontmatter.artistLinks}
            />
            }
        </div>
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
        authorBio
        authorLinks {
          url
          type
          name
        }
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