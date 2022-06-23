const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/theme')],
    prependData: '@import "variables.scss";',
  },
};


