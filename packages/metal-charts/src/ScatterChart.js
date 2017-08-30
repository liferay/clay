'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Scatter Chart component.
 */
class ScatterChart extends Chart {
}

ScatterChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof ScatterChart
	 * @type {?string|undefined}
	 * @default scatter
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
	]).value('scatter')
};

export {ScatterChart};
export default ScatterChart;
