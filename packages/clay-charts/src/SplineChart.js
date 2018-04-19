import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './SplineChart.soy.js';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Spline Chart component.
 * @augments Chart
 */
class SplineChart extends Chart {}

SplineChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default spline
	 * @instance
	 * @memberof SplineChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.point).value('spline'),
};

Soy.register(SplineChart, templates);

export {SplineChart};
export default SplineChart;
