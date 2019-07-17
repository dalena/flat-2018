import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

import { createSketch } from './Sketch';

import style from './style.module.css';


class IssueNav extends Component {
  constructor() {
    super();
    this.p5Node = React.createRef();
  }

  componentDidMount() {
    this.sketch = createSketch(this.p5Node.current, this.props.nodes);
  }

  render() {
    return <div className={style.issueNav} ref={this.p5Node} />
  }
}

const IssueNavWrapped = (props) => (
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
    render={data => {
      const nodes = data.allMarkdownRemark.edges.map(({ node: { frontmatter: { title, author, path } } }, i) => ({ title, author, path }));
      return (<IssueNav nodes={ nodes } />)
    }}
  />
)

export default IssueNavWrapped;
