import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './BarChart.soy.js';
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

Soy.register(BarChart, templates);

export {BarChart};
export default BarChart;
