import 'clay-data-provider';
import {Config} from 'metal-state';
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
	 * Handles the filtered items event and continues to propagate.
	 * @param {!Event} event
	 * @param {!string} query
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleFilteredItems(event, query) {
		if (query) {
			this.filteredItems = this.refs.dataProvider.filter(
				query,
				this.extractData
			);
		} else {
			this.filteredItems = [];
		}

		return !this.emit({
			data: this.filteredItems,
			name: 'filteredItems',
			originalEvent: event,
		});
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
			data: item,
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
		const query = event.target.value;

		if (this.enableAutocomplete) {
			this._handleFilteredItems(event, query);
		}

		return !this.emit({
			data: {
				value: event.target.value,
				char: event.data,
			},
			name: 'queryChange',
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

	/**
	 * @inheritDoc
	 */
	attached() {
		this._dropdownItemFocused = null;
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
	 * The array of data items that the data source contains or
	 * the URL for the data provider to request.
	 * @default undefined
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {!(string|object|array)}
	 */
	dataSource: Config.oneOfType([
		Config.string(),
		Config.object(),
		Config.array(),
	]).required(),

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
	enableAutocomplete: Config.bool().value(true),

	/**
	 * Extracts from the data the item to be compared in autocomplete.
	 * @instance
	 * @default (elem) => elem
	 * @memberof ClayAutocomplete
	 * @type {?(function|undefined)}
	 */
	extractData: Config.func(),

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
	 * @default 0
	 * @instance
	 * @memberof ClayAutocomplete
	 * @type {?(number|undefined)}
	 */
	requestPolling: Config.number().value(0),

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
