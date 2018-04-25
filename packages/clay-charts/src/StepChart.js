import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './StepChart.soy.js';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Step Chart component.
 * @augments Chart
 */
class StepChart extends Chart {}

StepChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default step
	 * @instance
	 * @memberof StepChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.point).value('step'),
};

Soy.register(StepChart, templates);

export {StepChart};
export default StepChart;
