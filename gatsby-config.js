const github = require('./github-config')

module.exports = {
  siteMetadata: {
    title: `Emil`,
    description: `This is a portfolio page for Emil Petersson, a front-end developer based in Gothenburg, Sweden.`,
    author: `Emil Petersson`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ep-favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Permanent Marker, Source Sans Pro'],
          urls: ['/fonts/index.css'],
        },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${github.TOKEN}`,
        },
      },
    },
  ],
}
