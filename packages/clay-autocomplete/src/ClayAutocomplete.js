import 'clay-data-provider';
import 'clay-loading-indicator';
import 'clay-portal';
import {Align} from 'metal-position';
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
		this.addListener('dataLoading', this._defaultDataLoading, true);
		this.addListener('inputChange', this._defaultInputChange, true);
		this.refs.dataProvider.refs.portal.on(
			'rendered',
			this._handleRenderedPortal.bind(this)
		);
	}

	/**
	 * @inheritDoc
	 */
	rendered() {
		if (this.inputFocused === true) {
			this.refs.input.focus();
		}
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
		if (!this.filteredItems.length) {
			this._dropdownItemFocused = null;
		}
	}

	/**
	 * @inheritDoc
	 */
	syncInputFocused(newVal) {
		if (newVal === true) {
			this.refs.input.focus();
		}
	}

	/**
	 * Sets filtered items with received data
	 * @private
	 */
	_defaultDataChange() {
		this._isFetching = false;

		if (this._query) {
			this.filteredItems = this._getUpdatedFilteredItems();
		} else {
			this.filteredItems = [];
		}
	}

	/**
	 * @private
	 */
	_defaultDataLoading() {
		this._isFetching = true;
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
				this.filteredItems = this._getUpdatedFilteredItems();
			}
		} else {
			this.filteredItems = [];
		}
	}

	/**
	 * Gets the accepted characters of the input
	 * element values
	 * @param {!string} value
	 * @protected
	 * @return {string}
	 */
	_getCharactersAllowed(value) {
		const regexp = new RegExp(this.allowedCharacters);
		const match = value.match(regexp);

		return Array.isArray(match) ? match.join('') : '';
	}

	/**
	 * Gets the the udpated filtered items
	 * @protected
	 * @return {Array}
	 */
	_getUpdatedFilteredItems() {
		let filteredItems = this.refs.dataProvider.filter(
			this._query,
			this.extractData
		);

		filteredItems.map(filteredItem => {
			let newFilteredItemData = {};

			if (this.labelLocator) {
				newFilteredItemData.label = this._performCall(
					this.labelLocator,
					filteredItem.data
				);
			}

			if (this.valueLocator) {
				newFilteredItemData.value = this._performCall(
					this.valueLocator,
					filteredItem.data
				);
			}

			if (typeof filteredItem.data === 'string') {
				filteredItem.data = newFilteredItemData;
			} else {
				filteredItem.data.label = newFilteredItemData.label;
				filteredItem.data.value = newFilteredItemData.value;
			}
		});

		return filteredItems;
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
	 * Continues the propagation of the data error event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDataError(event) {
		return !this.emit({
			data: event.data,
			name: 'dataError',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the data loading event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDataLoading(event) {
		return !this.emit({
			data: event.data,
			name: 'dataLoading',
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
		return this._handleItemSelected(
			event,
			event.delegateTarget.getAttribute('data-dropdown-item-index')
		);
	}

	/**
	 * Handle the selected item in the dropdown and trigger the itemSelected event.
	 * @param {!Event} event
	 * @param {!string} index
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemSelected(event, index) {
		const item = this.filteredItems[Number(index)];

		return !this.emit({
			data: {
				item: item.data,
			},
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
		const {value} = event.target;
		const newValue = this.allowedCharacters
			? this._getCharactersAllowed(value)
			: value;
		const char = newValue.substr(-1);

		// Updates the value of the input with the value
		// entered by the user in case the validation is false
		// the above components can update the state of the input value.
		this.inputValue = value;

		return !this.emit({
			data: {
				value: newValue,
				char,
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
				this._handleItemSelected(
					event,
					event.target.getAttribute('data-dropdown-item-index')
				);
			}
			break;

		case 'Tab':
			if (
				this.inputFocused &&
					this.filteredItems &&
					this.filteredItems.length > 0
			) {
				event.preventDefault();
				event.stopPropagation();
				this._setFocusItem(event.shiftKey);
			}
			break;
		}

		return !this.emit({
			data: {
				element: event.target,
				value: this.refs.input.value,
				key: event.key,
				eventFromInput: event.delegateTarget.tagName === 'INPUT',
			},
			name: 'inputOnKeydown',
			originalEvent: event,
		});
	}

	/**
	 * Handle when the lifecycle `rendered` is called in ClayPortal.
	 * @protected
	 */
	_handleRenderedPortal() {
		const alignElement = this.element;

		if (alignElement) {
			const widthElement = alignElement.clientWidth;
			const bodyElement = this.refs.dataProvider.refs.portal.refs
				.dropdown;

			this._dropdownWidth = widthElement;
			this._alignedPosition = Align.align(
				bodyElement,
				alignElement,
				Align.BottomCenter,
				false
			);
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
	 * Handle the interactions in the dropdown and add focus on the items.
	 * @param {!Boolean} direction
	 * @protected
	 */
	_setFocusItem(direction) {
		if (this.filteredItems.length) {
			const {dropdown} = this.refs.dataProvider.refs.portal.refs;
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
	 * The current position of the tooltip after being aligned via `Align.align`.
	 * @default Align.isValidPosition
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {!number}
	 */
	_alignedPosition: Config.validator(Align.isValidPosition).internal(),

	/**
	 * Flag to indicate the dropdown width referring to the width of the input.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {!number}
	 */
	_dropdownWidth: Config.number().internal(),

	/**
	 * @default false
	 * @instance
	 * @memberof ClayAutocomplete
	 * @private
	 * @type {?bool}
	 */
	_isFetching: Config.bool()
		.value(false)
		.internal(),

	/**
	 * Flag to indicate the characters allowed in the
	 * input element (e.g /[a-zA-Z0-9_]/g).
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?RegExp}
	 */
	allowedCharacters: Config.instanceOf(RegExp),

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
	 * @memberof ClayAutocomplete
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
	 * Flag to enable the filtered items with autocomplete default.
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
	dataProviderInitialData: Config.oneOfType([
		Config.object(),
		Config.array(),
	]),

	dropdownPortalElement: Config.string().value('#clay_dropdown_portal'),

	/**
	 * CSS classes to be applied to the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	inputElementClasses: Config.string(),

	/**
	 * Flag to indicate that if the input is focused.
	 * @instance
	 * @default false
	 * @memberof ClayAutocomplete
	 * @type {?bool}
	 */
	inputFocused: Config.bool().value(false),

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
	 * Sets the name of the field to map the label of the item.
	 * @default label
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(function|string)}
	 */
	labelLocator: Config.oneOfType([Config.func(), Config.string()]).value(
		'label'
	),

	/**
	 * Input placeholder.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(string|undefined)}
	 */
	placeholder: Config.string(),

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

	/**
	 * Flag to indicate the autocomplete should use default css
	 * classes or not.
	 * @default true
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?bool}
	 */
	useDefaultClasses: Config.bool().value(true),

	/**
	 * Sets the name of the field to map the value of the item.
	 * @default label
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(function|string)}
	 */
	valueLocator: Config.oneOfType([Config.func(), Config.string()]).value(
		'value'
	),
};

defineWebComponent('clay-autocomplete', ClayAutocomplete);

Soy.register(ClayAutocomplete, templates);

export {ClayAutocomplete};
export default ClayAutocomplete;
