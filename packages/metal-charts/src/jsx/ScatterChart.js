'use strict';

import { Config } from 'metal-state';

import { ScatterChart as ScatterChartBase } from '../ScatterChart';
import Chart from './Chart';

/**
 * Scatter Chart component.
 * @augments Chart
 */
class ScatterChart extends Chart {}

ScatterChart.PROPS = ScatterChartBase.STATE;

export { ScatterChart };
export default ScatterChart;
