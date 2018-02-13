import {isFunction, isObject, isString} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import * as d3 from 'd3';

import templates from './Geomap.soy.js';

/**
 * Geomap component
 */
class Geomap extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		const w =
			typeof this.width_ === 'string' ? this.width_ : `${this.width_}px`;
		const h =
			typeof this.height_ === 'string'
				? this.height_
				: `${this.height_}px`;

		this.svg = d3
			.select(this.element)
			.append('svg')
			.attr('width', w)
			.attr('height', h);

		this.handleClickHandler_ = this.handleClick_.bind(this);

		this.rect = this.svg
			.append('rect')
			.attr('fill', 'rgba(1, 1, 1, 0)')
			.attr('width', w)
			.attr('height', h)
			.on('click', this.handleClickHandler_);

		const bounds = this.svg.node().getBoundingClientRect();

		this.svgGroup = this.svg.append('g');
		this.mapLayer = this.svgGroup.append('g');
		this.projection = d3
			.geoMercator()
			.scale(100)
			.translate([bounds.width / 2, bounds.height / 2]);

		this.path = d3.geoPath().projection(this.projection);
		this.selected_ = null;

		this.onDataLoadHandler_ = this.onDataLoad_.bind(this);

		if (isString(this.data)) {
			d3.json(this.data, this.onDataLoadHandler_);
		} else if (isObject(this.data) && !isFunction(this.data)) {
			this.onDataLoadHandler_.apply(this, [null, this.data]);
		} else if (isFunction(this.data)) {
			this.data()
				.then(val => {
					this.onDataLoadHandler_.apply(this, [null, val]);
				})
				.catch(err => {
					this.onDataLoadHandler_.apply(this, [err, null]);
				});
		}
	}

	/**
	 * Fill function
	 * @param {Object} d
	 * @return {Number}
	 * @protected
	 */
	fillFn_(d) {
		const value = d && d.properties ? d.properties[this.color.value] : 0;
		return this.colorScale(value);
	}

	/**
	 * Click handler
	 * @param {Object} d
	 * @protected
	 */
	handleClick_(d) {
		if (d && this.selected_ !== d) {
			this.selected_ = d;
		} else {
			this.selected_ = null;
		}

		// Highlight the clicked province
		this.mapLayer
			.selectAll('path')
			.style(
				'fill',
				d =>
					this.selected_ && d === this.selected_
						? this.color.selected
						: this.fillFn_.bind(this)(d)
			);
	}

	/**
	 * Mouse over handler
	 * @param {Object} feature
	 * @param {Number} idx
	 * @param {Array} selection
	 * @protected
	 */
	handleMouseOver_(feature, idx, selection) {
		const node = selection[idx];
		d3.select(node).style('fill', this.color.selected);
	}

	/**
	 * Mouse over handler
	 * @param {Object} feature
	 * @param {Number} idx
	 * @param {Array} selection
	 * @protected
	 */
	handleMouseOut_(feature, idx, selection) {
		const node = selection[idx];
		d3.select(node).style('fill', this.fillFn_.bind(this));
	}

	/**
	 * Data load handler
	 * @param {Error} err
	 * @param {Object} mapData
	 * @protected
	 */
	onDataLoad_(err, mapData) {
		if (err) {
			throw err;
		}
		const features = mapData.features;

		// Calculate domain based on values received
		const values = features.map(f => f.properties[this.color.value]);

		this.domainMin_ = Math.min.apply(null, values);
		this.domainMax_ = Math.max.apply(null, values);

		this.colorScale = d3
			.scaleLinear()
			.domain([this.domainMin_, this.domainMax_])
			.range([this.color.range.min, this.color.range.max]);

		this.mapLayer
			.selectAll('path')
			.data(features)
			.enter()
			.append('path')
			.attr('d', this.path)
			.attr('vector-effect', 'non-scaling-stroke')
			.attr('fill', this.fillFn_.bind(this))
			.on('click', this.handleClickHandler_)
			.on('mouseout', this.handleMouseOut_.bind(this))
			.on('mouseover', this.handleMouseOver_.bind(this));
	}
}

Soy.register(Geomap, templates);

/**
 * GeoMap state definition.
 * @type {!Object}
 * @static
 */
Geomap.STATE = {
	/**
	 * Color configuration.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object}
	 * @default undefined
	 */
	color: Config.shapeOf({
		range: Config.shapeOf({
			max: Config.string().required(),
			min: Config.string().required(),
		}),
		selected: Config.string(),
		value: Config.string().required(),
	}).value({
		range: {
			min: '#b1d4ff',
			max: '#0065e4',
		},
		selected: '#4b9bff',
		value: 'pop_est',
	}),

	/**
	 * Minimum value for domain
	 * @instance
	 * @memberof Geomap
	 * @type {Number}
	 */
	domainMin_: Config.number().internal(),

	/**
	 * Maximum value for domain
	 * @instance
	 * @memberOf Geomap
	 * @type {Number}
	 */
	domainMax_: Config.number().internal(),

	/**
	 * Path to the geo-json data
	 * @instance
	 * @memberof Geomap
	 * @type {?Function|?Object|?String}
	 * @default undefined
	 */
	data: Config.oneOfType([
		Config.func(),
		Config.object(),
		Config.string(),
	]).required(),

	/**
	 * Height of the map
	 * @instance
	 * @memberof Geomap
	 * @type {?Number}
	 * @default 480
	 */
	height_: Config.oneOfType([Config.string(), Config.number()])
		.value('100%')
		.internal(),

	/**
	 * Width of the map
	 * @instance
	 * @memberof Geomap
	 * @type {?Number}
	 * @default 640
	 */
	width_: Config.oneOfType([Config.string(), Config.number()])
		.value('100%')
		.internal(),
};

export {Geomap};
export default Geomap;
