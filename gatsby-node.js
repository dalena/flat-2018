const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators

    const articlePostTemplate = path.resolve(`src/templates/article.js`)

    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
              html
              id
            frontmatter {
              path
              title
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
                component: articlePostTemplate,
                context: {}, // additional data can be passed via context
            })
        })
    })
}