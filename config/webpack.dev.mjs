import { common } from './common.mjs';
import { paths } from './helpers.mjs';

export default {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    paths.src + '/main.js',
  ],
  ...common,
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    https: false,
  },
};
