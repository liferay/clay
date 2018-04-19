import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './AreaStepChart.soy.js';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * AreaStep Chart Component
 * @augments Chart
 */
class AreaStepChart extends Chart {}

AreaStepChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default area
	 * @instance
	 * @memberof AreaStepChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.area).value('area-step'),
};

Soy.register(AreaStepChart, templates);

export {AreaStepChart};
export default AreaStepChart;
