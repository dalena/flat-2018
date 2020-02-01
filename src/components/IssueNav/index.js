import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

import { createSketch } from './Sketch';

import style from './style.module.css';

const {
  issueNav,
  issueNavMobile,
  ...mobileNavColors
} = style;

class IssueNav extends Component {
  constructor() {
    super();
    this.p5Node = React.createRef();
    this.sketch = false;
    this.state = {
      isMobile: true,
      mounted: false,
    };
  }

  componentDidMount() {
    const { matches: mobile } = window.matchMedia('(max-width: 600px)');

    if (!mobile) {
      this.setState({ isMobile: mobile, mounted: true });
      if (this.sketch === false) {
        this.sketch = createSketch(this.p5Node.current, this.props.nodes);
      }
    } else {
      this.setState({ mounted: true });
    }
  }

  componentWillUnmount() {
    if (this.state.mounted && this.sketch) {
      this.sketch.remove();
    }
  }

  render() {
    const { isMobile, mounted } = this.state;
    const className = isMobile ? '' : issueNav;

    return <div className={className} ref={this.p5Node}>
      {isMobile && mounted && <IssueNavMobile nodes={this.props.nodes} />}
    </div>
  }
}

const IssueNavMobile = ({nodes}) => {
  return (
    <ul className={issueNavMobile}>
      {
        nodes.map((val, i) => (
          <li key={val.author} className={mobileNavColors[`navColor${i}`]}>
            <a href={`/flat${val.path}`}>{val.author.toUpperCase()}</a></li>
          )
        )
      }
    </ul>
  );
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
                            artist
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
      const nodes = data.allMarkdownRemark.edges.map(
        ({ node: { frontmatter: { title, author, artist, path } } }, i) => ({
          title,
          path,
          author: author ? author : artist,
        })
      );
      return (<IssueNav nodes={ nodes } />)
    }}
  />
)

export default IssueNavWrapped;
