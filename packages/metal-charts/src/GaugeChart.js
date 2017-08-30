'use strict';

import {Config} from 'metal-state';

import Chart from './Chart';

/**
 * Guage Chart component.
 */
class GaugeChart extends Chart {
}

GaugeChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof GaugeChart
	 * @type {?string|undefined}
	 * @default gauge
	 */
	type: Config.oneOf([
		'gauge'
	]).value('gauge')
};

export {GaugeChart};
export default GaugeChart;
