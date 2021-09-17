const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "/src/js/app.js",
    vendor: "/src/js/vendor.js",
  },
  module: {
    rules: [
      {
        test:/\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        }
      },
      // {
      //   test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: '../fonts/',
      //       publicPath: '../static/fonts'
      //     }
      //   }]
      // },
      // {
      //   test: /\.(svg|gif|png|eot|woff|ttf)$/,
      //   use: [
      //     'url-loader',
      //   ],
      // },
      //   {
      //       test: /\.(eot|ttf|woff2?|otf|svg|png|jpg)$/,
      //       use: {
      //       loader: "file-loader",
      //       }
      //   },
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
