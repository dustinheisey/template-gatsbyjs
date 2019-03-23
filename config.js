const path = require('path');

module.exports = {
  siteUrl: `https://example.com`,
  siteTitle: `Placeholder Title`,
  siteTitleShort: `Placeholder Title Short`,
  siteDescription: `Placeholder Description`,
  author: 'Placeholder Author',
  manifest: {
    themeColor: `Theme Color`,
    backgroundColor: `Background Color`,
  },
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  googleAnalyticsId: `UA-XXXXX`,
  facebook: `Your optional Facebook App ID`,
  twitter: `Your Twitter username`,
};
