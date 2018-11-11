var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    files: [
      './__tests__/**/*'
    ],
    preprocessors: {
      '**/*.ts': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    webpack: {
      devtool: false,
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
          }
        ]
      },
      plugins: [
        new webpack.SourceMapDevToolPlugin({
          test: /\.(ts|js|css)($|\?)/i
        })
      ],
      resolve: {
        extensions: ['.ts']
      }
    },
    webpackMiddleware: {
      logLevel: 'error'
    }
  });
};