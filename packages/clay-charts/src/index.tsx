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
	forwardRef: React.RefObject<HTMLDivElement>;
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
			ref={forwardRef}
		/>
	);
};

export {bb};

export default React.forwardRef<HTMLDivElement, Omit<IProps, 'forwardRef'>>(
	(props, ref) => {
		const defaultRef = React.useRef<HTMLDivElement>(null);

		return (
			<ClayChart
				forwardRef={
					(ref as React.RefObject<HTMLDivElement>) || defaultRef
				}
				{...props}
			/>
		);
	}
);
