import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Line Chart component.
 * @augments Chart
 */
class LineChart extends Chart {}

LineChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof LineChart
	 * @type {?string|undefined}
	 * @default line
	 */
	type: Config.oneOf(types.point).value('line'),
};

export {LineChart};
export default LineChart;
