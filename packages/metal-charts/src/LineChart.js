'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';
import types from './utils/types';

/**
 * Line Chart component.
 * @augments Chart
 */
class LineChart extends Chart {
}

LineChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof LineChart
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
		type: Config.oneOf(types.point),
		xs: Config.string()
	})),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof LineChart
	 * @type {?string|undefined}
	 * @default line
	 */
	type: Config.oneOf(types.point).value('line')
};

export {LineChart};
export default LineChart;
