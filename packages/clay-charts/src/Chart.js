import ChartBase from './ChartBase';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Chart.soy.js';

/**
 * Metal Chart component.
 * @extends ChartBase
 * @extends Component
 */
class Chart extends Component {}

Object.assign(Chart.prototype, ChartBase);
Chart.STATE = Object.assign({}, ChartBase.STATE);

Soy.register(Chart, templates);

export {Chart};
export default Chart;
