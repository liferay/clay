'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import {bb, d3} from 'billboard.js';

import templates from './MetalChart.soy.js';

/**
 * Metal Chart component.
 */
class MetalChart extends Component {
	attached() {
		const config = this.constructChartConfig_();

		this.bbChart = bb.generate(config);

		this.on('columnsChanged', this.handleColumnsChanged_.bind(this));
		this.on('regionsChanged', this.handleRegionsChanged_.bind(this));
		this.on('sizeChanged', this.handleSizeChanged_.bind(this));
		this.on('typeChanged', this.handleTypeChanged_.bind(this));
	}

	/**
	 * Constructs `axis` billboard config property.
	 * @return {Object}
	 * @protected
	 */
	constructAxisConfig_() {
		return {
			rotated: this.axisRotated,
			x: this.axisX,
			y2: this.axisY2,
			y: this.axisY
		}
	}

	/**
	 * Constructs config object for `bb.generate` method.
	 * @return {Object}
	 * @protected
	 */
	constructChartConfig_() {
		const axis = this.constructAxisConfig_();
		const data = this.constructDataConfig_();
		const zoom = this.constructZoomConfig_();

		const config = {
			area,
			axis,
			bindto: this.element,
			color: this.color,
			data,
			line: this.line,
			padding: this.padding,
			pie: this.pie,
			point: this.point,
			regions: this.regions,
			resize: this.resizeAuto,
			size: this.size,
			spline: this.splineInterpolationType,
			subchart: this.subchart,
			svg: this.svgClassname,
			title: this.title,
			tooltip: this.tooltip,
			transition: this.transitionDuration,
			zoom: this.zoom
		};

		/**
		 * Chart init event.
		 * @event chartInit
		 * @memberof MetalChart
		 */
		config.oninit = this.emitChartEvent_.bind(this, 'chartInit');
		/**
		 * Chart mouse out event.
		 * @event chartMouseout
		 * @memberof MetalChart
		 */
		config.onout = this.emitChartEvent_.bind(this, 'chartMouseout');
		/**
		 * Chart mouse over event.
		 * @event chartMouseover
		 * @memberof MetalChart
		 */
		config.onover = this.emitChartEvent_.bind(this, 'chartMouseover');
		/**
		 * Chart rendered event.
		 * @event chartRendered
		 * @memberof MetalChart
		 */
		config.onrendered = this.emitChartEvent_.bind(this, 'chartRendered');
		/**
		 * Chart resize event.
		 * @event chartResize
		 * @memberof MetalChart
		 */
		config.onresize = this.emitChartEvent_.bind(this, 'chartResize');
		/**
		 * Chart resized event.
		 * @event chartResized
		 * @memberof MetalChart
		 */
		config.onresized = this.emitChartEvent_.bind(this, 'chartResized');

		return config;
	}

	/**
	 * Constructs `data` billboard config property.
	 * @return {Object}
	 * @protected
	 */
	constructDataConfig_() {
		const config = {
			axes: this.axes,
			classes: this.classes,
			color: this.colorFormatter,
			colors: this.colors,
			columns: this.columns,
			empty: this.emptyLabelText,
			groups: this.groups,
			hide: this.hide,
			json: this.json,
			keys: this.keys,
			labels: this.labels,
			mimeType: this.mimeType,
			names: this.names,
			order: this.order,
			rows: this.rows,
			selection: this.selection,
			type: this.type,
			types: this.types,
			url: this.url
		}

		/**
		 * Point click event.
		 * @event pointClick
		 * @memberof MetalChart
		 */
		config.onclick = this.emitChartEvent_.bind(this, 'pointClick');
		/**
		 * Point mouse out event.
		 * @event pointMouseout
		 * @memberof MetalChart
		 */
		config.onout = this.emitChartEvent_.bind(this, 'pointMouseout');
		/**
		 * Point mouse over event.
		 * @event pointMouseoever
		 * @memberof MetalChart
		 */
		config.onover = this.emitChartEvent_.bind(this, 'pointMouseover');
		/**
		 * Data select event.
		 * @event dataSelect
		 * @memberof MetalChart
		 */
		config.onselect = this.emitChartEvent_.bind(this, 'dataSelect');
		/**
		 * Data unselected event.
		 * @event dataUnselected
		 * @memberof MetalChart
		 */
		config.onunselected = this.emitChartEvent_.bind(this, 'dataUnselected');

		return config;
	}

