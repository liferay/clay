'use strict';

import { Config } from 'metal-state';

import { PieChart as PieChartBase } from '../PieChart';
import Chart from './Chart';

/**
 * Pie Chart component.
 * @augments Chart
 */
class PieChart extends Chart {}

PieChart.PROPS = PieChartBase.STATE;

export { PieChart };
export default PieChart;
