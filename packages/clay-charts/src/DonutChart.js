import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './DonutChart.soy.js';
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
	 * @default donut
	 * @instance
	 * @memberof DonutChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.percentage).value('donut'),
};

Soy.register(DonutChart, templates);

export {DonutChart};
export default DonutChart;
