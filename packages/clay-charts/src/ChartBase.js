import {bb, d3} from 'billboard.js';
import {isFunction, isString} from 'metal';
import {Config} from 'metal-state';
import {isServerSide} from 'metal';
import types from './utils/types';

const PROP_NAME_MAP = {
	axis: 'axes',
	class: 'classes',
	color: 'colors',
	name: 'names',
	regions: 'regions',
	type: 'types',
	x: 'xs',
};

const DEFAULT_COLORS = [
	'#4B9BFF',
	'#FFD76E',
	'#FF5F5F',
	'#9CE269',
	'#AF78FF',
	'#50D2A0',
	'#FF73C3',
	'#FFB64E',
	'#5FC8FF',
];

const DEFAULT_LINE_CASSES = [
	'bb-line-dashed-2-2',
	'bb-line-dashed-2-3',
	'bb-line-dashed-2-4',
	'bb-line-dashed-3-2',
	'bb-line-dashed-3-3',
	'bb-line-dashed-3-4',
	'bb-line-dashed-4-2',
	'bb-line-dashed-4-3',
	'bb-line-dashed-4-4',
];

const DEFAULT_TILES = [
	'circles',
	'diagonal-left-large',
	'diagonal-left-small',
	'diagonal-right-large',
	'diagonal-right-small',
	'horizontal-large',
	'horizontal-small',
	'vertical-large',
	'vertical-small',
];

const DEFAULT_POINT_PATTERNS = [
	'circle',
	'rectangle',
	'<polygon points="2.5 0 0 5 5 5"></polygon>',
	'<polygon points="2.5 0 0 2.5 2.5 5 5 2.5"></polygon>',
	'<polygon points="0 0 2.5 5 5 0"></polygon>',
	'<path d="M5,5 a1,1 0 1,1 5,0">',
	'<path d="M0,0 a1,1 0 0,0 5,0">',
	'<rect width="5" height="2.5"></rect>',
	'<rect width="2.5" height="5"></rect>',
];

/**
 * Chart Base prototype.
 *
 * @mixin
 */
