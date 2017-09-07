'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import ChartBase from './ChartBase';
import templates from './Chart.soy.js';

/**
 * Metal Chart component.
 * @extends Component
 * @extends ChartBase
 */
class Chart extends Component {}

Object.assign(Chart.prototype, ChartBase);
Chart.STATE = ChartBase.STATE;

Soy.register(Chart, templates);

export { Chart };
export default Chart;
