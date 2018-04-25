import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './GaugeChart.soy.js';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * Guage Chart component.
 * @augments Chart
 */
class GaugeChart extends Chart {}

GaugeChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default gauge
	 * @instance
	 * @memberof GaugeChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.gauge).value('gauge'),
};

Soy.register(GaugeChart, templates);

export {GaugeChart};
export default GaugeChart;
