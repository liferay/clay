import 'clay-autocomplete';
import 'clay-button';
import 'clay-label';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayMultiSelect.soy.js';

/**
 * Metal ClayMultiSelect component.
 * @extends ClayComponent
 */
class ClayMultiSelect extends ClayComponent {
	/**
	 * Assemble the schema of the item.
	 * @param {!string} label
	 * @param {!string} value
	 * @protected
	 * @return {!Object}
	 */
	_getItemSchema(label, value) {
		return {
			label: label,
			value: value,
		};
	}

	/**
	 * Continues the propagation of the Button clicked event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleButtonClicked(event) {
		return !this.emit({
			name: 'buttonClicked',
			originalEvent: event,
		});
	}

	/**
	 * Handle the click on the close label button.
	 * @param {!Object} data
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleCloseButtonClick(data) {
		return this._handleItemRemoved(data.target.element);
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
	 * Handle the click on the dropdown item and the propagation of the labelAdded event.
	 * @param {!Event} event
	 * @protected
	 * @return {?Boolean} If the event has been prevented or not.
	 */
	_handleDropdownItemClick(event) {
		this.filteredItems = [];
		this.refs.autocomplete.refs.input.focus();

		const value = this._performCall(this.valueLocator, event.data);
		const label = this._performCall(this.labelLocator, event.data);
		const data = this._getItemSchema(label, value);

		return this._handleItemAdded(value, data, event, 'itemSelected');
	}

	/**
	 * Handles changes in filteredItems and synchronizes with state.
	 * @param {!Event} event
	 * @protected
	 */
	_handleFilteredItemsChange(event) {
		if (event.newVal !== event.prevVal) {
			this.filteredItems = event.newVal;
		}
	}

	/**
	 * Continues the propagation of the itemAdded event.
	 * @param {!String} value
	 * @param {!(object|array|string)} data
	 * @param {!Event} event
	 * @param {?String} eventName
	 * @protected
	 * @return {?Boolean} If the event has been prevented or not.
	 */
	_handleItemAdded(value, data, event, eventName = 'itemAdded') {
		const label = value.toLowerCase();

		if (
			label &&
			!this.selectedItems.find(
				itemSelected =>
					this._performCall(this.valueLocator, itemSelected) === label
			)
		) {
			const index = this.selectedItems.push(data);

			this.selectedItems = this.selectedItems;
			this.inputValue = null;

			return !this.emit({
				data: {
					item: this.selectedItems[index - 1],
				},
				name: eventName,
				originalEvent: event,
			});
		} else {
			this.inputValue = label;
		}
	}

	/**
	 * Handle the focus on the selected items and triggers the focused item event.
	 * @param {!Event} event
	 * @param {?Boolean} direction
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemFocus(event, direction) {
		if (this.selectedItems.length) {
			const {autocomplete} = this.refs;
			const items = autocomplete.element.querySelectorAll(
				'span[id="item-tag"]'
			);

			if (this._itemFocused) {
				const index = this._itemFocused.getAttribute('data-tag');
				const condition = direction
					? Number(index) - 1
					: Number(index) + 1;

				if (condition > items.length - 1) {
					this.refs.autocomplete.refs.input.focus();
					this._removeFocusedItem();
					return false;
				} else if (condition >= 0) {
					this._itemFocused = items[condition];
					this._itemFocused.focus();
				} else {
					return false;
				}
			} else {
				this._itemFocused = items[items.length - 1];
				this._itemFocused.focus();
			}

			return !this.emit({
				data: {
					item: this._itemFocused,
				},
				name: 'itemFocused',
				originalEvent: event,
			});
		}
	}

	/**
	 * Handle the focused item removal and propagating the itemRemoved event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemRemoved(event) {
		const index = event.getAttribute('data-tag');
		const item = this.selectedItems[Number(index)];

		this._removeFocusedItem();
		this.selectedItems.splice(Number(index), 1);
		this.selectedItems = this.selectedItems;
		this.inputValue = null;

		return !this.emit({
			data: {
				item,
			},
			name: 'itemRemoved',
			originalEvent: event,
		});
	}

	/**
	 * Handles input changes and propagates the queryChange event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleOnInput(event) {
		const {values, valueOut} = this._tokenize(event.data.value);

		this._removeFocusedItem();

		if (event.data.char === ',' || values.length > 1) {
			values.forEach(value => {
				this._handleItemAdded(
					value,
					this._getItemSchema(value, value),
					event
				);
			});

			if (valueOut) {
				this.inputValue = valueOut;
			}
		} else {
			return !this.emit({
				data: {
					values,
					valueOut,
				},
				name: 'inputChange',
				originalEvent: event,
			});
		}
	}

	/**
	 * Handles form interactions and propagates corresponding events.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleOnKeydown(event) {
		const {value} = this.refs.autocomplete.refs.input;

		switch (event.data.key) {
		case 'Enter':
			event.preventDefault();
			if (this._itemFocused) {
				return this._handleItemRemoved(this._itemFocused);
			} else if (value && event.data.eventFromInput) {
				return this._handleItemAdded(
					value,
					this._getItemSchema(value, value),
					event
				);
			}
			break;
		case 'Backspace':
			// Prevents page from returning when input is empty.
			// See: https://support.mozilla.org/en-US/questions/1057630
			if (!value) {
				event.preventDefault();
			}

			if (!value) {
				if (!this._itemFocused) {
					return this._handleItemFocus(event);
				} else {
					return this._handleItemRemoved(this._itemFocused);
				}
			}
			break;
		case 'ArrowLeft':
			if (!value && this._itemFocused) {
				return this._handleItemFocus(event, true);
			}
			break;
		case 'ArrowRight':
			if (!value && this._itemFocused) {
				return this._handleItemFocus(event, false);
			}
			break;
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
	 * Removes the focus from the focused element.
	 * @protected
	 */
	_removeFocusedItem() {
		if (this._itemFocused) {
			this._itemFocused = null;
		}
	}

