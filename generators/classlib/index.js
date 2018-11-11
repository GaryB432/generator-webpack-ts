'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');
const Case = require('case');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('className', {
      type: String,
      required: true,
      desc: 'the name of the class'
    });
  }

  initializing() {
    this.log(chalk.gray(`${this.options.className} coming right up`));
    this.cwd = path.basename(process.cwd());
  }

  writing() {
    const context = {
      className: Case.kebab(this.options.className),
      classTypeName: Case.pascal(this.options.className),
      genstamp: new Date().toString()
    };
    this.fs.copyTpl(
      this.templatePath('__tests__/blueprint.spec.ts'),
      this.destinationPath(`__tests__/${context.className}.spec.ts`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('src/scripts/blueprint.ts'),
      this.destinationPath(`src/scripts/${context.className}.ts`),
      context
    );
    this.fs.copyTpl(
      this.templatePath('src/styles/blueprint.scss'),
      this.destinationPath(`src/styles/${context.className}.scss`),
      context
    );
  }
};
