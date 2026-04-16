import { expect, test } from 'vitest';

import {
  airPLSBaseline,
  rollingBallBaseline,
  iterativePolynomialBaseline,
} from '../index.js';

test('rolling ball', () => {
  let result = rollingBallBaseline([1, 1, 1, 1]);
  expect(result).toHaveProperty('baseline');
  expect(result).toHaveProperty('correctedSpectrum');

  result.correctedSpectrum.forEach((entry) => expect(entry).toBeCloseTo(0));
  result.baseline.forEach((entry) => expect(entry).toBeCloseTo(1));
});

test('airPLSBaseline', () => {
  let result = airPLSBaseline([1, 1, 1, 1]);
  expect(result).toHaveProperty('baseline');
  expect(result).toHaveProperty('correctedSpectrum');

  result.correctedSpectrum.forEach((entry) => expect(entry).toBeCloseTo(0));
  result.baseline.forEach((entry) => expect(entry).toBeCloseTo(1));
});

test('iterativePolynomialBaseline', () => {
  let result = iterativePolynomialBaseline([1, 1, 1, 1]);
  expect(result).toHaveProperty('baseline');
  expect(result).toHaveProperty('correctedSpectrum');

  result.correctedSpectrum.forEach((entry) => expect(entry).toBeCloseTo(0));
  result.baseline.forEach((entry) => expect(entry).toBeCloseTo(1));
});
