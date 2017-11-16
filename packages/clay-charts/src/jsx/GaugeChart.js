import Chart from './Chart';
import {GaugeChart as GaugeChartBase} from '../GaugeChart';

/**
 * Guage Chart component.
 * @augments Chart
 */
class GaugeChart extends Chart {}

GaugeChart.PROPS = GaugeChartBase.STATE;

export {GaugeChart};
export default GaugeChart;
