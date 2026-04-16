import { expect, test } from 'vitest';

import { rollingAverageBaseline } from '../rollingAverage.js';

test('rolling average', () => {
  let array = [1, 1, 1, 1];
  let result = rollingAverageBaseline(array);
  expect(result).toHaveProperty('baseline');
  expect(result).toHaveProperty('correctedSpectrum');

  result.correctedSpectrum.forEach((entry) => expect(entry).toBeCloseTo(0));
  result.baseline.forEach((entry) => expect(entry).toBeCloseTo(1));
});
