import 'clay-autocomplete';
import 'clay-button';
import 'clay-label';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
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
	 * @inheritDoc
	 */
	created() {
		this._itemFocused = null;
		this._eventHandler = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener(
			'autocompleteItemSelected',
			this._defaultAutocompleteItemSelected,
			true
		);
		this.addListener('inputBlur', this._defaultInputBlur, true);
		this.addListener('inputChange', this._defaultInputChange, true);
		this.addListener('inputFocus', this._defaultInputFocus, true);
		this.addListener('labelItemAdded', this._defaultLabelItemAdded, true);
		this.addListener(
			'labelItemRemoved',
			this._defaultLabelItemRemoved,
			true
		);
		this.addListener(
			'labelItemCloseButtonClick',
			this._defaultLabelItemCloseButtonClick,
			true
		);
		this.addListener(
			'labelItemKeyDown',
			this._defaultLabelItemKeyDown,
			true
		);
	}

	/**
	 * @inheritDoc
	 */
	detached() {
		this._eventHandler.removeAllListeners();
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this._eventHandler.removeAllListeners();
		this._itemFocused = null;
	}

	/**
	 * Handles the autocomplete selected item event.
	 * @param {!Event} event
	 * @protected
	 */
	_defaultAutocompleteItemSelected(event) {
		const {label, value} = event.data.item;

		const item = this._createItemObject(label, value);

		this._addLabelItem(item);
	}

	/**
	 *
	 * @protected
	 */
	_defaultInputBlur() {
		if (
			!this.filteredItems ||
			(this.filteredItems && this.filteredItems.length === 0)
		) {
			this._inputFocused = false;
			this.inputValue = '';
		}
	}

	/**
	 *
	 * @param {!Event} event
	 * @protected
	 */
	_defaultInputChange(event) {
		const char = event.data.char;
		let inputValue = event.data.value;
		const words = this._getWords(inputValue);

		if (char === ',' || words.length > 1) {
			words.forEach(word => {
				let added = this._addLabelItem(
					this._createItemObject(word, word)
				);

				inputValue = inputValue.replace(word + ',', added ? '' : word);
			});
		}

		this.inputValue = inputValue;
	}

	/**
	 *
	 * @protected
	 */
	_defaultInputFocus() {
		this._inputFocused = true;
	}

	/**
	 *
	 * @protected
	 */
	_defaultLabelItemAdded() {
		this.inputValue = '';
		this._inputFocused = true;
	}

	/**
	 * Handles the click on the close label item button.
	 * @param {!Event} event
	 * @protected
	 */
	_defaultLabelItemCloseButtonClick(event) {
		this._removeLabelItem(event.data.item);
	}

	/**
	 * Handles the click on the close label item button.
	 * @param {!Event} event
	 * @protected
	 */
	_defaultLabelItemKeyDown(event) {
		if (event.data.key == 'Backspace' || event.data.key == 'Enter') {
			event.preventDefault();

			this._removeLabelItem(event.data.element);
		}
	}

	/**
	 * Focus the input after a labelItem is removed.
	 * @protected
	 */
	_defaultLabelItemRemoved() {
		this.inputValue = '';
		this._inputFocused = true;
	}

	/**
	 * Continues the propagation of the autocomplete item selected event.
	 * @param {!Event} event
	 * @protected
	 * @return {?Boolean} If the event has been prevented or not.
	 */
	_handleAutocompleteItemSelected(event) {
		return !this.emit({
			data: event.data,
			name: 'autocompleteItemSelected',
			originalEvent: event,
		});
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
	 * Continues the propagation of the filteredItemsChanged event
	 * @param {!Event} event
	 * @protected
	 */
	_handleFilteredItemsChange(event) {
		if (event.newVal !== event.prevVal) {
			this.filteredItems = event.newVal;
		}
	}

	/**
	 * Continues the propagation of the the input blur event.
	 * @param {!Event} event
	 * @protected
	 * @return {?Boolean} If the event has been prevented or not.
	 */
	_handleInputBlur(event) {
		return !this.emit({
			data: event.data,
			name: 'inputBlur',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the the input change event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleInputChange(event) {
		return !this.emit({
			data: event.data,
			name: 'inputChange',
			originalEvent: event,
		});
	}

	/**
	 * Handles form interactions and propagates corresponding events.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleInputKeyDown(event) {
		const {element, key} = event.data;

		switch (key) {
		case 'Backspace':
			// Prevents page from returning when input is empty.
			// See: https://support.mozilla.org/en-US/questions/1057630
			if (!element.value) {
				event.preventDefault();
				return this._focusLastLabelItem();
			}
			break;

		case 'Enter':
			event.preventDefault();

			if (element.value) {
				this._addLabelItem(
					this._createItemObject(element.value, element.value)
				);
			}
			break;
		}
	}

	/**
	 * Continues the propagation of the the input focus event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleInputFocus(event) {
		return !this.emit({
			data: event.data,
			name: 'inputFocus',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the the autocomplete label item click event.
	 * @param {!Event} event
	 * @protected
	 * @return {?Boolean} If the event has been prevented or not.
	 */
	_handleLabelItemClick(event) {
		return !this.emit({
			data: event.data,
			name: 'labelItemClick',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the item close event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleLabelItemCloseButtonClick(event) {
		return !this.emit({
			data: Object.assign(event.data || {}, {
				item: event.target.element,
			}),
			name: 'labelItemCloseButtonClick',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the item focused event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleLabelItemKeyDown(event) {
		return !this.emit({
			data: {
				element: event.currentTarget,
				key: event.key,
			},
			name: 'labelItemKeyDown',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the select button clicked event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleSelectButtonClicked(event) {
		return !this.emit({
			name: 'selectButtonClick',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the itemAdded event.
	 * @param {!String} item
	 * @protected
	 * @return {?Boolean} If the item has been added or not.
	 */
	_addLabelItem(item) {
		const {label, value} = item;

		const filteredItem = this.filteredItems
			.filter(filteredItem => {
				return (
					filteredItem.data.label.toLowerCase() ===
					label.toLowerCase()
				);
			})
			.map(filteredItem => {
				return {
					label: filteredItem.data.label,
					value: filteredItem.data.value,
				};
			})[0];

		if (!this.creatable) {
			item = filteredItem;
		} else {
			item = filteredItem || item;
		}

		const itemIsSelected = item && this._isItemSelected(item);

		if (item && value && !itemIsSelected) {
			let newSelectedItems = this.selectedItems.map(item => item);
			newSelectedItems.push(item);
			this.selectedItems = newSelectedItems;

			this.filteredItems = [];

			this.emit({
				data: {
					item,
					selectedItems: this.selectedItems,
				},
				name: 'labelItemAdded',
			});

			return true;
		} else {
			this.emit({
				data: {
					itemIsSelected,
					itemDoesNotExists: !this.creatable && !item,
				},
				name: 'errorAddinglabelItem',
			});

			return false;
		}
	}

	/**
	 * Assemble the schema of the item.
	 * @param {!string} label
	 * @param {!string} value
	 * @protected
	 * @return {!Object}
	 */
	_createItemObject(label, value) {
		return {
			label: label,
			value: value,
		};
	}

	/**
	 * Focus a label item and emits the itemFocused event.
	 * @param {!Element} item
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_focusLabelItem(item) {
		if (item) {
			item.focus();

			return !this.emit({
				data: {
					item,
				},
				name: 'labelItemFocused',
			});
		}
	}

	/**
	 * Focus the last label item.
	 * @param {!Element} item
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_focusLastLabelItem() {
		const labelItems = this._getLabelItems();

		return this._focusLabelItem(labelItems[labelItems.length - 1]);
	}

	/**
	 * Returns all the label items present in the autocomplete
	 * @protected
	 * @return {NodeList} The list of label items nodes
	 */
	_getLabelItems() {
		let labelItems = [];

		if (this.selectedItems.length > 0) {
			const {autocomplete} = this.refs;
			labelItems = autocomplete.element.querySelectorAll(
				'span[id="item-tag"]'
			);
		}

		return labelItems;
	}

	/**
	 * Analyze the string and separate the values that
	 * get a comma at the end.
	 * @param {!string} string
	 * @return {Array}
	 */
	_getWords(string) {
		const hasComma = string.includes(',');

		if (hasComma) {
			const words = string.split(/\s*(?:,|$)\s*/).filter(Boolean);

			return words;
		}

		return [];
	}

	/**
	 * @param {!Object} item
	 * @return {Boolean} If the item is already selected.
	 */
	_isItemSelected(item) {
		return Boolean(
			this.selectedItems.find(selectedItem => {
				return (
					selectedItem.label.toLowerCase() ===
						item.label.toLowerCase() &&
					selectedItem.value.toLowerCase() ===
						item.value.toLowerCase()
				);
			})
		);
	}

	/**
	 * Removes an item and emits the 'itemRoved' event.
	 * @param {!Element} element
	 * @protected
	 */
	_removeLabelItem(element) {
		const index = Number(element.getAttribute('data-tag'));
		const item = this.selectedItems[index];

		let newSelectedItems = this.selectedItems.map(item => item);
		newSelectedItems.splice(index, 1);

		this.selectedItems = newSelectedItems;

		this.emit({
			data: {
				item,
				selectedItems: this.selectedItems,
			},
			name: 'labelItemRemoved',
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayMultiSelect.STATE = {
	/**
	 * Internal flag to indicate that if the input is focused.
	 * @instance
	 * @default false
	 * @memberof ClayMultiSelect
	 * @type {?bool}
	 */
	_inputFocused: Config.bool()
		.value(false)
		.internal(),

	/**
	 * Method or string as condition to filter items in autocomplete.
	 * @instance
	 * @default (elem) => elem
	 * @memberof ClayMultiSelect
	 * @type {?(function|string)}
	 */
	autocompleteFilterCondition: Config.oneOfType([
		Config.func(),
		Config.string(),
	]).value(elem => elem),

	/**
	 * Variation name to render different deltemplates.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * Flag to indicate if only items from autocomplete should be accepted.
	 * @default true
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?bool}
	 */
	creatable: Config.bool().value(true),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Set the request debounce time
	 * @instance
	 * @default 200
	 * @memberof ClayMultiSelect
	 * @type {?(number)}
	 */
	dataProviderDebounceTime: Config.number().value(200),

	/**
	 * Set some initial data while the first request is being made
	 * @instance
	 * @default undefined
	 * @memberof ClayMultiSelect
	 * @type {?(object|array)}
	 */
	dataProviderInitialData: Config.oneOfType([
		Config.object(),
		Config.array(),
	]),

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
	]),

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
	 * Element selector to render the autocomplete dropdown in.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @review
	 * @type {?(object|undefined)}
	 */
	dropdownPortalElement: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to enable the filtered items with autocomplete default.
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
	 * Characters allowed in the input element (e.g /[a-zA-Z0-9_]/g).
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?RegExp}
	 */
	inputAllowedCharacters: Config.instanceOf(RegExp),

	/**
	 * Name for each selected item input hidden.
	 * @default selectedItems
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string().value('selectedItems'),

	/*
	 * Value of the input.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @private
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

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
	 * Input placeholder.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	placeholder: Config.string(),

	/**
	 * Flag to define how often to refetch data (ms)
	 * @instance
	 * @default 0
	 * @memberof ClayMultiSelect
	 * @type {?(number|undefined)}
	 */
	pollingInterval: Config.number().value(0),

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
	 * List of the selected Items.
	 * @default []
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?Array<Object>}
	 */
	selectedItems: Config.array(Config.object()).value([]),

	/**
	 * Flag to indicate if select button should be shown or not.
	 * @default true
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?bool}
	 */
	showSelectButton: Config.bool().value(true),

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
