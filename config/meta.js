const path = require('path')

module.exports = {
  siteUrl: 'https://example.com',
  siteTitle: 'Placeholder Title',
  siteTitleShort: 'Placeholder Title Short',
  siteDescription: 'Placeholder Description',
  author: 'Placeholder Author',
  manifest: {
    themeColor: '#000000',
    backgroundColor: '#ffffff'
  },
  logo: path.resolve(
    __dirname,
    '../src/media/images/logo.png'
  ),
  googleAnalyticsId: 'UA-XXXXX',
  facebook: 'Your optional Facebook App ID',
  twitter: 'Your Twitter username'
}
