import 'clay-data-provider';
import {Config} from 'metal-state';
import {isFunction} from 'metal';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayAutocomplete.soy.js';

/**
 * Metal ClayAutocomplete component.
 * @extends ClayComponent
 */
class ClayAutocomplete extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	attached() {
		this._dropdownItemFocused = null;

		this.addListener('dataChange', this._defaultDataChange, true);
		this.addListener('inputChange', this._defaultInputChange, true);
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this._dropdownItemFocused = null;
	}

	/**
	 * @inheritDoc
	 */
	syncFilteredItems() {
		this._dropdownItemFocused = null;
	}

	/**
	 * Sets filtered items with received data
	 * @private
	 */
	_defaultDataChange() {
		if (this._query) {
			this.filteredItems = this.refs.dataProvider.filter(
				this._query,
				this.extractData
			);
		} else {
			this.filteredItems = [];
		}
	}

	/**
	 * Filters the items according to received input
	 * @param {!Event} event
	 * @private
	 */
	_defaultInputChange(event) {
		this._query = event.data.value;

		if (this._query) {
			if (isFunction(this.dataSource)) {
				this.refs.dataProvider.updateData(this._query);
			} else {
				this.filteredItems = this.refs.dataProvider.filter(
					this._query,
					this.extractData
				);
			}
		} else {
			this.filteredItems = [];
		}
	}

	/**
	 * Continues the propagation of the data change event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDataChange(event) {
		return !this.emit({
			data: event.data,
			name: 'dataChange',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the item clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDropdownItemClick(event) {
		return this._handleItemSelected(event);
	}

	/**
	 * Handle the selected item in the dropdown and trigger the itemSelected event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemSelected(event) {
		const index = event.target.getAttribute('data-dropdown-item-index');
		const item = this.filteredItems[Number(index)];

		return !this.emit({
			data: item.data,
			name: 'itemSelected',
			originalEvent: event,
		});
	}

	/**
	 * Handles the input blur event and continues to propagate.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleOnBlur(event) {
		return !this.emit({
			name: 'inputOnBlur',
			originalEvent: event,
		});
	}

	/**
	 * Handles the input focus event and continues to propagate.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleOnFocus(event) {
		return !this.emit({
			name: 'inputOnFocus',
			originalEvent: event,
		});
	}

	/**
	 * Handles the input event and continues to propagate.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleOnInput(event) {
		return !this.emit({
			data: {
				value: event.target.value,
				char: event.data,
			},
			name: 'inputChange',
			originalEvent: event,
		});
	}

	/**
	 * Handles the onKeydown events and continues to propagate.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleOnKeydown(event) {
		switch (event.key) {
		case 'Enter':
			event.stopPropagation();
			if (
				this.filteredItems.length &&
					event.delegateTarget.tagName !== 'INPUT'
			) {
				this._handleItemSelected(event);
			}
			break;
		case 'ArrowUp':
			this._setFocusItem(true);
			break;
		case 'ArrowDown':
			event.stopPropagation();
			this._setFocusItem(false);
			break;
		}

		return !this.emit({
			data: {
				value: this.refs.input.value,
				key: event.key,
				eventFromInput: event.delegateTarget.tagName === 'INPUT',
			},
			name: 'inputOnKeydown',
			originalEvent: event,
		});
	}

	/**
	 * Handle the interactions in the dropdown and add focus on the items.
	 * @param {!Boolean} direction
	 * @protected
	 */
	_setFocusItem(direction) {
		if (this.filteredItems.length) {
			const {dropdown} = this.refs.dataProvider.refs;
			const elements = dropdown.querySelectorAll(
				'a[data-dropdown-item-index]'
			);

			if (direction && this._dropdownItemFocused === 0) {
				this.refs.input.focus();
				this._dropdownItemFocused = null;
			} else if (
				!(direction === true && this._dropdownItemFocused === null)
			) {
				this._dropdownItemFocused =
					this._dropdownItemFocused === null ||
					elements.length - 1 === this._dropdownItemFocused
						? direction
							? this._dropdownItemFocused - 1
							: 0
						: direction
							? this._dropdownItemFocused - 1
							: this._dropdownItemFocused + 1;

				elements[this._dropdownItemFocused].focus();
			}
		}
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayAutocomplete.STATE = {
	/**
	 * Variation name to render different deltemplates.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
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
	 * @memberof ClayAutocomplete
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
	 * @type {?(number)}
	 */
	debounceTime: Config.number().value(200),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to enable the filtred items with autocomplete default.
	 * @default true
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?bool}
	 */
	enableAutocomplete: Config.validator(value => {
		if (value) {
			console.warn(
				'🚨 `enableAutocomplete` has been deprecated and will be removed in the next major version.'
			);
		}
	}),

	/**
	 * Extracts from the data the item to be compared in autocomplete.
	 * @instance
	 * @default (elem) => elem
	 * @memberof ClayAutocomplete
	 * @type {?(function|string)}
	 */
	extractData: Config.oneOfType([Config.func(), Config.string()]).value(
		elem => elem
	),

	/**
	 * List of filtered items for suggestion or autocomplete.
	 * @default []
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?Array<Object>}
	 */
	filteredItems: Config.array(Config.object()).value([]),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Set some initial data while the first request is being made
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(object|array)}
	 */
	initialData: Config.oneOfType([Config.object(), Config.array()]),

	/**
	 * CSS classes to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	inputElementClasses: Config.string(),

	/**
	 * Name of the selected items input.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string(),

	/**
	 * Value of the input.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

	/**
	 * Flag to define how often to refetch data (ms)
	 * @instance
	 * @default 0
	 * @memberof ClayAutocomplete
	 * @type {?(number|undefined)}
	 */
	pollingInterval: Config.number().value(0),

	/**
	 * Specifies explicitly if request needs to be made with debounce
	 * (userInput) or with polling (polling)
	 * @instance
	 * @default undefined
	 * @memberof ClayAutocomplete
	 * @type {?(object|array)}
	 */
	requestInputMode: Config.oneOf(['polling', 'userInput']).value('userInput'),

	/**
	 * Set ups the request options
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(object|undefined)}
	 */
	requestOptions: Config.shapeOf({
		method: Config.string(),
		mode: Config.string(),
		cache: Config.string(),
		credentials: Config.string(),
		headers: Config.object(),
		redirect: Config.string(),
		referrer: Config.string(),
		body: Config.object(),
	}),

	/**
	 * Flag to define how often to refetch data (ms)
	 * @instance
	 * @default 0
	 * @memberof ClayAutocomplete
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
	 * @default 5
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(number|undefined)}
	 */
	requestRetries: Config.number().value(5),

	/**
	 * Set timeout of the request
	 * @default 30000
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(number|undefined)}
	 */
	requestTimeout: Config.number().value(30000),

	/**
	 * The content renderer.
	 * Warning: This API is unstable and can be changed at any time,
	 * use at your own risk.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?html}
	 */
	unstable_content: Config.any(),
};

defineWebComponent('clay-autocomplete', ClayAutocomplete);

Soy.register(ClayAutocomplete, templates);

export {ClayAutocomplete};
export default ClayAutocomplete;
