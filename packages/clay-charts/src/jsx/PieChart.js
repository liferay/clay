import Chart from './Chart';
import {PieChart as PieChartBase} from '../PieChart';

/**
 * Pie Chart component.
 * @augments Chart
 */
class PieChart extends Chart {}

PieChart.PROPS = PieChartBase.STATE;

export {PieChart};
export default PieChart;
