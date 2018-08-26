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
  'src/public/img/yeoman-003.png',
  'src/scripts/app.ts',
  'src/scripts/greeter.spec.ts',
  'src/scripts/greeter.ts',
  'src/styles/app.scss',
  'tsconfig.json',
  'tslint.json',
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

  it('adds format without sw', () => {
    const pkgJson = {
      scripts: {
        format: 'prettier --write "src/{scripts,styles}/**/*"'
      }
    };
    assert.jsonFileContent('package.json', pkgJson);
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

  it('adds dependencies', () => {
    const pkgJson = {
      dependencies: {
        'workbox-webpack-plugin': '^3.4.1',
        express: '^4.16.3'
      }
    };
    assert.jsonFileContent('package.json', pkgJson);
  });

  it('mentions serviceWorker', () => {
    assert.fileContent('src/scripts/app.ts', 'serviceWorker');
  });

  it('adds format with sw', () => {
    const pkgJson = {
      scripts: {
        format: 'prettier --write "src/{scripts,styles}/**/*" "src/sw.ts"'
      }
    };
    assert.jsonFileContent('package.json', pkgJson);
  });
});
