'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';
import types from './utils/types';

/**
 * Donut Chart component.
 * @augments Chart
 */
class DonutChart extends Chart {
}

DonutChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof DonutChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.arrayOf(Config.shapeOf({
		axis: Config.string(),
		class: Config.string(),
		color: Config.string(),
		data: Config.array().required(),
		id: Config.required().string(),
		name: Config.string(),
		regions: Config.array(),
		type: Config.oneOf(types.percentage),
		xs: Config.string()
	})),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof DonutChart
	 * @type {?string|undefined}
	 * @default donut
	 */
	type: Config.oneOf(types.percentage).value('donut')
};

export {DonutChart};
export default DonutChart;
