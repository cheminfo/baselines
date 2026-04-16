import { expect, test } from 'vitest';

import { rollingMedianBaseline } from '../rollingMedian.js';

test('rolling median', () => {
  let array = [1, 1, 1, 1];
  let result = rollingMedianBaseline(array);
  expect(result).toHaveProperty('baseline');
  expect(result).toHaveProperty('correctedSpectrum');

  result.correctedSpectrum.forEach((entry) => expect(entry).toBeCloseTo(0));
  result.baseline.forEach((entry) => expect(entry).toBeCloseTo(1));
});
