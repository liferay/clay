/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
	bb,
	ChartTypes,
	Data,
	Grid,
	LineOptions,
	PointOptions,
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
	forwardRef: React.MutableRefObject<any>;
	grid?: Grid;
	line?: LineOptions;
	point?: PointOptions;
	pollingInterval: number;
	[key: string]: any;
}

/**
 * Chart component.
 */
const ClayChart: React.FunctionComponent<IProps> = ({
	color,
	data,
	elementProps,
	forwardRef,
	grid,
	line,
	point,
	...otherProps
}) => {
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
			ref={forwardRef}
		/>
	);
};

export {bb};

export default React.forwardRef<HTMLDivElement, Omit<IProps, 'forwardRef'>>(
	(props, ref) => {
		const defaultRef = React.useRef<any>();

		return (
			<ClayChart
				forwardRef={(ref as React.MutableRefObject<any>) || defaultRef}
				{...props}
			/>
		);
	}
);
