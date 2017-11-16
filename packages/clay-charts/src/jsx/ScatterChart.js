import Chart from './Chart';
import {ScatterChart as ScatterChartBase} from '../ScatterChart';

/**
 * Scatter Chart component.
 * @augments Chart
 */
class ScatterChart extends Chart {}

ScatterChart.PROPS = ScatterChartBase.STATE;

export {ScatterChart};
export default ScatterChart;
