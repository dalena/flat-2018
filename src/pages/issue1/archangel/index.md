---
path: "/flat/archangel"
date: 2017-07-12T17:12:33.962Z
title: "My First Gatsby Post"
image: "feature.png"

---

query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          image {
            publicURL
          }
        }
      }
    }
  }
}
