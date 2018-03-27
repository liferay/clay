import {Component} from 'metal-component';
import {isFunction, isObject, isString} from 'metal';
import {Config} from 'metal-state';
import types from './utils/types';

/**
 * DataComponent class.
 *
 * @mixin
 */
class DataComponent extends Component {
	/**
	 * Cleanup resources
	 */
	disposed() {
		if (this._pollingInterval) {
			clearInterval(this._pollingInterval);
			this._pollingInterval = null;
		}
	}

	/**
	 * Check's the data or columns option and resolves this `data_` accordingly.
	 * @param {?(Array|Function|String)} data the data to resolve.
	 * @protected
	 * @return {Promise}
	 */
	_resolveData(data) {
		this._setupPolling();

		return new Promise((resolve, reject) => {
			if (Array.isArray(data) || (isObject(data) && !isFunction(data))) {
				resolve(data);
			} else if (isFunction(data)) {
				data().then(val => resolve(val));
			} else if (isString(data)) {
				fetch(data, {cors: 'cors'})
					.then(res => res.json())
					.then(res => resolve(res.data));
			} else {
				reject(`Could not resolve data: ${data}`);
			}
		});
	}

	/**
	 * Sets up the polling interval.
	 */
	_setupPolling() {
		if (this.pollingInterval) {
			if (this._pollingInterval) {
				clearInterval(this._pollingInterval);
			}

			this._pollingInterval = setInterval(() => {
				this._updateData(this.data);
			}, this.pollingInterval);
		}
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
DataComponent.STATE = {
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
	 * Set an interval (in ms) to fetch the data.
	 * @default undefined
	 * @instance
	 * @memberof ChartBase
	 * @type {?Number}
	 */
	pollingInterval: Config.number(),
};

export {DataComponent};
export default DataComponent;
