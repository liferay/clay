import types from './utils/types';
import {Config} from 'metal-state';
import {bb, d3} from 'billboard.js';

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
	attached: function() {
		const config = this.constructChartConfig_();

		const existingTiles = DEFAULT_TILES.filter(val => {
			return document.querySelector(`#${val}`);
		}).map(val => document.querySelector(`#${val}`));

		if (existingTiles.length > 0) {
			config.color.tiles = () => existingTiles;
		}

		this.bbChart = bb.generate(config);

		this.on('columnsChanged', this.handleColumnsChanged_.bind(this));
		this.on('groupsChanged', this.handleGroupsChanged_.bind(this));
		this.on('loadingChanged', this.handleLoadingChanged_.bind(this));
		this.on('regionsChanged', this.handleRegionsChanged_.bind(this));
		this.on('sizeChanged', this.handleSizeChanged_.bind(this));
		this.on('typeChanged', this.handleTypeChanged_.bind(this));
		this.on('xChanged', this.handleXChanged_.bind(this));
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
	constructAxisConfig_: function() {
		const state = this.getStateObj_();

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
	constructChartConfig_: function() {
		const state = this.getStateObj_();

		const axis = this.constructAxisConfig_();
		const data = this.constructDataConfig_();
		const zoom = this.constructZoomConfig_();

		const config = {
			area: state.area,
			axis,
			bindto: this.refs.chart,
			color: state.color,
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
		config.oninit = this.emitChartEvent_.bind(this, 'chartInit');
		/**
		 * Chart mouse out event.
		 * @event chartMouseout
		 * @memberof ChartBase
		 */
		config.onout = this.emitChartEvent_.bind(this, 'chartMouseout');
		/**
		 * Chart mouse over event.
		 * @event chartMouseover
		 * @memberof ChartBase
		 */
		config.onover = this.emitChartEvent_.bind(this, 'chartMouseover');
		/**
		 * Chart rendered event.
		 * @event chartRendered
		 * @memberof ChartBase
		 */
		config.onrendered = this.emitChartEvent_.bind(this, 'chartRendered');
		/**
		 * Chart resize event.
		 * @event chartResize
		 * @memberof ChartBase
		 */
		config.onresize = this.emitChartEvent_.bind(this, 'chartResize');
		/**
		 * Chart resized event.
		 * @event chartResized
		 * @memberof ChartBase
		 */
		config.onresized = this.emitChartEvent_.bind(this, 'chartResized');

		return config;
	},

	/**
	 * Constructs various `data` billboard properties from columns state.
	 * @return {Object}
	 * @protected
	 */
	constructColumnsConfig_: function() {
		const {columns} = this.getStateObj_();

		const config = {
			columns: this.createColumnsArray_(columns),
		};

		for (let i = 0; i < columns.length; i++) {
			const column = columns[i];

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
	 * Constructs `data` billboard config property.
	 * @param {boolean} attachListeners
	 * @return {Object}
	 * @protected
	 */
	constructDataConfig_: function(attachListeners = true) {
		const state = this.getStateObj_();

		const config = {
			color: state.colorFormatter,
			colors: state.colors,
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

		const columnsConfig = this.constructColumnsConfig_();

		Object.assign(config, columnsConfig);

		if (attachListeners) {
			/**
			 * Point click event.
			 * @event pointClick
			 * @memberof ChartBase
			 */
			config.onclick = this.emitChartEvent_.bind(this, 'pointClick');
			/**
			 * Point mouse out event.
			 * @event pointMouseout
			 * @memberof ChartBase
			 */
			config.onout = this.emitChartEvent_.bind(this, 'pointMouseout');
			/**
			 * Point mouse over event.
			 * @event pointMouseoever
			 * @memberof ChartBase
			 */
			config.onover = this.emitChartEvent_.bind(this, 'pointMouseover');
			/**
			 * Data select event.
			 * @event dataSelect
			 * @memberof ChartBase
			 */
			config.onselect = this.emitChartEvent_.bind(this, 'dataSelect');
			/**
			 * Data unselected event.
			 * @event dataUnselected
			 * @memberof ChartBase
			 */
			config.onunselected = this.emitChartEvent_.bind(
				this,
				'dataUnselected'
			);
		}

		return config;
	},

	/**
	 * Constructs `zoom` billboard config property.
	 * @return {Object}
	 * @protected
	 */
	constructZoomConfig_: function() {
		const state = this.getStateObj_();

		const zoom = state.zoom;

		const config = zoom || {};

		/**
		 * Zoom event.
		 * @event zoom
		 * @memberof ChartBase
		 */
		config.onzoom = this.emitChartEvent_.bind(this, 'zoom');
		/**
		 * Zoom end event.
		 * @event zoomEnd
		 * @memberof ChartBase
		 */
		config.onzoomend = this.emitChartEvent_.bind(this, 'zoomEnd');
		/**
		 * Zoom start event.
		 * @event zoomStart
		 * @memberof ChartBase
		 */
		config.onzoomstart = this.emitChartEvent_.bind(this, 'zoomStart');

		return config;
	},

	/**
	 * Converts `columns` state into consumable array for billboard.js
	 * @param {Array} columns
	 * @return {Array}
	 * @protected
	 */
	createColumnsArray_: function(columns) {
		return columns.map(({data, id}) => {
			return [id].concat(data);
		});
	},

	/**
	 * Emits event based on arguments array.
	 * @protected
	 */
	emitChartEvent_: function() {
		this.emit.apply(this, arguments); // eslint-disable-line
	},

	/**
	 * Gets column by column id.
	 * @param {string} id column id
	 * @return {?Object}
	 * @protected
	 */
	getColumn_: function(id) {
		return this.columns.find(column => {
			return column.id === id;
		});
	},

	/**
	 * Retrieves state object, used to allow JSX implementation.
	 * @return {Object}
	 * @protected
	 */
	getStateObj_: function() {
		return this;
	},

	/**
	 * Maps `columns` state to chart via `bb.load` method.
	 * @protected
	 */
	handleColumnsChanged_: function({prevVal}) {
		const data = this.constructDataConfig_(false);

		const newVal = data.columns;
		prevVal = this.createColumnsArray_(prevVal);

		const removedIds = this.resolveRemovedColumns_(newVal, prevVal);

		if (removedIds.length) {
			data.unload = removedIds;
		}

		this.bbChart.load(data);

		if (data.xs) {
			this.bbChart.xs(this.mapXSValues_(data.xs));
		}
	},

	/**
	 * Maps `groups` state to chart via `bb.groups` method.
	 * @protected
	 */
	handleGroupsChanged_: function({newVal}) {
		this.bbChart.groups(newVal);
	},

	/**
	 * Handles `loading` state.
	 * @protected
	 */
	handleLoadingChanged_: function({newVal}) {
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
	handleRegionsChanged_: function({newVal}) {
		this.bbChart.regions(newVal);
	},

	/**
	 * Maps `size` state to chart via `bb.resize` method.
	 * @protected
	 */
	handleSizeChanged_: function({newVal}) {
		this.bbChart.resize(newVal);
	},

	/**
	 * Maps `type` state to chart via `bb.transform` method.
	 * @protected
	 */
	handleTypeChanged_: function({newVal}) {
		this.bbChart.transform(newVal);
	},

	/**
	 * Maps `x` state to chart via `bb.x` method.
	 * @protected
	 */
	handleXChanged_: function({newVal}) {
		const column = this.getColumn_(newVal);

		this.bbChart.x(column.data);
	},

	/**
	 * Maps xs value to data points.
	 * @param {Object} xs
	 * @return {Object}
	 * @protected
	 */
	mapXSValues_: function(xs) {
		return Object.keys(xs).reduce((xsValues, key) => {
			const value = xs[key];

			const xColumn = this.getColumn_(value);

			xsValues[key] = xColumn.data;

			return xsValues;
		}, {});
	},

	/**
	 * Determines which ids should be passed to the unload property.
	 * @static
	 * @param {Array} newColumns
	 * @param {Array} prevColumns
	 * @return {Array}
	 */
	resolveRemovedColumns_: function(newColumns, prevColumns) {
		const ids = newColumns.map(column => column[0]);

		return prevColumns.reduce((removedIds, column) => {
			const id = column[0];

			if (ids.indexOf(id) === -1) {
				removedIds.push(id);
			}

			return removedIds;
		}, []);
	},
};

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ChartBase.STATE = {
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
			count: Config.bool(),
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

	/**
	 * Defines a custom color pattern for chart.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	color: Config.shapeOf({
		pattern: Config.array(),
		threshhold: Config.shapeOf({
			unit: Config.string(),
			value: Config.array(),
			max: Config.number(),
		}),
		tiles: Config.func(),
	}).value({
		pattern: DEFAULT_COLORS,
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
	 */
	columns: Config.arrayOf(
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
	 * @type {?boolean|function|undefined}
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
	 * Sets the `loading` state.
	 */
	loading: Config.bool().value(false),

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
