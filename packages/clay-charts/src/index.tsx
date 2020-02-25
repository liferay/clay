/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
	ChartTypes,
	Data,
	Grid,
	LineOptions,
	PointOptions,
	bb,
} from 'billboard.js';
import React from 'react';

import BillboardWrapper from './BillboardWrapper';
import GeoMap, {IProps} from './GeoMap';
import Predictive from './Predictive';
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
	(
		{color, data, elementProps, grid, line, point, ...otherProps}: IProps,
		ref
	) => {
		const defaultRef = React.useRef<any>();

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
				color={{pattern: DEFAULT_COLORS, ...color}}
				data={data as Data}
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

export {bb};

export default ClayChart;
