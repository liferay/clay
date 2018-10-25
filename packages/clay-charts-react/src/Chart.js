import React from 'react';
import BillboardChart from 'react-billboardjs';
import GeoMap from './GeoMap';
import Predictive from './Predictive';

import { config } from 'clay-charts-shared';

const {
	DEFAULT_COLORS,
	DEFAULT_GRID_OBJECT,
	DEFAULT_LINE_CLASSES,
	DEFAULT_POINT_PATTERNS,
} = config;

export default function(props) {
	const { color, data, grid, line, point, ...otherProps } = props;

	let ChartComponent;
	let props = { data, ...otherProps };

	switch (data.type) {
		case 'geo-map':
			ChartComponent = GeoMap;
			break;
		case 'predictive':
			ChartComponent = Predictive;
			break;
		default:
			ChartComponent = BillboardChart;
	}

	return (
		<ChartComponent
			{...otherProps}
			data={data}
			grid={Object.assign(DEFAULT_GRID_OBJECT, grid)}
			color={Object.assign({ pattern: DEFAULT_COLORS }, color)}
			line={Object.assign({ classes: DEFAULT_LINE_CLASSES }, line)}
			point={Object.assign(
				{
					pattern: DEFAULT_POINT_PATTERNS,
				},
				point
			)}
		/>
	);
}
