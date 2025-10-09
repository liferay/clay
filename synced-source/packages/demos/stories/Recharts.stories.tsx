/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayRadio, ClayRadioGroup} from '@clayui/form';
import ClayLayout from '@clayui/layout';
import {getYear, parse as parseDate} from 'date-fns';
import React, {useState} from 'react';
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ComposedChart,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	PolarAngleAxis as PolarAngleAxisTest,
	RadialBar,
	RadialBarChart,
	ReferenceArea as ReferenceAreaTest,
	Scatter,
	ScatterChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

import {COLORS, ClayRechartsTooltip} from '../src/recharts';

// Temporary hack until Recharts gets proper types exported
const PolarAngleAxis = PolarAngleAxisTest as any;
const ReferenceArea = ReferenceAreaTest as any;

const DATA = [
	{
		amt: 2400,
		name: 'Page A',
		pv: 2400,
		uv: 4000,
	},
	{
		amt: 2210,
		name: 'Page B',
		pv: 1398,
		uv: 3000,
	},
	{
		amt: 2290,
		name: 'Page C',
		pv: 9800,
		uv: 2000,
	},
	{
		amt: 2000,
		name: 'Page D',
		pv: 3908,
		uv: 2780,
	},
	{
		amt: 2181,
		name: 'Page E',
		pv: 4800,
		uv: 1890,
	},
	{
		amt: 2500,
		name: 'Page F',
		pv: 3800,
		uv: 2390,
	},
	{
		amt: 2100,
		name: 'Page G',
		pv: 4300,
		uv: 3490,
	},
];

export default {
	parameters: {
		chromatic: {disableSnapshot: true},
	},
	title: 'Demos/Recharts',
};

export const DemoLine = () => (
	<LineChart data={DATA} height={300} width={500}>
		<CartesianGrid />
		<XAxis dataKey="name" />
		<YAxis />
		<Tooltip />
		<Legend />
		<Line dataKey="pv" stroke={COLORS[0]} />
		<Line dataKey="uv" stroke={COLORS[1]} />
	</LineChart>
);

export const DemoBar = () => (
	<BarChart data={DATA} height={300} width={500}>
		<CartesianGrid />
		<XAxis dataKey="name" />
		<YAxis />
		<Tooltip content={<ClayRechartsTooltip />} />
		<Legend />
		<Bar dataKey="pv" fill={COLORS[0]} />
		<Bar dataKey="uv" fill={COLORS[1]} />
	</BarChart>
);

export const DemoPie = () => {
	const data = [
		{name: 'A', value: 30},
		{name: 'B', value: 70},
	];

	const customLabel = ({percent}: any) => `${(percent * 100).toFixed(0)}%`;

	return (
		<PieChart height={400} width={400}>
			<Legend />
			<Tooltip content={<ClayRechartsTooltip />} />
			<Pie
				data={data}
				dataKey="value"
				label={customLabel}
				labelLine={false}
			>
				{data.map((entry, index) => (
					<Cell fill={COLORS[index]} key={entry.name} />
				))}
			</Pie>
		</PieChart>
	);
};

export const DemoDonut = () => {
	const data = [
		{name: 'A', value: 30},
		{name: 'B', value: 70},
	];

	const customLabel = ({percent}: any) => `${(percent * 100).toFixed(0)}%`;

	return (
		<PieChart height={400} width={400}>
			<Pie
				data={data}
				dataKey="value"
				innerRadius={60}
				label={customLabel}
				labelLine={false}
				outerRadius={100}
			>
				{data.map((entry, index) => (
					<Cell fill={COLORS[index]} key={entry.name} />
				))}
			</Pie>
		</PieChart>
	);
};

export const DemoGauge = () => {
	const data = [{name: 'A', value: 70}];

	return (
		<RadialBarChart
			barSize={40}
			data={data}
			endAngle={0}
			height={400}
			innerRadius="60%"
			outerRadius="100%"
			startAngle={180}
			width={400}
		>
			<PolarAngleAxis domain={[0, 100]} tick={false} type="number" />
			<RadialBar
				background
				dataKey="value"
				fill={COLORS[0]}
				label={{position: 'center'}}
			/>
		</RadialBarChart>
	);
};

