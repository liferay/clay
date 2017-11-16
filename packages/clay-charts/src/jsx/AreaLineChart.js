import Chart from './Chart';
import {AreaLineChart as AreaLineChartBase} from '../AreaLineChart';

/**
 * AreaLine Chart component.
 * @augments Chart
 */
class AreaLineChart extends Chart {}

AreaLineChart.PROPS = AreaLineChartBase.STATE;

export {AreaLineChart};
export default AreaLineChart;
