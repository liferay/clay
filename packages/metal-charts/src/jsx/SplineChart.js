'use strict';

import {Config} from 'metal-state';

import {SplineChart as SplineChartBase} from '../SplineChart';
import Chart from './Chart';

/**
 * Spline Chart component.
 * @augments Chart
 */
class SplineChart extends Chart {
}

SplineChart.PROPS = SplineChartBase.STATE;

export {SplineChart};
export default SplineChart;
