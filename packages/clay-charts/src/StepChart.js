import Chart from './Chart';
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
	 * @instance
	 * @memberof StepChart
	 * @type {?string|undefined}
	 * @default step
	 */
	type: Config.oneOf(types.point).value('step'),
};

export {StepChart};
export default StepChart;
