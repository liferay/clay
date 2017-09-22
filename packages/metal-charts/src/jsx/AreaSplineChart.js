'use strict';

import { AreaSplineChart as AreaSplineChartBase } from '../AreaSplineChart';
import Chart from './Chart';

/**
 * AreaSpline Chart component.
 * @augments Chart
 */
class AreaSplineChart extends Chart {}

AreaSplineChart.PROPS = AreaSplineChartBase.STATE;

export { AreaSplineChart };
export default AreaSplineChart;
