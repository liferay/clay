'use strict';

import { Config } from 'metal-state';
import Soy from 'metal-soy';

import Chart from './Chart';
import templates from './AreaLineChart.soy.js';
import types from './utils/types';

/**
 * AreaLine Chart Component
 * @augments Chart
 */
class AreaLineChart extends Chart {}

AreaLineChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof AreaLineChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(
		Config.shapeOf({
			class: Config.string(),
			color: Config.string(),
			data: Config.array().required(),
			hide: Config.bool(),
			id: Config.required().string(),
			type: Config.oneOf(types.area),
		}),
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof AreaLineChart
	 * @type {?string|undefined}
	 * @default area
	 */
	type: Config.oneOf(types.area).value('area'),
};

Soy.register(AreaLineChart, templates);

export { AreaLineChart };
export default AreaLineChart;
