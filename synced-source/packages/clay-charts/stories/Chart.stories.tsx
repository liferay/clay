/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '../src/scss/main.scss';

import React, {useRef, useState} from 'react';

import ClayChart from '../src';
const MAP_DATA = require('./static/map.json');

const COLUMNS = [
	['data1', 100, 20, 30],
	['data2', 20, 70, 100],
];
const COLUMNS_2 = [
	['data1', 10, 50, 60],
	['data2', 70, 30, 10],
];

export default {
	parameters: {
		chromatic: {disableSnapshot: true},
	},
	title: 'Design System/Charts/React Billboard',
};

export const Bar = () => {
	const [active, setActive] = React.useState(false);

	return (
		<div>
			<button onClick={() => setActive((val) => !val)}>
				Change Data
			</button>

			<ClayChart
				data={{
					columns: active ? COLUMNS : COLUMNS_2,
					type: 'bar',
				}}
			/>
		</div>
	);
};

export const Bubble = () => (
	<ClayChart
		data={{
			columns: COLUMNS,
			type: 'bubble',
		}}
	/>
);

export const Combo = () => (
	<ClayChart
		data={{
			columns: [
				['data1', 30, 20, 50, 40, 60, 50],
				['data2', 200, 130, 90, 240, 130, 220],
				['data3', 300, 200, 160, 400, 250, 250],
				['data4', 200, 130, 90, 240, 130, 220],
				['data5', 130, 120, 150, 140, 160, 150],
			],
			types: {
				data1: 'spline',
				data2: 'line',
				data3: 'bar',
				data4: 'step',
				data5: 'bar',
			},
		}}
	/>
);

export const Donut = () => (
	<ClayChart
		data={{
			columns: [
				['data1', 30],
				['data2', 70],
			],
			type: 'donut',
		}}
	/>
);

export const Gauge = () => (
	<ClayChart
		data={{
			columns: [['data1', 87.4]],
			type: 'gauge',
		}}
	/>
);

export const GeoMap = () => (
	<div style={{height: 380}}>
		<ClayChart
			color={{
				range: {
					max: '#0065e4',
					min: '#b1d4ff',
				},
				selected: '#4b9bff',
				value: 'gdp_md_est',
			}}
			data={{
				...MAP_DATA,
				type: 'geo-map',
			}}
		/>
	</div>
);

export const Line = () => (
	<ClayChart
		data={{
			columns: COLUMNS,
			type: 'line',
		}}
	/>
);

export const Pie = () => (
	<ClayChart
		data={{
			columns: [
				['data1', 30],
				['data2', 70],
			],
			type: 'pie',
		}}
	/>
);

export const Scatter = () => (
	<ClayChart
		data={{
			columns: [
				['data1', 100, 20, 30, 50, 40, 80, 220, 300],
				['data2', 20, 70, 100, 340, 160, 20, 80, 200],
			],
			type: 'scatter',
		}}
	/>
);

export const Spline = () => (
	<ClayChart
		data={{
			columns: COLUMNS,
			type: 'spline',
		}}
	/>
);

export const AreaStep = () => (
	<ClayChart
		data={{
			columns: COLUMNS,
			type: 'area-step',
		}}
	/>
);

export const AxisLabel = () => (
	<ClayChart
		axis={{
			y: {label: 'Y Axis Label'},
			y2: {
				label: 'Y2 Axis Label',
				show: true,
			},
		}}
		data={{
			columns: [
				['data1', 10, 70, 30, 120, 20, 10],
				['data2', 100, 150, 120, 90, 10, 55],
			],
			type: 'area-step',
		}}
	/>
);

export const AxisRange = () => (
	<ClayChart
		axis={{
			y2: {
				max: 500,
				min: 10,
				show: true,
			},
		}}
		data={{
			axes: {
				data1: 'y',
				data2: 'y2',
			},
			columns: [
				['data1', 10, 90, 30, 120, 20, 160],
				['data2', 200, 150, 120, 90, 10, 75],
			],
			type: 'line',
		}}
	/>
);

