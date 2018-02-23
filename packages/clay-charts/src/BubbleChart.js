import Chart from './Chart';
import {Config} from 'metal-state';

/**
 * Bubble Chart component.
 * @augments Chart
 */
class BubbleChart extends Chart {}

BubbleChart.STATE = {
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