	/**
	 * Constructs `zoom` billboard config property.
	 * @return {Object}
	 * @protected
	 */
	constructZoomConfig_() {
		const {config = {}} = this;

		/**
		 * Zoom event.
		 * @event zoom
		 * @memberof MetalChart
		 */
		config.onzoom = this.emitChartEvent_.bind(this, 'zoom');
		/**
		 * Zoom end event.
		 * @event zoomEnd
		 * @memberof MetalChart
		 */
		config.onzoomend = this.emitChartEvent_.bind(this, 'zoomEnd');
		/**
		 * Zoom start event.
		 * @event zoomStart
		 * @memberof MetalChart
		 */
		config.onzoomstart = this.emitChartEvent_.bind(this, 'zoomStart');

		return config;
	}

	/**
	 * Emits event based on arguments array.
	 * @protected
	 */
	emitChartEvent_() {
		this.emit.apply(this, arguments);
	}

	/**
	 * Maps `columns` state to chart via `bb.load` method.
	 * @protected
	 */
	handleColumnsChanged_({newVal, prevVal}) {
		const data = {
			columns: newVal
		};

		const removedIds = this.resolveRemovedColumns_(newVal, prevVal);

		if (removedIds.length) {
			data.unload = removedIds;
		}

		this.bbChart.load(data);
	}

	/**
	 * Maps `regions` state to chart via `bb.regions` method.
	 * @protected
	 */
	handleRegionsChanged_({newVal}) {
		this.bbChart.regions(newVal);
	}

	/**
	 * Maps `size` state to chart via `bb.resize` method.
	 * @protected
	 */
	handleSizeChanged_({newVal}) {
		this.bbChart.resize(newVal);
	}

	/**
	 * Maps `type` state to chart via `bb.transform` method.
	 * @protected
	 */
	handleTypeChanged_({newVal}) {
		this.bbChart.transform(newVal);
	}

