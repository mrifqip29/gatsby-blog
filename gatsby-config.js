/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log("Using environment config: ${activeEnv}")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Sekolah Cendekia Baznas",
    author: "Tim Ilmu Komputer 54",
    description: "Website Resmi Sekolah Cendekia Baznas",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "n2o2oyh78lcv",
        accessToken: "yNw9k6la9B3Q06h04menoajN6zNllx-ifEK1E8Ia5GU",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-scb.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "ahmadscb2019",
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        type: `user-profile`,
        username: "ahmadscb2019",
      },
    },
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`${239549077277239}`], // Can be either a numeric ID or the URL ID
        params: {
          fields: "hours, posts { message, created_time }", // See Facebooks API to see what you can query for
        },
        key: process.env.FACEBOOK_GRAPH_TOKEN, // You will need to create a Facebook application and go through review in order to get an API token.
        version: "5.0", // The version of the graph API to use. Defaults to 5.0
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}