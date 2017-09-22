'use strict';

import { AreaLineChart as AreaLineChartBase } from '../AreaLineChart';
import Chart from './Chart';

/**
 * AreaLine Chart component.
 * @augments Chart
 */
class AreaLineChart extends Chart {}

AreaLineChart.PROPS = AreaLineChartBase.STATE;

export { AreaLineChart };
export default AreaLineChart;
