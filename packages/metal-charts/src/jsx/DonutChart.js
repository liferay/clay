'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Donut Chart component.
 * @augments Chart
 */
class DonutChart extends Chart {
}

DonutChart.PROPS = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof DonutChart
	 * @type {?string|undefined}
	 * @default donut
	 */
	type: Config.oneOf([
		'donut',
		'pie'
	]).value('donut')
};

export {DonutChart};
export default DonutChart;
