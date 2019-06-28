const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const getTemplate = (type) => {
    switch (type) {
      case 'article':
        return 'src/templates/Article/index.js';
      case 'artwork':
        return 'src/templates/Artwork/index.js';
      case 'iframe':
        return 'src/templates/Iframe/index.js';
      default:
        return 'src/templates/Page/index.js';
    }
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(getTemplate(node.frontmatter.type)),
        context: {}, // additional data can be passed via context
      })
    })
  })
}