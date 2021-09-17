const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
     main: path.join(__dirname, './src/js/app.js'),
     vendor: path.join(__dirname, '.src/js/vendor.js')
},
  mode: 'production',
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.js',
  },
  plugins: [new MiniCssExtractPlugin(), new CleanWebpackPlugin()],
  module: {
    rules: [
      
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test:/\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        }
      }

      
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
};