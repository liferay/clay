'use strict';

import Chart from './Chart';

/**
 * Guage Chart component.
 */
class GaugeChart extends Chart {
}

GaugeChart.STATE = {
	type: Chart.STATE.type.value('gauge')
};

export {GaugeChart};
export default GaugeChart;
