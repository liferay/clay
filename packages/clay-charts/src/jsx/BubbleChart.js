import Chart from './Chart';
import {BubbleChart as BubbleChartBase} from '../BubbleChart';

/**
 * Bubble Chart component.
 * @augments Chart
 */
class BubbleChart extends Chart {}

BubbleChart.PROPS = BubbleChartBase.STATE;

export {BubbleChart};
export default BubbleChart;
