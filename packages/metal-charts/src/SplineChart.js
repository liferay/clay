'use strict';

import { Config } from 'metal-state';

import Chart from './Chart';
import types from './utils/types';

/**
 * Spline Chart component.
 * @augments Chart
 */
class SplineChart extends Chart {}

SplineChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof SplineChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(
		Config.shapeOf({
			axis: Config.string(),
			class: Config.string(),
			color: Config.string(),
			data: Config.array().required(),
			hide: Config.bool(),
			id: Config.required().string(),
			name: Config.string(),
			regions: Config.array(),
			type: Config.oneOf(types.point),
			xs: Config.string(),
		}),
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof SplineChart
	 * @type {?string|undefined}
	 * @default spline
	 */
	type: Config.oneOf(types.point).value('spline'),
};

export { SplineChart };
export default SplineChart;
