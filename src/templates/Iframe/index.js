import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import "../../templates/Iframe/style.css";

export default function Artwork({ data }) {
    const { markdownRemark: post } = data
    return (
        <>
            <SEO title="Home" />
            <Helmet title={`${post.frontmatter.title}`} />
            <div
                className="iframe-cont"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />

        </>



    )
}

export const postQuery = graphql`
  query iframePostByPath($path: String!) {
                markdownRemark(frontmatter: {path: {eq: $path } }) {
                html
      excerpt
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
            path
            btn
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