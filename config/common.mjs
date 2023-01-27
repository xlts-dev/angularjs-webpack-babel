import { rules } from './rules.mjs';
import { plugins } from './plugins.mjs';

export const common = {
  module: { rules },
  plugins,
  resolve: {
    extensions: ['.js']
  },
};
