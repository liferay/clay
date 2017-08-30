'use strict';

import Chart from './Chart';

/**
 * Donut Chart component.
 */
class DonutChart extends Chart {
}

DonutChart.STATE = {
	type: Chart.STATE.type.value('donut')
};

export {DonutChart};
export default DonutChart;
