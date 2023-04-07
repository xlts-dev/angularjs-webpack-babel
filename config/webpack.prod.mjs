import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { webpackCommonConfig } from './webpack-common-config.mjs';
import { paths } from './helpers.mjs';

export default {
  entry: {
    main: paths.src + '/main.js',
  },
  ...webpackCommonConfig,
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