export const DemoScatter = () => {
	const data = [
		{x: 100, y: 200},
		{x: 120, y: 100},
		{x: 170, y: 300},
		{x: 140, y: 250},
		{x: 150, y: 400},
		{x: 110, y: 280},
	];

	const data2 = [
		{x: 200, y: 100},
		{x: 100, y: 120},
		{x: 300, y: 170},
		{x: 250, y: 140},
		{x: 400, y: 150},
		{x: 280, y: 110},
	];

	return (
		<ScatterChart height={400} width={400}>
			<CartesianGrid />
			<XAxis dataKey="x" type="number" />
			<YAxis dataKey="y" type="number" />
			<Tooltip cursor={{strokeDasharray: '3 3'}} />

			<Scatter data={data} fill={COLORS[0]} />
			<Scatter data={data2} fill={COLORS[1]} shape="square" />
		</ScatterChart>
	);
};

export const DemoSpline = () => (
	<LineChart data={DATA} height={300} width={500}>
		<CartesianGrid />
		<XAxis dataKey="name" />
		<YAxis />
		<Legend />
		<Line dataKey="pv" stroke={COLORS[0]} type="monotone" />
		<Line dataKey="uv" stroke={COLORS[1]} type="monotone" />
	</LineChart>
);

export const DemoAreaStep = () => (
	<AreaChart
		data={[
			{a: 100, b: 200},
			{a: 50, b: 100},
			{a: 170, b: 300},
			{a: 140, b: 250},
			{a: 150, b: 400},
			{a: 110, b: 280},
		]}
		height={400}
		width={500}
	>
		<CartesianGrid />
		<XAxis />
		<YAxis />
		<Tooltip />
		<Area dataKey="b" fill={COLORS[1]} stroke={COLORS[1]} type="step" />
		<Area dataKey="a" fill={COLORS[0]} stroke={COLORS[0]} type="step" />
	</AreaChart>
);

export const DemoCustomTooltip = () => (
	<LineChart data={DATA} height={300} width={500}>
		<XAxis />
		<YAxis />
		<Tooltip content={<ClayRechartsTooltip />} />
		<Line dataKey="pv" stroke={COLORS[0]} />
		<Line dataKey="uv" stroke={COLORS[1]} />
	</LineChart>
);

export const DemoCustomLegend = () => {
	const [active, setActive] = useState('');

	return (
		<LineChart data={DATA} height={300} width={500}>
			<XAxis />
			<YAxis />
			<Legend
				align="right"
				layout="vertical"
				onMouseEnter={({dataKey}) => setActive(dataKey)}
				onMouseLeave={() => setActive('')}
				verticalAlign="middle"
				wrapperStyle={{paddingLeft: 24}}
			/>
			<Line
				dataKey="pv"
				dot={false}
				onMouseOut={() => setActive('')}
				onMouseOver={() => setActive('pv')}
				stroke={COLORS[0]}
				strokeWidth={active === 'pv' ? 3 : 1}
			/>
			<Line
				dataKey="uv"
				dot={false}
				onMouseOut={() => setActive('')}
				onMouseOver={() => setActive('uv')}
				stroke={COLORS[1]}
				strokeWidth={active === 'uv' ? 3 : 1}
			/>
		</LineChart>
	);
};

export const DemoCustomAxisLabel = () => (
	<LineChart data={DATA} height={300} width={500}>
		<XAxis
			label={{
				value: 'X-Axis',
			}}
			tick={false}
		/>
		<YAxis label={{angle: -90, value: 'Y-Axis'}} tick={false} />
		<Line dataKey="pv" stroke={COLORS[0]} />
		<Line dataKey="uv" stroke={COLORS[1]} />
	</LineChart>
);

