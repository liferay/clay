import Chart from './Chart';
import {AreaSplineChart as AreaSplineChartBase} from '../AreaSplineChart';

/**
 * AreaSpline Chart component.
 * @augments Chart
 */
class AreaSplineChart extends Chart {}

AreaSplineChart.PROPS = AreaSplineChartBase.STATE;

export {AreaSplineChart};
export default AreaSplineChart;
