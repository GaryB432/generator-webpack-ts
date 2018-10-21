'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const Case = require('case');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'confirm',
        name: 'workbox',
        message: `Would you like to include ${chalk.green('Workbox')} service worker?`,
        default: true
      }
    ]).then(answers => {
      this.workbox = answers.workbox;
    });
  }

  initializing() {
    this.log(
      yosay('Welcome to the minimal ' + chalk.red('Webpack TypeScript') + ' generator!')
    );

    this.composeWith(require.resolve('../classlib'), { arguments: ['Greeter'] });

    this.log(chalk.gray('Coming right up'));

    this.cwd = path.basename(process.cwd());
  }

  _writePackageJson(context) {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      context
    );
    if (this.workbox) {
      this.fs.extendJSON(this.destinationPath('package.json'), {
        scripts: {
          format: 'prettier --write "src/{scripts,styles}/**/*" "src/sw.ts"'
        },
        dependencies: {
          'workbox-webpack-plugin': '^3.6.2',
          express: '^4.16.4'
        }
      });
    }
  }

  writing() {
    const context = { appname: Case.kebab(this.cwd), genstamp: new Date().toString() };
    this.fs.copy(
      this.templatePath('_vscode/settings.json'),
      this.destinationPath('.vscode/settings.json')
    );
    this.fs.copy(
      this.templatePath('_vscode/tasks.json'),
      this.destinationPath('.vscode/tasks.json')
    );
    this.fs.copyTpl(
      this.templatePath('src/public/index.html'),
      this.destinationPath('src/public/index.html'),
      context
    );
    this.fs.copy(
      this.templatePath('src/public/img/yeoman-003.png'),
      this.destinationPath('src/public/img/yeoman-003.png'),
      context
    );
    this.fs.copyTpl(
      this.templatePath(this.workbox ? 'src/scripts/app-sw.ts' : 'src/scripts/app.ts'),
      this.destinationPath('src/scripts/app.ts'),
      context
    );
    this.fs.copy(
      this.templatePath('src/styles/app.scss'),
      this.destinationPath('src/styles/app.scss')
    );
    this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));

    this._writePackageJson(context);

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      context
    );
    if (this.workbox) {
      this.fs.copy(this.templatePath('server.js'), this.destinationPath('server.js'));
      this.fs.copyTpl(
        this.templatePath('src/sw.js'),
        this.destinationPath('src/sw.js'),
        context
      );
      this.fs.copyTpl(
        this.templatePath('src/public/manifest.json'),
        this.destinationPath('src/public/manifest.json'),
        context
      );
    }
    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );
    this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
    this.fs.copy(
      this.templatePath(this.workbox ? 'webpack.config-sw.js' : 'webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }

  install() {
    this.installDependencies({ npm: true, bower: false, yarn: false });
  }
};
