'use strict';

import Soy from 'metal-soy';

import ChartBase from './ChartBase';
import templates from './MetalChart.soy.js';

/**
 * Metal Chart component.
 */
class MetalChart extends ChartBase {
}
Soy.register(MetalChart, templates);

export { MetalChart };
export default MetalChart;
