'use strict';

import Soy from 'metal-soy';

import ChartBase from './ChartBase';
import templates from './Chart.soy.js';

/**
 * Metal Chart component.
 */
class Chart extends ChartBase {
}
Soy.register(Chart, templates);

export { Chart };
export default Chart;
