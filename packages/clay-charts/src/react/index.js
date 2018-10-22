import React from 'react';
import BillboardChart from 'react-billboardjs';
import GeoMap from './react/GeoMap';

import {
	DEFAULT_COLORS,
	DEFAULT_GRID_OBJECT,
	DEFAULT_LINE_CLASSES,
	DEFAULT_POINT_PATTERNS,
} from '../ChartBase';

import '../scss/main.scss';

export default class extends React.Component {
	render() {
		const {color, data, grid, line, point, ...otherProps} = this.props;

		let ChartComponent;
		let props = {data, ...otherProps};

		switch (data.type) {
			case 'geo-map':
				ChartComponent = GeoMap;
				break;
			default:
				ChartComponent = BillboardChart;
		}

		return (
			<ChartComponent
				{...otherProps}
				data={data}
				grid={Object.assign(DEFAULT_GRID_OBJECT, grid)}
				color={Object.assign({pattern: DEFAULT_COLORS}, color)}
				line={Object.assign({classes: DEFAULT_LINE_CLASSES}, line)}
				point={Object.assign(
					{
						pattern: DEFAULT_POINT_PATTERNS,
					},
					point
				)}
			/>
		);
	}
}
