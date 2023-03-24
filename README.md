# baselines

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Collects baseline correction methods for JavaScript.
The idea is that all methods can be used by just providing the measurements y as input.

## Installation

`$ npm i baselines`

## Usage

```js
import {
  airPLSBaseline,
  iterativePolynomialBaseline,
  rollingBallBaseline,
} from 'baselines';

const baselineOutput = rollingBallBaseline(spectrum);

// {baseline: [], correctedSpectrum: []}
```

## [API Documentation](https://cheminfo.github.io/baselines/)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/baselines.svg
[npm-url]: https://www.npmjs.com/package/baselines
[ci-image]: https://github.com/cheminfo/baselines/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/baselines/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/baselines.svg
[download-url]: https://www.npmjs.com/package/baselines
