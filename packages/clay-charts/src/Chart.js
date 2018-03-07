import ChartBase from './ChartBase';
import DataComponent from './DataComponent';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Chart.soy.js';

/**
 * Metal Chart component.
 * @extends Component
 * @extends ChartBase
 */
class Chart extends Component {}

Object.assign(Chart.prototype, ChartBase);
Object.assign(Chart.prototype, DataComponent);
Chart.STATE = Object.assign(ChartBase.STATE, DataComponent.STATE);

Soy.register(Chart, templates);

export {Chart};
export default Chart;
