/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import '../src/styles.css';

import {select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {BarChart, Cell, LineChart, PieChart} from 'recharts';

import {
	Bar,
	COLORS,
	CartesianGrid,
	Legend,
	Line,
	Pie,
	Tooltip,
	XAxis,
	YAxis,
} from '../src';

const DATA = [
	{
		amt: 2400,
		name: 'Jan',
		pv: 2400,
		uv: 4000,
	},
	{
		amt: 2210,
		name: 'Feb',
		pv: 1398,
		uv: 3000,
	},
	{
		amt: 2290,
		name: 'Mar',
		pv: 5400,
		uv: 2000,
	},
	{
		amt: 2000,
		name: 'Apr',
		pv: 3908,
		uv: 2780,
	},
	{
		amt: 2181,
		name: 'May',
		pv: 4800,
		uv: 1890,
	},
	{
		amt: 2500,
		name: 'Jun',
		pv: 3800,
		uv: 2390,
	},
	{
		amt: 2100,
		name: 'Jul',
		pv: 4300,
		uv: 3490,
	},
	{
		amt: 2200,
		name: 'Aug',
		pv: 4100,
		uv: 3590,
	},
	{
		amt: 2150,
		name: 'Sep',
		pv: 4350,
		uv: 3560,
	},
	{
		amt: 2100,
		name: 'Oct',
		pv: 4300,
		uv: 3490,
	},
	{
		amt: 2100,
		name: 'Nov',
		pv: 4300,
		uv: 3490,
	},
	{
		amt: 2100,
		name: 'Dec',
		pv: 4300,
		uv: 3490,
	},
];

storiesOf('Components|ClayRecharts', module)
	.add('Line', () => {
		const [active, setActive] = React.useState('');

		return (
			<div className="sheet">
				<LineChart
					data={DATA}
					height={350}
					margin={{bottom: 30, left: 0, right: 0, top: 5}}
					width={700}
				>
					<XAxis dataKey="name" />
					<YAxis />
					<Legend
						align={select(
							'Legend Align',
							['center', 'right', 'left'],
							'right'
						)}
						layout={select(
							'Legend Layout',
							['vertical', 'horizontal'],
							'vertical'
						)}
						onMouseEnter={({dataKey}: any) => setActive(dataKey)}
						onMouseLeave={() => setActive('')}
						verticalAlign={select(
							'Legend Vertical Align',
							['bottom', 'middle', 'top'],
							'bottom'
						)}
					/>
					<CartesianGrid />
					<Tooltip />
					<Line
						active={active}
						dataKey="pv"
						name="pv of pages"
						onActive={setActive}
						stroke={COLORS[0]}
					/>
					<Line
						active={active}
						dataKey="uv"
						name="uv of pages"
						onActive={setActive}
						stroke={COLORS[1]}
					/>
				</LineChart>
			</div>
		);
	})
	.add('Bar grouped', () => {
		const [active, setActive] = React.useState('');

		const data = [
			{
				desktop: 320,
				mobile: 235,
				name: 'First quarter',
				tablet: 220,
				tv: 270,
			},
			{
				desktop: 220,
				mobile: 320,
				name: 'First quarter',
				tablet: 340,
				tv: 180,
			},
			{
				desktop: 170,
				mobile: 120,
				name: 'First quarter',
				tablet: 190,
				tv: 70,
			},
		];

		return (
			<div className="sheet">
				<BarChart barGap={8} data={data} height={350} width={700}>
					<CartesianGrid />
					<XAxis dataKey="name" />
					<YAxis tickCount={4} />
					<Tooltip />
					<Legend
						align={select(
							'Legend Align',
							['center', 'right', 'left'],
							'right'
						)}
						layout={select(
							'Legend Layout',
							['vertical', 'horizontal'],
							'vertical'
						)}
						onMouseEnter={({dataKey}: any) => setActive(dataKey)}
						onMouseLeave={() => setActive('')}
						verticalAlign={select(
							'Legend Vertical Align',
							['bottom', 'middle', 'top'],
							'bottom'
						)}
					/>
					<Bar
						active={active}
						dataKey="desktop"
						fill={COLORS[0]}
						name="Desktop"
						onActive={setActive}
					/>
					<Bar
						active={active}
						dataKey="mobile"
						fill={COLORS[1]}
						name="Mobile"
						onActive={setActive}
					/>
					<Bar
						active={active}
						dataKey="tablet"
						fill={COLORS[2]}
						name="Tablet"
						onActive={setActive}
					/>
					<Bar
						active={active}
						dataKey="tv"
						fill={COLORS[3]}
						name="TV"
						onActive={setActive}
					/>
				</BarChart>
			</div>
		);
	})
	.add('Bar non-grouped', () => {
		const [active, setActive] = React.useState('');

		const data = [
			{
				name: '18-24',
				value: 64000,
			},
			{
				name: '25-34',
				value: 80000,
			},
			{
				name: '35-44',
				value: 64000,
			},
			{
				name: '45-54',
				value: 61000,
			},
			{
				name: '55-64',
				value: 40000,
			},
			{
				name: '65+',
				value: 10000,
			},
		];

		return (
			<div className="sheet">
				<BarChart
					data={data}
					height={350}
					layout="vertical"
					maxBarSize={24}
					width={320}
				>
					<CartesianGrid horizontal={false} vertical />
					<XAxis dataKey="value" tickCount={4} type="number" />
					<YAxis dataKey="name" type="category" />
					<Tooltip />
					<Bar
						active={active}
						dataKey="value"
						fill={COLORS[0]}
						onActive={setActive}
					/>
				</BarChart>
			</div>
		);
	})
	.add('Donut', () => {
		const [active, setActive] = React.useState('');

		const data = [
			{name: 'Facebook', value: 30},
			{name: 'Twitter', value: 30},
			{name: 'Linkedin', value: 20},
			{name: 'Other', value: 20},
		];

		const activeIndex = data.findIndex(({name}) => name === active);

		return (
			<div className="sheet">
				<PieChart height={350} width={400}>
					<Pie activeIndex={activeIndex} data={data} dataKey="value">
						{data.map((entry: any, index: any) => (
							<Cell
								fill={COLORS[index]}
								fillOpacity={
									active === entry.name || active === ''
										? 1
										: 0.25
								}
								key={entry.name}
								onMouseEnter={() => setActive(entry.name)}
								onMouseLeave={() => setActive('')}
							/>
						))}
					</Pie>
					<CartesianGrid />
					<Tooltip />
					<Legend
						align={select(
							'Legend Align',
							['center', 'right', 'left'],
							'left'
						)}
						layout={select(
							'Legend Layout',
							['vertical', 'horizontal'],
							'horizontal'
						)}
						onMouseEnter={({value}: any) => setActive(value)}
						onMouseLeave={() => setActive('')}
						verticalAlign={select(
							'Legend Vertical Align',
							['bottom', 'middle', 'top'],
							'top'
						)}
					/>
				</PieChart>
			</div>
		);
	})
	.add('Pie', () => {
		const [active, setActive] = React.useState('');

		const data = [
			{name: 'Facebook', value: 30},
			{name: 'Twitter', value: 30},
			{name: 'Linkedin', value: 20},
			{name: 'Other', value: 20},
		];

		const activeIndex = data.findIndex(({name}) => name === active);

		return (
			<div className="sheet">
				<PieChart height={350} width={400}>
					<Pie
						activeIndex={activeIndex}
						data={data}
						dataKey="value"
						innerRadius={0}
					>
						{data.map((entry: any, index: any) => (
							<Cell
								dx={0}
								fill={COLORS[index]}
								fillOpacity={
									active === entry.name || active === ''
										? 1
										: 0.25
								}
								key={entry.name}
								onMouseEnter={() => setActive(entry.name)}
								onMouseLeave={() => setActive('')}
							/>
						))}
					</Pie>
					<CartesianGrid />
					<Tooltip />
					<Legend
						align={select(
							'Legend Align',
							['center', 'right', 'left'],
							'left'
						)}
						layout={select(
							'Legend Layout',
							['vertical', 'horizontal'],
							'horizontal'
						)}
						onMouseEnter={({value}: any) => setActive(value)}
						onMouseLeave={() => setActive('')}
						verticalAlign={select(
							'Legend Vertical Align',
							['bottom', 'middle', 'top'],
							'top'
						)}
					/>
				</PieChart>
			</div>
		);
	});
