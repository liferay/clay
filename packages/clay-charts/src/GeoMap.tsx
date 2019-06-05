/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as d3 from 'd3';
import React from 'react';
import resolveData from './resolve-data';
import {Data, Grid, LineOptions, PointOptions} from 'billboard.js';
import {FeatureCollection} from 'geojson';
import {
	GeoPath,
	GeoPermissibleObjects,
	GeoProjection,
	ScaleLinear,
	Selection,
	ValueFn,
} from 'd3';

const DEFAULT_COLOR = {
	range: {
		max: '#0065e4',
		min: '#b1d4ff',
	},
	selected: '#4b9bff',
	value: 'pop_est',
};

/**
 * Geomap Base class.
 */
class GeomapBase {
	_color?: any;
	_data: any;
	_domainMax?: number;
	_domainMin?: number;
	_element?: any;
	_handleClickHandler?: ValueFn<any, unknown, void>;
	_height?: number | string;
	_internalPollingInterval?: NodeJS.Timeout | null;
	_onDataLoadHandler?: any;
	_pollingInterval?: number;
	_selected?: any;
	_width?: number | string;
	colorScale?: ScaleLinear<number, number>;
	mapLayer?: Selection<SVGGElement, unknown, null, undefined>;
	path?: GeoPath<any, GeoPermissibleObjects>;
	pollingInterval?: number;
	projection?: GeoProjection;
	rect?: Selection<SVGRectElement, unknown, null, undefined>;
	svg?: Selection<SVGSVGElement, unknown, null, undefined>;
	svgGroup?: Selection<SVGGElement, unknown, null, undefined>;

	constructor(config: any) {
		this._data = config.data;
		this._element = config.element;
		this._color = config.color || DEFAULT_COLOR;
		this._pollingInterval = config.pollingInterval;

		this._height = '100%';
		this._width = '100%';
	}

	/**
	 * Function to call when component is first mounting/attaching
	 */
	attached() {
		const w =
			typeof this._width === 'string' ? this._width : `${this._width}px`;
		const h =
			typeof this._height === 'string'
				? this._height
				: `${this._height}px`;

		this.svg = d3
			.select(this._element)
			.append('svg')
			.attr('width', w)
			.attr('height', h);

		this._handleClickHandler = this._handleClick.bind(this);

		this.rect = this.svg
			.append('rect')
			.attr('fill', 'rgba(1, 1, 1, 0)')
			.attr('width', w)
			.attr('height', h)
			.on('click', this._handleClickHandler);

		const bounds = this.svg.node()!.getBoundingClientRect();

		this.svgGroup = this.svg.append('g');
		this.mapLayer = this.svgGroup.append('g');

		this.projection = d3
			.geoMercator()
			.scale(100)
			.translate([bounds.width / 2, bounds.height / 2]);

		this.path = d3.geoPath().projection(this.projection);
		this._selected = null;

		this._onDataLoadHandler = this._onDataLoad.bind(this);

		resolveData(this._data)
			.then((val: any) => {
				this._onDataLoadHandler.apply(this, [null, val]);

				if (this._internalPollingInterval) {
					clearInterval(this._internalPollingInterval);
				}

				if (this.pollingInterval) {
					this._internalPollingInterval = setInterval(() => {
						this._updateData(this._data);
					}, this._pollingInterval);
				}
			})
			.catch((err: Error) => {
				this._onDataLoadHandler.apply(this, [err, null]);
			});
	}

	/**
	 * Function to call when disposing instance
	 */
	disposed() {
		if (this._internalPollingInterval) {
			clearInterval(this._internalPollingInterval);
			this._internalPollingInterval = null;
		}

		if (this.svg) {
			this.svg.remove();
		}
	}

	/**
	 * Fill function
	 */
	_fillFn(d: any) {
		const value = d && d.properties ? d.properties[this._color.value] : 0;

		return this.colorScale!(value);
	}

	/**
	 * Returns the height and width size.
	 */
	getSize() {
		return {
			height: this._height,
			width: this._width,
		};
	}

	/**
	 * Click handler
	 */
	_handleClick(d: any) {
		if (d && this._selected !== d) {
			this._selected = d;
		} else {
			this._selected = null;
		}

		// Highlight the clicked province
		this.mapLayer!.selectAll('path').style('fill', (d: any) =>
			this._selected && d === this._selected
				? this._color.selected
				: this._fillFn.bind(this)(d)
		);
	}

	/**
	 * Mouse over handler
	 */
	_handleMouseOver(feature: object, idx: number, selection: [any]) {
		const node = selection[idx];
		d3.select(node).style('fill', this._color.selected);
	}

	/**
	 * Mouse over handler
	 */
	_handleMouseOut(feature: object, idx: number, selection: [any]) {
		const node = selection[idx];

		d3.select(node).style('fill', this._fillFn.bind(this));
	}

	/**
	 * Data load handler
	 */
	_onDataLoad(err: Error, mapData: FeatureCollection) {
		if (err) {
			throw err;
		}

		const features = mapData.features;

		// Calculate domain based on values received
		const values = features.map(
			(f: any) => f.properties[this._color.value]
		);

		this._domainMin = Math.min.apply(null, values);
		this._domainMax = Math.max.apply(null, values);

		this.colorScale = d3
			.scaleLinear()
			.domain([this._domainMin, this._domainMax])
			.range([this._color.range.min, this._color.range.max]);

		this.mapLayer!.selectAll('path')
			.data(features)
			.enter()
			.append('path')
			.attr('d', this.path as any)
			.attr('vector-effect', 'non-scaling-stroke')
			.attr('fill', this._fillFn.bind(this))
			.on('click', this._handleClickHandler!)
			.on('mouseout', this._handleMouseOut.bind(this) as ValueFn<
				SVGPathElement,
				unknown,
				void
			>)
			.on('mouseover', this._handleMouseOver.bind(this) as ValueFn<
				SVGPathElement,
				unknown,
				void
			>);
	}

	_updateData(data: any) {
		resolveData(data)
			.then(val => {
				this._onDataLoadHandler.apply(this, [null, val]);
			})
			.catch(err => {
				this._onDataLoadHandler.apply(this, [err, null]);
			});
	}
}

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
	color: string;
	data: {data: Data};
	element: any;
	grid: Grid;
	line: LineOptions;
	point: PointOptions;
	pollingInterval: number;
	[key: string]: any;
}

/**
 * GeoMap Chart component.
 */
const Geomap: React.FunctionComponent<IProps> = ({data, ...otherProps}) => {
	const containerRef = React.useRef(null);
	const geoMapInstanceRef = React.useRef<any>();

	React.useEffect(() => {
		if (geoMapInstanceRef) {
			geoMapInstanceRef.current = new GeomapBase({
				...otherProps,
				data: data.data,
				element: containerRef.current,
			});

			geoMapInstanceRef.current.attached();
		}

		return () => {
			geoMapInstanceRef.current.disposed();
		};
	}, []);

	const {height = '100%', width = '100%'} = geoMapInstanceRef.current
		? geoMapInstanceRef.current.getSize()
		: {};

	return <div style={{height, width}} {...otherProps} ref={containerRef} />;
};

export default Geomap;
