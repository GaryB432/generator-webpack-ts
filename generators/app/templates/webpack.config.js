'use strict';
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyFormatter = require('eslint-formatter-friendly');
<% if (workbox) { %>const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');<% } %>

const mode = 'production';

module.exports = {
  entry: {
    '<%= appname %>': ['scripts/app.ts'],
  },

  context: path.join(process.cwd(), 'src'),

  output: {
    publicPath: mode === 'production' ? '/' : 'http://localhost:8080/',
    path: path.join(process.cwd(), 'dist'),
    filename: 'scripts/[name].[hash].js',
  },

  mode,

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: FriendlyFormatter,
          parser: '@typescript-eslint/parser',
          parserOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
          },
          extends: [
            'plugin:@typescript-eslint/recommended',
            'prettier',
            'prettier/@typescript-eslint',
          ],
          plugins: ['@typescript-eslint', 'prettier'],
          rules: {
            'prettier/prettier': 1,
            '@typescript-eslint/indent': 0,
            '@typescript-eslint/no-parameter-properties': 0,
            '@typescript-eslint/member-ordering': [
              2,
              {
                default: [
                  'public-static-field',
                  'protected-static-field',
                  'private-static-field',
                  'public-instance-field',
                  'protected-instance-field',
                  'private-instance-field',
                  'public-constructor',
                  'protected-constructor',
                  'private-constructor',
                  'public-instance-method',
                  'protected-instance-method',
                  'private-instance-method',
                  'public-static-method',
                  'protected-static-method',
                  'private-static-method',
                ],
              },
            ],
          },
          env: {
            browser: true,
            node: true,
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      chunksSortMode: 'dependency',
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),

    new CopyWebpackPlugin([{ from: 'public' }]),
    <% if (workbox) { %>

      new InjectManifest({
        swSrc: path.join('src', 'sw.js'),
        swDest: 'service-worker.js',
      }),
  <% } %>
    ],

  resolve: {
    modules: ['node_modules', path.resolve(process.cwd(), 'src')],
    extensions: ['.ts', '.js', 'scss'],
  },

  devServer: {
    contentBase: './dist',
    clientLogLevel: 'info',
    port: 8080,
    inline: true,
    historyApiFallback: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 500,
    },
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  devtool: 'inline-source-map',
};
