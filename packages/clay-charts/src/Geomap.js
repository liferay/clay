import * as d3 from 'd3';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Geomap.soy.js';
import {Config} from 'metal-state';
import {isServerSide} from 'metal';
import {resolveData} from './utils/data';

/**
 * Geomap component
 */
class Geomap extends Component {
	/**
	 * @inheritDoc
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
			.select(this.element)
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

		const config = this.getInitialConfig();

		resolveData(config.data)
			.then(val => {
				this._onDataLoadHandler.apply(this, [null, val]);

				if (this._pollingInterval) {
					clearInterval(this._pollingInterval);
				}

				if (this.pollingInterval) {
					this._pollingInterval = setInterval(() => {
						this._updateData(this.data);
					}, this.pollingInterval);
				}
			})
			.catch(err => {
				this._onDataLoadHandler.apply(this, [err, null]);
			});
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		super.disposed();

		if (isServerSide()) {
			return;
		}

		if (this._pollingInterval) {
			clearInterval(this._pollingInterval);
			this._pollingInterval = null;
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
		const value = d && d.properties ? d.properties[this.color.value] : 0;
		return this.colorScale(value);
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
			.style(
				'fill',
				d =>
					this._selected && d === this._selected
						? this.color.selected
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
		d3.select(node).style('fill', this.color.selected);
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
		const values = features.map(f => f.properties[this.color.value]);

		this._domainMin = Math.min.apply(null, values);
		this._domainMax = Math.max.apply(null, values);

		this.colorScale = d3
			.scaleLinear()
			.domain([this._domainMin, this._domainMax])
			.range([this.color.range.min, this.color.range.max]);

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

Soy.register(Geomap, templates);

/**
 * GeoMap state definition.
 * @type {!Object}
 * @static
 */
Geomap.STATE = {
	/**
	 * Minimum value for domain
	 * @instance
	 * @memberof Geomap
	 * @type {!Number}
	 */
	_domainMin: Config.number().internal(),

	/**
	 * Maximum value for domain
	 * @instance
	 * @memberof Geomap
	 * @type {!Number}
	 */
	_domainMax: Config.number().internal(),

	/**
	 * Height of the map
	 * @default 480
	 * @instance
	 * @memberof Geomap
	 * @type {?Number}
	 */
	_height: Config.oneOfType([Config.string(), Config.number()])
		.value('100%')
		.internal(),

	/**
	 * Width of the map
	 * @default 640
	 * @instance
	 * @memberof Geomap
	 * @type {?Number}
	 */
	_width: Config.oneOfType([Config.string(), Config.number()])
		.value('100%')
		.internal(),

	/**
	 * Color configuration.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object}
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
	 * Data that will be rendered to the chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Array|undefined)}
	 */
	data: Config.oneOfType([Config.object(), Config.func(), Config.string()]),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof Geomap
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Set an interval (in ms) to fetch the data.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?Number}
	 */
	pollingInterval: Config.number(),
};

export {Geomap};
export default Geomap;
