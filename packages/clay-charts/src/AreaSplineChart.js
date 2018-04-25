import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './AreaSplineChart.soy.js';
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

Soy.register(AreaSplineChart, templates);

export {AreaSplineChart};
export default AreaSplineChart;
