import 'clay-button';
import 'clay-label';
import {Config} from 'metal-state';
import {EventHandler} from 'metal-events';
import {match} from './utils';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';

import templates from './ClayLabelsInputField.soy.js';

/**
 * Metal ClayLabelsInputField component.
 * @extends ClayComponent
 */
class ClayLabelsInputField extends ClayComponent {
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
		return this._handleLabelRemoved(data.target.element);
	}

	/**
	 * Handle the click on the dropdown item and the propagation of the labelAdded event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleDropdownItemClick(event) {
		return this._handleLabelAdded(event);
	}

	/**
	 * Continues the propagation of the labelAdded event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleLabelAdded(event) {
		const label = this._getLabelFromEvent(event);

		if (
			label.trim() &&
			!this.selectedLabels
				.find((labelSelected) => labelSelected.label === label)
		) {
			return !this.emit({
				data: {
					value: label,
				},
				name: 'labelAdded',
				originalEvent: event,
			});
		} else {
			this.refs.input.value = label;
		}
	}

	/**
	 * Handle the focus on the selected labels and triggers the focused label event.
	 * @param {!Event} event
	 * @param {?Boolean} direction
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleLabelFocus(event, direction) {
		if (this.selectedLabels.length) {
			const {formGroupInput} = this.refs;
			const items = formGroupInput.querySelectorAll('span[id="item-tag"]');

			if (this._labelFocused) {
				const index = this._labelFocused.getAttribute('data-tag');
				const condition = direction
					? Number(index) - 1
					: Number(index) + 1;

				if (condition > (items.length - 1)) {
					this.refs.input.focus();
					this._removeFocusedLabel();
					return false;
				} else if (condition >= 0) {
					this._labelFocused.classList.remove('label-focus');
					this._labelFocused = items[condition];
					this._labelFocused.classList.add('label-focus');
				} else {
					return false;
				}
			} else {
				this._labelFocused = items[items.length - 1];
				this._labelFocused.classList.toggle('label-focus');
			}

			return !this.emit({
				data: {
					item: this._labelFocused,
				},
				name: 'labelFocused',
				originalEvent: event,
			});
		}
	}

	/**
	 * Handle the focused label removal and propagating the labelRemoved event.
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleLabelRemoved(event) {
		const index = event.getAttribute('data-tag');

		this._removeFocusedLabel();

		return !this.emit({
			data: {
				index,
			},
			name: 'labelRemoved',
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

		this._removeFocusedLabel();

		switch (event.data) {
		case ',':
			return this._handleLabelAdded(event);
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
			if (this._labelFocused) {
				return this._handleLabelRemoved(this._labelFocused);
			} else {
				return this._handleLabelAdded(event);
			}
		case 'Backspace':
			if (!this.refs.input.value) {
				if (!this._labelFocused) {
					return this._handleLabelFocus(event);
				} else {
					return this._handleLabelRemoved(this._labelFocused);
				}
			}
			break;
		case 'ArrowLeft':
			if (!this.refs.input.value && this._labelFocused) {
				return this._handleLabelFocus(event, true);
			}
			break;
		case 'ArrowRight':
			if (!this.refs.input.value && this._labelFocused) {
				return this._handleLabelFocus(event, false);
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
	_removeFocusedLabel() {
		if (this._labelFocused) {
			this._labelFocused.classList.remove('label-focus');
			this._labelFocused = null;
		}
	}

	/**
	 * Handle the interactions in the dropdown and add focus on the items.
	 * @protected
	 * @param {!Boolean} direction
	 */
	_setFocusItemDropdown(direction) {
		if (this.filteredItems.length) {
			const elements = this.refs.dropdown.querySelectorAll('a[id="item"]');

			if (direction && this._dropdownItemFocused === 0) {
				this.refs.input.focus();
				this._dropdownItemFocused = null;
			} else {
				this._dropdownItemFocused =
					this._dropdownItemFocused === null
					|| (elements.length - 1) === this._dropdownItemFocused
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
		this._labelFocused = null;
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
	syncSelectedLabels() {
		this.refs.input.focus();
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayLabelsInputField.STATE = {
	/**
	 * Variation name to render different deltemplates.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabelsInputField
	 * @type {?(string|undefined)}
	 */
	contentRenderer: Config.string(),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabelsInputField
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * List of filtered items for suggestion or autocomplete.
	 * @default []
	 * @instance
	 * @memberof ClayLabelsInputField
	 * @type {?Array}
	 */
	filteredItems: Config.array(Config.object()).value([]),

	/**
	 * Help text to guide the user in the interaction.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabelsInputField
	 * @type {!string}
	 */
	helpText: Config.string().required(),

	/**
     * Id to be applied to the element.
     * @default undefined
     * @instance
     * @memberof ClayLabelsInputField
     * @type {?(string|undefined)}
     */
	id: Config.string(),

	/**
	 * Label of the input element.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabelsInputField
	 * @type {?(string|undefined)}
	 */
	label: Config.string(),

	/**
	 * List of the selected Labels.
	 * @default []
	 * @instance
	 * @memberof ClayLabelsInputField
	 * @type {?Array<Object>}
	 */
	selectedLabels: Config.array(Config.object()).value([]),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayLabelsInputField
	 * @type {!string}
	 */
	spritemap: Config.string().required(),
};

defineWebComponent('clay-labels-input-field', ClayLabelsInputField);

Soy.register(ClayLabelsInputField, templates);

export {ClayLabelsInputField};
export default ClayLabelsInputField;
