import React from 'react';
import ReactDOM from 'react-dom';
import ClayChart, {BarChart, BubbleChart} from '../src/index';

import '../src/scss/main.scss';

const COLUMNS = [['data1', 100, 20, 30], ['data2', 20, 70, 100]];

/**
 * Application for rendering demos
 * @augments React.Component
 */
class App extends React.Component {
	render() {
		return (
			<div style={{maxWidth: 700, margin: '0 auto'}}>
				<h1>BASIC:</h1>
				<h3>Bar</h3>
				<BarChart
					data={{
						columns: COLUMNS,
					}}
				/>
				<h3>Bubble</h3>
				<BubbleChart
					data={{
						columns: COLUMNS,
					}}
				/>
				<h3>Combo</h3>
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
				<h3>Donut</h3>
				<ClayChart
					data={{
						columns: [['data1', 30], ['data2', 70]],
						type: 'donut',
					}}
				/>
				<h3>Gauge</h3>
				<ClayChart
					data={{
						columns: [['data1', 87.4]],
						type: 'gauge',
					}}
				/>
				<h3>Geo Map</h3>
				<div style={{height: 380}}>
					<ClayChart
						data={{
							data: './demo/public/world-low-res.geo.json',
							type: 'geo-map',
						}}
						color={{
							range: {
								min: '#b1d4ff',
								max: '#0065e4',
							},
							selected: '#4b9bff',
							value: 'gdp_md_est',
						}}
					/>
				</div>
				<h3>Line</h3>
				<ClayChart
					data={{
						columns: COLUMNS,
						type: 'line',
					}}
				/>
				<h3>Pie</h3>
				<ClayChart
					data={{
						columns: [['data1', 30], ['data2', 70]],
						type: 'pie',
					}}
				/>
				<h3>Scatter</h3>
				<ClayChart
					data={{
						columns: [
							['data1', 100, 20, 30, 50, 40, 80, 220, 300],
							['data2', 20, 70, 100, 340, 160, 20, 80, 200],
						],
						type: 'scatter',
					}}
				/>
				<h3>Spline</h3>
				<ClayChart
					data={{
						columns: COLUMNS,
						type: 'spline',
					}}
				/>
				<h3>Area Step</h3>
				<ClayChart
					data={{
						columns: COLUMNS,
						type: 'area-step',
					}}
				/>

				<h1>ADVANCED:</h1>
				<h3>Axis Label</h3>
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
				<h3>Axis Range</h3>
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
				<h3>Data Color</h3>
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
				<h3>Predictive Forecast</h3>
				<ClayChart
					data={{
						x: 'x',
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
								{low: 140, mid: 180, high: 240},
								{low: 300, mid: 350, high: 380},
								{low: 320, mid: 400, high: 480},
								{low: 100, mid: 200, high: 260},
								{low: 100, mid: 120, high: 140},
								{low: 80, mid: 100, high: 180},
							],
							[
								'product2',
								210,
								180,
								30,
								90,
								40,
								120,
								{low: 180, mid: 240, high: 260},
								{low: 360, mid: 420, high: 460},
								{low: 80, mid: 120, high: 180},
								{low: 60, mid: 80, high: 120},
								{low: 10, mid: 20, high: 80},
								{low: 20, mid: 60, high: 100},
							],
						],
						type: 'predictive',
						types: {
							product1: 'area-line-range',
							product2: 'area-spline-range',
						},
					}}
					predictionDate="2018-06-01"
					axis={{
						x: {
							type: 'timeseries',
						},
					}}
				/>
				<h3>Regions</h3>
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
							start: 0,
							end: 100,
						},
						{
							axis: 'y',
							start: 200,
							end: 300,
						},
					]}
				/>
				<h3>X Axis Format</h3>
				<ClayChart
					axis={{
						x: {
							localtime: false,
							tick: {
								format: x => x.getFullYear(),
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
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
