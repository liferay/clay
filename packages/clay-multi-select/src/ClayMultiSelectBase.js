import 'clay-button';
import 'clay-label';
import {Config} from 'metal-state';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayMultiSelectBase.soy.js';

/**
 * Metal ClayMultiSelectBase component.
 * @extends ClayComponent
 */
class ClayMultiSelectBase extends ClayComponent {
	/**
	 * Checks whether the event is from the filteredItems element
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean}
	 */
	_isDataFromFilteredItems(event) {
		return !!event.target.getAttribute('data-dropdown-item-index');
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
		return this._handleItemSelected(event);
	}

	/**
	 * Continues the propagation of the itemAdded event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemAdded(event) {
		const label = event.target.value.toLowerCase().replace(',', '');

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
			this.refs.input.value = label;
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
				index: Number(index),
			},
			name: 'itemRemoved',
			originalEvent: event,
		});
	}

	/**
	 * Handle the selected item in the dropdown and trigger the itemSelected event.
	 * @param {!Event} event
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
			} else if (this._isDataFromFilteredItems(event)) {
				return this._handleItemSelected(event);
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
				'a[data-dropdown-item-index]'
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
	disposed() {
		this._itemFocused = null;
		this._dropdownItemFocused = null;
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
ClayMultiSelectBase.STATE = {
	/**
	 * Variation name to render different deltemplates.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * List of filtered items for suggestion or autocomplete.
	 * @default []
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?Array}
	 */
	filteredItems: Config.array(Config.object()).value([]),

	/**
	 * Help text to guide the user in the interaction.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {!string}
	 */
	helpText: Config.string().required(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * Name of the input.
	 * @default undefind
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?(string|undefined)}
	 */
	inputName: Config.string(),

	/**
	 * Label of the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?(string|undefined)}
	 */
	label: Config.string(),

	/**
	 * List of the selected Items.
	 * @default []
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?Array<Object>}
	 */
	selectedItems: Config.array(Config.object()).value([]),

	/**
	 * Name of the selected items input.
	 * @default selectedItems
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {?(string|undefined)}
	 */
	selectedItemsInputName: Config.string().value('selectedItems'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayMultiSelectBase
	 * @type {!string}
	 */
	spritemap: Config.string().required(),
};

defineWebComponent('clay-multi-select-base', ClayMultiSelectBase);

Soy.register(ClayMultiSelectBase, templates);

export {ClayMultiSelectBase};
export default ClayMultiSelectBase;
