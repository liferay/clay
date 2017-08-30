'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Pie Chart component.
 */
class PieChart extends Chart {
}

PieChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof PieChart
	 * @type {?string|undefined}
	 * @default pie
	 */
	type: Config.oneOf([
		'donut',
		'pie'
	]).value('pie')
};

export {PieChart};
export default PieChart;
