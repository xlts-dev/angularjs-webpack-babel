const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: {},
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
