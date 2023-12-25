const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/tset", // where webpack-dev-server outputs the assets (bundles)
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "html-loader",
            options: {
              esModule: false,
            },
          },
          {
            loader: "ejs-compiled-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "views/main.ejs", // path to your ejs file
    }),
  ],
  devServer: {
    static: "./dist", // where dev server will look for static files, not compiled
  },
};
