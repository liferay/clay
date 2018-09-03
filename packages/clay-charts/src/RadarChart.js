import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './RadarChart.soy.js';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Radar Chart Component
 * @augments Chart
 */
class RadarChart extends Chart {}

RadarChart.STATE = {
	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof RadarChart
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Labels visibility
	 * @default true
	 * @instance
	 * @memberof RadarChart
	 * @type {Boolean}
	 */
	labels: Config.bool().value(true),

	/**
	 * Set radar options
	 * @default undefined
	 * @instance
	 * @memberof RadarChart
	 * @type {?Object}
	 *
	 */
	radar: Config.shapeOf({
		axis: Config.shapeOf({
			line: Config.shapeOf({
				show: Config.bool(),
			}),
			max: Config.number(),
			text: Config.shapeOf({
				show: Config.bool(),
			}),
		}),
		level: Config.shapeOf({
			show: Config.bool(),
			text: Config.shapeOf({
				format: Config.func(),
				show: Config.bool(),
			}),
		}),
		size: Config.shapeOf({
			ratio: Config.number(),
		}),
	}),

	/**
	 * The variety of chart that will be rendered.
	 * @default radar
	 * @instance
	 * @memberof AreaLineChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.radar).value('radar'),
};

Soy.register(RadarChart, templates);

export {RadarChart};
export default RadarChart;
