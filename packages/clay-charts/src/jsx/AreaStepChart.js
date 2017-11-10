'use strict';

import { AreaStepChart as AreaStepChartBase } from '../AreaStepChart';
import Chart from './Chart';

/**
 * AreaStep Chart component.
 * @augments Chart
 */
class AreaStepChart extends Chart {}

AreaStepChart.PROPS = AreaStepChartBase.STATE;

export { AreaStepChart };
export default AreaStepChart;
