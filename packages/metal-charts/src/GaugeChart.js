'use strict';

import { Config } from 'metal-state';

import Chart from './Chart';
import types from './utils/types';

/**
 * Guage Chart component.
 * @augments Chart
 */
class GaugeChart extends Chart {}

GaugeChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof GaugeChart
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
			type: Config.oneOf(types.gauge),
			x: Config.string(),
		}),
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof GaugeChart
	 * @type {?string|undefined}
	 * @default gauge
	 */
	type: Config.oneOf(types.gauge).value('gauge'),
};

export { GaugeChart };
export default GaugeChart;
