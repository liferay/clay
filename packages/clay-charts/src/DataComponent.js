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
	 * @return {Promise}
	 * @param {?Array|Function|String} data the data to resolve.
	 * @protected
	 */
	_resolveData(data) {
		this._setupPolling();

		if (Array.isArray(data) || (isObject(data) && !isFunction(data))) {
			return Promise.resolve(data);
		} else if (isFunction(data)) {
			return data().then(val => val);
		} else if (isString(data)) {
			return fetch(data, {cors: 'cors'})
				.then(res => res.json())
				.then(res => res.data);
		}
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
		Config.object(),
		Config.func(),
		Config.string(),
	]),

	/**
	 * Set an interval (in ms) to fetch the data.
	 * @instance
	 * @memberof ChartBase
	 * @type {?Number}
	 * @default undefined
	 */
	pollingInterval: Config.number(),
};

export {DataComponent};
export default DataComponent;
