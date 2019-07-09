import { Link } from "gatsby";
import React from "react";
import { StaticQuery, graphql } from "gatsby";

const IssueNav = (props) => (
    <StaticQuery
        query={graphql`
        query IssueNavigationQuery {
            allMarkdownRemark(
            filter: {
                frontmatter: { type: {in: ["article", "artwork"]} }
            },
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            path
                            author
                            bgPatNum
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
            <div class="issue-nav">
                <div class="flexbox-slider flexbox-slider-1">
                    {data.allMarkdownRemark.edges.map(({ node }, i) => {
                        // if (node.frontmatter.image != null) {
                            return <div
                                key={`${node.frontmatter.title}-${node.frontmatter.author}`}
                                class={node.frontmatter.bgPatNum != null ? "flexbox-slide bgPat"+node.frontmatter.bgPatNum : "flexbox-slide"}>
                                <Link to={node.frontmatter.path}>
                                {/* <img src={node.frontmatter.image.publicURL}></img> */}
                                    <div class="text-block">
                                        <h3>{node.frontmatter.title}</h3>
                                        <h4>{node.frontmatter.author}</h4>
                                    </div>
                                </Link>
                            </div>
                        // }
                    })}
                </div>
            </div>

        )}
    />
)

export default IssueNav;
