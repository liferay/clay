import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './AreaLineChart.soy.js';
import types from './utils/types';
import {Config} from 'metal-state';

/**
 * AreaLine Chart Component
 * @augments Chart
 */
class AreaLineChart extends Chart {}

AreaLineChart.STATE = {
	/**
	 * The variety of chart that will be rendered.
	 * @default area
	 * @instance
	 * @memberof AreaLineChart
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.area).value('area'),
};

Soy.register(AreaLineChart, templates);

export {AreaLineChart};
export default AreaLineChart;
