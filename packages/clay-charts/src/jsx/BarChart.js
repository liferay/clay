import Chart from './Chart';
import {BarChart as BarChartBase} from '../BarChart';

/**
 * Bar Chart component.
 * @augments Chart
 */
class BarChart extends Chart {}

BarChart.PROPS = BarChartBase.STATE;

export {BarChart};
export default BarChart;
