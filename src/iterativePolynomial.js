import sequentialFill from 'ml-array-sequential-fill';
import { baselineCorrectionRegression } from 'ml-baseline-correction-regression';

/**
 * Iterative polynomial fitting [1]
 *
 * Implementation based on ml-baseline-correction-regression
 *
 * References:
 * [1] Gan, F.; Ruan, G.; Mo, J.
 * Baseline Correction by Improved Iterative Polynomial Fitting with Automatic Threshold.
 *  Chemometrics and Intelligent Laboratory Systems 2006, 82 (1), 59–65.
 * https://doi.org/10.1016/j.chemolab.2005.08.009.
 * @export
 * @param {Array<number>} ys
 * @param {object} [options] - Options object
 * @param {Array<number>} [options.x] Optional, Independent axis variable. If not specified, we use a linear grid
 * @param {Object} [options.regression]
 * @param {number} [options.regression.maxIterations = 100] - Maximum number of allowed iterations
 * @param {Object} [options.regression]
 * @param {function} [options.regression.Regression = PolynomialRegression] - Regression class with a predict method
 * @param {Object} [options.regression.regressionOptions] - Options for regressionFunction
 * @param {number} [options.regression.tolerance = 0.001] - Convergence error tolerance
 * @returns {BaselineOutput}
 */
export function iterativePolynomialBaseline(ys, options = {}) {
  const numberPoints = ys.length;
  let { x, regressionOptions } = options;
  if (!x) {
    x = sequentialFill({ from: 0, to: numberPoints - 1, size: numberPoints });
  }

  let output = baselineCorrectionRegression(x, ys, regressionOptions);

  return { baseline: output.baseline, correctedSpectrum: output.corrected };
}
