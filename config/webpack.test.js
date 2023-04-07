const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/*
  We can't use the .mjs extension due to the fact that we are importing the configuration for testing purposes into karma,
  which is in commonjs format and not module format. Therefore, we need to keep the same format as the karma configuration.
 */

module.exports = () => ({
  // entry: {}, // Commented out, as the entry point for the unit test is defined in the karma configuration via the files attribute
  devtool: false,
  devServer: {
    https: false,
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: './index.html',
    }),
  ],
});
