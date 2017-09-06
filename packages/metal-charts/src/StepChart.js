'use strict';

import { Config } from 'metal-state';

import Chart from './Chart';
import types from './utils/types';

/**
 * Step Chart component.
 * @augments Chart
 */
class StepChart extends Chart {}

StepChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof StepChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(
		Config.shapeOf({
			axis: Config.string(),
			class: Config.string(),
			color: Config.string(),
			data: Config.array().required(),
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
	 * @memberof StepChart
	 * @type {?string|undefined}
	 * @default step
	 */
	type: Config.oneOf(types.point).value('step'),
};

export { StepChart };
export default StepChart;
