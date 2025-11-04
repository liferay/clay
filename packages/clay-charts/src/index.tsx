/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ChartTypes, Data, Grid, LineOptions, PointOptions} from 'billboard.js';
import React from 'react';

import BillboardWrapper from './BillboardWrapper';
import GeoMap from './GeoMap';
import Predictive from './Predictive';
import bb from './bb-patched';
import {
	DEFAULT_COLORS,
	DEFAULT_GRID_OBJECT,
	DEFAULT_LINE_CLASSES,
	DEFAULT_POINT_PATTERNS,
} from './config';

export type Types = ChartTypes | 'geo-map' | 'predictive';

interface IDataType extends Omit<Omit<Data, 'type'>, 'columns'> {
	columns?: any;
	type?: Types;
}

export interface IProps {
	data: IDataType;
	elementProps?: React.HTMLAttributes<HTMLDivElement>;
	grid?: Grid;
	line?: LineOptions;
	point?: PointOptions;
	pollingInterval: number;
	[key: string]: any;
}

/**
 * Chart component.
 */
const ClayChart = React.forwardRef<HTMLDivElement, IProps>(
	({color, data, elementProps, grid, line, point, ...otherProps}, ref) => {
		const defaultRef = React.useRef<any>();

		const renderData = {...data};

		let ChartComponent;

		switch (data.type as Types) {
			case 'geo-map':
				delete renderData.type;

				ChartComponent = GeoMap;
				break;
			case 'predictive':
				delete renderData.type;

				ChartComponent = Predictive;
				break;
			default:
				ChartComponent = BillboardWrapper;
		}

		return (
			<ChartComponent
				{...otherProps}
				color={{pattern: DEFAULT_COLORS, ...color}}
				data={renderData as Data}
				elementProps={elementProps}
				grid={Object.assign(DEFAULT_GRID_OBJECT, grid)}
				line={{classes: DEFAULT_LINE_CLASSES, ...line}}
				point={{
					pattern: DEFAULT_POINT_PATTERNS,
					...point,
				}}
				ref={(ref as React.MutableRefObject<any>) || defaultRef}
			/>
		);
	}
);

ClayChart.displayName = 'ClayChart';

export {bb};

export default ClayChart;
