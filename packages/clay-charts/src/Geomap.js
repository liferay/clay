import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './Geomap.soy.js';
import {Config} from 'metal-state';
import {geomap} from 'clay-charts-shared';

/**
 * Geomap component
 */
class Geomap extends Component {
	/**
	 * @inheritDoc
	 */
	attached() {
		const config = this.getInitialConfig();

		this._geoMapInstance = new geomap.Geomap(
			Object.assign(
				{
					element: this.element,
				},
				config
			)
		);

		this._geoMapInstance.attached();
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this._geoMapInstance.disposed();
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
