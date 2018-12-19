import {Config} from 'metal-state';
import {isObject, isString} from 'metal';
import {match, timeout} from './utils';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayDataProvider.soy.js';

/**
 * Metal ClayDataProvider component.
 * @extends ClayComponent
 */
class ClayDataProvider extends ClayComponent {
	/**
	 * Makes the request and defines initial data while it is requesting.
	 * @param {!number} requestRetries
	 * @protected
	 */
	_fetchData(requestRetries = 0) {
		if (
			this.initialData &&
			!this._pollingInterval &&
			requestRetries === 0
		) {
			this._dataSource = this.initialData;
			this._handleDataChange();
		}

		timeout(
			this.requestTimeout,
			fetch(this.dataSource, this.requestOptions)
		)
			.then(res => res.json())
			.then(res => {
				this._dataSource = res;
				this._isResolvedData = true;
				this._handleDataChange();
				this._setPolling();
			})
			.catch(err => this._setRequestRetries(err, requestRetries));
	}

	/**
	 * Handles the event when data changed.
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDataChange() {
		return !this.emit({
			data: this._dataSource,
			name: 'dataChange',
		});
	}

	/**
	 * Checks whether the data is locally.
	 * @param {!(string|object|array)} data
	 * @return {Boolean}
	 */
	_hasData(data) {
		if (Array.isArray(data) || isObject(data)) {
			return true;
		} else if (isString(data)) {
			return false;
		}
	}

	/**
	 * Sets up the polling interval.
	 * @protected
	 */
	_setPolling() {
		if (this.requestPolling > 0) {
			if (this._pollingInterval) {
				clearInterval(this._pollingInterval);
			}

			this._pollingInterval = setInterval(() => {
				this._isResolvedData = false;
				this._fetchData();
			}, this.requestPolling);
		}
	}

	/**
	 * Sets up the request retries.
	 * @param {!string} err
	 * @param {!number} requestRetries
	 * @protected
	 */
	_setRequestRetries(err, requestRetries) {
		if (this.requestRetries > 0 && requestRetries < this.requestRetries) {
			console.error(
				`DataProvider: (${requestRetries + 1}/${
					this.requestRetries
				}) Request attempt failed`,
				err
			);

			this._fetchData(requestRetries + 1);
		} else {
			console.error('DataProvider: Error making the requisition', err);
		}
	}

	/**
	 * Handles data mapping.
	 * @param {!(function|string)} param
	 * @param {!Array} data
	 * @protected
	 * @return {!(string|number)}
	 */
	_performCall(param, data) {
		if (typeof param === 'function') {
			return param(data);
		}

		if (typeof data === 'string') {
			return data;
		}

		return data[param];
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this._isResolvedData = false;
		this._pollingInterval = 0;
		if (this._hasData(this.dataSource)) {
			this._dataSource = this.dataSource;
			this._isResolvedData = true;
		} else {
			this._fetchData();
		}
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		if (this._pollingInterval) {
			clearInterval(this._pollingInterval);
			this._pollingInterval = null;
		}
	}

	/**
	 * Helper method to filter a list based on a string.
	 * @param {!string} query
	 * @param {?(function|string)} extract
	 * @public
	 * @return {Array} A list of items containing the corresponding characters
	 */
	filter(query, extract = elem => elem) {
		if (!this._isResolvedData) {
			return [];
		}

		return this._dataSource
			.reduce((prev, element, index) => {
				let string = this._performCall(extract, element);
				let result = match(query, string);

				if (result != null) {
					prev[prev.length] = {
						data: element,
						index,
						matches: result.values,
						score: result.score,
						value: string,
					};
				}

				return prev;
			}, [])
			.sort((a, b) => {
				if (a > b) return 1;
				if (a < b) return -1;
			});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayDataProvider.STATE = {
	/**
	 * The array or object of items for internal manipulation
	 * @instance
	 * @default undefined
	 * @memberof ClayDataProvider
	 * @type {?(object|array)}
	 */
	_dataSource: Config.oneOfType([Config.array(), Config.object()]).internal(),

	/**
	 * The content renderer.
	 * @default undefined
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {!html}
	 */
	content: Config.required(),

	/**
	 * The array of data items that the data source contains or
	 * the URL for the data provider to request.
	 * @instance
	 * @default undefined
	 * @memberof ClayDataProvider
	 * @type {!(string|object|array)}
	 */
	dataSource: Config.oneOfType([
		Config.array(),
		Config.object(),
		Config.string(),
	]).required(),

	/**
	 * Set some initial data while the first request is being made
	 * @instance
	 * @default undefined
	 * @memberof ClayDataProvider
	 * @type {?(object|array)}
	 */
	initialData: Config.oneOfType([Config.array(), Config.object()]),

	/**
	 * Set ups the request options
	 * @instance
	 * @default undefined
	 * @memberof ClayDataProvider
	 * @type {?(object|undefined)}
	 */
	requestOptions: Config.shapeOf({
		body: Config.object(),
		cache: Config.string(),
		credentials: Config.string(),
		headers: Config.object(),
		method: Config.string(),
		mode: Config.string(),
		redirect: Config.string(),
		referrer: Config.string(),
	}),

	/**
	 * Flag to define how often to refetch data (ms)
	 * @instance
	 * @default 0
	 * @memberof ClayDataProvider
	 * @type {?(number|undefined)}
	 */
	requestPolling: Config.number().value(0),

	/**
	 * Define how many attempts will be made when the request fails
	 * @instance
	 * @default 5
	 * @memberof ClayDataProvider
	 * @type {?(number|undefined)}
	 */
	requestRetries: Config.number().value(5),

	/**
	 * Set timeout of the request
	 * @instance
	 * @default 30000
	 * @memberof ClayDataProvider
	 * @type {?(number|undefined)}
	 */
	requestTimeout: Config.number().value(30000),
};

defineWebComponent('clay-data-provider', ClayDataProvider);

Soy.register(ClayDataProvider, templates);

export {ClayDataProvider};
export default ClayDataProvider;
