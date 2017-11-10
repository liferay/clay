'use strict';

import { Config } from 'metal-state';
import Soy from 'metal-soy';

import Chart from './Chart';
import templates from './StepChart.soy.js';
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
	 * @memberof StepChart
	 * @type {?string|undefined}
	 * @default step
	 */
	type: Config.oneOf(types.point).value('step'),
};

Soy.register(StepChart, templates);

export { StepChart };
export default StepChart;
