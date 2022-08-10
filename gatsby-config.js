module.exports = {
  siteMetadata: {
    title: `Zephyr`,
    description: ``,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://wordpress-88287-2145954.cloudwaysapps.com/graphql`,
        type: {
          UserRole: {
            exclude: true,
          },
          Comment: {
            exclude: true,
          },
          Category: {
            exclude: true,
          },
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        background_color: `#002a5c`,
        theme_color: `#002a5c`,
        display: `minimal-ui`,
        icon: `src/images/zephyr-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.33,
      },
    },
    {
      resolve: `gatsby-plugin-bugherd`,
      options: {
        key: `zrlatuazuj2cmxw60586cg`,

        // whether to include the snippet in production. Defaults to false
        showInProduction: false,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://zephyrpartners.us13.list-manage.com/subscribe/post?u=1db5b291fb452c94c41b18c35&amp;id=0599539572", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