	/**
	 * Analyze the string and separate the values that
	 * get a comma at the end.
	 * @param {!string} string
	 * @param {!string} separator
	 * @return {Object}
	 */
	_tokenize(string, separator = ',') {
		const hasLastComma = string.endsWith(separator);
		const values = string.split(/\s*(?:,|$)\s*/).filter(Boolean);

		return {
			values,
			valueOut: hasLastComma ? null : values.pop(),
		};
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this._itemFocused = null;
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this._itemFocused = null;
	}

	/**
	 * @inheritDoc
	 */
	syncSelectedItems() {
		this.refs.autocomplete.refs.input.focus();
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayMultiSelect.STATE = {
	/**
	 * Variation name to render different deltemplates.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * The array of data items that the data source contains,
	 * the URL for the data provider to request, or a function
	 * that receives the query and returns a promise with the
	 * elements.
	 * @instance
	 * @default undefined
	 * @memberof ClayMultiSelect
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
	 * @memberof ClayMultiSelect
	 * @type {?(number)}
	 */
	debounceTime: Config.number().value(200),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to enable the filtred items with autocomplete default.
	 * @default true
	 * @instance
	 * @memberof ClayMultiSelect
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
	 * List of filtered items for suggestion or autocomplete.
	 * @default []
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?Array}
	 */
	filteredItems: Config.array(Config.object()).value([]),

	/**
	 * Help text to guide the user in the interaction.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {!string}
	 */
	helpText: Config.string().required(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Set some initial data while the first request is being made
	 * @instance
	 * @default undefined
	 * @memberof ClayMultiSelect
	 * @type {?(object|array)}
	 */
	initialData: Config.oneOfType([Config.object(), Config.array()]),

	/**
	 * Name for each selected item input hidden.
	 * @default selectedItems
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string().value('selectedItems'),

	/**
	 * Flag to define how often to refetch data (ms)
	 * @instance
	 * @default 0
	 * @memberof ClayMultiSelect
	 * @type {?(number|undefined)}
	 */
	pollingInterval: Config.number().value(0),

	/*
	 * Value of the input.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @private
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string().internal(),

	/**
	 * Set ups the request options
	 * @instance
	 * @default undefined
	 * @memberof ClayMultiSelect
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
	 * @memberof ClayMultiSelect
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
	 * @memberof ClayMultiSelect
	 * @type {?(number|undefined)}
	 */
	requestRetries: Config.number().value(5),

	/**
	 * Set timeout of the request
	 * @instance
	 * @default 30000
	 * @memberof ClayMultiSelect
	 * @type {?(number|undefined)}
	 */
	requestTimeout: Config.number().value(30000),

	/**
	 * Label of the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	label: Config.string(),

	/**
	 * Sets the name of the field to map the label of the item.
	 * @default label
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(function|string)}
	 */
	labelLocator: Config.oneOfType([Config.func(), Config.string()]).value(
		'label'
	),

	/**
	 * List of the selected Items.
	 * @default []
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?Array<Object>}
	 */
	selectedItems: Config.array(Config.object()).value([]),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Sets the name of the field to map the value of the item.
	 * @default value
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(function|string)}
	 */
	valueLocator: Config.oneOfType([Config.func(), Config.string()]).value(
		'value'
	),
};

defineWebComponent('clay-multi-select', ClayMultiSelect);

Soy.register(ClayMultiSelect, templates);

export {ClayMultiSelect};
export default ClayMultiSelect;
