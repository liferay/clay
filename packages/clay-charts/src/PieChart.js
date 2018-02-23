import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Pie Chart component.
 * @augments Chart
 */
class PieChart extends Chart {}

PieChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof PieChart
	 * @type {?string|undefined}
	 * @default pie
	 */
	type: Config.oneOf(types.percentage).value('pie'),
};

export {PieChart};
export default PieChart;
