/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import mapData from '../../../static/map.json';
import Editor from '../Editor';

// Workaround for building gatsby's SSR with since Billboard.js references `window`
const ClayChart =
	typeof window !== `undefined`
		? require('@clayui/charts').default
		: () => <div />;

const chartImportsCode = `import ClayChart from '@clayui/charts';`;

const chartCode = `const Component = () => {
	const [active, setActive] = React.React.useState(false);

	const COLUMNS = [['data1', 100, 20, 30], ['data2', 20, 70, 100]];
	const COLUMNS_2 = [['data1', 10, 50, 60], ['data2', 70, 30, 10]];

	return (
		<div>
			<button onClick={() => setActive(val => !val)}>{'Change Data'}</button>

			<ClayChart
				data={{
					columns: active ? COLUMNS : COLUMNS_2,
					type: 'bar',
				}}
			/>
		</div>
	);
}

render(<Component />);`;

export const Chart = () => {
	const scope = {ClayChart};
	const code = chartCode;

	return <Editor code={code} imports={chartImportsCode} scope={scope} />;
};

const geoMapImportsCode = `import ClayChart from '@clayui/charts';
import React from 'react';
import mapData from './map.json';`;

const geoMapCode = `const Component = () => (
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
				...mapData,
				type: 'geo-map',
			}}
		/>
	</div>
);

render(<Component />);`;

export const GeoMap = () => {
	const scope = {ClayChart, mapData};
	const code = geoMapCode;

	return <Editor code={code} imports={geoMapImportsCode} scope={scope} />;
};

const predictiveImportsCode = `import ClayChart from '@clayui/charts';
`;

const predictiveCode = `const Component = () => (
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

render(<Component />);`;

export const Predictive = () => {
	const scope = {ClayChart};
	const code = predictiveCode;

	return <Editor code={code} imports={predictiveImportsCode} scope={scope} />;
};
