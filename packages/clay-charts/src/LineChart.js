import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './LineChart.soy.js';
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
	 * @default line
	 * @instance
	 * @memberof LineChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.point).value('line'),
};

Soy.register(LineChart, templates);

export {LineChart};
export default LineChart;
