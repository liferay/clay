'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ChartBase = exports.d3 = exports.bb = undefined;

var _metalState = require('metal-state');

var _billboard = require('billboard.js');

var _types = require('./utils/types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PROP_NAME_MAP = {
	axis: 'axes',
	class: 'classes',
	color: 'colors',
	name: 'names',
	regions: 'regions',
	type: 'types',
	x: 'xs'
};

/**
 * Chart Base prototype.
 *
 * @mixin
 */
var ChartBase = {
	/**
  * @inheritDoc
  */
	attached: function attached() {
		var config = this.constructChartConfig_();

		this.bbChart = _billboard.bb.generate(config);

		this.on('columnsChanged', this.handleColumnsChanged_.bind(this));
		this.on('groupsChanged', this.handleGroupsChanged_.bind(this));
		this.on('regionsChanged', this.handleRegionsChanged_.bind(this));
		this.on('sizeChanged', this.handleSizeChanged_.bind(this));
		this.on('typeChanged', this.handleTypeChanged_.bind(this));
		this.on('xChanged', this.handleXChanged_.bind(this));
	},

	/**
  * Constructs `axis` billboard config property.
  * @return {Object}
  * @protected
  */
	constructAxisConfig_: function constructAxisConfig_() {
		var state = this.getStateObj_();

		return {
			rotated: state.axisRotated,
			x: state.axisX,
			y2: state.axisY2,
			y: state.axisY
		};
	},

	/**
  * Constructs config object for `bb.generate` method.
  * @return {Object}
  * @protected
  */
	constructChartConfig_: function constructChartConfig_() {
		var state = this.getStateObj_();

		var axis = this.constructAxisConfig_();
		var data = this.constructDataConfig_();
		var zoom = this.constructZoomConfig_();

		var config = {
			area: state.area,
			axis: axis,
			bindto: this.element,
			color: state.color,
			data: data,
			line: state.line,
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
			zoom: zoom
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
	constructColumnsConfig_: function constructColumnsConfig_() {
		var _getStateObj_ = this.getStateObj_(),
		    columns = _getStateObj_.columns;

		var config = {
			columns: this.createColumnsArray_(columns)
		};

		for (var i = 0; i < columns.length; i++) {
			var column = columns[i];

			var id = column.id;


			var keys = Object.keys(column);

			for (var j = 0; j < keys.length; j++) {
				var key = keys[j];

				if (key === 'data' || key === 'id') {
					continue;
				}

				if (key === 'hide') {
					config.hide = config.hide || [];

					if (column.hide) {
						config.hide.push(column.id);
					}
				} else {
					config[PROP_NAME_MAP[key]] = config[PROP_NAME_MAP[key]] || {};

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
	constructDataConfig_: function constructDataConfig_() {
		var attachListeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		var state = this.getStateObj_();

		var config = {
			color: state.colorFormatter,
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
			xs: state.xs
		};

		var columnsConfig = this.constructColumnsConfig_();

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
			config.onunselected = this.emitChartEvent_.bind(this, 'dataUnselected');
		}

		return config;
	},

	/**
  * Constructs `zoom` billboard config property.
  * @return {Object}
  * @protected
  */
	constructZoomConfig_: function constructZoomConfig_() {
		var state = this.getStateObj_();

		var zoom = state.zoom;

		var config = zoom || {};

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
	createColumnsArray_: function createColumnsArray_(columns) {
		return columns.map(function (_ref) {
			var data = _ref.data,
			    id = _ref.id;

			return [id].concat(data);
		});
	},

	/**
  * Emits event based on arguments array.
  * @protected
  */
	emitChartEvent_: function emitChartEvent_() {
		this.emit.apply(this, arguments);
	},

	/**
  * Gets column by column id.
  * @param {string} id column id
  * @return {?Object}
  * @protected
  */
	getColumn_: function getColumn_(id) {
		return this.columns.find(function (column) {
			return column.id === id;
		});
	},

	/**
  * Retrieves state object, used to allow JSX implementation.
  * @return {Object}
  * @protected
  */
	getStateObj_: function getStateObj_() {
		return this;
	},

	/**
  * Maps `columns` state to chart via `bb.load` method.
  * @protected
  */
	handleColumnsChanged_: function handleColumnsChanged_(_ref2) {
		var prevVal = _ref2.prevVal;

		var data = this.constructDataConfig_(false);

		var newVal = data.columns;
		prevVal = this.createColumnsArray_(prevVal);

		var removedIds = this.resolveRemovedColumns_(newVal, prevVal);

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
	handleGroupsChanged_: function handleGroupsChanged_(_ref3) {
		var newVal = _ref3.newVal;

		this.bbChart.groups(newVal);
	},

	/**
  * Maps `regions` state to chart via `bb.regions` method.
  * @protected
  */
	handleRegionsChanged_: function handleRegionsChanged_(_ref4) {
		var newVal = _ref4.newVal;

		this.bbChart.regions(newVal);
	},

	/**
  * Maps `size` state to chart via `bb.resize` method.
  * @protected
  */
	handleSizeChanged_: function handleSizeChanged_(_ref5) {
		var newVal = _ref5.newVal;

		this.bbChart.resize(newVal);
	},

	/**
  * Maps `type` state to chart via `bb.transform` method.
  * @protected
  */
	handleTypeChanged_: function handleTypeChanged_(_ref6) {
		var newVal = _ref6.newVal;

		this.bbChart.transform(newVal);
	},

	/**
  * Maps `x` state to chart via `bb.x` method.
  * @protected
  */
	handleXChanged_: function handleXChanged_(_ref7) {
		var newVal = _ref7.newVal;
		var bbChart = this.bbChart;


		var column = this.getColumn_(newVal);

		this.bbChart.x(column.data);
	},

	/**
  * Maps xs value to data points.
  * @param {Object} xs
  * @return {Object}
  * @protected
  */
	mapXSValues_: function mapXSValues_(xs) {
		var _this = this;

		return Object.keys(xs).reduce(function (xsValues, key) {
			var value = xs[key];

			var xColumn = _this.getColumn_(value);

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
	resolveRemovedColumns_: function resolveRemovedColumns_(newColumns, prevColumns) {
		var ids = newColumns.map(function (column) {
			return column[0];
		});

		return prevColumns.reduce(function (removedIds, column) {
			var id = column[0];

			if (ids.indexOf(id) === -1) {
				removedIds.push(id);
			}

			return removedIds;
		}, []);
	}
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
	area: _metalState.Config.shapeOf({
		above: _metalState.Config.bool().value(false),
		zerobased: _metalState.Config.bool().value(true)
	}),

	/**
  * Switches the x and y axis.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	axisRotated: _metalState.Config.bool(),

	/**
  * Styling and behavior of x axis.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	axisX: _metalState.Config.shapeOf({
		categories: _metalState.Config.array(),
		extent: _metalState.Config.array(),
		height: _metalState.Config.number(),
		label: _metalState.Config.object().string(),
		localtime: _metalState.Config.bool(),
		max: _metalState.Config.number(),
		min: _metalState.Config.number(),
		padding: _metalState.Config.object(),
		show: _metalState.Config.bool(),
		tick: _metalState.Config.shapeOf({
			centered: _metalState.Config.bool(),
			count: _metalState.Config.number(),
			culling: _metalState.Config.bool().shapeOf({
				max: _metalState.Config.number()
			}),
			fit: _metalState.Config.bool(),
			format: _metalState.Config.func(),
			multiline: _metalState.Config.bool(),
			outer: _metalState.Config.bool(),
			rotate: _metalState.Config.number(),
			values: _metalState.Config.array(),
			width: _metalState.Config.number()
		}),
		type: _metalState.Config.oneOf(['category', 'indexed', 'timeseries'])
	}),

	/**
  * Styling and behavior of y2 axis.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	axisY2: _metalState.Config.shapeOf({
		center: _metalState.Config.number(),
		default: _metalState.Config.array(),
		inner: _metalState.Config.bool(),
		inverted: _metalState.Config.bool(),
		label: _metalState.Config.object().string(),
		max: _metalState.Config.number(),
		min: _metalState.Config.number(),
		padding: _metalState.Config.number(),
		show: _metalState.Config.bool(),
		tick: _metalState.Config.shapeOf({
			count: _metalState.Config.number(),
			format: _metalState.Config.func(),
			outer: _metalState.Config.bool(),
			values: _metalState.Config.array()
		})
	}),

	/**
  * Styling and behavior of y axis.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	axisY: _metalState.Config.shapeOf({
		center: _metalState.Config.number(),
		default: _metalState.Config.array(),
		format: _metalState.Config.func(),
		inner: _metalState.Config.bool(),
		inverted: _metalState.Config.bool(),
		label: _metalState.Config.object().string(),
		max: _metalState.Config.number(),
		min: _metalState.Config.number(),
		padding: _metalState.Config.object().string(),
		show: _metalState.Config.bool(),
		tick: _metalState.Config.shapeOf({
			count: _metalState.Config.bool(),
			outer: _metalState.Config.bool(),
			values: _metalState.Config.array()
		}),
		type: _metalState.Config.oneOf(['category', 'indexed', 'timeseries'])
	}),

	/**
  * Styling and behavior of bars.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	bar: _metalState.Config.shapeOf({
		width: _metalState.Config.number(),
		zerobased: _metalState.Config.bool()
	}),

	/**
  * Defines a custom color pattern for chart.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	color: _metalState.Config.shapeOf({
		pattern: _metalState.Config.array(),
		threshhold: _metalState.Config.shapeOf({
			unit: _metalState.Config.string(),
			value: _metalState.Config.array(),
			max: _metalState.Config.number()
		})
	}),

	/**
  * Sets billboard's data.color config.
  * @instance
  * @memberof ChartBase
  * @type {?Function|undefined}
  * @default undefined
  */
	colorFormatter: _metalState.Config.func(),

	/**
  * Data that will be rendered to the chart.
  * @instance
  * @memberof ChartBase
  * @type {?Array|undefined}
  * @default undefined
  */
	columns: _metalState.Config.arrayOf(_metalState.Config.shapeOf({
		axis: _metalState.Config.oneOf(['y', 'y2']),
		class: _metalState.Config.string(),
		color: _metalState.Config.string(),
		data: _metalState.Config.array().required(),
		hide: _metalState.Config.bool(),
		id: _metalState.Config.required().string(),
		name: _metalState.Config.string(),
		regions: _metalState.Config.array(),
		type: _metalState.Config.oneOf(_types2.default.all),
		x: _metalState.Config.string()
	})),

	/**
  * Configuration options for donut chart.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	donut: _metalState.Config.shapeOf({
		label: _metalState.Config.shapeOf({
			show: _metalState.Config.bool(),
			format: _metalState.Config.func(),
			threshhold: _metalState.Config.number(),
			ratio: _metalState.Config.func().number()
		}),
		expand: _metalState.Config.bool(),
		width: _metalState.Config.number(),
		title: _metalState.Config.string(),
		padAngle: _metalState.Config.number()
	}),

	/**
  * Sets label for when no data is loaded.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default undefined
  */
	emptyLabelText: _metalState.Config.string().setter(function (value) {
		return value ? {
			empty: {
				label: {
					text: value
				}
			}
		} : value;
	}),

	/**
  * Configuration options for guage chart.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	gauge: _metalState.Config.shapeOf({
		fullCircle: _metalState.Config.bool(),
		lable: _metalState.Config.shapeOf({
			show: _metalState.Config.bool(),
			format: _metalState.Config.func()
		}),
		expand: _metalState.Config.bool(),
		min: _metalState.Config.number(),
		max: _metalState.Config.number(),
		startingAngle: _metalState.Config.number(),
		units: _metalState.Config.string(),
		width: _metalState.Config.number()
	}),

	/**
  * Configuration options for grid chart.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	grid: _metalState.Config.shapeOf({
		// Cross reference this with source code, have a feeling this info is wrong
		focus: _metalState.Config.shapeOf({
			show: _metalState.Config.bool()
		}),
		lines: _metalState.Config.shapeOf({
			front: _metalState.Config.bool()
		}),
		x: _metalState.Config.shapeOf({
			show: _metalState.Config.bool(),
			lines: _metalState.Config.shapeOf({
				class: _metalState.Config.string(),
				position: _metalState.Config.oneOf(['start', 'middle', 'end']),
				text: _metalState.Config.string(),
				value: _metalState.Config.string()
			})
		}),
		y: _metalState.Config.shapeOf({
			show: _metalState.Config.bool(),
			lines: _metalState.Config.shapeOf({
				class: _metalState.Config.string(),
				position: _metalState.Config.oneOf(['start', 'middle', 'end']),
				text: _metalState.Config.string(),
				value: _metalState.Config.string()
			})
		}),
		ticks: _metalState.Config.number()
	}),

	/**
  * Sets billboard's data.groups config.
  * @instance
  * @memberof ChartBase
  * @type {?Array|undefined}
  * @default undefined
  */
	groups: _metalState.Config.array(),

	/**
  * If set to true hides all data.
  * @instance
  * @memberof ChartBase
  * @type {boolean|undefined}
  * @default false
  */
	hide: _metalState.Config.bool().value(false),

	/**
  * Intersection display options.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	intersection: _metalState.Config.shapeOf({
		enabled: _metalState.Config.bool(),
		brighten: _metalState.Config.bool(),
		inputType: _metalState.Config.shapeOf({
			mouse: _metalState.Config.bool(),
			touch: _metalState.Config.bool()
		})
	}),

	/**
  * Sets billboard's data.json config.
  * @instance
  * @memberof ChartBase
  * @type {?Array|boolean|undefined}
  * @default undefined
  */
	json: _metalState.Config.array(),

	/**
  * Sets billboard's data.keys config.
  * @instance
  * @memberof ChartBase
  * @type {?Array|undefined}
  * @default undefined
  */
	keys: _metalState.Config.array().setter(function (value) {
		return value ? {
			value: value
		} : value;
	}),

	/**
  * Sets billboard's data.labels config.
  * @instance
  * @memberof ChartBase
  * @type {?boolean|function|undefined}
  * @default undefined
  */
	labels: _metalState.Config.bool().func().setter(function (value) {
		if (!value) {
			return value;
		} else if (typeof value === 'boolean') {
			return {
				labels: value
			};
		} else {
			return {
				labels: {
					format: value
				}
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
	legend: _metalState.Config.shapeOf({
		hide: _metalState.Config.bool(),
		position: _metalState.Config.oneOf(['bottom', 'inset', 'right']),
		inset: _metalState.Config.shapeOf({
			anchor: _metalState.Config.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
			step: _metalState.Config.number(),
			x: _metalState.Config.number(),
			y: _metalState.Config.number()
		}),
		show: _metalState.Config.bool()
	}),

	/**
  * Display settings for chart lines.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	line: _metalState.Config.shapeOf({
		connectNull: _metalState.Config.bool(),
		step: _metalState.Config.shapeOf({
			type: _metalState.Config.oneOf(['step', 'step-after', 'step-before'])
		})
	}),

	/**
  * Sets billboard's data.mimeType config.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default undefined
  */
	mimeType: _metalState.Config.string(),

	/**
  * Sets billboard's data.order config.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default "desc"
  */
	order: _metalState.Config.string().value('desc'),

	/**
  * Sets padding on chart.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	padding: _metalState.Config.shapeOf({
		bottom: _metalState.Config.number(),
		left: _metalState.Config.number(),
		right: _metalState.Config.number(),
		top: _metalState.Config.number()
	}),

	/**
  * Configuration options for pie chart.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	pie: _metalState.Config.shapeOf({
		label: _metalState.Config.shapeOf({
			show: _metalState.Config.bool(),
			format: _metalState.Config.func(),
			threshhold: _metalState.Config.number(),
			ratio: _metalState.Config.func().number()
		}),
		expand: _metalState.Config.bool(),
		padAngle: _metalState.Config.number()
	}),

	/**
  * Configuration options for chart points.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	point: _metalState.Config.shapeOf({
		show: _metalState.Config.bool(),
		r: _metalState.Config.number(),
		focus: _metalState.Config.shapeOf({
			expand: _metalState.Config.shapeOf({
				enabled: _metalState.Config.bool(),
				r: _metalState.Config.bool()
			}),
			select: _metalState.Config.shapeOf({
				r: _metalState.Config.number()
			})
		})
	}),

	/**
  * Creates custom regions on chart that can be styled.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	regions: _metalState.Config.shapeOf({
		class: _metalState.Config.string(),
		enabled: _metalState.Config.oneOf(['x', 'y']).required(),
		end: _metalState.Config.array().required(),
		start: _metalState.Config.number().required()
	}),

	/**
  * Determines if chart auto resizes when viewport size changes.
  * @instance
  * @memberof ChartBase
  * @type {?boolean|undefined}
  * @default undefined
  */
	resizeAuto: _metalState.Config.bool().setter(function (value) {
		return value ? {
			auto: value
		} : value;
	}),

	/**
  * Load data from a multidimensional array. Sets billboard's `data.rows`
  * config.
  * @instance
  * @memberof ChartBase
  * @type {?array|undefined}
  * @default undefined
  */
	rows: _metalState.Config.array(),

	/**
  * Sets billboard's `data.selection` config.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	selection: _metalState.Config.shapeOf({
		draggable: _metalState.Config.bool(),
		enabled: _metalState.Config.bool(),
		grouped: _metalState.Config.bool(),
		isselectable: _metalState.Config.func(),
		multiple: _metalState.Config.bool()
	}),

	/**
  * Sets size of chart.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	size: _metalState.Config.shapeOf({
		height: _metalState.Config.number(),
		width: _metalState.Config.number()
	}),

	/**
  * Determines interpolation type of spline charts.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default undefined
  */
	splineInterpolationType: _metalState.Config.string().setter(function (value) {
		return value ? {
			interpolation: {
				type: value
			}
		} : value;
	}),

	/**
  * Config options for subcharts.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	subchart: _metalState.Config.shapeOf({
		show: _metalState.Config.bool(),
		size: _metalState.Config.shapeOf({
			height: _metalState.Config.number()
		}),
		onbrush: _metalState.Config.func()
	}),

	/**
  * Customizes classname for svg element.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default undefined
  */
	svgClassname: _metalState.Config.string().setter(function (value) {
		return value ? {
			classname: value
		} : value;
	}),

	/**
  * Display options for title element.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	title: _metalState.Config.shapeOf({
		text: _metalState.Config.string(),
		padding: _metalState.Config.shapeOf({
			bottom: _metalState.Config.number(),
			left: _metalState.Config.number(),
			right: _metalState.Config.number(),
			top: _metalState.Config.number()
		}),
		position: _metalState.Config.string()
	}),

	/**
  * Display options for tooltip.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	tooltip: _metalState.Config.shapeOf({
		show: _metalState.Config.bool(),
		grouped: _metalState.Config.bool(),
		format: _metalState.Config.shapeOf({
			name: _metalState.Config.func(),
			title: _metalState.Config.func(),
			value: _metalState.Config.func()
		}),
		contents: _metalState.Config.func()
	}),

	/**
  * Sets duration of transitions.
  * @instance
  * @memberof ChartBase
  * @type {?number|undefined}
  * @default undefined
  */
	transitionDuration: _metalState.Config.number().setter(function (value) {
		return value ? {
			duration: value
		} : value;
	}),

	/**
  * The variety of chart that will be rendered.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default line
  */
	type: _metalState.Config.oneOf(_types2.default.all).value('line'),

	/**
  * Load a CSV or JSON file from a URL.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default undefined
  */
	url: _metalState.Config.string(),

	/**
  * Sets billboard's data.x config.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default undefined
  */
	x: _metalState.Config.string(),

	/**
  * Sets billboard's data.xFormat config.
  * @instance
  * @memberof ChartBase
  * @type {?string|undefined}
  * @default undefined
  */
	xFormat: _metalState.Config.string(),

	/**
  * Sets billboard's data.xLocaltime config.
  * @instance
  * @memberof ChartBase
  * @type {boolean|undefined}
  * @default undefined
  */
	xLocaltime: _metalState.Config.bool(),

	/**
  * Sets billboard's data.xSort config.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	xSort: _metalState.Config.bool(),

	/**
  * Configuration for bb chart zoom capabilities.
  * @instance
  * @memberof ChartBase
  * @type {?Object|undefined}
  * @default undefined
  */
	zoom: _metalState.Config.shapeOf({
		enabled: _metalState.Config.bool().value(true),
		rescale: _metalState.Config.bool().value(false),
		extent: _metalState.Config.array()
	})
};

exports.bb = _billboard.bb;
exports.d3 = _billboard.d3;
exports.ChartBase = ChartBase;
exports.default = ChartBase;