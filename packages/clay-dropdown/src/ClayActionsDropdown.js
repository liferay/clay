import 'clay-icon';
import './ClayDropdownBase';
import ClayComponent from 'clay-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import {itemsValidator, preferredAlign} from './validators';
import templates from './ClayActionsDropdown.soy.js';

/**
 * Implementation for Metal Clay Action Dropdown.
 * @extends ClayComponent
 */
class ClayActionsDropdown extends ClayComponent {
	/**
	 * @inheritDoc
	 */
	attached() {
		this.addListener('toggle', this._defaultToggle, true);
	}

	/**
	 * Toggles the dropdown, closing it when open or opening it when closed.
	 * @param {!Event} event
	 * @protected
	 */
	_defaultToggle(event) {
		event.preventDefault();

		this.expanded = !this.expanded;
	}

	/**
	 * Handles footer button click.
	 * @param {!Event} event
	 * @protected
	 */
	_handleButtonClick(event) {
		this.emit('buttonClicked', event);
	}

	/**
	 * Continues the propagation of the item clicked event
	 * @param {!Event} event
	 * @protected
	 * @return {Boolean} If the event has been prevented or not.
	 */
	_handleItemClick(event) {
		return !this.emit({
			data: event.data,
			name: 'itemClicked',
			originalEvent: event,
		});
	}

	/**
	 * Continues the propagation of the toggle event.
	 * @param {!Event} event
	 * @return {Boolean} If the event has been prevented or not.
	 */
	toggle(event) {
		return !this.emit({
			name: 'toggle',
			originalEvent: event,
		});
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayActionsDropdown.STATE = {
	/**
	 * Button configuration to place a button at dropdown footer.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	button: Config.shapeOf({
		label: Config.string().required(),
		style: Config.oneOf(['primary', 'secondary']).value('primary'),
		type: Config.oneOf(['button', 'reset', 'submit']),
	}),

	/**
	 * Caption text of the dropdown.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	caption: Config.string(),

	/**
	 * Data to add to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?object}
	 */
	data: Config.object(),

	/**
	 * Object that wires events with default listeners
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @review
	 * @type {?(object|undefined)}
	 */
	defaultEventHandler: Config.object(),

	/**
	 * Flag to indicate if menu is disabled
	 * @default false
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?bool}
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	elementClasses: Config.string(),

	/**
	 * Flag to indicate if menu is expanded.
	 * @default false
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?bool}
	 */
	expanded: Config.bool().value(false),

	/**
	 * Help text to be shown on top of the open dropdown.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	helpText: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	id: Config.string(),

	/**
	 * List of menu items.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {!Array}
	 */
	items: itemsValidator.required(),

	/**
	 * Position in which item icon will be placed. Needed if any item has icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	itemsIconAlignment: Config.oneOf(['left', 'right', 'left-right']),

	/**
	 * The preferred alignment for the dropdown content.
	 * @default BottomLeft
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	preferredAlign: preferredAlign.value('BottomLeft'),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {!string}
	 */
	spritemap: Config.string().required(),

	/**
	 * Aria label attribute for the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	triggerAriaLabel: Config.string(),

	/**
	 * CSS classes to be applied to the trigger element.
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	triggerClasses: Config.string(),

	/**
	 * String to be used for title attribute of action dropdown
	 * @default undefined
	 * @instance
	 * @memberof ClayActionsDropdown
	 * @type {?(string|undefined)}
	 */
	triggerTitle: Config.string(),
};

defineWebComponent('clay-actions-dropdown', ClayActionsDropdown);

Soy.register(ClayActionsDropdown, templates);

export {ClayActionsDropdown};
export default ClayActionsDropdown;
