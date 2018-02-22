import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

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
			type: Config.oneOf(types.all),
			x: Config.string(),
		})
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

export {LineChart};
export default LineChart;
