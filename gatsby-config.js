const Config = require('./config');

module.exports = {
  siteMetadata: {
    siteUrl: Config.siteUrl,
    siteTitle: Config.siteTitle,
    siteTitleShort: Config.siteTitleShort,
    siteDescription: Config.siteDescription,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-netlify',
    // {
    //   resolve: 'gatsby-plugin-web-font-loader', // Google Fonts
    //   options: {
    //     google: {
    //       families: [],
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-purgecss`, // Remove CSS
      options: {
        printRejected: true,
        develop: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`, // Google Analytics
      options: {
        trackingId: Config.googleAnalyticsId,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, // Progressive Web App
      options: {
        name: Config.siteTitle,
        short_name: Config.siteTitleShort,
        description: Config.siteDescription,
        start_url: '/',
        background_color: Config.manifest.backgroundColor,
        theme_color: Config.manifest.themeColor,
        display: `standalone`,
        icon: Config.logo,
      },
    },
  ],
};
