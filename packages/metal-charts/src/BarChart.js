'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Bar Chart component.
 * @augments Chart
 */
class BarChart extends Chart {
}

BarChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof BarChart
	 * @type {?string|undefined}
	 * @default bar
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
	]).value('bar'),
};

export {BarChart};
export default BarChart;
