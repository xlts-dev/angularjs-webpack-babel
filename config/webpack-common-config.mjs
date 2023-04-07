import { plugins } from './plugins.mjs';
import { rules } from './rules.mjs';

export const webpackCommonConfig = {
  module: { rules },
  plugins,
  resolve: {
    extensions: ['.js']
  },
};
