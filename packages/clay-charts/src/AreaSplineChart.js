import Chart from './Chart';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * AreaSpline Chart Component
 * @augments Chart
 */
class AreaSplineChart extends Chart {}

AreaSplineChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default area-spline
	 * @instance
	 * @memberof AreaSplineChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.area).value('area-spline'),
};

export {AreaSplineChart};
export default AreaSplineChart;
