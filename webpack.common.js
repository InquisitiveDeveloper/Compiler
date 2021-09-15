const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/app.js",
    vendor: "./src/js/vendor.js",
  },
  module: {
    rules: [
        {
            test: /\.(eot|ttf|woff2?|otf|svg|png|jpg)$/,
            use: {
            loader: "file-loader",
            }
        },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
