module.exports = function(config) {
  config.set({
    // Base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // Frameworks to use
    frameworks: ['jasmine'], // or any other testing framework you are using

    // List of files / patterns to load in the browser
    files: [
      'src/**/*.spec.js' // adjust the pattern to your spec files location
    ],

    // List of files / patterns to exclude
    exclude: [],

    // Preprocess matching files before serving them to the browser
    preprocessors: {
      'src/**/*.spec.js': ['webpack'] // adjust the pattern to your spec files location
    },

    // Webpack configuration
    webpack: {
      // your webpack configuration
    },

    // Test results reporter to use
    reporters: ['progress'], // add more reporters if needed

    // Web server port
    port: 9876,

    // Enable / disable colors in the output (reporters and logs)
    colors: true,

    // Level of logging
    logLevel: config.LOG_INFO,

    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers
    browsers: ['ChromeHeadlessNoSandbox'],

    // Custom launcher for ChromeHeadless with no sandbox
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    singleRun: true,

    // Concurrency level
    concurrency: Infinity,

    // Plugins to load
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-progress-reporter' // ensure to include all the necessary plugins
    ]
  });
};
