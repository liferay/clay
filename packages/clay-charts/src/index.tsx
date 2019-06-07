/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import BillboardWrapper from './BillboardWrapper';
import GeoMap, {IProps} from './GeoMap';
import Predictive from './Predictive';
import React from 'react';
import {
	bb,
	ChartTypes,
	Data,
	Grid,
	LineOptions,
	PointOptions,
} from 'billboard.js';
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
	grid?: Grid;
	line?: LineOptions;
	point?: PointOptions;
	pollingInterval: number;
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
			delete data.type;

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
			data={data as Data}
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

export {bb};