	/**
	 * Determines which ids should be passed to the unload property.
	 * @static
	 * @type {!Object}
	 */
	resolveRemovedColumns_(newColumns, prevColumns) {
		const ids = newColumns.map(column => column[0]);

		return prevColumns.reduce((removedIds, column) => {
			const id = column[0];

			if (ids.indexOf(id) === -1) {
				removedIds.push(id);
			}

			return removedIds;
		}, []);
	}
}
Soy.register(MetalChart, templates);

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalChart.STATE = {
	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	area: Config.shapeOf({
		above: Config.bool().value(false),
		zerobased: Config.bool().value(true),
	}),

	/**
	 * Sets billboard's data.axes config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default {}
	 */
	axes: Config.object(),

	/**
	 * Switches the x and y axis.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	axisRotated: Config.bool(),

	/**
	 * Styling and behavior of x axis.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	axisX: {
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
				max: Config.number()
			}),
			fit: Config.bool(),
			format: Config.func(),
			multiline: Config.bool(),
			outer: Config.bool(),
			rotate: Config.number(),
			values: Config.array(),
			width: Config.number()
		}),
		type: Config.oneOf(['category', 'indexed', 'timeseries'])
	},

	/**
	 * Styling and behavior of y2 axis.
	 * @instance
	 * @memberof MetalChart
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
			values: Config.array()
		})
	}),

	/**
	 * Styling and behavior of y axis.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	axisY: {
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
		type: Config.oneOf(['category', 'indexed', 'timeseries'])
	},

	/**
	 * Styling and behavior of bars.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	bar: Config.shapeOf({
		width: Config.number(),
		zerobased: Config.bool()
	}),

	/**
	 * Sets billboard's data.classes config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default {}
	 */
	classes: Config.object(),

	/**
	 * Defines a custom color pattern for chart.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	color: Config.shapeOf({
		pattern: Config.array(),
		threshhold: Config.shapeOf({
			unit: Config.string(),
			value: Config.array(),
			max: Config.number()
		})
	}),

	/**
	 * Sets billboard's data.color config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Function|undefined}
	 * @default undefined
	 */
	colorFormatter: Config.func(),

	/**
	 * Data that will be rendered to the chart.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	columns: Config.array().value([]),

	/**
	 * Configuration options for donut chart.
	 * @instance
	 * @memberof MetalChart
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
		padAngle: Config.number()
	}),

	/**
	 * Sets label for when no data is loaded.
	 * @instance
	 * @memberof MetalChart
	 * @type {?String|undefined}
	 * @default ""
	 */
	emptyLabelText: Config.string().setter(value => {
		return {
			empty: {
				label: {
					text: value
				}
			}
		}
	}),

	/**
	 * Configuration options for guage chart.
	 * @instance
	 * @memberof MetalChart
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
		width: Config.number()
	}),

	/**
	 * Configuration options for grid chart.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	grid: Config.shapeOf({ // Cross reference this with source code, have a feeling this info is wrong
		focus: Config.shapeOf({
			show: Config.bool(),
		}),
		lines: Config.shapeOf({
			front: Config.bool()
		}),
		x: Config.shapeOf({
			show: Config.bool(),
			lines: Config.shapeOf({
				class: Config.string(),
				position: Config.oneOf(['start', 'middle', 'end']),
				text: Config.string(),
				value: Config.string()
			})
		}),
		y: Config.shapeOf({
			show: Config.bool(),
			lines: Config.shapeOf({
				class: Config.string(),
				position: Config.oneOf(['start', 'middle', 'end']),
				text: Config.string(),
				value: Config.string()
			})
		}),
		ticks: Config.number()
	}),

	/**
	 * Sets billboard's data.groups config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	groups: Config.array(),

	/**
	 * Sets billboard's data.hide config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Array|bool|undefined}
	 * @default []
	 */
	hide: Config.array().bool().value(false),

	/**
	 * intersection TODO.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default undefined
	 */
	intersection: Config.shapeOf({
		enabled: Config.bool(),
		brighten: Config.bool(),
		inputType: Config.shapeOf({
			mouse: Config.bool(),
			touch: Config.bool()
		})
	}),

	/**
	 * Sets billboard's data.json config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Array|bool|undefined}
	 * @default []
	 */
	json: Config.array(),

	/**
	 * Sets billboard's data.keys config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Array|undefined}
	 * @default []
	 */
	keys: Config.array().setter(value => {
		return {
			value
		}
	}),

	/**
	 * Sets billboard's data.labels config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?boolean|function|undefined}
	 * @default {}
	 */
	labels: Config.bool().func().setter(value => {
		if (typeof value === 'boolean') {
			return {
				labels: value
			}
		}
		else {
			return {
				labels: {
					format: value
				}
			}
		}
	}),

	/**
	 * legend TODO.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default undefined
	 */
	legend: Config.shapeOf({
		show: Config.bool(),
		hide: Config.bool(),
		position: Config.oneOf(['bottom', 'inset', 'right']),
		inset: Config.shapeOf({
			anchor: Config.oneOf(['bottom-left', 'bottom-right', 'top-left',
				'top-right']),
			step: Config.number(),
			x: Config.number(),
			y: Config.number()
		})
	}),

	/**
	 * Display settings for chart lines.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default undefined
	 */
	line: Config.shapeOf({
		connectNull: Config.bool(),
		step: Config.shapeOf({
			type: Config.oneOf(['step', 'step-after', 'step-before'])
		})
	}),

	/**
	 * Sets billboard's data.mimeType config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?string|undefined}
	 * @default undefined
	 */
	mimeType: Config.string(),

	/**
	 * Sets billboard's data.names config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default {}
	 */
	names: Config.object(),

	/**
	 * Sets billboard's data.order config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?string|undefined}
	 * @default "desc"
	 */
	order: Config.string().value('desc'),

	/**
	 * Sets padding on chart.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default undefined
	 */
	padding: Config.shapeOf({
		bottom: Config.number(),
		left: Config.number(),
		right: Config.number(),
		top: Config.number()
	}),

	/**
	 * Configuration options for pie chart.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	pie: Config.shapeOf({
		label: Config.shapeOf({
			show: Config.bool(),
			format: Config.func(),
			threshhold: Config.number(),
			ratio: Config.func().number()
		}),
		expand: Config.bool(),
		padAngle: Config.number()
	}),

	/**
	 * Configuration options for chart points.
	 * @instance
	 * @memberof MetalChart
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	point: Config.shapeOf({
		show: Config.bool(),
		r: Config.number(),
		focus: Config.shapeOf({
			expand: Config.shapeOf({
				enabled: Config.bool(),
				r: Config.bool()
			}),
			select: Config.shapeOf({
				r: Config.number()
			})
		})
	}),

	/**
	 * Creates custom regions on chart that can be styled.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default {}
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
	 * @memberof MetalChart
	 * @type {?boolean|undefined}
	 * @default undefined
	 */
	resizeAuto: Config.bool().setter(value => {
		return {
			auto: value
		}
	}),

	/**
	 * Load data from a multidimensional array. Sets billboard's `data.rows`
	 * config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?array|undefined}
	 * @default undefined
	 */
	rows: Config.array(),

	/**
	 * Sets billboard's `data.selection` config.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default undefined
	 */
	selection: Config.shapeOf({
		draggable: Config.bool(),
		enabled: Config.bool(),
		grouped: Config.bool(),
		isselectable: Config.func(),
		multiple: Config.bool()
	}),

	/**
	 * Sets size of chart.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default {}
	 */
	size: Config.shapeOf({
		height: Config.number(),
		width: Config.number()
	}),

	/**
	 * Determines interpolation type of spline charts.
	 * @instance
	 * @memberof MetalChart
	 * @type {?string|undefined}
	 * @default undefined
	 */
	splineInterpolationType: Config.string().setter(value => {
		return {
			interpolation: {
				type: value
			}
		}
	}),

	/**
	 * Config options for subcharts.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default {}
	 */
	subchart: Config.shapeOf({
		show: Config.bool(),
		size: Config.shapeOf({
			height: Config.number()
		}),
		onbrush: Config.func()
	}),

	/**
	 * Customizes classname for svg element.
	 * @instance
	 * @memberof MetalChart
	 * @type {?string|undefined}
	 * @default undefined
	 */
	svgClassname: Config.string().setter(value => {
		return {
			classname: value
		}
	}),

	/**
	 * Display options for title element.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default {}
	 */
	title: Config.shapeOf({
		text: Config.string(),
		padding: Config.shapeOf({
			bottom: Config.number(),
			left: Config.number(),
			right: Config.number(),
			top: Config.number()
		}),
		position: Config.string()
	}),

	/**
	 * Display options for tooltip.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default {}
	 */
	tooltip: Config.shapeOf({
		show: Config.bool(),
		grouped: Config.bool(),
		format: Config.shapeOf({
			name: Config.func(),
			title: Config.func(),
			value: Config.func()
		}),
		contents: Config.func()
	}),

	/**
	 * Sets duration of transitions.
	 * @instance
	 * @memberof MetalChart
	 * @type {?number|undefined}
	 * @default undefined
	 */
	transitionDuration: Config.number().setter(value => {
		return {
			duration: value
		}
	}),

	/**
	 * The variety of chart that will be rendered.
	 * @instance
	 * @memberof MetalChart
	 * @type {?string|undefined}
	 * @default line
	 */
	type: Config.oneOf([
		'area',
		'area-spline',
		'area-step',
		'bar',
		'donut',
		'gauge',
		'line',
		'pie',
		'scatter',
		'spline',
		'step',
	]).value('line'),

	/**
	 * The variety of chart that will be rendered by column.
	 * @instance
	 * @memberof MetalChart
	 * @type {?string|undefined}
	 * @default {}
	 */
	types: Config.object(),

	/**
	 * Load a CSV or JSON file from a URL.
	 * @instance
	 * @memberof MetalChart
	 * @type {?string|undefined}
	 * @default undefined
	 */
	url: Config.string(),

	/**
	 * Configuration for bb chart zoom capabilities.
	 * @instance
	 * @memberof MetalChart
	 * @type {?object|undefined}
	 * @default {}
	 */
	zoom: Config.shapeOf({
		enabled: Config.bool().value(true),
		rescale: Config.bool().value(false),
		extent: Config.array()
	})
};

export { bb, d3, MetalChart };
export default MetalChart;
