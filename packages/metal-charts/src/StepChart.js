'use strict';

import Chart from './Chart';

/**
 * Step Chart component.
 */
class StepChart extends Chart {
}

StepChart.STATE = {
	type: Chart.STATE.type.value('step')
};

export {StepChart};
export default StepChart;
