const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators

    const articlePostTemplate = path.resolve(`src/templates/article.js`)

    const pagePostTemplate = path.resolve(`src/templates/page.js`)

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
              pagetype
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