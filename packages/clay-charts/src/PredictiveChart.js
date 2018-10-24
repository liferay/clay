import Chart from './Chart';
import Soy from 'metal-soy';
import templates from './PredictiveChart.soy.js';
import {Config} from 'metal-state';
import {isDefAndNotNull, isNumber, isObject, isString} from 'metal';

const DEFAULT_AXIS_X = {
	tick: {
		culling: {
			max: 1,
		},
		fit: true,
		format: '%Y-%m-%d',
	},
	type: 'timeseries',
};

const DEFAULT_TOOLTIP = {
	contents(data, defaultTitleFormat, defaultValueFormat, colorFn) {
		const datum = data[0];
		const color = colorFn(datum);
		const title = defaultTitleFormat(datum.x);
		const value =
			isObject(datum.value) && datum.value.hasOwnProperty('mid')
				? datum.value.mid
				: Array.isArray(datum.value)
					? datum.value[1]
					: datum.value;

		return `<table class="bb-tooltip">
			<tbody>
				<tr><th colspan="2">${title}</th></tr>
				<tr class="bb-tooltip-name-data1">
					<td class="name">
						<span style="background-color:${color}"></span>${datum.id}
					</td>
					<td class="value">${value}</td>
				</tr>
			</tbody>
		</table>`;
	},
	grouped: false,
};

/**
 * Predictive Chart component.
 * @augments Chart
 */
class PredictiveChart extends Chart {
	/**
	 * @inheritDoc
	 */
	attached() {
		super.attached();
	}

	/**
	 * @inheritDoc
	 */
	created() {
		const config = this.getInitialConfig();

		if (isDefAndNotNull(config.timeseries)) {
			config.data.push({data: config.timeseries, id: 'x'});
		}

		if (isDefAndNotNull(this.data)) {
			this._normalizeData();
		}

		if (isDefAndNotNull(this.axisXTickFormat)) {
			this.axisX.tick.format = this.axisXTickFormat;
		}

		if (isDefAndNotNull(this.predictionDate)) {
			if (isString(this.predictionDate)) {
				this.predictionDate = new Date(this.predictionDate);
			}

			if (!isDefAndNotNull(this.regions)) {
				this.regions = [];
			}

			this.regions.push({
				axis: 'x',
				start: this.predictionDate,
			});
		}

		if (isDefAndNotNull(this.tooltipContents)) {
			this.tooltip.contents = this.tooltipContents;
		}
	}

	/**
	 * Normalizes the data.
	 * @memberof PredictiveChart
	 * @private
	 */
	_normalizeData() {
		this.data = this.data.map(dataSeries => {
			if (dataSeries.id !== 'x') {
				dataSeries.data = dataSeries.data.map(element => {
					return isNumber(element)
						? {low: element, mid: element, high: element}
						: element;
				});
			}

			return dataSeries;
		});
	}
}

PredictiveChart.STATE = {
	/**
	 * X axis configuration.
	 * @default DEFAULT_AXIS_X
	 * @instance
	 * @memberof PredictiveChart
	 * @type {Object}
	 */
	axisX: Config.shapeOf({
		tick: Config.shapeOf({
			culling: Config.shapeOf({
				max: Config.number().required(),
			}),
			fit: Config.bool(),
			format: Config.oneOfType([Config.func(), Config.string()]),
		}),
		type: Config.oneOf(['timeseries']).required(),
	}).value(DEFAULT_AXIS_X),

	/**
	 * The axisX tick format configuration.
	 * This can be a function or a string.
	 *
	 * For more information on the supported formats, please
	 * see https://github.com/d3/d3-time-format
	 *
	 * @default '%Y-%m-%d'
	 * @instance
	 * @memberof PredictiveChart
	 * @type {Function|String}
	 */
	axisXTickFormat: Config.oneOfType([Config.func(), Config.string()]),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof PredictiveChart
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * The prediction date used to define the <code>region</code>
	 * on the X axis.
	 * @default undefined
	 * @instance
	 * @memberof PredictiveChart
	 * @type {Date}
	 */
	predictionDate: {
		validator: val => val instanceof Date || isString(val),
	},

	/**
	 * The timeseries configuration
	 * @default undefined
	 * @instance
	 * @memberof PredictiveChart
	 * @type {Array}
	 */
	timeseries: Config.array(),

	/**
	 * Toolip configuration.
	 * @default DEFAULT_TOOLTIP
	 * @instance
	 * @memberof PredictiveChart
	 * @type {Date}
	 */
	tooltip: Config.shapeOf({
		contents: Config.func(),
		grouped: Config.bool(),
	}).value(DEFAULT_TOOLTIP),

	/**
	 * Tooltip format title function
	 * @default undefined
	 * @instance
	 * @memberof PredictiveChart
	 * @type {Function}
	 */
	tooltipContents: Config.func(),

	/**
	 * The variety of chart that will be rendered.
	 * @default area-line-range
	 * @instance
	 * @memberof PredictiveChart
	 * @type {string}
	 */
	type: Config.oneOf(['area-line-range', 'area-spline-range']).value(
		'area-line-range'
	),

	/**
	 * X configuration
	 * @default x
	 * @instance
	 * @memberof PredictiveChart
	 * @type {string}
	 */
	x: Config.oneOf(['x']).value('x'),
};

Soy.register(PredictiveChart, templates);

export {PredictiveChart};
export default PredictiveChart;
