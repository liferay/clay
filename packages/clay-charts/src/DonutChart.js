import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Donut Chart component.
 * @augments Chart
 */
class DonutChart extends Chart {}

DonutChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof DonutChart
	 * @type {?string|undefined}
	 * @default donut
	 */
	type: Config.oneOf(types.percentage).value('donut'),
};

export {DonutChart};
export default DonutChart;
