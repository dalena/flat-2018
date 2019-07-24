module.exports = {
  siteMetadata: {
    title: `FLAT`,
    description: `FLAT is a journal for theoretical and critical texts, interviews, reviews, projects, and experiments that engage with contemporary conversations surrounding emerging media in the arts. FLAT is designed, curated, and produced by faculty, graduate students, and undergraduates from UCLA’s department of Design Media Arts. `,
    author: `FLAT`,
    currentIssue: 1,
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `issueContent`,
        path: `${__dirname}/src/content/issues/1-flat/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1600,
              wrapperStyle: `max-width: none !important;`,
              withWebp: true,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },


    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}


