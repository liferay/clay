import Chart from './Chart';
import {RadarChart as RadarChartBase} from '../RadarChart';

/**
 * Radar Chart component.
 * @augments Chart
 */
class RadarChart extends Chart {}

RadarChart.PROPS = RadarChartBase.STATE;

export {RadarChart};
export default RadarChart;
