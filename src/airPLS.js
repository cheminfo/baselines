import airpls from 'ml-airpls';
import { xSequentialFillFromTo } from 'ml-spectra-processing/x';
/**
 * Adaptive iteratively reweighted penalized least squares [1]
 *
 * This function calls ml-airpls
 *
 * References:
 * [1] Zhang, Z.-M.; Chen, S.; Liang, Y.-Z.
 * Baseline Correction Using Adaptive Iteratively Reweighted Penalized Least Squares.
 * Analyst 2010, 135 (5), 1138–1146. https://doi.org/10.1039/B922045C.
 * @export
 * @param {Array<number>} ys
 * @param {object} [options] - Options object
 * @param {Array<number>} [options.x] Optional, Independent axis variable. If not specified, we use a linear grid
 * @param {object} [options.regression] - Options for the regression
 * @param {number} [options.regression.maxIterations = 100] - Maximum number of allowed iterations
 * @param {function} [options.regression.§Regression = PolynomialRegression] - Regression class with a predict method
 * @param {*} [options.regression.regressionOptions] - Options for regressionFunction
 * @param {number} [options.regression.tolerance = 0.001] - Convergence error tolerance
 * @returns {BaselineOutput}
 */
export function airPLSBaseline(ys, options = {}) {
  const numberPoints = ys.length;
  let { x, regressionOptions } = options;
  if (!x) {
    x = xSequentialFillFromTo({
      from: 0,
      to: numberPoints - 1,
      size: numberPoints,
    });
  }
  let output = airpls(x, ys, regressionOptions);

  return { baseline: output.baseline, correctedSpectrum: output.corrected };
}
