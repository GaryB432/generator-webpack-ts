'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

const mostFiles = [
  '.eslintrc.js',
  '.gitignore',
  '.gitattributes',
  '.travis.yml',
  '.vscode/settings.json',
  '.vscode/tasks.json',
  'package.json',
  'karma.conf.js',
  'README.md',
  'src/public/index.html',
  'src/public/img/yeoman-003.png',
  'src/scripts/app.ts',
  'src/styles/app.scss',
  'tsconfig.json',
  'webpack.config.js'
];

describe('generator-webpack-ts:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ workbox: false });
  });

  it('creates files', () => {
    assert.file(mostFiles);
    assert.noFile('server.js');
    assert.noFile('src/sw.js');
    assert.noFile('src/public/manifest.json');
  });

  it('adds dependencies', () => {
    assert.noFileContent('package.json', 'workbox');
  });

  it('does not mention serviceWorker', () => {
    assert.noFileContent('src/scripts/app.ts', 'serviceWorker');
  });
});

describe('generator-webpack-ts:app with workbox', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ workbox: true });
  });

  it('creates files', () => {
    assert.file([...mostFiles, 'server.js', 'src/sw.js', 'src/public/manifest.json']);
  });

  it('adds devDependencies', () => {
    const pkgJson = {
      devDependencies: {
        'workbox-webpack-plugin': '^4.3.1',
        express: '^4.17.1'
      }
    };
    assert.jsonFileContent('package.json', pkgJson);
  });

  it('mentions serviceWorker', () => {
    assert.fileContent('src/scripts/app.ts', 'serviceWorker');
  });
});
