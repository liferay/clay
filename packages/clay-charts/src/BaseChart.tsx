/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import BillboardWrapper from './BillboardWrapper';
import GeoMap from './GeoMap';
import Predictive from './Predictive';
import React from 'react';
import {ChartTypes, Data, Grid, LineOptions, PointOptions} from 'billboard.js';
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

type ColorType =
	| string
	| {
			range: {
				min: string;
				max: string;
			};
			selected: string;
			value: string;
	  };

export interface IProps {
	color?: ColorType;
	data: IDataType | IDataType & {data: IDataType};
	grid?: Grid;
	line?: LineOptions;
	point?: PointOptions;
	[key: string]: any;
}

/**
 * Chart component.
 */
export default function({
	color,
	data,
	grid,
	line,
	point,
	...otherProps
}: IProps) {
	let ChartComponent;

	switch (data.type as Types) {
		case 'geo-map':
			ChartComponent = GeoMap;
			break;
		case 'predictive':
			delete data.type;

			ChartComponent = Predictive;
			break;
		default:
			ChartComponent = BillboardWrapper;
	}

	return (
		<ChartComponent
			{...otherProps}
			color={Object.assign({pattern: DEFAULT_COLORS}, color)}
			data={data}
			grid={Object.assign(DEFAULT_GRID_OBJECT, grid)}
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
