'use strict';

import { Config } from 'metal-state';
import Soy from 'metal-soy';

import Chart from './Chart';
import templates from './DonutChart.soy.js';
import types from './utils/types';

/**
 * Donut Chart component.
 * @augments Chart
 */
class DonutChart extends Chart {}

DonutChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof DonutChart
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
	 * @memberof DonutChart
	 * @type {?string|undefined}
	 * @default donut
	 */
	type: Config.oneOf(types.percentage).value('donut'),
};

Soy.register(DonutChart, templates);

export { DonutChart };
export default DonutChart;
