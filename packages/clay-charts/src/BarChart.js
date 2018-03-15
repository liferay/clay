import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Bar Chart component.
 * @augments Chart
 */
class BarChart extends Chart {}

BarChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default bar
	 * @instance
	 * @memberof BarChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.point).value('bar'),
};

export {BarChart};
export default BarChart;
