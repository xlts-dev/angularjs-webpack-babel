import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { paths, isProd } from './helpers.mjs';

export const rules = [
  {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: isProd ? ['babel-loader'] : ['ng-hot-reload-loader', 'babel-loader']
  },
  {
    test: /\.html$/,
    exclude: [paths.src + '/index.html'],
    loader: "html-loader",
    options: {
      minimize: true,
    },
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'postcss-loader',
      'sass-loader',
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
];
