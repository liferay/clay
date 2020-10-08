/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import {
	Bar as ReBar,
	CartesianGrid as ReCartesianGrid,
	Legend as ReLegend,
	Line as ReLine,
	Pie as RePie,
	Tooltip as ReTooltip,
	TooltipPayload,
	TooltipProps,
	XAxis as ReXAxis,
	YAxis as ReYAxis,
} from 'recharts';

const COLOR_MAP = {
	Dothraki: '#AF78FF',
	Kashtark: '#FFD76E',
	Lannister: '#FF5F5F',
	Martell: '#50D2A0',
	Mormont: '#FFB46E',
	Stark: '#4B9BFF',
	Targaryen: '#9CE269',
	Tarly: '#5FC8FF',
	Tyrell: '#FF73C3',
};

const COLORS = [
	COLOR_MAP.Stark,
	COLOR_MAP.Mormont,
	COLOR_MAP.Lannister,
	COLOR_MAP.Martell,
	COLOR_MAP.Tyrell,
	COLOR_MAP.Targaryen,
	COLOR_MAP.Dothraki,
	COLOR_MAP.Kashtark,
	COLOR_MAP.Tarly,
];

const WRAPPER_STYLE: any = {
	center: {
		horizontal: {
			bottom: {paddingTop: 20},
			middle: {},
			top: {paddingBottom: 10},
		},
		vertical: {
			bottom: {paddingTop: 20},
			middle: {},
			top: {paddingBottom: 20},
		},
	},
	left: {
		horizontal: {
			bottom: {paddingTop: 20},
			middle: {},
			top: {paddingBottom: 10},
		},
		vertical: {
			bottom: {paddingBottom: 40, paddingRight: 32},
			middle: {paddingRight: 32},
			top: {paddingRight: 32, paddingTop: 20},
		},
	},
	right: {
		horizontal: {
			bottom: {paddingTop: 20},
			middle: {},
			top: {paddingBottom: 10},
		},
		vertical: {
			bottom: {paddingBottom: 40, paddingLeft: 32},
			middle: {paddingLeft: 32},
			top: {paddingLeft: 32, paddingTop: 20},
		},
	},
};

const Legend = React.forwardRef(
	(
		{
			align = 'right',
			layout = 'vertical',
			verticalAlign = 'bottom',
			...otherProps
		}: any,
		ref
	) => (
		<ReLegend
			align={align}
			iconSize={16}
			layout={layout}
			ref={ref}
			verticalAlign={verticalAlign}
			wrapperStyle={WRAPPER_STYLE[align][layout][verticalAlign]}
			{...otherProps}
		/>
	)
);

Legend.displayName = 'Legend';

const XAxis: React.FunctionComponent<React.ComponentProps<
	typeof ReXAxis
>> = () => null;

XAxis.defaultProps = {
	...(ReXAxis as any).defaultProps,
	axisLine: {opacity: 0},
	tickLine: false,
	tickMargin: 12,
};
XAxis.displayName = 'XAxis';

const YAxis: React.FunctionComponent<React.ComponentProps<
	typeof ReYAxis
>> = () => null;

YAxis.defaultProps = {
	...(ReYAxis as any).defaultProps,
	axisLine: {opacity: 0},
	tickLine: false,
	tickMargin: 16,
};
YAxis.displayName = 'YAxis';

const Tooltip = (props: any) => (
	<ReTooltip
		content={({active, label, payload}: TooltipProps) => {
			if (active) {
				return (
					<div className="popover" style={{position: 'static'}}>
						<div className="popover-header">{label}</div>

						<div className="popover-body">
							{payload &&
								payload.map((item: TooltipPayload) => (
									<div
										key={`${item.payload.name}:${item.dataKey}`}
									>
										{`${item.name}: ${item.value}`}
									</div>
								))}
						</div>
					</div>
				);
			}

			return null;
		}}
		{...props}
	/>
);

Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
	...(ReTooltip as any).defaultProps,
	cursor: false,
};

const CartesianGrid = ({offset, vertical = false, ...otherProps}: any) => {
	const {height, left, top, width} = offset;

	return (
		<g>
			<rect
				fill="transparent"
				height={height}
				pointerEvents="none"
				rx="3.5"
				stroke="#E7E7ED"
				width={width}
				x={left}
				y={top}
			/>
			<ReCartesianGrid
				offset={offset}
				stroke="#E7E7ED"
				strokeDasharray="3 3"
				vertical={vertical}
				{...otherProps}
			/>
		</g>
	);
};

CartesianGrid.displayName = 'CartesianGrid';

const Bar = ({active, dataKey, onActive, ...otherProps}: any) => (
	<ReBar
		dataKey={dataKey}
		fillOpacity={active === dataKey ? 1 : active === '' ? 1 : 0.25}
		onMouseOut={() => onActive('')}
		onMouseOver={() => onActive(dataKey)}
		{...otherProps}
	/>
);

Bar.displayName = 'Bar';
Bar.defaultProps = {
	...(ReBar as any).defaultProps,
	legendType: 'square',
};
Bar.getComposedData = (ReBar as any).getComposedData;
Bar.renderRectangle = (ReBar as any).renderRectangle;

const getDotStyle = (color: string) => ({
	active: {
		fill: 'white',
		r: 4,
		stroke: color,
		strokeWidth: 3,
	},
	default: {
		fill: color,
		r: 4,
		strokeWidth: 0,
	},
});

const Line = ({active, dataKey, onActive, stroke, ...otherProps}: any) => {
	const dotStyle = getDotStyle(stroke);

	return (
		<ReLine
			onMouseOut={() => onActive('')}
			onMouseOver={() => onActive(dataKey)}
			stroke={stroke}
			strokeDasharray="3 3"
			strokeOpacity={active === dataKey ? 1 : active === '' ? 1 : 0.25}
			strokeWidth={2}
			{...otherProps}
			activeDot={dotStyle.active}
			dot={{
				...dotStyle.default,
				opacity: active === dataKey ? 1 : active === '' ? 1 : 0.25,
			}}
		/>
	);
};

Line.defaultProps = {
	...(ReLine as any).defaultProps,
	strokeWidth: 1.5,
};
Line.displayName = 'Line';
Line.getComposedData = (ReLine as any).getComposedData;

const Pie = (props: any) => <RePie {...props} />;

Pie.displayName = 'Pie';
Pie.defaultProps = {
	...(RePie as any).defaultProps,
	activeShape: {
		outerRadius: 95,
	},
	innerRadius: 45,
	label: false,
	legendType: 'square',
	outerRadius: 85,
	paddingAngle: 3,
};
Pie.parseDeltaAngle = (RePie as any).parseDeltaAngle;
Pie.getRealPieData = (RePie as any).getRealPieData;
Pie.parseCoordinateOfPie = (RePie as any).parseCoordinateOfPie;
Pie.getComposedData = (RePie as any).getComposedData;

export {Bar, COLORS, CartesianGrid, Legend, Line, Pie, XAxis, YAxis, Tooltip};
