# generator-webpack-ts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A Yeoman Generator for creating websites with TypeScript, Sass, ESLint and Webpack

## Installation

First, install [Yeoman](http://yeoman.io) and generator-webpack-ts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-webpack-ts
```

Then generate your new project:

```bash
yo webpack-ts
```

The generator will prompt if you want to include the [Workbox](https://developers.google.com/web/tools/workbox/) service worker helper.

You can add new classes with the subgenerator

```bash
yo webpack-ts:classib another-greeter
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

ISC © [Gary Bortosky](https://github.com/GaryB432)


[npm-image]: https://badge.fury.io/js/generator-webpack-ts.svg
[npm-url]: https://npmjs.org/package/generator-webpack-ts
[travis-image]: https://travis-ci.com/GaryB432/generator-webpack-ts.svg?branch=master
[travis-url]: https://travis-ci.com/GaryB432/generator-webpack-ts
[daviddm-image]: https://david-dm.org/GaryB432/generator-webpack-ts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/GaryB432/generator-webpack-ts
