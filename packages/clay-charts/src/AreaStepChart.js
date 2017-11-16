import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

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
			type: Config.oneOf(types.area),
		})
	),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof AreaStepChart
	 * @type {?string|undefined}
	 * @default area
	 */
	type: Config.oneOf(types.area).value('area-step'),
};

export {AreaStepChart};
export default AreaStepChart;
