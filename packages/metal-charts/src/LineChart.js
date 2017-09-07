'use strict';

import { Config } from 'metal-state';
import Soy from 'metal-soy';

import Chart from './Chart';
import templates from './LineChart.soy.js';
import types from './utils/types';

/**
 * Line Chart component.
 * @augments Chart
 */
class LineChart extends Chart {}

LineChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof LineChart
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
			type: Config.oneOf(types.point),
			x: Config.string(),
		}),
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof LineChart
	 * @type {?string|undefined}
	 * @default line
	 */
	type: Config.oneOf(types.point).value('line'),
};

Soy.register(LineChart, templates);

export { LineChart };
export default LineChart;