const ChartBase = {
	/**
	 * @inheritDoc
	 */
	attached() {
		if (isServerSide()) {
			return;
		}

		this._resolveData(this.data).then(data => {
			this._resolvedData = data;
			const config = this._constructChartConfig();
			this.bbChart = bb.generate(config);

			this.on('dataChanged', this._handleDataChanged.bind(this));
			this.on('groupsChanged', this._handleGroupsChanged.bind(this));
			this.on('_loadingChanged', this._handleLoadingChanged.bind(this));
			this.on('regionsChanged', this._handleRegionsChanged.bind(this));
			this.on('sizeChanged', this._handleSizeChanged.bind(this));
			this.on('typeChanged', this._handleTypeChanged.bind(this));
			this.on('xChanged', this._handleXChanged.bind(this));

			this.emit('chartReady');

			this._loading = false;
		});
	},

	/**
	 * @inheritDoc
	 */
	disposed() {
		if (isServerSide()) {
			return;
		}

		if (this.bbChart) {
			this.bbChart.destroy();
		}
	},

	/**
	 * @inheritDoc
	 */
	shouldUpdate() {
		return false;
	},

	/**
	 * Constructs `axis` billboard config property.
	 * @return {Object}
	 * @protected
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
	 * @return {Object}
	 * @protected
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
			bindto: this.refs.chart,
			bubble: state.bubble,
			color: color,
			data,
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
	 * @return {Object}
	 * @protected
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
	 * @return {Object}
	 * @protected
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
	 * @param {boolean} attachListeners
	 * @return {Object}
	 * @protected
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
	 * @return {Object}
	 * @protected
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
	 * @return {Object}
	 * @protected
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
	 * @param {Array} data
	 * @return {Array}
	 * @protected
	 */
	_createDataArray(data) {
		return data.map(({data, id}) => {
			return [id].concat(data);
		});
	},

	/**
	 * Emits event based on arguments array.
	 * @protected
	 */
	_emitChartEvent() {
		this.emit.apply(this, arguments); // eslint-disable-line
	},

	/**
	 * Gets all columns
	 * @return {?Object}
	 * @protected
	 */
	_getColumns() {
		return this.data;
	},

	/**
	 * Gets column by column id.
	 * @param {string} id column id
	 * @return {?Object}
	 * @protected
	 */
	_getData(id) {
		return this.data.find(data => {
			return data.id === id;
		});
	},

	/**
	 * Retrieves state object, used to allow JSX implementation.
	 * @return {Object}
	 * @protected
	 */
	_getStateObj() {
		return this;
	},

	/**
	 * Get all tiles of the DOM.
	 * @return {?Elements}
	 * @protected
	 */
	_getTiles() {
		return DEFAULT_TILES.filter(val => {
			return document.querySelector(`#${val}`);
		}).map(val => document.querySelector(`#${val}`));
	},

	/**
	 * Maps `data` state to chart via `bb.load` method.
	 * @param {Object} event The change event.
	 * @protected
	 */
	_handleDataChanged(event) {
		this._resolveData(event.newVal).then(val => {
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

	/**
	 * Maps `groups` state to chart via `bb.groups` method.
	 * @protected
	 */
	_handleGroupsChanged({newVal}) {
		this.bbChart.groups(newVal);
	},

	/**
	 * Handles `loading` state.
	 * @protected
	 */
	_handleLoadingChanged({newVal}) {
		if (!newVal) {
			this.refs.chart.removeAttribute('hidden');
			this.refs.placeholder.setAttribute('hidden', 'hidden');
		} else {
			this.refs.chart.setAttribute('hidden', 'hidden');
			this.refs.placeholder.removeAttribute('hidden');
		}
	},

	/**
	 * Maps `regions` state to chart via `bb.regions` method.
	 * @protected
	 */
	_handleRegionsChanged({newVal}) {
		this.bbChart.regions(newVal);
	},

	/**
	 * Maps `size` state to chart via `bb.resize` method.
	 * @protected
	 */
	_handleSizeChanged({newVal}) {
		this.bbChart.resize(newVal);
	},

	/**
	 * Maps `type` state to chart via `bb.transform` method.
	 * @protected
	 */
	_handleTypeChanged({newVal}) {
		this.bbChart.transform(newVal);
	},

	/**
	 * Maps `x` state to chart via `bb.x` method.
	 * @protected
	 */
	_handleXChanged({newVal}) {
		const column = this._getData(newVal);

		this.bbChart.x(column.data);
	},

	/**
	 * Maps xs value to data points.
	 * @param {Object} xs
	 * @return {Object}
	 * @protected
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
	 * Check's the data or columns option and resolves this `data_` accordingly.
	 * @return {Promise}
	 * @param {?Array|Function|String} data the data to resolve.
	 * @protected
	 */
	_resolveData(data) {
		if (Array.isArray(data)) {
			return Promise.resolve(data);
		} else if (isFunction(data)) {
			return data().then(val => val);
		} else if (isString(data)) {
			return fetch(data)
				.then(res => res.json())
				.then(res => res.data);
		}
	},

	/**
	 * Determines which ids should be passed to the unload property.
	 * @static
	 * @param {Array} newData
	 * @param {Array} prevData
	 * @return {Array}
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
	 * @param {?Object} columns The data to use.
	 * @protected
	 */
	_setColumns(columns) {
		this.data = columns;
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	area: Config.shapeOf({
		above: Config.bool().value(false),
		zerobased: Config.bool().value(true),
	}),

	/**
	 * Switches the x and y axis.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	axisRotated: Config.bool(),

	/**
	 * Styling and behavior of x axis.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	axisX: Config.shapeOf({
		categories: Config.array(),
		extent: Config.array(),
		height: Config.number(),
		label: Config.object().string(),
		localtime: Config.bool(),
		max: Config.number(),
		min: Config.number(),
		padding: Config.object(),
		show: Config.bool(),
		tick: Config.shapeOf({
			centered: Config.bool(),
			count: Config.number(),
			culling: Config.bool().shapeOf({
				max: Config.number(),
			}),
			fit: Config.bool(),
			format: Config.func(),
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	axisY2: Config.shapeOf({
		center: Config.number(),
		default: Config.array(),
		inner: Config.bool(),
		inverted: Config.bool(),
		label: Config.object().string(),
		max: Config.number(),
		min: Config.number(),
		padding: Config.number(),
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
		padding: Config.object().string(),
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	bar: Config.shapeOf({
		width: Config.number(),
		zerobased: Config.bool(),
	}),

	/** Styling and behavior of bubbles.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	bubble: Config.shapeOf({
		maxR: Config.number(),
	}),

	/**
	 * Defines a custom color pattern for chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	colors: Config.object().value({}),

	/**
	 * Sets billboard's data.color config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Function|undefined}
	 * @default undefined
	 */
	colorFormatter: Config.func(),

	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Array|undefined}
	 * @default undefined
	 * @deprecated since 2.0.0-rc.2
	 */
	columns: {
		setter: '_setColumns',
		valueFn: '_getColumns',
	},

	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Array|undefined}
	 * @default undefined
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
		Config.func(),
		Config.string(),
	]),

	/**
	 * Configuration options for donut chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	emptyLabelText: Config.string().setter(value => {
		return value
			? {
				empty: {
					label: {
						text: value,
					},
				},
			}
			: value;
	}),

	/**
	 * Configuration options for guage chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
			lines: Config.shapeOf({
				class: Config.string(),
				position: Config.oneOf(['start', 'middle', 'end']),
				text: Config.string(),
				value: Config.string(),
			}),
		}),
		y: Config.shapeOf({
			show: Config.bool(),
			lines: Config.shapeOf({
				class: Config.string(),
				position: Config.oneOf(['start', 'middle', 'end']),
				text: Config.string(),
				value: Config.string(),
			}),
		}),
		ticks: Config.number(),
	}).value({
		x: {
			show: true,
		},
		y: {
			show: true,
		},
	}),

	/**
	 * Sets billboard's data.groups config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Array|undefined}
	 * @default undefined
	 */
	groups: Config.array(),

	/**
	 * If set to true hides all data.
	 * @instance
	 * @memberof ChartBase
	 * @type {boolean|undefined}
	 * @default false
	 */
	hide: Config.bool().value(false),

	/**
	 * Intersection display options.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Array|boolean|undefined}
	 * @default undefined
	 */
	json: Config.array(),

	/**
	 * Sets billboard's data.keys config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Array|undefined}
	 * @default undefined
	 */
	keys: Config.array().setter(value => {
		return value
			? {
				value,
			}
			: value;
	}),

	/**
	 * Sets billboard's data.labels config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Boolean|Function|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	legend: Config.shapeOf({
		contents: Config.shapeOf({
			bindto: Config.string(),
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	line: Config.shapeOf({
		classes: Config.array(),
		connectNull: Config.bool(),
		step: Config.shapeOf({
			type: Config.oneOf(['step', 'step-after', 'step-before']),
		}),
	}).value({
		classes: DEFAULT_LINE_CASSES,
	}),

	/**
	 * Sets billboard's data.mimeType config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	mimeType: Config.string(),

	/**
	 * Sets billboard's data.order config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default "desc"
	 */
	order: Config.string().value('desc'),

	/**
	 * Sets padding on chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	padding: Config.shapeOf({
		bottom: Config.number(),
		left: Config.number(),
		right: Config.number(),
		top: Config.number(),
	}),

	/**
	 * Configuration options for pie chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	point: Config.shapeOf({
		show: Config.bool(),
		r: Config.number(),
		focus: Config.shapeOf({
			expand: Config.shapeOf({
				enabled: Config.bool(),
				r: Config.bool(),
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
	 * Creates custom regions on chart that can be styled.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	regions: Config.shapeOf({
		class: Config.string(),
		enabled: Config.oneOf(['x', 'y']).required(),
		end: Config.array().required(),
		start: Config.number().required(),
	}),

	/**
	 * Determines if chart auto resizes when viewport size changes.
	 * @instance
	 * @memberof ChartBase
	 * @type {?boolean|undefined}
	 * @default undefined
	 */
	resizeAuto: Config.bool().setter(value => {
		return value
			? {
				auto: value,
			}
			: value;
	}),

	/**
	 * Load data from a multidimensional array. Sets billboard's `data.rows`
	 * config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?array|undefined}
	 * @default undefined
	 */
	rows: Config.array(),

	/**
	 * Sets billboard's `data.selection` config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	size: Config.shapeOf({
		height: Config.number(),
		width: Config.number(),
	}),

	/**
	 * Determines interpolation type of spline charts.
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	splineInterpolationType: Config.string().setter(value => {
		return value
			? {
				interpolation: {
					type: value,
				},
			}
			: value;
	}),

	/**
	 * Config options for subcharts.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	svgClassname: Config.string().setter(value => {
		return value
			? {
				classname: value,
			}
			: value;
	}),

	/**
	 * Display options for title element.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
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
	 * @instance
	 * @memberof ChartBase
	 * @type {?number|undefined}
	 * @default undefined
	 */
	transitionDuration: Config.number().setter(value => {
		return value
			? {
				duration: value,
			}
			: value;
	}),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default line
	 */
	type: Config.oneOf(types.all).value('line'),

	/**
	 * Load a CSV or JSON file from a URL.
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	url: Config.string(),

	/**
	 * Sets billboard's data.x config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	x: Config.string(),

	/**
	 * Sets billboard's data.xFormat config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	xFormat: Config.string(),

	/**
	 * Sets billboard's data.xLocaltime config.
	 * @instance
	 * @memberof ChartBase
	 * @type {boolean|undefined}
	 * @default undefined
	 */
	xLocaltime: Config.bool(),

	/**
	 * Sets billboard's data.xSort config.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	xSort: Config.bool(),

	/**
	 * Configuration for bb chart zoom capabilities.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	zoom: Config.shapeOf({
		enabled: Config.bool().value(true),
		rescale: Config.bool().value(false),
		extent: Config.array(),
	}),
};

export {bb, d3, ChartBase};
export default ChartBase;
