'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-webpack-ts:classlib', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/classlib'))
      .withArguments(['CustomerInventoryItem'])
      .withPrompts({ wtf: false });
  });

  it('creates files', () => {
    assert.file([
      '__tests__/customer-inventory-item.spec.ts',
      'src/scripts/customer-inventory-item.ts',
      'src/styles/customer-inventory-item.scss'
    ]);
  });

  it('mentions CustomerInventoryItem', () => {
    assert.fileContent(
      'src/scripts/customer-inventory-item.ts',
      'export class CustomerInventoryItem'
    );
  });
});
