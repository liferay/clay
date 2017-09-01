'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Step Chart component.
 * @augments Chart
 */
class StepChart extends Chart {
}

StepChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof StepChart
	 * @type {?string|undefined}
	 * @default step
	 */
	type: Config.oneOf([
		'area',
		'area-spline',
		'area-step',
		'bar',
		'line',
		'scatter',
		'spline',
		'step',
	]).value('step')
};

export {StepChart};
export default StepChart;
