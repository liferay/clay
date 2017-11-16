import Chart from './Chart';
import {SplineChart as SplineChartBase} from '../SplineChart';

/**
 * Spline Chart component.
 * @augments Chart
 */
class SplineChart extends Chart {}

SplineChart.PROPS = SplineChartBase.STATE;

export {SplineChart};
export default SplineChart;