export const DemoTimeAxisLabel = () => (
	<LineChart
		data={[
			{date: '1/1/1990', val: 4},
			{date: '1/1/1995', val: 15},
			{date: '1/1/2000', val: 20},
			{date: '1/1/2005', val: 18},
		]}
		height={300}
		width={500}
	>
		<Tooltip />
		<YAxis label={{angle: -90, value: 'Y-Axis'}} tick={false} />
		<XAxis
			tickFormatter={(val) =>
				getYear(parseDate(val, 'dd/LL/yyyy', new Date()))
			}
		/>

		<Line dataKey="val" stroke={COLORS[0]} />
	</LineChart>
);

export const DemoPredictive = () => {
	const data = [
		{
			date: '2018-01-01',
			val: [130],
		},
		{
			date: '2018-02-01',
			val: [340],
		},
		{
			date: '2018-03-01',
			val: [200],
		},
		{
			date: '2018-04-01',
			val: [100],
		},
		{
			date: '2018-05-01',
			val: [40],
		},
		{
			date: '2018-06-01',
			val: [300],
		},
		{
			date: '2018-07-01',
			range: [140, 240],
			val: [170],
		},
		{
			date: '2018-08-01',
			range: [300, 380],
			val: [320],
		},
		{
			date: '2018-09-01',
			range: [320, 480],
			val: [400],
		},
		{
			date: '2018-10-01',
			range: [140, 240],
			val: [200],
		},
	];

	return (
		<ComposedChart data={data} height={300} width={500}>
			<Tooltip />
			<XAxis dataKey="date" scale="point" />
			<YAxis />

			<ReferenceArea
				label={{position: 'insideTop', value: 'Forecast'}}
				x1="2018-07-01"
			/>

			<Area dataKey="val" fill={COLORS[0]} stroke={COLORS[0]} />

			<Area
				dataKey="range"
				fill={COLORS[0]}
				opacity={0.2}
				strokeWidth={0}
			/>
		</ComposedChart>
	);
};

export const DemoHistogram = () => {
	const BIN_DATA = [
		{
			bin: '10-20',
			val: 15,
		},
		{
			bin: '20-30',
			val: 80,
		},
		{
			bin: '30-40',
			val: 60,
		},
		{
			bin: '50-60',
			val: 30,
		},
		{
			bin: '70-80',
			val: 40,
		},
	];

	const AC_DATA = [
		{count: 25, values: [296, 327]},
		{count: 23, values: [327, 358]},
		{count: 16, values: [358, 389]},
		{count: 19, values: [389, 420]},
		{count: 35, values: [420, 451]},
		{count: 7, values: [451, 482]},
	];

	const ticksACData = [
		...AC_DATA.map((item) => item.values[0]),
		AC_DATA[AC_DATA.length - 1].values[1],
	];

	const modifiedACData = AC_DATA.map(({count, values}) => ({
		rangeMid: (values[0] + values[1]) / 2,
		val: count,
	}));

	return (
		<>
			<BarChart data={BIN_DATA} height={300} width={500}>
				<XAxis
					dataKey="bin"
					height={70}
					label={{value: 'Age'}}
					tickLine={false}
					type="category"
				/>

				<YAxis
					dataKey="val"
					label={{angle: -90, value: '# of Employees'}}
					type="number"
					width={150}
				/>

				<Bar dataKey="val" fill={COLORS[0]} />
			</BarChart>

			<BarChart
				data={modifiedACData}
				height={300}
				layout="vertical"
				width={500}
			>
				<YAxis
					dataKey="rangeMid"
					domain={[296, 482]}
					interval={0}
					label={{angle: -90, value: 'Sales Total'}}
					padding={{bottom: 10, top: 10}}
					scale="linear"
					tickFormatter={(val) => `$${val}M`}
					ticks={ticksACData}
					type="number"
					width={150}
				/>

				<XAxis
					dataKey="val"
					height={70}
					label={{value: '# of Accounts'}}
					type="number"
				/>

				<Bar dataKey="val" fill={COLORS[0]} />
			</BarChart>
		</>
	);
};

