'use strict';

import { StepChart as StepChartBase } from '../StepChart';
import Chart from './Chart';

/**
 * Step Chart component.
 * @augments Chart
 */
class StepChart extends Chart {}

StepChart.PROPS = StepChartBase.STATE;

export { StepChart };
export default StepChart;
