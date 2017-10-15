'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-webpack-2-typescript:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file([
      '.gitignore',
      '.vscode/settings.json',
      '.vscode/tasks.json',
      'package.json',
      'README.md',
      'src/public/index.html',
      'src/scripts/app.ts',
      'src/scripts/greeter.spec.ts',
      'src/scripts/greeter.ts',
      'src/styles/base.scss',
      'tsconfig.json',
      'tslint.json',
      'webpack.config.js',
    ]);
  });
});