export const DemoPerformanceTest = () => {
	const [dataPoints, setDataPoints] = useState(10);

	const DATA = Array(dataPoints)
		.fill(0)
		.map(() => ({
			pv: Math.floor(Math.random() * 1000),
			uv: Math.floor(Math.random() * 1000),
		}));

	return (
		<>
			<div className="sheet sheet-lg">
				<div className="sheet-subtitle">
					<label htmlFor="mySelectId">
						Select Number of Data Points
					</label>

					<ClayRadioGroup
						inline
						onSelectedValueChange={(val) =>
							setDataPoints(Number(val))
						}
						selectedValue={dataPoints}
					>
						{[5, 10, 25, 50].map((item) => (
							<ClayRadio key={item} label={item} value={item} />
						))}
					</ClayRadioGroup>
				</div>
			</div>

			<ClayLayout.ContainerFluid view>
				<ul className="card-page">
					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<LineChart data={DATA} height={300} width={300}>
									<CartesianGrid />
									<XAxis dataKey="uv" />
									<YAxis />
									<Tooltip />
									<Line dataKey="pv" stroke={COLORS[0]} />
									<Line dataKey="uv" stroke={COLORS[1]} />
								</LineChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<LineChart data={DATA} height={300} width={300}>
									<Line dataKey="pv" stroke={COLORS[0]} />
								</LineChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<BarChart data={DATA} height={300} width={300}>
									<CartesianGrid />
									<XAxis dataKey="uv" />
									<YAxis />
									<Tooltip
										content={<ClayRechartsTooltip />}
									/>
									<Bar dataKey="uv" fill={COLORS[1]} />
								</BarChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<BarChart data={DATA} height={300} width={300}>
									<CartesianGrid />
									<XAxis dataKey="pv" />
									<YAxis />
									<Tooltip
										content={<ClayRechartsTooltip />}
									/>
									<Bar dataKey="pv" fill={COLORS[0]} />
								</BarChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<ComposedChart
									data={DATA}
									height={300}
									width={300}
								>
									<CartesianGrid />
									<XAxis dataKey="uv" />
									<YAxis />
									<Tooltip
										content={<ClayRechartsTooltip />}
									/>
									<Bar dataKey="uv" fill={COLORS[1]} />
									<Line
										dataKey="pv"
										stroke={COLORS[0]}
										type="monotone"
									/>
								</ComposedChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<ComposedChart
									data={DATA}
									height={300}
									width={300}
								>
									<Bar dataKey="uv" fill={COLORS[0]} />
									<Line
										dataKey="pv"
										stroke={COLORS[1]}
										type="monotone"
									/>
								</ComposedChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<LineChart data={DATA} height={300} width={300}>
									<Line
										dataKey="uv"
										stroke={COLORS[1]}
										type="monotone"
									/>
								</LineChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<LineChart data={DATA} height={300} width={300}>
									<CartesianGrid />
									<XAxis dataKey="pv" />
									<YAxis />
									<Legend />
									<Line
										dataKey="pv"
										stroke={COLORS[0]}
										type="monotone"
									/>
									<Line
										dataKey="uv"
										stroke={COLORS[1]}
										type="monotone"
									/>
								</LineChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<AreaChart data={DATA} height={400} width={300}>
									<CartesianGrid />
									<XAxis />
									<YAxis />
									<Tooltip />
									<Area
										dataKey="uv"
										fill={COLORS[1]}
										stroke={COLORS[1]}
										type="step"
									/>
									<Area
										dataKey="pv"
										fill={COLORS[0]}
										stroke={COLORS[0]}
										type="step"
									/>
								</AreaChart>
							</div>
						</div>
					</li>

					<li className="card-page-item card-page-item-asset">
						<div className="card">
							<div className="card-body">
								<AreaChart data={DATA} height={400} width={300}>
									<Area
										dataKey="uv"
										fill={COLORS[1]}
										stroke={COLORS[1]}
										type="monotone"
									/>
									<Area
										dataKey="pv"
										fill={COLORS[0]}
										stroke={COLORS[0]}
										type="monotone"
									/>
								</AreaChart>
							</div>
						</div>
					</li>
				</ul>
			</ClayLayout.ContainerFluid>
		</>
	);
};
