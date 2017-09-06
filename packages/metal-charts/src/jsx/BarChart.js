'use strict';

import { Config } from 'metal-state';

import { BarChart as BarChartBase } from '../BarChart';
import Chart from './Chart';

/**
 * Bar Chart component.
 * @augments Chart
 */
class BarChart extends Chart {}

BarChart.PROPS = BarChartBase.STATE;

export { BarChart };
export default BarChart;
