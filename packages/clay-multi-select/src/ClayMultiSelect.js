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
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDropdownItemClick(event) {
		return !this.emit({
			data: event.data,
			name: 'itemSelected',
			originalEvent: event,
		});
	}

	/**
	 * Handles changes in filteredItems and synchronizes with state.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleFilteredItemsChange(event) {
		this.filteredItems = event.data;

		return !this.emit({
			data: event.data,
			name: 'filteredItems',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the itemAdded event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemAdded(event) {
		const label = event.data.value.toLowerCase().replace(',', '');

		if (
			label.trim() &&
			!this.selectedItems.find(
				itemSelected => itemSelected.label === label
			)
		) {
			return !this.emit({
				data: {
					label,
				},
				name: 'itemAdded',
				originalEvent: event,
			});
		} else {
			this.refs.autocomplete.refs.input.value = label;
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

		this._removeFocusedItem();

		return !this.emit({
			data: {
				index: Number(index),
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
		this._removeFocusedItem();

		switch (event.data.char) {
		case ',':
			return this._handleItemAdded(event);
		default:
			return !this.emit({
				data: {
					value: event.data.value,
				},
				name: 'queryChange',
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
			} else if (value) {
				return this._handleItemAdded(event);
			}
			break;
		case 'Backspace':
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
	 * Removes the focus from the focused element.
	 * @protected
	 */
	_removeFocusedItem() {
		if (this._itemFocused) {
			this._itemFocused = null;
		}
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
	 * The array of data items that the data source contains or
	 * the URL for the data provider to request.
	 * @instance
	 * @default undefined
	 * @memberof ClayMultiSelect
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
	enableAutocomplete: Config.bool().value(true),

	/**
	 * Extracts from the data the item to be compared in autocomplete.
	 * @instance
	 * @default (elem) => elem
	 * @memberof ClayMultiSelect
	 * @type {?(function|undefined)}
	 */
	extractData: Config.func(),

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
	 * Name of the input.
	 * @default undefind
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string(),

	/**
	 * Value of the input.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	inputValue: Config.string(),

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
	requestPolling: Config.number().value(0),

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
	 * List of the selected Items.
	 * @default []
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?Array<Object>}
	 */
	selectedItems: Config.array(Config.object()).value([]),

	/**
	 * Name of the selected items input.
	 * @default selectedItems
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	selectedItemsInputName: Config.string().value('selectedItems'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {!string}
	 */
	spritemap: Config.string().required(),
};

defineWebComponent('clay-multi-select', ClayMultiSelect);

Soy.register(ClayMultiSelect, templates);

export {ClayMultiSelect};
export default ClayMultiSelect;
