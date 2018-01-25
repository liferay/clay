import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Bubble Chart component.
 * @augments Chart
 */
class BubbleChart extends Chart {}

BubbleChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof BubbleChart
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
			type: Config.oneOf(types.percentage),
			x: Config.string(),
		})
	),

	/**
	 * Labels visibility
	 * @instance
	 * @memberof BubbleChart
	 * @type {Boolean}
	 * @default true
	 */
	labels: Config.bool().value(true),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof DonutChart
	 * @type {?string|undefined}
	 * @default donut
	 */
	type: Config.string().value('bubble'),
};

export {BubbleChart};
export default BubbleChart;
