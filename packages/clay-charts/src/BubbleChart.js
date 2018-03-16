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
	 * @default true
	 * @instance
	 * @memberof BubbleChart
	 * @type {Boolean}
	 */
	labels: Config.bool().value(true),

	/**
	 * The variety of chart that will be rendered.
	 * @default donut
	 * @instance
	 * @memberof BubbleChart
	 * @type {?(string|undefined)}
	 */
	type: Config.string().value('bubble'),
};

export {BubbleChart};
export default BubbleChart;
