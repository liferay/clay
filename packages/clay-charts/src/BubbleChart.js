import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './BubbleChart.soy.js';
import {Config} from 'metal-state';

/**
 * Bubble Chart component.
 * @augments Chart
 */
class BubbleChart extends Chart {}

BubbleChart.STATE = {
	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof BubbleChart
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

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

Soy.register(BubbleChart, templates);

export {BubbleChart};
export default BubbleChart;
