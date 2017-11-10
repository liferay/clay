'use strict';

import { GaugeChart as GaugeChartBase } from '../GaugeChart';
import Chart from './Chart';

/**
 * Guage Chart component.
 * @augments Chart
 */
class GaugeChart extends Chart {}

GaugeChart.PROPS = GaugeChartBase.STATE;

export { GaugeChart };
export default GaugeChart;
