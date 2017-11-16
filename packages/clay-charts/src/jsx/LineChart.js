import Chart from './Chart';
import {LineChart as LineChartBase} from '../LineChart';

/**
 * Line Chart component.
 * @augments Chart
 */
class LineChart extends Chart {}

LineChart.PROPS = LineChartBase.STATE;

export {LineChart};
export default LineChart;
