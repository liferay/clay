/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import BaseChart, {IProps, Types} from './BaseChart';
import Billboard from './BillboardWrapper';
import React from 'react';

const setType = (type: Types) => ({data, ...otherProps}: IProps) => (
	<BaseChart {...otherProps} data={{...data, type}} />
);

export const AreaLineChart = setType('area-line-range');
export const AreaSplineChart = setType('area-spline');
export const AreaStepChart = setType('area-step');
export const BarChart = setType('bar');
export const BubbleChart = setType('bubble');
export const DonutChart = setType('donut');
export const GaugeChart = setType('gauge');
export const Geomap = setType('geo-map');
export const LineChart = setType('line');
export const PieChart = setType('pie');
export const PredictiveChart = setType('predictive');
export const RadarChart = setType('radar');
export const ScatterChart = setType('scatter');
export const SplineChart = setType('spline');
export const StepChart = setType('step');
export {Billboard};

export default BaseChart;
