import Chart from './Chart';
import {DonutChart as DonutChartBase} from '../DonutChart';

/**
 * Donut Chart component.
 * @augments Chart
 */
class DonutChart extends Chart {}

DonutChart.PROPS = DonutChartBase.STATE;

export {DonutChart};
export default DonutChart;
