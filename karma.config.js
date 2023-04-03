const webpackConfig = require('./config/webpack.test.js')();

module.exports = config => {
  config.set({
    basePath: '',

    // frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'webpack'],

    // This will be the new entry to webpack so it should just be a single file
    files: ['src/main.js', 'src/index.tests.js'],

    // Preprocess test index and test files using webpack (will run babel)
    preprocessors: {
      'src/main.js': ['webpack'],
      'src/index.tests.js': ['webpack'],
    },

    // Reference webpack config (single object)
    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO, // possible values: LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
    autoWatch: true, // if true, Karma captures browsers, runs the tests and exits
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity,
  });
};
