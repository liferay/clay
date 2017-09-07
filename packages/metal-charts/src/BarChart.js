'use strict';

import { Config } from 'metal-state';

import Chart from './Chart';
import types from './utils/types';

/**
 * Bar Chart component.
 * @augments Chart
 */
class BarChart extends Chart {}

BarChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof BarChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(
		Config.shapeOf({
			axis: Config.oneOf(['y', 'y2']),
			class: Config.string(),
			color: Config.string(),
			data: Config.array().required(),
			id: Config.required().string(),
			hide: Config.bool(),
			name: Config.string(),
			regions: Config.array(),
			type: Config.oneOf(types.point),
			x: Config.string(),
		}),
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof BarChart
	 * @type {?string|undefined}
	 * @default bar
	 */
	type: Config.oneOf(types.point).value('bar'),
};

export { BarChart };
export default BarChart;
