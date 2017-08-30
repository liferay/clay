'use strict';

import Chart from './Chart';

/**
 * Line Chart component.
 */
class LineChart extends Chart {
}

LineChart.STATE = {
	type: Chart.STATE.type.value('line')
};

export {LineChart};
export default LineChart;