export const DataColor = () => (
	<ClayChart
		data={{
			colors: {
				data1: 'hotpink',
				data2: 'cadetblue',
			},
			columns: [
				['data1', 10, 90, 30, 120, 20, 160],
				['data2', 200, 150, 120, 90, 10, 75],
			],
			type: 'line',
		}}
	/>
);

export const PredictiveForecast = () => (
	<ClayChart
		axis={{
			x: {
				type: 'timeseries',
			},
		}}
		data={{
			columns: [
				[
					'x',
					'2018-01-01',
					'2018-02-01',
					'2018-03-01',
					'2018-04-01',
					'2018-05-01',
					'2018-06-01',
					'2018-07-01',
					'2018-08-01',
					'2018-09-01',
					'2018-10-01',
					'2018-11-01',
					'2018-12-01',
				],
				[
					'product1',
					130,
					340,
					200,
					100,
					40,
					300,
					{high: 240, low: 140, mid: 180},
					{high: 380, low: 300, mid: 350},
					{high: 480, low: 320, mid: 400},
					{high: 260, low: 100, mid: 200},
					{high: 140, low: 100, mid: 120},
					{high: 180, low: 80, mid: 100},
				],
				[
					'product2',
					210,
					180,
					30,
					90,
					40,
					120,
					{high: 260, low: 180, mid: 240},
					{high: 460, low: 360, mid: 420},
					{high: 180, low: 80, mid: 120},
					{high: 120, low: 60, mid: 80},
					{high: 80, low: 10, mid: 20},
					{high: 100, low: 20, mid: 60},
				],
			],
			type: 'predictive',
			types: {
				product1: 'area-line-range',
				product2: 'area-spline-range',
			},
			x: 'x',
		}}
		predictionDate="2018-06-01"
	/>
);

export const Regions = () => (
	<ClayChart
		data={{
			columns: [
				['data1', 30, 20, 50, 40, 60, 50],
				['data2', 200, 130, 90, 240, 130, 220],
			],
			type: 'bar',
		}}
		regions={[
			{
				axis: 'y',
				end: 100,
				start: 0,
			},
			{
				axis: 'y',
				end: 300,
				start: 200,
			},
		]}
	/>
);

export const XAxisFormat = () => (
	<ClayChart
		axis={{
			x: {
				localtime: false,
				tick: {
					format: (x: any) => x.getFullYear(),
				},
				type: 'timeseries',
			},
		}}
		data={{
			columns: [
				['data1', 30, 20, 50, 40, 60, 50],
				[
					'x',
					'2011-01-01',
					'2012-01-01',
					'2013-01-01',
					'2014-01-01',
					'2015-01-01',
					'2016-01-01',
				],
			],
			type: 'line',
			x: 'x',
		}}
	/>
);

export const ChartWithRef = () => {
	const chartRef = useRef<any>(null);

	return (
		<div>
			<button
				onClick={() => {
					chartRef.current!.hide('data1');
				}}
			>
				Hide "data1"
			</button>

			<ClayChart
				data={{
					columns: COLUMNS,
					type: 'bar',
				}}
				ref={chartRef}
			/>
		</div>
	);
};

export const GeomapWithRef = () => {
	const [size, setSize] = useState({});
	const chartRef = useRef<any>(null);

	return (
		<div>
			<button onClick={() => setSize(chartRef.current!.getSize())}>
				Get Size
			</button>
			<div>{`Size: ${JSON.stringify(size)}`}</div>

			<div style={{height: 380}}>
				<ClayChart
					color={{
						range: {
							max: '#0065e4',
							min: '#b1d4ff',
						},
						selected: '#4b9bff',
						value: 'gdp_md_est',
					}}
					data={{
						...MAP_DATA,
						type: 'geo-map',
					}}
					ref={chartRef}
				/>
			</div>
		</div>
	);
};
