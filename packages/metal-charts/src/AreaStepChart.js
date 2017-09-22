'use strict';

import { Config } from 'metal-state';
import Soy from 'metal-soy';

import Chart from './Chart';
import templates from './AreaStepChart.soy.js';

/**
 * AreaStep Chart Component
 * @augments Chart
 */
class AreaStepChart extends Chart {}

AreaStepChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof AreaStepChart
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
		}),
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof AreaStepChart
	 * @type {?string|undefined}
	 * @default area
	 */
	type: Config.string().value('area-step'),
};

Soy.register(AreaStepChart, templates);

export { AreaStepChart };
export default AreaStepChart;
