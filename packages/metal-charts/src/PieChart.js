'use strict';

import Chart from './Chart';

/**
 * Pie Chart component.
 */
class PieChart extends Chart {
}

PieChart.STATE = {
	type: Chart.STATE.type.value('pie')
};

export {PieChart};
export default PieChart;
