'use strict';

import { Config } from 'metal-state';
import Soy from 'metal-soy';

import Chart from './Chart';
import templates from './PieChart.soy.js';
import types from './utils/types';

/**
 * Pie Chart component.
 * @augments Chart
 */
class PieChart extends Chart {}

PieChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof PieChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(
		Config.shapeOf({
			axis: Config.oneOf(['y', 'y2']),
			class: Config.string(),
			color: Config.string(),
			data: Config.array().required(),
			hide: Config.bool(),
			id: Config.required().string(),
			name: Config.string(),
			regions: Config.array(),
			type: Config.oneOf(types.percentage),
			x: Config.string(),
		}),
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof PieChart
	 * @type {?string|undefined}
	 * @default pie
	 */
	type: Config.oneOf(types.percentage).value('pie'),
};

Soy.register(PieChart, templates);

export { PieChart };
export default PieChart;
