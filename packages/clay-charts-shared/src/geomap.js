import * as d3 from 'd3';
import {isServerSide} from 'metal';
import {resolveData} from './data';

const DEFAULT_COLOR = {
	range: {
		min: '#b1d4ff',
		max: '#0065e4',
	},
	selected: '#4b9bff',
	value: 'pop_est',
};

/**
 * Geomap Base class.
 * @class Geomap
 */
export class Geomap {
	/**
	 * @inheritDoc
	 */
	constructor(config) {
		this._data = config.data;
		this._element = config.element;
		this._color = config.color || DEFAULT_COLOR;
		this._id = config.id;
		this._pollingInterval = config.pollingInterval;

		this._height = '100%';
		this._width = '100%';
	}

	/**
	 * Function to call when component is first mounting/attaching
	 */
	attached() {
		if (isServerSide()) {
			return;
		}

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

		const bounds = this.svg.node().getBoundingClientRect();

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
			.then(val => {
				this._onDataLoadHandler.apply(this, [null, val]);

				if (this._internalPollingInterval) {
					clearInterval(this._internalPollingInterval);
				}

				if (this.pollingInterval) {
					this._internalPollingInterval = setInterval(() => {
						this._updateData(this.data);
					}, this._pollingInterval);
				}
			})
			.catch(err => {
				this._onDataLoadHandler.apply(this, [err, null]);
			});
	}

	/**
	 * Function to call when disposing instance
	 */
	disposed() {
		if (isServerSide()) {
			return;
		}

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
	 * @param {Object} d
	 * @protected
	 * @return {Number}
	 */
	_fillFn(d) {
		const value = d && d.properties ? d.properties[this._color.value] : 0;
		return this.colorScale(value);
	}
	/**
	 * @inheritDoc
	 */
	getSize() {
		return {
			height: this._height,
			width: this._width,
		};
	}

	/**
	 * Click handler
	 * @param {Object} d
	 * @protected
	 */
	_handleClick(d) {
		if (d && this._selected !== d) {
			this._selected = d;
		} else {
			this._selected = null;
		}

		// Highlight the clicked province
		this.mapLayer
			.selectAll('path')
			.style('fill', d =>
				this._selected && d === this._selected
					? this._color.selected
					: this._fillFn.bind(this)(d)
			);
	}

	/**
	 * Mouse over handler
	 * @param {Object} feature
	 * @param {Number} idx
	 * @param {Array} selection
	 * @protected
	 */
	_handleMouseOver(feature, idx, selection) {
		const node = selection[idx];
		d3.select(node).style('fill', this._color.selected);
	}

	/**
	 * Mouse over handler
	 * @param {Object} feature
	 * @param {Number} idx
	 * @param {Array} selection
	 * @protected
	 */
	_handleMouseOut(feature, idx, selection) {
		const node = selection[idx];
		d3.select(node).style('fill', this._fillFn.bind(this));
	}

	/**
	 * Data load handler
	 * @param {Error} err
	 * @param {Object} mapData
	 * @protected
	 */
	_onDataLoad(err, mapData) {
		if (err) {
			throw err;
		}
		const features = mapData.features;

		// Calculate domain based on values received
		const values = features.map(f => f.properties[this._color.value]);

		this._domainMin = Math.min.apply(null, values);
		this._domainMax = Math.max.apply(null, values);

		this.colorScale = d3
			.scaleLinear()
			.domain([this._domainMin, this._domainMax])
			.range([this._color.range.min, this._color.range.max]);

		this.mapLayer
			.selectAll('path')
			.data(features)
			.enter()
			.append('path')
			.attr('d', this.path)
			.attr('vector-effect', 'non-scaling-stroke')
			.attr('fill', this._fillFn.bind(this))
			.on('click', this._handleClickHandler)
			.on('mouseout', this._handleMouseOut.bind(this))
			.on('mouseover', this._handleMouseOver.bind(this));
	}

	/**
	 * @inheritDoc
	 * @param {Object} data The updated data
	 * @protected
	 */
	_updateData(data) {
		resolveData(data)
			.then(val => {
				this._onDataLoadHandler.apply(this, [null, val]);
			})
			.catch(err => {
				this._onDataLoadHandler.apply(this, [err, null]);
			});
	}
}
