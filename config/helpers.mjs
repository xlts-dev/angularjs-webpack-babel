import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export const isProd = process.env.NODE_ENV === 'production';

const baseDir = dirname(fileURLToPath(import.meta.url));
export const paths = {
  src: resolve(baseDir, '../src'),
  build: resolve(baseDir, '../dist'),
  assets: resolve(baseDir, '../src/assets'),
};
