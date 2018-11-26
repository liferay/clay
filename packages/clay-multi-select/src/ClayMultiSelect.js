import 'clay-button';
import 'clay-label';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import {match} from './utils';
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
	 * Get the value typed in the input or through the filtered items.
	 * @param {!Event} event
	 * @protected
	 * @return {string}
	 */
	_getLabelFromEvent(event) {
		const {tagName} = event.target;

		if (tagName === 'INPUT') {
			return event.target.value.toLowerCase().replace(',', '');
		} else if (tagName === 'A') {
			const index = event.target.getAttribute('data-dropdown-item-index');
			const element = this.filteredItems[Number(index)];

			return element.originalString.toLowerCase();
		}
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
	 * Handle the click on the dropdown item and the propagation of the labelAdded event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDropdownItemClick(event) {
		return this._handleItemAdded(event);
	}

	/**
	 * Continues the propagation of the itemAdded event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemAdded(event) {
		const item = this._getLabelFromEvent(event);

		if (
			item.trim() &&
			!this.selectedItems.find(
				itemSelected => itemSelected.label === item
			)
		) {
			return !this.emit({
				data: {
					value: item,
				},
				name: 'itemAdded',
				originalEvent: event,
			});
		} else {
			this.refs.input.value = item;
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
			const {formGroupInput} = this.refs;
			const items = formGroupInput.querySelectorAll(
				'span[id="item-tag"]'
			);

			if (this._itemFocused) {
				const index = this._itemFocused.getAttribute('data-tag');
				const condition = direction
					? Number(index) - 1
					: Number(index) + 1;

				if (condition > items.length - 1) {
					this.refs.input.focus();
					this._removeFocusedItem();
					return false;
				} else if (condition >= 0) {
					this._itemFocused.classList.remove('label-focus');
					this._itemFocused = items[condition];
					this._itemFocused.classList.add('label-focus');
				} else {
					return false;
				}
			} else {
				this._itemFocused = items[items.length - 1];
				this._itemFocused.classList.toggle('label-focus');
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
				index,
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
		const value = event.target.value.toLowerCase();

		this._removeFocusedItem();

		switch (event.data) {
		case ',':
			return this._handleItemAdded(event);
		default:
			return !this.emit({
				data: {
					value,
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
		switch (event.key) {
		case 'Enter':
			event.preventDefault();
			if (this._itemFocused) {
				return this._handleItemRemoved(this._itemFocused);
			} else {
				return this._handleItemAdded(event);
			}
		case 'Backspace':
			if (!this.refs.input.value) {
				if (!this._itemFocused) {
					return this._handleItemFocus(event);
				} else {
					return this._handleItemRemoved(this._itemFocused);
				}
			}
			break;
		case 'ArrowLeft':
			if (!this.refs.input.value && this._itemFocused) {
				return this._handleItemFocus(event, true);
			}
			break;
		case 'ArrowRight':
			if (!this.refs.input.value && this._itemFocused) {
				return this._handleItemFocus(event, false);
			}
			break;
		case 'ArrowUp':
			this._setFocusItemDropdown(true);
			break;
		case 'ArrowDown':
			this._setFocusItemDropdown(false);
			break;
		}
	}

	/**
	 * Removes the focus from the focused element.
	 * @protected
	 */
	_removeFocusedItem() {
		if (this._itemFocused) {
			this._itemFocused.classList.remove('label-focus');
			this._itemFocused = null;
		}
	}

	/**
	 * Handle the interactions in the dropdown and add focus on the items.
	 * @protected
	 * @param {!Boolean} direction
	 */
	_setFocusItemDropdown(direction) {
		if (this.filteredItems.length) {
			const elements = this.refs.dropdown.querySelectorAll(
				'a[id="item"]'
			);

			if (direction && this._dropdownItemFocused === 0) {
				this.refs.input.focus();
				this._dropdownItemFocused = null;
			} else {
				this._dropdownItemFocused =
					this._dropdownItemFocused === null ||
					elements.length - 1 === this._dropdownItemFocused
						? 0
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
		this._itemFocused = null;
		this._dropdownItemFocused = null;
	}

	/**
	 * Clears the input value.
	 * @public
	 */
	clearInput() {
		this.refs.input.value = '';
	}

	/**
	 * @inheritDoc
	 */
	created() {
		this._eventHandler = new EventHandler();
	}

	/**
	 * @inheritDoc
	 */
	disposed() {
		this._eventHandler.removeAllListeners();
	}

	/**
	 * Helper method to filter a list based on a string.
	 * @param {!Array<string>} data
	 * @param {!string} query
	 * @public
	 * @return {Array} A list of items containing the corresponding characters
	 */
	filterAutocomplete(data, query) {
		return data
			.reduce((prev, element, index) => {
				let result = match(query, element);

				if (result != null) {
					prev[prev.length] = {
						index,
						matches: result.values,
						originalString: element,
						score: result.score,
					};
				}

				return prev;
			}, [])
			.sort((a, b) => {
				if (a > b) return 1;
				if (a < b) return -1;
			});
	}

	/**
	 * @inheritDoc
	 */
	syncFilteredItems() {
		this._dropdownItemFocused = null;
	}

	/**
	 * @inheritDoc
	 */
	syncSelectedItems() {
		this.refs.input.focus();
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
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelect
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

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
