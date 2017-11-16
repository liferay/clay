import Chart from './Chart';
import {StepChart as StepChartBase} from '../StepChart';

/**
 * Step Chart component.
 * @augments Chart
 */
class StepChart extends Chart {}

StepChart.PROPS = StepChartBase.STATE;

export {StepChart};
export default StepChart;
