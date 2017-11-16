import Chart from './Chart';
import {AreaStepChart as AreaStepChartBase} from '../AreaStepChart';

/**
 * AreaStep Chart component.
 * @augments Chart
 */
class AreaStepChart extends Chart {}

AreaStepChart.PROPS = AreaStepChartBase.STATE;

export {AreaStepChart};
export default AreaStepChart;
