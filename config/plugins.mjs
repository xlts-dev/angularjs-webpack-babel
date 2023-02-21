import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { paths, isProd } from './helpers.mjs';

const commonPlugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'XLTS for AngularJS with Webpack',
    template: paths.src + '/index.html',
    filename: 'index.html',
  }),
]

export const plugins = isProd ?
  [
    ...commonPlugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ] :
  [
    ...commonPlugins,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
