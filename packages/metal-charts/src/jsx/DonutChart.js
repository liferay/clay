'use strict';

import { DonutChart as DonutChartBase } from '../DonutChart';
import Chart from './Chart';

/**
 * Donut Chart component.
 * @augments Chart
 */
class DonutChart extends Chart {}

DonutChart.PROPS = DonutChartBase.STATE;

export { DonutChart };
export default DonutChart;
