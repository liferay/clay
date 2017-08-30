'use strict';

import Chart from './Chart';

/**
 * Scatter Chart component.
 */
class ScatterChart extends Chart {
}

ScatterChart.STATE = {
	type: Chart.STATE.type.value('scatter')
};

export {ScatterChart};
export default ScatterChart;
