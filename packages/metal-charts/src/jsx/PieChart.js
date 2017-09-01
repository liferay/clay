'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Pie Chart component.
 * @augments Chart
 */
class PieChart extends Chart {
}

PieChart.PROPS = {
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
