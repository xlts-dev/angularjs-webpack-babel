import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { common } from './common.mjs';
import { paths } from './helpers.mjs';

export default {
  entry: {
    main: paths.src + '/main.js',
  },
  ...common,
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
