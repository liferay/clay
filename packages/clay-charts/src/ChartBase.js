import {bb} from 'billboard.js';
import {Config} from 'metal-state';
import {isDefAndNotNull, isServerSide} from 'metal';
import {config, data} from 'clay-charts-shared';
import types from './utils/types';
import * as d3 from 'd3';

const {resolveData} = data;

const {
	DEFAULT_COLORS,
	DEFAULT_GRID_OBJECT,
	DEFAULT_LINE_CLASSES,
	DEFAULT_POINT_PATTERNS,
	DEFAULT_TILES,
} = config;

const PROP_NAME_MAP = {
	axis: 'axes',
	class: 'classes',
	color: 'colors',
	name: 'names',
	regions: 'regions',
	type: 'types',
};

/**
 * Chart Base prototype.
 * @class ChartBase
 *
 * @mixin
 */
const ChartBase = {
	/**
	 * @inheritDoc
	 * @memberof ChartBase
	 */
	attached() {
		if (isServerSide()) {
			return;
		}

		this._addEventListeners();

		const config = this.getInitialConfig();
		const data = isDefAndNotNull(config.columns)
			? config.columns
			: config.data;

		if (!data) {
			return;
		}

		resolveData(data)
			.then(data => {
				this._resolvedData = data;

				if (
					isDefAndNotNull(this.props) &&
					isDefAndNotNull(this.props._loading)
				) {
					this.props._loading = false;
				} else {
					this._loading = false;
				}

				if (!isDefAndNotNull(data)) {
					this.emit(
						'chartError',
						new Error('unable to load Chart data.')
					);
					return;
				}

				this._setupPolling();

				const config = this._constructChartConfig();
				this.bbChart = bb.generate(config);
				this.emit('chartReady');
			})
			.catch(err => {
				this.emit('chartError', err);
			});
	},

	/**
	 * @inheritDoc
	 * @memberof ChartBase
	 */
	disposed() {
		if (isServerSide()) {
			return;
		}

		if (this._pollingInterval) {
			clearInterval(this._pollingInterval);
			this._pollingInterval = null;
		}

		if (this.bbChart) {
			this.bbChart.destroy();
		}
	},

	/**
	 * Adds event listeners
	 * @memberof ChartBase
	 * @protected
	 */
	_addEventListeners() {
		this.on('dataChanged', this._handleDataChanged.bind(this));
		this.on('groupsChanged', this._handleGroupsChanged.bind(this));
		this.on('_loadingChanged', this._handleLoadingChanged.bind(this));
		this.on('regionsChanged', this._handleRegionsChanged.bind(this));
		this.on('sizeChanged', this._handleSizeChanged.bind(this));
		this.on('typeChanged', this._handleTypeChanged.bind(this));
		this.on('xChanged', this._handleXChanged.bind(this));
	},

	/**
	 * @inheritDoc
	 * @memberof ChartBase
	 */
	shouldUpdate() {
		return false;
	},

	/**
	 * Constructs `axis` billboard config property.
	 * @memberof ChartBase
	 * @protected
	 * @return {Object}
	 */
	_constructAxisConfig() {
		const state = this._getStateObj();

		return {
			rotated: state.axisRotated,
			x: state.axisX,
			y2: state.axisY2,
			y: state.axisY,
		};
	},

	/**
	 * Constructs config object for `bb.generate` method.
	 * @memberof ChartBase
	 * @protected
	 * @return {Object}
	 */
	_constructChartConfig() {
		const state = this._getStateObj();
		const axis = this._constructAxisConfig();
		const data = this._constructDataConfig();
		const zoom = this._constructZoomConfig();
		const color = this._constructTilesConfig();

		const config = {
			area: state.area,
			axis,
			bar: state.bar,
			bindto: this.element.querySelector('[ref="chart"]'),
			bubble: state.bubble,
			color: color,
			data,
			donut: state.donut,
			gauge: state.gauge,
			grid: state.grid,
			legend: state.legend,
			line: state.line,
			loading: state.loading,
			padding: state.padding,
			pie: state.pie,
			point: state.point,
			regions: state.regions,
			resize: state.resizeAuto,
			size: state.size,
			spline: state.splineInterpolationType,
			subchart: state.subchart,
			svg: state.svgClassname,
			title: state.title,
			tooltip: state.tooltip,
			transition: state.transitionDuration,
			zoom,
		};

		/**
		 * Chart init event.
		 * @event chartInit
		 * @memberof ChartBase
		 */
		config.oninit = this._emitChartEvent.bind(this, 'chartInit');
		/**
		 * Chart mouse out event.
		 * @event chartMouseout
		 * @memberof ChartBase
		 */
		config.onout = this._emitChartEvent.bind(this, 'chartMouseout');
		/**
		 * Chart mouse over event.
		 * @event chartMouseover
		 * @memberof ChartBase
		 */
		config.onover = this._emitChartEvent.bind(this, 'chartMouseover');
		/**
		 * Chart rendered event.
		 * @event chartRendered
		 * @memberof ChartBase
		 */
		config.onrendered = this._emitChartEvent.bind(this, 'chartRendered');
		/**
		 * Chart resize event.
		 * @event chartResize
		 * @memberof ChartBase
		 */
		config.onresize = this._emitChartEvent.bind(this, 'chartResize');
		/**
		 * Chart resized event.
		 * @event chartResized
		 * @memberof ChartBase
		 */
		config.onresized = this._emitChartEvent.bind(this, 'chartResized');

		return config;
	},

	/**
	 * Constructs various `data` billboard properties from `data` state.
	 * @memberof ChartBase
	 * @protected
	 * @return {Object}
	 */
	_constructChartDataConfig() {
		const data = this._resolvedData;
		const config = {
			columns: this._createDataArray(data),
		};

		for (let i = 0; i < data.length; i++) {
			const column = data[i];

			const {id} = column;

			const keys = Object.keys(column);

			for (let j = 0; j < keys.length; j++) {
				const key = keys[j];

				if (key === 'data' || key === 'id') {
					continue;
				}

				if (key === 'hide') {
					config.hide = config.hide || [];

					if (column.hide) {
						config.hide.push(column.id);
					}
				} else {
					// eslint-disable-next-line
					config[PROP_NAME_MAP[key]] =
						config[PROP_NAME_MAP[key]] || {};

					config[PROP_NAME_MAP[key]][id] = column[key];
				}
			}
		}

		return config;
	},

	/**
	 * When tiles for true always leave `colors` empty,
	 * this ensures that` colors.tiles` is more important.
	 * @memberof ChartBase
	 * @protected
	 * @return {Object}
	 */
	_constructColorsConfig() {
		let {colors, color} = this._getStateObj();

		if (color && color.tiles) {
			colors = {};
		}

		return colors;
	},

	/**
	 * Constructs `data` billboard config property.
	 * @memberof ChartBase
	 * @param {boolean} attachListeners
	 * @protected
	 * @return {Object}
	 */
	_constructDataConfig(attachListeners = true) {
		const state = this._getStateObj();
		const colors = this._constructColorsConfig();
		const config = {
			color: state.colorFormatter,
			colors: colors,
			empty: state.emptyLabelText,
			groups: state.groups,
			hide: state.hide,
			json: state.json,
			keys: state.keys,
			labels: state.labels,
			mimeType: state.mimeType,
			order: state.order,
			rows: state.rows,
			selection: state.selection,
			type: state.type,
			url: state.url,
			x: state.x,
			xFormat: state.xFormat,
			xLocaltime: state.xLocaltime,
			xSort: state.xSort,
			xs: state.xs,
		};

		const dataConfig = this._constructChartDataConfig();

		Object.assign(config, dataConfig);

		if (attachListeners) {
			/**
			 * Point click event.
			 * @event pointClick
			 * @memberof ChartBase
			 */
			config.onclick = this._emitChartEvent.bind(this, 'pointClick');
			/**
			 * Point mouse out event.
			 * @event pointMouseout
			 * @memberof ChartBase
			 */
			config.onout = this._emitChartEvent.bind(this, 'pointMouseout');
			/**
			 * Point mouse over event.
			 * @event pointMouseoever
			 * @memberof ChartBase
			 */
			config.onover = this._emitChartEvent.bind(this, 'pointMouseover');
			/**
			 * Data selected event.
			 * @event dataSelected
			 * @memberof ChartBase
			 */
			config.onselected = this._emitChartEvent.bind(this, 'dataSelected');
			/**
			 * Data unselected event.
			 * @event dataUnselected
			 * @memberof ChartBase
			 */
			config.onunselected = this._emitChartEvent.bind(
				this,
				'dataUnselected'
			);
		}

		return config;
	},

	/**
	 * Constructs color tiles for passed to billboard.
	 * @memberof ChartBase
	 * @protected
	 * @return {Object}
	 */
	_constructTilesConfig() {
		const {color} = this._getStateObj();

		if (color.tiles) {
			const tiles = this._getTiles();

			color.tiles = () => tiles;
			color.pattern = DEFAULT_COLORS;
		}

		return color;
	},

	/**
	 * Constructs `zoom` billboard config property.
	 * @memberof ChartBase
	 * @protected
	 * @return {Object}
	 */
	_constructZoomConfig() {
		const state = this._getStateObj();
		const zoom = state.zoom;
		const config = zoom || {};

		/**
		 * Zoom event.
		 * @event zoom
		 * @memberof ChartBase
		 */
		config.onzoom = this._emitChartEvent.bind(this, 'zoom');
		/**
		 * Zoom end event.
		 * @event zoomEnd
		 * @memberof ChartBase
		 */
		config.onzoomend = this._emitChartEvent.bind(this, 'zoomEnd');
		/**
		 * Zoom start event.
		 * @event zoomStart
		 * @memberof ChartBase
		 */
		config.onzoomstart = this._emitChartEvent.bind(this, 'zoomStart');

		return config;
	},

	/**
	 * Converts `data` state into consumable array for billboard.js
	 * @memberof ChartBase
	 * @param {Array} data
	 * @protected
	 * @return {Array}
	 */
	_createDataArray(data) {
		return data.map(({data, id}) => {
			return [id].concat(data);
		});
	},

	/**
	 * Emits event based on arguments array.
	 * @memberof ChartBase
	 * @protected
	 */
	_emitChartEvent() {
		this.emit.apply(this, arguments); // eslint-disable-line
	},

	/**
	 * Gets all columns
	 * @memberof ChartBase
	 * @protected
	 * @return {?Object}
	 */
	_getColumns() {
		return this.data;
	},

	/**
	 * Gets column by column id.
	 * @memberof ChartBase
	 * @param {string} id column id
	 * @protected
	 * @return {?Object}
	 */
	_getData(id) {
		return this.data.find(data => {
			return data.id === id;
		});
	},

	/**
	 * Retrieves state object, used to allow JSX implementation.
	 * @memberof ChartBase
	 * @protected
	 * @return {Object}
	 */
	_getStateObj() {
		return this;
	},

	/**
	 * Get all tiles of the DOM.
	 * @memberof ChartBase
	 * @protected
	 * @return {?Elements}
	 */
	_getTiles() {
		return DEFAULT_TILES.filter(val => {
			return document.querySelector(`#${val}`);
		}).map(val => document.querySelector(`#${val}`));
	},

	/**
	 * Maps `data` state to chart via `bb.load` method.
	 * @memberof ChartBase
	 * @param {Object} event The change event.
	 * @protected
	 */
	_handleDataChanged(event) {
		this._updateData(event.newVal);
	},

	/**
	 * Maps `groups` state to chart via `bb.groups` method.
	 * @memberof ChartBase
	 * @protected
	 */
	_handleGroupsChanged({newVal}) {
		this.bbChart.groups(newVal);
	},

	/**
	 * Handles `loading` state.
	 * @memberof ChartBase
	 * @protected
	 */
	_handleLoadingChanged({newVal}) {
		const chart = this.element.querySelector('[ref="chart"]');
		const placeholder = this.element.querySelector('[ref="placeholder"]');

		if (!newVal) {
			chart.removeAttribute('hidden');
			placeholder.setAttribute('hidden', 'hidden');
		} else {
			chart.setAttribute('hidden', 'hidden');
			placeholder.removeAttribute('hidden');
		}
	},

	/**
	 * Maps `regions` state to chart via `bb.regions` method.
	 * @memberof ChartBase
	 * @protected
	 */
	_handleRegionsChanged({newVal}) {
		this.bbChart.regions(newVal);
	},

	/**
	 * Maps `size` state to chart via `bb.resize` method.
	 * @memberof ChartBase
	 * @protected
	 */
	_handleSizeChanged({newVal}) {
		this.bbChart.resize(newVal);
	},

	/**
	 * Maps `type` state to chart via `bb.transform` method.
	 * @memberof ChartBase
	 * @protected
	 */
	_handleTypeChanged({newVal}) {
		this.bbChart.transform(newVal);
	},

	/**
	 * Maps `x` state to chart via `bb.x` method.
	 * @memberof ChartBase
	 * @protected
	 */
	_handleXChanged({newVal}) {
		const column = this._getData(newVal);

		this.bbChart.x(column.data);
	},

	/**
	 * Maps xs value to data points.
	 * @memberof ChartBase
	 * @param {Object} xs
	 * @protected
	 * @return {Object}
	 */
	_mapXSValues(xs) {
		return Object.keys(xs).reduce((xsValues, key) => {
			const value = xs[key];

			const xColumn = this._getData(value);

			xsValues[key] = xColumn.data;

			return xsValues;
		}, {});
	},

	/**
	 * Determines which ids should be passed to the unload property.
	 * @memberof ChartBase
	 * @param {Array} newData
	 * @param {Array} prevData
	 * @return {Array}
	 * @static
	 */
	_resolveRemovedData(newData, prevData) {
		const ids = newData.map(data => data[0]);

		return prevData.reduce((removedIds, data) => {
			const id = data[0];

			if (ids.indexOf(id) === -1) {
				removedIds.push(id);
			}

			return removedIds;
		}, []);
	},

	/**
	 * Set's the chart's data
	 * @memberof ChartBase
	 * @param {?Object} columns The data to use.
	 * @protected
	 */
	_setColumns(columns) {
		this.data = columns;
	},

	/**
	 * Sets up the polling interval.
	 * @memberof ChartBase
	 * @protected
	 */
	_setupPolling() {
		const config = this.getInitialConfig();
		const data = config.data;
		const pollingInterval = config.pollingInterval;

		if (pollingInterval) {
			if (this._pollingInterval) {
				clearInterval(this._pollingInterval);
			}

			this._pollingInterval = setInterval(() => {
				this._updateData(data);
			}, pollingInterval);
		}
	},

	/**
	 * Updates the chart's data.
	 * @memberof ChartBase
	 * @param {Object} data The new data to load
	 * @protected
	 */
	_updateData(data) {
		resolveData(data).then(val => {
			const prevVal = this._createDataArray(this._resolvedData);

			this._resolvedData = val;

			const data = this._constructDataConfig(false);
			const newVal = data.columns;
			const removedIds = this._resolveRemovedData(newVal, prevVal);

			if (removedIds.length) {
				data.unload = removedIds;
			}

			this.bbChart.load(data);

			if (data.xs) {
				this.bbChart.xs(this._mapXSValues(data.xs));
			}

			this.emit('dataResolved', data);
		});
	},
};

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ChartBase.STATE = {
	/**
	 * Sets the `loading` state.
	 */
	_loading: Config.bool()
		.internal()
		.value(true),

	/**
	 * Data that will be rendered to the chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	area: Config.shapeOf({
		above: Config.bool().value(false),
		zerobased: Config.bool().value(true),
	}),

	/**
	 * Switches the x and y axis.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	axisRotated: Config.bool(),

	/**
	 * Styling and behavior of x axis.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	axisX: Config.shapeOf({
		categories: Config.array(),
		extent: Config.array(),
		height: Config.number(),
		label: Config.object().string(),
		localtime: Config.bool(),
		max: Config.number(),
		min: Config.number(),
		padding: Config.oneOfType([Config.number(), Config.object()]),
		show: Config.bool(),
		tick: Config.shapeOf({
			centered: Config.bool(),
			count: Config.number(),
			culling: Config.bool().shapeOf({
				max: Config.number(),
			}),
			fit: Config.bool(),
			format: Config.oneOfType([Config.func(), Config.string()]),
			multiline: Config.bool(),
			outer: Config.bool(),
			rotate: Config.number(),
			values: Config.array(),
			width: Config.number(),
		}),
		type: Config.oneOf(['category', 'indexed', 'timeseries']),
	}),

	/**
	 * Styling and behavior of y2 axis.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	axisY2: Config.shapeOf({
		center: Config.number(),
		default: Config.array(),
		inner: Config.bool(),
		inverted: Config.bool(),
		label: Config.object().string(),
		max: Config.number(),
		min: Config.number(),
		padding: Config.oneOfType([Config.number(), Config.object()]),
		show: Config.bool(),
		tick: Config.shapeOf({
			count: Config.number(),
			format: Config.func(),
			outer: Config.bool(),
			values: Config.array(),
		}),
	}),

	/**
	 * Styling and behavior of y axis.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	axisY: Config.shapeOf({
		center: Config.number(),
		default: Config.array(),
		format: Config.func(),
		inner: Config.bool(),
		inverted: Config.bool(),
		label: Config.object().string(),
		max: Config.number(),
		min: Config.number(),
		padding: Config.oneOfType([Config.number(), Config.object()]),
		show: Config.bool(),
		tick: Config.shapeOf({
			count: Config.number(),
			outer: Config.bool(),
			values: Config.array(),
		}),
		type: Config.oneOf(['category', 'indexed', 'timeseries']),
	}),

	/**
	 * Styling and behavior of bars.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	bar: Config.shapeOf({
		width: Config.oneOfType([
			Config.number(),
			Config.shapeOf({
				max: Config.number(),
				ratio: Config.number(),
			}),
		]),
		padding: Config.number(),
		zerobased: Config.bool(),
	}),

	/** Styling and behavior of bubbles.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	bubble: Config.shapeOf({
		maxR: Config.number(),
	}),

	/**
	 * Defines a custom color pattern for chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	color: Config.shapeOf({
		pattern: Config.array().value(DEFAULT_COLORS),
		threshhold: Config.shapeOf({
			unit: Config.string(),
			value: Config.array(),
			max: Config.number(),
		}),
		tiles: Config.oneOfType([Config.bool().value(false), Config.func()]),
	}).value({
		pattern: DEFAULT_COLORS,
		tiles: false,
	}),

	/**
	 * Defines a custom colors for data in chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	colors: Config.object().value({}),

	/**
	 * Sets billboard's data.color config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Function|undefined)}
	 */
	colorFormatter: Config.func(),

	/**
	 * Data that will be rendered to the chart.
	 * @default undefined
	 * @deprecated since 2.0.0-rc.2
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Array|undefined)}
	 */
	columns: {
		setter: '_setColumns',
		valueFn: '_getColumns',
	},

	/**
	 * Data that will be rendered to the chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Array|undefined)}
	 */
	data: Config.oneOfType([
		Config.arrayOf(
			Config.shapeOf({
				axis: Config.oneOf(['y', 'y2']),
				class: Config.string(),
				color: Config.string(),
				data: Config.array().required(),
				hide: Config.bool(),
				id: Config.required().string(),
				name: Config.string(),
				regions: Config.array(),
				type: Config.oneOf(types.all),
				x: Config.string(),
			})
		),
		Config.object(),
		Config.func(),
		Config.string(),
	]),

	/**
	 * Configuration options for donut chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	donut: Config.shapeOf({
		label: Config.shapeOf({
			show: Config.bool(),
			format: Config.func(),
			threshhold: Config.number(),
			ratio: Config.func().number(),
		}),
		expand: Config.bool(),
		width: Config.number(),
		title: Config.string(),
		padAngle: Config.number(),
	}),

	/**
	 * Sets label for when no data is loaded.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	emptyLabelText: Config.string().setter(value => {
		return value ? {empty: {label: {text: value}}} : value;
	}),

	/**
	 * Configuration options for guage chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	gauge: Config.shapeOf({
		fullCircle: Config.bool(),
		lable: Config.shapeOf({
			show: Config.bool(),
			format: Config.func(),
		}),
		expand: Config.bool(),
		min: Config.number(),
		max: Config.number(),
		startingAngle: Config.number(),
		units: Config.string(),
		width: Config.number(),
	}),

	/**
	 * Configuration options for grid chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	grid: Config.shapeOf({
		// Cross reference this with source code, have a feeling this info is wrong
		focus: Config.shapeOf({
			show: Config.bool(),
		}),
		lines: Config.shapeOf({
			front: Config.bool(),
		}),
		x: Config.shapeOf({
			show: Config.bool(),
			lines: Config.arrayOf(
				Config.shapeOf({
					class: Config.string(),
					position: Config.oneOf(['start', 'middle', 'end']),
					text: Config.string(),
					value: Config.any(),
				})
			),
		}),
		y: Config.shapeOf({
			show: Config.bool(),
			lines: Config.arrayOf(
				Config.shapeOf({
					class: Config.string(),
					position: Config.oneOf(['start', 'middle', 'end']),
					text: Config.string(),
					value: Config.any(),
				})
			),
		}),
		ticks: Config.number(),
	}).value(DEFAULT_GRID_OBJECT),

	/**
	 * Sets billboard's data.groups config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Array|undefined)}
	 */
	groups: Config.array(),

	/**
	 * If set to true hides all data.
	 * @default false
	 * @instance
	 * @memberof ChartBase
	 * @type {?(boolean|undefined)}
	 */
	hide: Config.bool().value(false),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Intersection display options.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	intersection: Config.shapeOf({
		enabled: Config.bool(),
		brighten: Config.bool(),
		inputType: Config.shapeOf({
			mouse: Config.bool(),
			touch: Config.bool(),
		}),
	}),

	/**
	 * Sets billboard's data.json config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Array|boolean|undefined)}
	 */
	json: Config.array(),

	/**
	 * Sets billboard's data.keys config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Array|undefined)}
	 */
	keys: Config.array().setter(value => {
		return value ? {value} : value;
	}),

	/**
	 * Sets billboard's data.labels config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Boolean|Function|undefined)}
	 */
	labels: Config.bool()
		.func()
		.setter(value => {
			if (!value) {
				return value;
			} else if (typeof value === 'boolean') {
				return {
					labels: value,
				};
			} else {
				return {
					labels: {
						format: value,
					},
				};
			}
		}),

	/**
	 * Legend display options.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	legend: Config.shapeOf({
		contents: Config.shapeOf({
			bindto: Config.any(),
			template: Config.oneOfType([Config.func(), Config.string()]),
		}),
		hide: Config.bool(),
		position: Config.oneOf(['bottom', 'inset', 'right']),
		inset: Config.shapeOf({
			anchor: Config.oneOf([
				'bottom-left',
				'bottom-right',
				'top-left',
				'top-right',
			]),
			step: Config.number(),
			x: Config.number(),
			y: Config.number(),
		}),
		show: Config.bool(),
	}),

	/**
	 * Display settings for chart lines.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	line: Config.shapeOf({
		classes: Config.array(),
		connectNull: Config.bool(),
		step: Config.shapeOf({
			type: Config.oneOf(['step', 'step-after', 'step-before']),
		}),
	}).value({
		classes: DEFAULT_LINE_CLASSES,
	}),

	/**
	 * Sets billboard's data.mimeType config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	mimeType: Config.string(),

	/**
	 * Sets billboard's data.order config.
	 * @default desc
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	order: Config.string().value('desc'),

	/**
	 * Sets padding on chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	padding: Config.shapeOf({
		bottom: Config.number(),
		left: Config.number(),
		right: Config.number(),
		top: Config.number(),
	}),

	/**
	 * Configuration options for pie chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	pie: Config.shapeOf({
		label: Config.shapeOf({
			show: Config.bool(),
			format: Config.func(),
			threshhold: Config.number(),
			ratio: Config.func().number(),
		}),
		expand: Config.bool(),
		padAngle: Config.number(),
	}),

	/**
	 * Configuration options for chart points.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	point: Config.shapeOf({
		show: Config.bool(),
		r: Config.number(),
		focus: Config.shapeOf({
			expand: Config.shapeOf({
				enabled: Config.bool(),
				r: Config.number(),
			}),
			select: Config.shapeOf({
				r: Config.number(),
			}),
		}),
		pattern: Config.array(),
	}).value({
		pattern: DEFAULT_POINT_PATTERNS,
	}),

	/**
	 * Set an interval (in ms) to fetch the data.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?Number}
	 */
	pollingInterval: Config.number(),

	/**
	 * Creates custom regions on chart that can be styled.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	regions: Config.arrayOf(
		Config.shapeOf({
			class: Config.string(),
			enabled: Config.oneOf(['x', 'y']).required(),
			end: Config.oneOfType([
				Config.number(),
				Config.string(),
			]).required(),
			start: Config.oneOfType([
				Config.number(),
				Config.string(),
			]).required(),
		})
	),

	/**
	 * Determines if chart auto resizes when viewport size changes.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(boolean|undefined)}
	 */
	resizeAuto: Config.bool().setter(value => {
		return value ? {auto: value} : value;
	}),

	/**
	 * Load data from a multidimensional array. Sets billboard's `data.rows`
	 * config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(array|undefined)}
	 */
	rows: Config.array(),

	/**
	 * Sets billboard's `data.selection` config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	selection: Config.shapeOf({
		draggable: Config.bool(),
		enabled: Config.bool(),
		grouped: Config.bool(),
		isselectable: Config.func(),
		multiple: Config.bool(),
	}),

	/**
	 * Sets size of chart.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	size: Config.shapeOf({
		height: Config.number(),
		width: Config.number(),
	}),

	/**
	 * Determines interpolation type of spline charts.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|object|undefined)}
	 */
	splineInterpolationType: Config.oneOfType([
		Config.object(),
		Config.string(),
	]).setter(value => {
		return value ? {interpolation: {type: value}} : value;
	}),

	/**
	 * Config options for subcharts.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	subchart: Config.shapeOf({
		show: Config.bool(),
		size: Config.shapeOf({
			height: Config.number(),
		}),
		onbrush: Config.func(),
	}),

	/**
	 * Customizes classname for svg element.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	svgClassname: Config.string().setter(value => {
		return value ? {classname: value} : value;
	}),

	/**
	 * Display options for title element.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	title: Config.shapeOf({
		text: Config.string(),
		padding: Config.shapeOf({
			bottom: Config.number(),
			left: Config.number(),
			right: Config.number(),
			top: Config.number(),
		}),
		position: Config.string(),
	}),

	/**
	 * Display options for tooltip.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	tooltip: Config.shapeOf({
		show: Config.bool(),
		grouped: Config.bool(),
		format: Config.shapeOf({
			name: Config.func(),
			title: Config.func(),
			value: Config.func(),
		}),
		contents: Config.func(),
	}),

	/**
	 * Sets duration of transitions.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(number|undefined)}
	 */
	transitionDuration: Config.number().setter(value => {
		return value ? {duration: value} : value;
	}),

	/**
	 * The variety of chart that will be rendered.
	 * @default line
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	type: Config.oneOf(types.all).value('line'),

	/**
	 * Load a CSV or JSON file from a URL.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	url: Config.string(),

	/**
	 * Sets billboard's data.x config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	x: Config.string(),

	/**
	 * Sets billboard's data.xs config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(object|undefined)}
	 */
	xs: Config.object(),

	/**
	 * Sets billboard's data.xFormat config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(string|undefined)}
	 */
	xFormat: Config.string(),

	/**
	 * Sets billboard's data.xLocaltime config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(boolean|undefined)}
	 */
	xLocaltime: Config.bool(),

	/**
	 * Sets billboard's data.xSort config.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	xSort: Config.bool(),

	/**
	 * Configuration for bb chart zoom capabilities.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?(Object|undefined)}
	 */
	zoom: Config.shapeOf({
		enabled: Config.bool().value(true),
		rescale: Config.bool().value(false),
		extent: Config.array(),
	}),
};

export {bb, d3, ChartBase};
export default ChartBase;
