import {cancelDebounce, debounce} from 'metal-debounce';
import {Config} from 'metal-state';
import {isObject, isFunction} from 'metal';
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
	 * @inheritDoc
	 */
	created() {
		this._isResolvedData = false;
		this._loadingTimeout = null;
		this._pollingInterval = 0;
		this._requestsCount = 0;
		if (this._hasData(this.dataSource)) {
			this._dataSource = this.dataSource;
			this._isResolvedData = true;
		} else {
			this.updateData();
		}

		if (this.inputMode === 'userInput') {
			this.updateData = debounce(
				this.updateData.bind(this),
				this.debounceTime
			);
		}

		this.addListener('dataChange', this._defaultDataChange, true);
		this.addListener('dataError', this._defaultDataError, true);
		this.addListener('dataLoading', this._defaultDataLoading, true);
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		if (this._pollingInterval) {
			clearInterval(this._pollingInterval);
			this._pollingInterval = null;
		}

		cancelDebounce(this.updateData);
	}

	/**
	 * Makes the request and defines initial data while it is requesting.
	 * @param {!string} query
	 * @param {!number} requestRetries
	 * @protected
	 */
	updateData(query, requestRetries = 0) {
		this._isResolvedData = false;

		if (
			this.initialData &&
			!this._pollingInterval &&
			requestRetries === 0
		) {
			this._dataSource = this.initialData;
			this._handleDataChange();
		} else {
			this._handleDataLoading();
		}

		let promise;

		if (isFunction(this.dataSource)) {
			promise = this.dataSource(query);
		} else {
			promise = fetch(this.dataSource, this.requestOptions).then(res =>
				res.json()
			);
		}

		timeout(this.requestTimeout, promise)
			.then(res => {
				this._dataSource = res;
				this._requestsCount += 1;
				this._isResolvedData = true;
				this._handleDataChange();

				if (this.inputMode === 'polling') {
					this._setPolling();
				}
			})
			.catch(err => this._setRequestRetries(query, err, requestRetries));
	}

	/**
	 * @protected
	 */
	_defaultDataChange() {
		this.isLoading = false;
		this.isError = false;

		if (this._requestsCount > 0) {
			clearTimeout(this._loadingTimeout);
		}
	}

	/**
	 * @protected
	 */
	_defaultDataError() {
		this.isError = true;
		this.isLoading = false;
	}

	/**
	 * @param {!Event} event
	 * @protected
	 */
	_defaultDataLoading(event) {
		const {requestsCount} = event.data;

		this.isError = false;

		if (requestsCount > 0 && this.delayLoading) {
			this._loadingTimeout = setTimeout(() => {
				if (!this._isResolvedData) {
					this.isLoading = true;
				}
			}, this.delayLoadingTimer);
		} else {
			this.isLoading = true;
		}
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
	 * Handles the event when request error
	 * @param {!Error} err
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDataError(err) {
		return !this.emit({
			data: err,
			name: 'dataError',
		});
	}

	/**
	 * Handle triggering the event of loading data
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDataLoading() {
		return !this.emit({
			data: {
				requestsCount: this._requestsCount,
			},
			name: 'dataLoading',
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
		}

		return false;
	}

	/**
	 * Sets up the polling interval.
	 * @protected
	 */
	_setPolling() {
		if (this.pollingInterval > 0) {
			if (this._pollingInterval) {
				clearInterval(this._pollingInterval);
			}

			this._pollingInterval = setInterval(() => {
				this._isResolvedData = false;
				this._fetchData();
			}, this.pollingInterval);
		}
	}

	/**
	 * Sets up the request retries.
	 * @param {!string} query
	 * @param {!string} err
	 * @param {!number} requestRetries
	 * @protected
	 */
	_setRequestRetries(query, err, requestRetries) {
		if (this.isDisposed()) {
			return;
		}

		if (this.requestRetries > 0 && requestRetries < this.requestRetries) {
			console.error(
				`DataProvider: (${requestRetries + 1}/${
					this.requestRetries
				}) Request attempt failed`,
				err
			);

			this.updateData(query, requestRetries + 1);
		} else {
			console.error('DataProvider: Error making the requisition', err);
			this._handleDataError(err);
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
	_dataSource: Config.oneOfType([
		Config.array(),
		Config.func(),
		Config.object(),
	]).internal(),

	/**
	 * The content renderer.
	 * @default undefined
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {!html}
	 */
	content: Config.required(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * The array of data items that the data source contains,
	 * the URL for the data provider to request, or a function
	 * that receives the query and returns a promise with the
	 * elements.
	 *
	 * @instance
	 * @default undefined
	 * @memberof ClayDataProvider
	 * @type {!(string|object|array|function)}
	 */
	dataSource: Config.oneOfType([
		Config.array(),
		Config.func(),
		Config.object(),
		Config.string(),
	]).required(),

	/**
	 * Set the request debounce time
	 * @instance
	 * @default 200
	 * @memberof ClayDataProvider
	 * @type {?number}
	 */
	debounceTime: Config.number().value(200),

	/**
	 * @default false
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {?number}
	 */
	delayLoading: Config.bool().value(false),

	/**
	 * @default 500
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {?number}
	 */
	delayLoadingTimer: Config.number().value(500),

	/**
	 * The error content renderer.
	 * @default undefined
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {!html}
	 */
	errorContent: Config.any(),

	/**
	 * Set some initial data while the first request is being made
	 * @instance
	 * @default undefined
	 * @memberof ClayDataProvider
	 * @type {?(object|array)}
	 */
	initialData: Config.oneOfType([Config.array(), Config.object()]),

	/**
	 * Specifies explicitly if request needs to be made with debounce
	 * (userInput) or with polling (polling)
	 * @instance
	 * @default undefined
	 * @memberof ClayDataProvider
	 * @type {?(object|array)}
	 */
	inputMode: Config.oneOf(['polling', 'userInput']).value('userInput'),

	/**
	 * @default false
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {?bool}
	 */
	isError: Config.bool()
		.value(false)
		.internal(),

	/**
	 * Flag to indicate the render state. true will
	 * render the contents of loadingContent.
	 * @default false
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {?bool}
	 */
	isLoading: Config.bool()
		.value(false)
		.internal(),

	/**
	 * The loading content renderer.
	 * @default undefined
	 * @instance
	 * @memberof ClayDataProvider
	 * @type {!html}
	 */
	loadingContent: Config.any(),

	/**
	 * Flag to define how often to refetch data (ms)
	 * @instance
	 * @default 0
	 * @memberof ClayDataProvider
	 * @type {?(number|undefined)}
	 */
	pollingInterval: Config.number().value(0),

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
	requestPolling: Config.validator(value => {
		if (value) {
			console.warn(
				'🚨 `requestPolling` has been renamed to `pollingInterval` and will be deprecated and removed in the next release.'
			);
		}
	}),

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
