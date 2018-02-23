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
	 * @instance
	 * @memberof AreaSplineChart
	 * @type {?string|undefined}
	 * @default area-spline
	 */
	type: Config.oneOf(types.area).value('area-spline'),
};

export {AreaSplineChart};
export default AreaSplineChart;
