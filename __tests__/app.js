'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

const mostFiles = [
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
];

describe('generator-webpack-ts:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ server: false });
  });

  it('creates files', () => {
    assert.file(mostFiles);
    assert.noFile('server.js');
  });
});

describe('generator-webpack-ts:app with server', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ server: true });
  });

  it('creates files', () => {
    assert.file([...mostFiles, 'server.js']);
  });
});
