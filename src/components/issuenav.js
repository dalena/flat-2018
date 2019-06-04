import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const IssueNav = () => (
    <StaticQuery
        query={graphql`
        query IssueNavigationQuery {
            allMarkdownRemark {
                edges {
                node {
                    frontmatter {
                    title
                    path
                    author
                    image {
                        publicURL
                    }
                    }
                }
                }
            }
            site {
                siteMetadata {
                title
                }
            }
        }
      `}
        render={data => (
            <div class="mainBody">
                <div class="flexbox-slider flexbox-slider-1">
                    {data.allMarkdownRemark.edges.map(({ node }, i) => {
                        if (node.frontmatter.image != null) {
                            return <div class="flexbox-slide">
                                <img src={node.frontmatter.image.publicURL}></img>
                                <div class="text-block">
                                    <h3>{node.frontmatter.title}</h3>
                                    <h4>{node.frontmatter.author}</h4>
                                </div>
                            </div>
                        }
                    })}
                </div>
            </div>

        )}
    />
)

export default IssueNav
