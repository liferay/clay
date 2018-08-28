import ChartBase from './ChartBase';
import Component from 'metal-component';
import {Config} from 'metal-state';
import Soy from 'metal-soy';
import templates from './Chart.soy.js';

/**
 * Metal Chart component.
 * @extends ChartBase
 * @extends Component
 */
class Chart extends Component {}

Object.assign(Chart.prototype, ChartBase);

Chart.STATE = {
	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof Chart
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),
};

Chart.STATE = Object.assign(Chart.STATE, ChartBase.STATE);

Soy.register(Chart, templates);

export {Chart};
export default Chart;
