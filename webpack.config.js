const path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry:  { 
        main: "./src/js/app.js",
         vendor : "./src/js/vendor.js"
},
      output: {
          filename: "[name].[contenthash].bundle.js",
          path: path.resolve(__dirname, 'dist'),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/templates/landing.html"
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
      ],
      module: {
          rules: [
            {
                test: /.\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,  //3.Inject styles into DOM
                    "css-loader",    //2. Turns css into commonjs
                    "sass-loader"    //1.Turns sass into css  
                ]
            }
          ]
      }

}