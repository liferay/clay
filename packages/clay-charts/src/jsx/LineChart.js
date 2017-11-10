'use strict';

import { LineChart as LineChartBase } from '../LineChart';
import Chart from './Chart';

/**
 * Line Chart component.
 * @augments Chart
 */
class LineChart extends Chart {}

LineChart.PROPS = LineChartBase.STATE;

export { LineChart };
export default LineChart;
