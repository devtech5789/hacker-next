const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimecaching: [
          {
            handler: "networkFirst",
            urlPattern: /^https?.*/
          }
        ]
      })
    );
    return config;
  }
};
