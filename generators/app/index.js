'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay('Welcome to the amazing ' + chalk.red('Webpack TypeScript') + ' generator!'));
    const prompts = [
      {
        default: false,
        message: 'Would you like to enable this option?',
        name: 'someAnswer',
        type: 'confirm'
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }
  writing() {
    if (this.props.someAnswer) {
      this.fs.copy(this.templatePath('dummyfile.txt'), this.destinationPath('dummyfile.txt'));
    }
  }
  install() {
    this.installDependencies();
  }
};
