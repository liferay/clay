'use strict';

import Chart from './Chart';

/**
 * Bar Chart component.
 */
class BarChart extends Chart {
}

BarChart.STATE = {
	type: Chart.STATE.type.value('bar')
};

export {BarChart};
export default BarChart;
